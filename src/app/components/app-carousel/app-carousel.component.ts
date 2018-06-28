import { Component, OnInit, Input } from '@angular/core';
import { Slides } from '../../model/index';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
import { delay, share } from 'rxjs/operators';

@Component({
  selector: 'app-carousel',
  templateUrl: './app-carousel.component.html',
})
export class AppCarousel implements OnInit {
	@Input() data;
	@Input() model;
	logo:boolean=true;
  constructor() { 

  }

  ngOnInit() {
  }
   

   slides: any[] = [
  	{
  	 "id":"1",
	   "name":"slide1",
      "logo":false,
      "link":"https://docs.google.com/forms/d/e/1FAIpQLSc_E7396zYdXQKIuT19okSGKtoy6HfyrItUPmmEyTanzk5hmA/viewform",
      "boton":"Read Details",
      "title":"The 5th International Business Conference",
      "published":true,
      "slide":[  
         "bg-1.jpg"
      ]
  	},
  	{
  	 "id":"2",
	  "image":"2.jpg",
	 "name":"slide2",
      "link":"https://docs.google.com/forms/d/e/1FAIpQLSc_E7396zYdXQKIuT19okSGKtoy6HfyrItUPmmEyTanzk5hmA/viewform",
      "boton":"Read Details",
      "title":"The 5th International Business Conference",
      "published":true,
      "slide":[  
         "bg-2.jpg"
      ]
  	},
  	{
  	 "id":"3",
	  "image":"3.jpg",
	  "name":"slide3",
      "title":"The 5th International Business Conference",
      "boton":"Read Details",
      "link":"https://docs.google.com/forms/d/e/1FAIpQLSc_E7396zYdXQKIuT19okSGKtoy6HfyrItUPmmEyTanzk5hmA/viewform",
      "published":true,
      "slide":[  
         "bg-3.jpg"
      ]
  	},
  	{
  	 "id":"4",
	  "image":"4.jpg",
	  "name":"slide4",
      "title":"The 5th International Business Conference",
      "boton":"Read Details",
      "link":"https://docs.google.com/forms/d/e/1FAIpQLSc_E7396zYdXQKIuT19okSGKtoy6HfyrItUPmmEyTanzk5hmA/viewform",
      "logo":true,
      "published":true,
      "slide":[  
         "bg-4.jpg"
      ]
  	}	
 	 
  ];


}
