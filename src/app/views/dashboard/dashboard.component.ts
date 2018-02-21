import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent  {

   constructor( ) { }

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
      "name": "Comunidad A3",
       "image":"1.png",
      "text":"Somos una comunidad formada con las mejores startups, grandes empresas y profesionales asociados a la innovación y el emprendedurismo."
    },
    {
      "name": "Partnerships and Partners",
      "image":"2.png",
      "text":"Creamos alianzas para potenciar a los emprendedores de Argentina y a los partners de A3."
    },
    {
      "name": "Events",
      "image":"3.png",
      "text":"Hosteamos los eventos más novedosos y valiosos para los miembros de la Comunidad A3 y el mundo emprendedor."
    },
    {
      "name": "Benefits and Discounts",
      "image":"4.png",
      "text":"Una red de más de 50 descuentos en herramientas de trabajo, gastronomía, deporte y acceso a más de 650 coworkings en el mundo a través de nuestras alianzas."
    },
     {
      "name": "Our spaces",
      "image":"5.png",
      "text":"Somos la opción de coworking preferida por profesionales independientes, tech startups, PyME's y multinacionales que buscan espacios de trabajo de nivel y modernos."
    },
    {
      "name": "Synergy and Serendipity",
      "image":"6.png",
      "text":"Nos enfocamos en acelerar la serendipia que puede haber entre los miembros y en aprovechar la sinergia aprovechar la sinergia entre miembros, y entre éstos y partners"
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
  
}
