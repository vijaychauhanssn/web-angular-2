import { Component} from '@angular/core';
import { Membresia } from '../../models/membresia';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
import { delay, share } from 'rxjs/operators';
import { Event } from '../../model/event';
import { Youtube } from '../../model/youtube';
// import {ActivatedRoute} from "@angular/router";

@Component({
  templateUrl: './membresias.component.html'
})

export class MembresiasComponent  {
 
 urlEncode = function(l){
    if(l)
      return l.toLowerCase().split(' ').join('-');
    else
      return '';
  }

   constructor() {
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

  membresias : any[] =  [  
   {  
      "id":"0",
      "name":"Labs",
      "title":"Enfocado 100% a emprendedores y startups tecnológicos.",
      "desde":"Desde $3.500",
      "gform":"https://docs.google.com/forms/d/e/1FAIpQLScO-wnH220x0PegkHDRS2irLP3xkn4q4kJavFAN82_s_SCArg/viewform",
      "image":"1.jpg",
      "salvador":{  
         "from":"$4.200 + IVA",
         "aclaracion":"Por mes con un mínimo de 3 meses. "
      },
      "soho":{  
         "from":"$3.000 + IVA",
         "aclaracion":"Por mes con un mínimo de 3 meses. "
      }, 
      "list":[  
         "Acceso a los beneficios y descuentos de la Comunidad A3.",
         "Acceso garantizado de lunes a viernes de 8.30 a 18:30hs. Horario extendido sujeto a disponibilidad.",
         "Uso de todos los espacios compartidos, incluyendo living, cocina, ping pong y jardín.",
         "Coffee break con café, infusiones, galletitas y frutas sin cargo.",
         "Horas sin cargo para uso de salas de reuniones.",
         "Alianza con 650 coworkings de todo el mundo.",
         "Terraza de 600m2 con una hermosa vista al jardín.",
         "Acceso a eventos innovadores e inspiradores.",
         "Los servicios incluidos varían según la sede."
      ],
      "published":true,
       "slide":[  
         "1.jpg",
         "2.jpg",
         "3.jpg",
         "4.jpg"
      ]
   },
   {  
      "id":"1",
      "name":"Flex",
      "title":"Espacio compartido para profesionales móviles.",
      "desde":"Desde $3.000",
      "gform":"https://docs.google.com/forms/d/e/1FAIpQLSc_E7396zYdXQKIuT19okSGKtoy6HfyrItUPmmEyTanzk5hmA/viewform",
      "order":1,
      "salvador":{  
         "from":"$4.200 + IVA",
         "aclaracion":"Por mes con un mínimo de 3 meses. "
      },
      "soho":{  
         "from":"$3.000 + IVA",
         "aclaracion":"Por mes con un mínimo de 3 meses. "
      },
      "list":[  
         "Acceso a los beneficios y descuentos de la Comunidad A3.",
         "Acceso garantizado de lunes a viernes de 8.30 a 18:30hs. Horario extendido sujeto a disponibilidad.",
         "Uso de todos los espacios compartidos, incluyendo living, cocina, ping pong y jardín.",
         "Coffee break con café, infusiones, galletitas y frutas sin cargo.",
         "Horas sin cargo para uso de salas de reuniones.",
         "Alianza con 650 coworkings de todo el mundo.",
         "Terraza de 600m2 con una hermosa vista al jardín.",
         "Acceso a eventos innovadores e inspiradores.",
         "Los servicios incluidos varían según la sede."
      ],
      "image":"2.jpg", 
      "published":true,
       "slide":[  
         "1.jpg",
         "2.jpg",
         "3.jpg",
         "4.jpg"
      ]
   },
   {  
      "id":"2",
      "name":"Desk",
      "title":"Siempre tenés tu escritorio fijo esperándote.",
      "desde":"Desde $3.600",
      "gform":"https://docs.google.com/forms/d/e/1FAIpQLSc_E7396zYdXQKIuT19okSGKtoy6HfyrItUPmmEyTanzk5hmA/viewform",
      "order":2,
      "salvador":{  
         "from":"$4.500 + IVA",
         "aclaracion":"Por mes con un mínimo de 6 meses. "
      },
       "soho":{  
         "from":"$3.600 + IVA",
         "aclaracion":"Por mes con un mínimo de 6 meses. "
      },
      "list":[  
         "Acceso a los beneficios y descuentos de la Comunidad A3.",
         "Acceso 24x7 (El Salvador)",
         "Uso de todos los espacios compartidos, incluyendo living, cocina, ping pong y jardín.",
         "Desk dedicado con silla ergonómica Haworth y espacio de guardado bajo llave.",
         "Coffee break con café, infusiones, galletitas y frutas sin cargo.",
         "Teléfonos IP con número fijo, voicemail y atención personalizada.",
         "Horas sin cargo para uso de salas de reuniones.",
         "Alianza con 650 coworkings de todo el mundo.",
         "Terraza de 600m2 con una hermosa vista al jardín.",
         "Acceso a eventos innovadores e inspiradores.",
         "Los servicios incluidos varían según la sede."
      ],
      "image":"3.jpg", 
      "published":true,
       "slide":[  
         "1.jpg",
         "2.jpg",
         "3.jpg",
         "4.jpg"
      ]
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
      "salvador":{  
         "from":"$20.500 + IVA *",
         "aclaracion":"Por mes con un mínimo de 6 meses. (*) Este precio corresponde a una oficina para cuatro personas."
      },
      "soho":{  
         "from":"$11.800 + IVA *",
         "aclaracion":"Por mes con un mínimo de 6 meses. (*) Este precio corresponde a una oficina para tres personas."
      },
       "list":[  
         "Acceso a los beneficios y descuentos de la Comunidad A3.",
         "Acceso 24x7 (El Salvador).",
         "Oficinas privadas y amuebladas con equipamiento moderno que incluye escritorios, silla ergonómica Haworth y espacio de guardado.",
         "Uso de todos los espacios compartidos, incluyendo living, cocina, ping pong y jardín.",
         "Coffee break con café, infusiones, galletitas y frutas sin cargo.",
         "Teléfonos IP con número fijo y voicemail.",
         "Horas sin cargo para uso de salas de reuniones.",
         "Alianza con 650 coworkings de todo el mundo.",
         "Terraza de 600m2 con una hermosa vista al jardín.",
         "Acceso a eventos innovadores e inspiradores."
      ],
     "image":"4.jpg", 
      "published":true,
       "slide":[  
         "1.jpg",
         "2.jpg",
         "3.jpg",
         "4.jpg"
      ]
   }
 ];

}
