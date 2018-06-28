import { Component , OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import { Contacto }    from '../../models/contacto';
import { Data }    from '../../models/data';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
@Injectable()
@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html'
})
export class ContactoComponent implements OnInit  {
   instagram: string;
    results = '';

   
constructor ( private http: HttpClient ) {}

onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
  
ngOnInit(): void {
    this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=1555426027.1677ed0.2a7ad672ca3d45f38782bfc0ca9a8851', {jsonpCallbackParam: 'callbackParam', jsonp: 'jsonp'}).subscribe(data => {
    console.log(data);
    var post = data.data[0];
      var options = {weekday: 'long', month: 'long', day: 'numeric' };
      console.log(post);
      this.instagram = {
        image: post.images.standard_resolution.url,
        link: post.link,
        date: new Date(post.created_time * 1000).toLocaleDateString("es-ES", options),
        text: post.caption.text
      }
      console.log(data);
    });
  }



}