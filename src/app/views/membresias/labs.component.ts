import { Component} from '@angular/core';

@Component({
  templateUrl: './labs.component.html'
})
export class LabsComponent  {
urlEncode = function(l){
    if(l)
      return l.toLowerCase().split(' ').join('-');
    else
      return '';
  }
  constructor() { }



  

  ngOnInit() {
  }
lists : any[] = [
    {
   "id":"0",
     "list" : [
         "Acceso a los beneficios y descuentos de la Comunidad A3.",
         "Acceso garantizado de lunes a viernes de 8.30 a 18:30hs. Horario extendido sujeto a disponibilidad.",
         "Uso de todos los espacios compartidos, incluyendo living, cocina, ping pong y jardín.",
         "Coffee break con café, infusiones, galletitas y frutas sin cargo.",
         "Horas sin cargo para uso de salas de reuniones.",
         "Alianza con 650 coworkings de todo el mundo.",
         "Terraza de 600m2 con una hermosa vista al jardín.",
         "Acceso a eventos innovadores e inspiradores.",
         "Los servicios incluidos varían según la sede."
      ]
    }

];
   slides: any[] = [
   {
    "id":"0",
      "slide":[  
         "5.jpg"
      ]
   },
   {
    "id":"1",
      "slide":[  
         "6.jpg"
      ]
   },
   {
    "id":"2",
      "slide":[  
         "7.jpg"
      ]
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
       "list":[  
         "Acceso a los beneficios y descuentos de la Comunidad A3.",
         "Acceso 24x7.",
         "Espacio exclusivo con puestos fijos y sillas ergonómicas Haworth.",
         "Uso de todos los espacios compartidos, incluyendo living, cocina, ping pong y jardín.",
         "Coffee break con café, infusiones, galletitas y frutas sin cargo.",
         "Alianza con 650 coworkings de todo el mundo.",
         "Terraza de 600m2 con una hermosa vista al jardín.",
         "Acceso a eventos innovadores e inspiradores."
      ],
      "soho":{  
         "from":"$3.000 + IVA",
         "aclaracion":"Por mes con un mínimo de 3 meses. "
      }, 
      "published":true
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
      "published":true
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
      "published":true
   }
  
 ];

}
