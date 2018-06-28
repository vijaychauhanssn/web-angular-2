import { Component, OnInit } from '@angular/core';
import { Event } from '../../model/event';
import { Eventos } from '../../model/eventos';
import { Youtube } from '../../model/youtube';
import { Data }    from '../../models/data';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable()

@Component({
templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

 instagram: [{
 link:any,
 date:string,
 text:any,
 image:string
 }]

urlEncode = function(l){
    if(l)
      return l.toLowerCase().split(' ').join('-');
    else
      return '';
  }
  constructor(private http: Http) { }

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

  getMonth = function(d){
		var months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
		var i = parseInt(d.split('/')[1]);
		return months[i - 1];
	}

	getDay = function(d){
		return parseInt(d.split('/')[0]);
	}

	getText = function(items){
		var i = 0;
		var ret = null;
		if(items){
			items.forEach(function(it){
				if(it.class == 'texto' && i == 0){
					i = 1;
					ret = it.text;
				}
			})
		}
		return ret;
	}

  events: any[] = [
    {
      "name": "DISCUSSION BOARD",
       "image":"1.png",
      "text":"Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      "name": "Partnerships and Partners",
      "image":"2.png",
      "text":"Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      "name": "Events",
      "image":"3.png",
      "text":"Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      "name": "Benefits and Discounts",
      "image":"4.png",
      "text":"Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
     {
      "name": "Our spaces",
      "image":"5.png",
      "text":"Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    },
    {
      "name": "Synergy and Serendipity",
      "image":"6.png",
      "text":"Lorem ipsum dolor sit amet, consectetur adipis cing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
    }
  ];

  eventos: any[] = [
  	{
 	"name":"World Usability Day Buenos Aires",
    "date":"29/11/2017",
    "hour":"13:00 - 22:00",
    "sede":"A3 El Salvador",
  	},
  	{
	"name":"#Animalarte!",
	"date":"25/11/2017",
  	"hour":"11:00 - 23:30",
  	"sede":"A3 El Salvador",
  	},
  	{
 	"name":"Buenos Aires Feria Internacional de Música (BAFIM) - Día 1",
	"date":"25/11/2017",
	"hour":"09:00 - 14:00",
	"sede":"A3 El Salvador",
  	}
  ];

  youtube : any[] = [
  	{
  	 "id":"0",
	  "image":"6.jpg",
	  "title":"Perfiles de la #ComunidadA3",
	  "link":"https://youtu.be/NQdvMcBTB0g",
  	}	
 	 
  ];

  membresias : any[] =  [  
   {  
      "id":"0",
      "name":"Labs",
      "title":"Enfocado 100% a emprendedores y startups tecnológicos.",
      "desde":"Desde $3.500",
      "gform":"https://docs.google.com/forms/d/e/1FAIpQLScO-wnH220x0PegkHDRS2irLP3xkn4q4kJavFAN82_s_SCArg/viewform",
      "image":"1.jpg", 
      "published":true,
   },
   {  
      "id":"1",
      "name":"Flex",
      "title":"Espacio compartido para profesionales móviles.",
      "desde":"Desde $3.000",
      "gform":"https://docs.google.com/forms/d/e/1FAIpQLSc_E7396zYdXQKIuT19okSGKtoy6HfyrItUPmmEyTanzk5hmA/viewform",
      "order":1,
      "image":"2.jpg", 
      "published":true
   },
   {  
      "id":"2",
      "name":"Desk",
      "title":"Siempre tenés tu escritorio fijo esperándote.",
      "desde":"Desde $3.600",
      "gform":"https://docs.google.com/forms/d/e/1FAIpQLSc_E7396zYdXQKIuT19okSGKtoy6HfyrItUPmmEyTanzk5hmA/viewform",
      "order":2,
      "image":"3.jpg", 
      "published":true
   },
   {  
      "id":"3",
      "updated_at":"2017-11-24T16:54:23.158Z",
      "created_at":"2017-10-07T12:22:08.948Z",
      "name":"Office",
      "title":"Tu oficina privada y equipada para equipos de 2 hasta 40 personas.",
      "desde":"Desde $11.800",
      "gform":"https://docs.google.com/forms/d/e/1FAIpQLSc_E7396zYdXQKIuT19okSGKtoy6HfyrItUPmmEyTanzk5hmA/viewform",
      "order":3,
     "image":"4.jpg", 
      "published":true
   }
 ];
  
}
