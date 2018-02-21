import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
@Component({
  templateUrl: './eventos.component.html'
})
export class EventosComponent implements OnInit {

 data;
 
    constructor(private http:Http) {
        this.http.get('api/eventos.json')
                .subscribe(res => this.data = res.json());
    }

  ngOnInit() {
  }

}
