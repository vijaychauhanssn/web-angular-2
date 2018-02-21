webpackJsonp(["comunidad.module"],{

/***/ "../../../../../src/app/views/comunidad/comunidad-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComunidadRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comunidad_component__ = __webpack_require__("../../../../../src/app/views/comunidad/comunidad.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__comunidad_component__["a" /* ComunidadComponent */],
        data: {
            title: 'Comunidad'
        }
    }
];
var ComunidadRoutingModule = (function () {
    function ComunidadRoutingModule() {
    }
    ComunidadRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ComunidadRoutingModule);
    return ComunidadRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/comunidad/comunidad.component.html":
/***/ (function(module, exports) {

module.exports = "\t<div class=\"bg-1\">\n\t\t<div id=\"comunidad\" class=\"show-me wrapper wrapper-big\" style=\"padding-top: 200px; z-index: 2;\">\n\t\t\t<div class=\"wrapper\">\n\t\t\t\t<h3 class=\"enter-x-r\">Lo que pasa en la</h3>\n\t\t\t\t<h4 class=\"enter-x-r delay-1\">#ComunidadA3</h4>\n\t\t\t</div>\n\t\t\t<div class=\"wp\">\n\t\t\t\t<div class=\"column enter-y delay-1\">\n\t\t\t\t\t<h5>Eventos</h5>\n\t\t\t\t\t<a  [routerLink]=\"['/eventos']\"   class=\"event-thumb\" *ngFor=\"let e of eventos\">\n\t\t\t\t\t\t<div class=\"date\">\n\t\t\t\t\t\t\t<small>{{getMonth(e.date)}}</small>\n\t\t\t\t\t\t\t<strong>{{getDay(e.date)}}</strong>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"detail\">\n\t\t\t\t\t\t\t<small>{{e.name}}</small>\n\t\t\t\t\t\t\t<p>{{e.hour}}</p>\n\t\t\t\t\t\t\t<p>{{e.sede}}</p>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</a>\n\t\t\t\t\t<a href=\"eventos\" class=\"button red\">\n\t\t\t\t\t\t<img src=\"assets/img/button-arrow.png\">\n\t\t\t\t\t\t<span>Ver más</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"column enter-y delay-2\" [ngStyle]=\"{background:' url(assets/img/' + youtube[0].image + ')'}\">\n\t\t\t\t\t<h5>Videos</h5>\n\t\t\t\t\t<h6>{{youtube[0].title}}</h6>\n\t\t\t\t\t<img src=\"assets/img/play.png\" class=\"play\">\n\t\t\t\t\t<img src=\"assets/img/yt.png\" class=\"yt\">\n\t\t\t\t\t<a href=\"{{youtube[0].link}}\" target=\"_blank\"></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"column enter-y delay-3\">\n\t\t\t\t\t<h5>Beneficios</h5>\n\t\t\t\t\t<img src=\"assets/img/beneficios.jpg\">\n\t\t\t\t\t<a href=\"https://docs.google.com/document/d/1jU5pCH0Res3bihcw-72s2vX6hgnqgLoIh_Z4ArOZv00/edit\" class=\"button orange\">\n\t\t\t\t\t\t<img src=\"assets/img/button-arrow.png\">\n\t\t\t\t\t\t<span>Ver más</span>\n\t\t\t\t\t</a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"c1\" class=\"circle circle-1 show-me\"><img class=\"enter-y delay-5\" src=\"assets/img/circle-1.png\"></div>\n\t\t<div id=\"caracteristicas\" class=\"show-me wrapper wrapper-big\">\n\t\t\t<div class=\"wrapper\">\n\t\t\t\t<h3 class=\"enter-x-r\">El lugar donde las cosas pasan</h3>\n\t\t\t</div>\n\t\t\t<div class=\"wp\">\n\t\t\t\t<div class=\"column enter-y delay-{{i+1}}\" *ngFor=\"let u of events; let i = index\">\n\t\t\t\t\t<div class=\"thumb\">\n\t\t\t\t\t\t<img src=\"assets/uploads/{{u.image}}\">\n\t\t\t\t\t\t<h4>{{u.name}}</h4>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"info\">\n\t\t\t\t\t\t<img src=\"assets/uploads/{{u.image}}\">\n\t\t\t\t\t\t<h4>{{u.name}}</h4>\n\t\t\t\t\t\t<p>{{u.text}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t<div id=\"gfe3\" class=\"show-me\" style=\"padding-bottom: 150px\">\n\t\t\t<h4 class=\"enter-x-r\">#PartnersA3</h4>\n\t\t\t<h3 class=\"enter-x delay-1\">que potencian tus ideas</h3>\n\t\t\t<img src=\"assets/img/gfe3.jpg\" class=\"enter-y delay-2\">\n\t\t</div>\n\t</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/comunidad/comunidad.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComunidadComponent; });
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

var ComunidadComponent = (function () {
    function ComunidadComponent() {
        this.getMonth = function (d) {
            var months = ['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN', 'JUL', 'AGO', 'SEP', 'OCT', 'NOV', 'DIC'];
            var i = parseInt(d.split('/')[1]);
            return months[i - 1];
        };
        this.getDay = function (d) {
            return parseInt(d.split('/')[0]);
        };
        this.getText = function (items) {
            var i = 0;
            var ret = null;
            if (items) {
                items.forEach(function (it) {
                    if (it.class == 'texto' && i == 0) {
                        i = 1;
                        ret = it.text;
                    }
                });
            }
            return ret;
        };
        this.eventos = [
            {
                "name": "World Usability Day Buenos Aires",
                "date": "29/11/2017",
                "hour": "13:00 - 22:00",
                "sede": "A3 El Salvador",
            },
            {
                "name": "#Animalarte!",
                "date": "25/11/2017",
                "hour": "11:00 - 23:30",
                "sede": "A3 El Salvador",
            },
            {
                "name": "Buenos Aires Feria Internacional de Música (BAFIM) - Día 1",
                "date": "25/11/2017",
                "hour": "09:00 - 14:00",
                "sede": "A3 El Salvador",
            }
        ];
        this.youtube = [
            {
                "id": "0",
                "image": "6.jpg",
                "title": "Perfiles de la #ComunidadA3",
                "link": "https://youtu.be/NQdvMcBTB0g",
            }
        ];
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
    }
    ComunidadComponent.prototype.ngOnInit = function () {
    };
    ComunidadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/comunidad/comunidad.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], ComunidadComponent);
    return ComunidadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/comunidad/comunidad.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComunidadModule", function() { return ComunidadModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comunidad_component__ = __webpack_require__("../../../../../src/app/views/comunidad/comunidad.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comunidad_routing_module__ = __webpack_require__("../../../../../src/app/views/comunidad/comunidad-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComunidadModule = (function () {
    function ComunidadModule() {
    }
    ComunidadModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__comunidad_routing_module__["a" /* ComunidadRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__comunidad_component__["a" /* ComunidadComponent */]]
        })
    ], ComunidadModule);
    return ComunidadModule;
}());



/***/ })

});
//# sourceMappingURL=comunidad.module.chunk.js.map