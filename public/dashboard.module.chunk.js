webpackJsonp(["dashboard.module"],{

/***/ "../../../../../src/app/views/dashboard/dashboard-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
        data: {
            title: 'Dashboard'
        }
    }
];
var DashboardRoutingModule = (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<main id=\"home\">\r\n <div class=\"bg-1\">\r\n  <div id=\"c1\" class=\"circle circle-1 show-me\"><img class=\"enter-y delay-5\" src=\"assets/img/circle-1.png\"></div>\r\n    <div id=\"caracteristicas\" class=\"show-me wrapper wrapper-big\">\r\n      <div class=\"wrapper\">\r\n        <h3 class=\"enter-x-r\">El lugar donde las cosas pasan</h3>\r\n      </div>\r\n      <div class=\"wp\">\r\n        <div class=\"column enter-y delay-{{$index}}\" *ngFor=\"let u of events \">\r\n          <div class=\"thumb\">\r\n            <img src=\"assets/uploads/{{u.image}}\">\r\n            <h4>{{u.name}}</h4>\r\n          </div>\r\n          <div class=\"info\">\r\n            <img src=\"assets/uploads/{{u.image}}\">\r\n            <h4>{{u.name}}</h4>\r\n            <p>{{u.text}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n<div id=\"membresias\" class=\"show-me wrapper wrapper-big\">\r\n      <div class=\"wrapper\">\r\n        <h3 class=\"enter-x-r\">Membresías</h3>\r\n      </div>\r\n      <div class=\"wp\">\r\n        <a  [routerLink]=\"['/membresias']\"  class=\"column enter-y delay-1\">\r\n          <div class=\"bg\" style=\"background-image: url(assets/uploads/1.jpg)\"></div>\r\n          <div class=\"text\">\r\n            <h4>Labs</h4>\r\n            <small>Desde $3.500</small>\r\n            <div class=\"button-wrap\">\r\n              <div class=\"button green\">\r\n                <img src=\"assets/img/button-arrow.png\">\r\n                <span>Ver más</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <a [routerLink]=\"['/membresias']\" class=\"column enter-y delay-2\">\r\n          <div class=\"bg\" style=\"background-image: url(assets/uploads/2.jpg)\"></div>\r\n          <div class=\"text\">\r\n            <h4>Flex</h4>\r\n            <small>Desde $3.000</small>\r\n            <div class=\"button-wrap\">\r\n              <div class=\"button green\">\r\n                <img src=\"assets/img/button-arrow.png\">\r\n                <span>Ver más</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <a [routerLink]=\"['/membresias']\" class=\"column enter-y delay-3\">\r\n          <div class=\"bg\" style=\"background-image: url(assets/uploads/3.jpg)\"></div>\r\n          <div class=\"text\">\r\n            <h4>Desk</h4>\r\n            <small>Desde $3.600</small>\r\n            <div class=\"button-wrap\">\r\n              <div class=\"button green\">\r\n                <img src=\"assets/img/button-arrow.png\">\r\n                <span>Ver más</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <a [routerLink]=\"['/membresias']\" class=\"column enter-y delay-4\">\r\n          <div class=\"bg\" style=\"background-image: url(assets/uploads/4.jpg)\"></div>\r\n          <div class=\"text\">\r\n            <h4>Office</h4>\r\n            <small>Desde $11.800</small>\r\n            <div class=\"button-wrap\">\r\n              <div class=\"button green\">\r\n                <img src=\"assets/img/button-arrow.png\">\r\n                <span>Ver más</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n    <div id=\"c2\" class=\"circle circle-2 show-me\"><img class=\"enter-x-r delay-3\" src=\"assets/img/circle-2.png\"></div>\r\n</div>\r\n\r\n<div id=\"sedes\" class=\"show-me\">\r\n    <div class=\"wrapper wrapper-big\">\r\n      <div class=\"text\">\r\n        <h4 class=\"enter-x-r\" >Sedes A3</h4>\r\n        <h3 class=\"enter-x-r delay-1\" >Nuestros espacios para que trabajes en tu mundo.</h3>\r\n        <!-- <p class=\"enter-x-r delay-2\" >Ingresa y descubrí nuestros espacios con recorridos 360° interactivos.</p> -->\r\n      </div>\r\n      <div class=\"sedes enter-y delay-2\">\r\n        <a [routerLink]=\"['/sedes']\" style=\"background-image: url(assets/uploads/5.jpg)\" [ngClass]=\"{'active': sedeActive == 1 || !sedeActive}\" ng-mouseenter=\"sedeActive = 1\">\r\n          <div class=\"name\"><img src=\"assets/img/logo.png\"> <span>A3 A3 El Salvador</span></div>\r\n          <div class=\"button-wrap\">\r\n            <div class=\"button\">\r\n              <img src=\"assets/img/button-arrow.png\">\r\n              <span>Ver más</span>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <a [routerLink]=\"['/sedes']\"  style=\"background-image: url(assets/uploads/6.jpg)\" [ngClass]=\"{'active': sedeActive == 2}\" ng-mouseenter=\"sedeActive = 2\">\r\n          <div class=\"name\"><img src=\"assets/img/logo.png\"> <span>A3  A3 Soho</span></div>\r\n          <div class=\"button-wrap\">\r\n            <div class=\"button\">\r\n              <img src=\"assets/img/button-arrow.png\">\r\n              <span>Ver más</span>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"bg-1 second\">\r\n    <div id=\"gfe\" class=\"show-me\">\r\n      <img src=\"assets/img/gfe2.jpg\" class=\"enter-y\">\r\n      <h4 class=\"enter-y delay-1\">Una alianza para potenciar <br> a los emprendedores de Argentina</h4>\r\n      <div class=\"enter-y delay-2\">\r\n        <a href=\"google-for-entrepreneurs\" class=\"button\">\r\n          <img src=\"assets/img/button-arrow.png\">\r\n          <span>Conocé los beneficios</span>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"c3\" class=\"circle circle-3 show-me\"><img class=\"enter-x delay-3\" src=\"assets/img/circle3.png\"></div>\r\n\r\n\r\n\r\n    <div id=\"comunidad\" class=\"show-me wrapper wrapper-big\">\r\n      <div class=\"wrapper\">\r\n        <h3 class=\"enter-x-r\">Lo que pasa en la</h3>\r\n        <h4 class=\"enter-x-r delay-1\">#ComunidadA3</h4>\r\n      </div>\r\n      <div class=\"wp\">\r\n        <div class=\"column enter-y delay-1\">\r\n          <h5>Eventos</h5>\r\n          <a  [routerLink]=\"['/eventos']\"   class=\"event-thumb\" *ngFor=\"let e of eventos\">\r\n            <div class=\"date\">\r\n              <small>{{getMonth(e.date)}}</small>\r\n              <strong>{{getDay(e.date)}}</strong>\r\n            </div>\r\n            <div class=\"detail\">\r\n              <small>{{e.name}}</small>\r\n              <p>{{e.hour}}</p>\r\n              <p>{{e.sede}}</p>\r\n            </div>\r\n          </a>\r\n          <a href=\"eventos\" class=\"button red\">\r\n            <img src=\"assets/img/button-arrow.png\">\r\n            <span>Ver más</span>\r\n          </a>\r\n        </div>\r\n        <div class=\"column enter-y delay-2\" [ngStyle]=\"{background:' url(assets/img/' + youtube[0].image + ')'}\">\r\n          <h5>Videos</h5>\r\n          <h6>{{youtube[0].title}}</h6>\r\n          <img src=\"assets/img/play.png\" class=\"play\">\r\n          <img src=\"assets/img/yt.png\" class=\"yt\">\r\n          <a href=\"{{youtube[0].link}}\" target=\"_blank\"></a>\r\n        </div>\r\n        <div class=\"column enter-y delay-3\">\r\n          <h5>Beneficios</h5>\r\n          <img src=\"assets/img/beneficios.jpg\">\r\n          <a href=\"https://docs.google.com/document/d/1jU5pCH0Res3bihcw-72s2vX6hgnqgLoIh_Z4ArOZv00/edit\" class=\"button orange\">\r\n            <img src=\"assets/img/button-arrow.png\">\r\n            <span>Ver más</span>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"social\" class=\"show-me\">\r\n      <div class=\"enter-y\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n        <div class=\"text\">\r\n          <h6>{{tweet}}</h6>\r\n          <small>{{tweetTime}}</small>\r\n        </div>\r\n        <a  href=\"https://twitter.com/areatres\" target=\"_blank\"></a>\r\n      </div>\r\n      <div class=\"enter-y delay-1\" style=\"background-image: url(assets/img/5.jpg)\">\r\n        <i class=\"fa fa-instagram\"></i>\r\n        <!-- <div class=\"text\">\r\n          <p>{{vm.instagram.text}}</p>\r\n          <small>{{vm.instagram.date}}</small>\r\n        </div> -->\r\n        <a [routerLink]=\"['/eventos']\"  target=\"_blank\"></a>\r\n      </div>\r\n    </div>\r\n    <div id=\"example1\" style=\"display: none !important\"></div>\r\n    <div id=\"gfe3\" class=\"show-me\">\r\n      <h4 class=\"enter-x-r\">#PartnersA3</h4>\r\n      <h3 class=\"enter-x delay-1\">que potencian tus ideas</h3>\r\n      <img src=\"assets/img/gfe3.jpg\" class=\"enter-y delay-2\">\r\n    </div>\r\n\r\n  </div>\r\n</main>"

/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = (function () {
    function DashboardComponent() {
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
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__ = __webpack_require__("../../../../../src/app/views/dashboard/dashboard-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__dashboard_routing_module__["a" /* DashboardRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */]]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

});
//# sourceMappingURL=dashboard.module.chunk.js.map