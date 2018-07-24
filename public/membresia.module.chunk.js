webpackJsonp(["membresia.module"],{

/***/ "../../../../../src/app/views/membresia/membresia-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembresiaRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__membresia_component__ = __webpack_require__("../../../../../src/app/views/membresia/membresia.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__membresia_component__["a" /* MembresiaComponent */],
        data: {
            title: 'Membresia'
        }
    }
];
var MembresiaRoutingModule = (function () {
    function MembresiaRoutingModule() {
    }
    MembresiaRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MembresiaRoutingModule);
    return MembresiaRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/membresia/membresia.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"bg-1\">\n    <div id=\"membresias\" class=\"show-me wrapper wrapper-big\" style=\"padding-top: 200px; z-index: 2;\">\n      <div class=\"wrapper\">\n        <h3 class=\"enter-x-r\">Membresías</h3>\n      </div>\n      <div class=\"wp\">\n        <a href=\"membresias/{{urlEncode(membresias[0].name)}}\" class=\"column enter-y delay-1\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[0].image + ')'}\" ></div>\n          <div class=\"text\">\n            <h4>{{membresias[0].name}}</h4>\n            <small>{{membresias[0].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[1].name)}}\" class=\"column enter-y delay-2\">\n          <div class=\"bg\" [ngStyle]=\"{background:' url(assets/uploads/' + membresias[1].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[1].name}}</h4>\n            <small>{{membresias[1].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[2].name)}}\" class=\"column enter-y delay-3\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[2].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[2].name}}</h4>\n            <small>{{membresias[2].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[3].name)}}\" class=\"column enter-y delay-4\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[3].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[3].name}}</h4>\n            <small>{{membresias[3].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n\n  <div id=\"c1\" class=\"circle circle-1 show-me\">\n    <img class=\"enter-y delay-5\" src=\"assets/img/circle-1.png\">\n  </div>\n   <div id=\"caracteristicas\" class=\"show-me wrapper wrapper-big\">\n      <div class=\"wrapper\">\n        <h3 class=\"enter-x-r\">El lugar donde las cosas pasan</h3>\n      </div>\n      <div class=\"wp\">\n        <div class=\"column enter-y delay-{{i+1}}\" *ngFor=\"let u of events; let i = index\">\n          <div class=\"thumb\">\n            <img src=\"assets/uploads/{{u.image}}\">\n            <h4>{{u.name}}</h4>\n          </div>\n          <div class=\"info\">\n            <img src=\"assets/uploads/{{u.image}}\">\n            <h4>{{u.name}}</h4>\n            <p>{{u.text}}</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div id=\"gfe3\" class=\"show-me\" style=\"padding-bottom: 150px\">\n      <h4 class=\"enter-x-r\">#Lorem Ipusm HIINF</h4>\n      <h3 class=\"enter-x delay-1\">que potencian tus ideas</h3>\n      <img src=\"assets/img/gfe3.jpg\" class=\"enter-y delay-2\">\n    </div>\n\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/views/membresia/membresia.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembresiaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MembresiaComponent = (function () {
    function MembresiaComponent() {
        this.urlEncode = function (l) {
            if (l)
                return l.toLowerCase().split(' ').join('-');
            else
                return '';
        };
        this.events = [
            {
                "name": "Comunidad A3",
                "image": "1.png",
                "text": "Somos una comunidad formada con las mejores startups, grandes empresas y profesionales asociados a la innovación y el emprendedurismo."
            },
            {
                "name": "Partnerships and Partners",
                "image": "2.png",
                "text": "Creamos alianzas para potenciar a los emprendedores de Argentina y a los partners de A3."
            },
            {
                "name": "Events",
                "image": "3.png",
                "text": "Hosteamos los eventos más novedosos y valiosos para los miembros de la Comunidad A3 y el mundo emprendedor."
            },
            {
                "name": "Benefits and Discounts",
                "image": "4.png",
                "text": "Una red de más de 50 descuentos en herramientas de trabajo, gastronomía, deporte y acceso a más de 650 coworkings en el mundo a través de nuestras alianzas."
            },
            {
                "name": "Our spaces",
                "image": "5.png",
                "text": "Somos la opción de coworking preferida por profesionales independientes, tech startups, PyME's y multinacionales que buscan espacios de trabajo de nivel y modernos."
            },
            {
                "name": "Synergy and Serendipity",
                "image": "6.png",
                "text": "Nos enfocamos en acelerar la serendipia que puede haber entre los miembros y en aprovechar la sinergia aprovechar la sinergia entre miembros, y entre éstos y partners"
            }
        ];
        this.membresias = [
            {
                "id": "0",
                "name": "Labs",
                "title": "Enfocado 100% a emprendedores y startups tecnológicos.",
                "desde": "Desde $3.500",
                "gform": "https://docs.google.com/forms/d/e/1FAIpQLScO-wnH220x0PegkHDRS2irLP3xkn4q4kJavFAN82_s_SCArg/viewform",
                "image": "1.jpg",
                "salvador": {
                    "from": "$4.200 + IVA",
                    "aclaracion": "Por mes con un mínimo de 3 meses. "
                },
                "soho": {
                    "from": "$3.000 + IVA",
                    "aclaracion": "Por mes con un mínimo de 3 meses. "
                },
                "list": [
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
                "published": true,
                "slide": [
                    "1.jpg",
                    "2.jpg",
                    "3.jpg",
                    "4.jpg"
                ]
            },
            {
                "id": "1",
                "name": "Flex",
                "title": "Espacio compartido para profesionales móviles.",
                "desde": "Desde $3.000",
                "gform": "https://docs.google.com/forms/d/e/1FAIpQLSc_E7396zYdXQKIuT19okSGKtoy6HfyrItUPmmEyTanzk5hmA/viewform",
                "order": 1,
                "salvador": {
                    "from": "$4.200 + IVA",
                    "aclaracion": "Por mes con un mínimo de 3 meses. "
                },
                "soho": {
                    "from": "$3.000 + IVA",
                    "aclaracion": "Por mes con un mínimo de 3 meses. "
                },
                "list": [
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
                "image": "2.jpg",
                "published": true,
                "slide": [
                    "1.jpg",
                    "2.jpg",
                    "3.jpg",
                    "4.jpg"
                ]
            },
            {
                "id": "2",
                "name": "Desk",
                "title": "Siempre tenés tu escritorio fijo esperándote.",
                "desde": "Desde $3.600",
                "gform": "https://docs.google.com/forms/d/e/1FAIpQLSc_E7396zYdXQKIuT19okSGKtoy6HfyrItUPmmEyTanzk5hmA/viewform",
                "order": 2,
                "salvador": {
                    "from": "$4.500 + IVA",
                    "aclaracion": "Por mes con un mínimo de 6 meses. "
                },
                "soho": {
                    "from": "$3.600 + IVA",
                    "aclaracion": "Por mes con un mínimo de 6 meses. "
                },
                "list": [
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
                "image": "3.jpg",
                "published": true,
                "slide": [
                    "1.jpg",
                    "2.jpg",
                    "3.jpg",
                    "4.jpg"
                ]
            },
            {
                "id": "3",
                "updated_at": "2017-11-24T16:54:23.158Z",
                "created_at": "2017-10-07T12:22:08.948Z",
                "name": "Office",
                "title": "Tu oficina privada y equipada para equipos de 2 hasta 40 personas.",
                "desde": "Desde $11.800",
                "gform": "https://docs.google.com/forms/d/e/1FAIpQLSc_E7396zYdXQKIuT19okSGKtoy6HfyrItUPmmEyTanzk5hmA/viewform",
                "order": 3,
                "salvador": {
                    "from": "$20.500 + IVA *",
                    "aclaracion": "Por mes con un mínimo de 6 meses. (*) Este precio corresponde a una oficina para cuatro personas."
                },
                "soho": {
                    "from": "$11.800 + IVA *",
                    "aclaracion": "Por mes con un mínimo de 6 meses. (*) Este precio corresponde a una oficina para tres personas."
                },
                "list": [
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
                "image": "4.jpg",
                "published": true,
                "slide": [
                    "1.jpg",
                    "2.jpg",
                    "3.jpg",
                    "4.jpg"
                ]
            }
        ];
    }
    MembresiaComponent.prototype.ngOnInit = function () {
    };
    MembresiaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-membresia',
            template: __webpack_require__("../../../../../src/app/views/membresia/membresia.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MembresiaComponent);
    return MembresiaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/membresia/membresia.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembresiaModule", function() { return MembresiaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__membresia_component__ = __webpack_require__("../../../../../src/app/views/membresia/membresia.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__membresia_routing_module__ = __webpack_require__("../../../../../src/app/views/membresia/membresia-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MembresiaModule = (function () {
    function MembresiaModule() {
    }
    MembresiaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__membresia_routing_module__["a" /* MembresiaRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__membresia_component__["a" /* MembresiaComponent */]]
        })
    ], MembresiaModule);
    return MembresiaModule;
}());



/***/ })

});
//# sourceMappingURL=membresia.module.chunk.js.map