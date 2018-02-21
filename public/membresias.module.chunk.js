webpackJsonp(["membresias.module"],{

/***/ "../../../../../src/app/views/membresias/desk.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- carousel>\n  <slide>\n    <img src=\"assets/img/sliders/1.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n  </slide>\n  <slide>\n    <img src=\"assets/img/sliders/2.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n  </slide>\n  <slide>\n    <img src=\"assets/img/sliders/3.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n  </slide>\n</carousel-->\n\n\n\n<main id=\"nosotros\" class=\"interna membresia-detail\">\n\n  <div id=\"c1\" class=\"circle circle-1 show-me\"><img class=\"enter-y delay-5\" src=\"assets/img/circle-1.png\"></div>\n\n  <div class=\"wrapper show-me\" id=\"n1\">\n    <h4 class=\"enter-x-r\">Membresía {{membresias[2].name}}</h4>\n  </div>\n  <div id=\"slide-pics\" class=\"show-me\">\n    <div class=\"wrapper wrapper-big\">\n    <carousel>\n      <slide  class=\"slide-home enter-y\" *ngFor = \"let s of slides\"> \n       <img src=\"assets/img/sliders/{{s.slide[0]}}\" alt=\"First slide\">\n       </slide>\n    </carousel>\n    </div>\n  </div>\n  <div class=\"wrapper show-me\" id=\"n3\">\n\n    <div id=\"servicios\">\n      <div class=\"text\">\n        <h3>{{membresias[2].title}}</h3>\n      </div>\n      <div class=\"servicios\">\n        <strong>Servicios incluidos</strong>\n        <ul>\n          <!-- div *ngFor=\"let hero of heroes; trackBy: trackByHeroes\">\n            ({{hero.id}}) {{hero.name}}\n          </div-->\n          <li *ngFor =\"let s of lists\">\n          {{s.list[0]}}\n          </li>\n        </ul>\n        <div class=\"prices\">\n          <div>\n            <h6>Sede <br>A3 Soho</h6>\n            <div class=\"price\">\n              <span>Desde</span>\n              <strong>{{membresias[2].soho.from}}</strong>\n              <p>{{membresias[2].soho.aclaracion}}</p>\n            </div>\n          </div>\n          <div >\n            <h6>Sede <br>A3 El Salvador</h6>\n            <div class=\"price\">\n              <span>Desde</span>\n              <strong>{{membresias[2].salvador.from}}</strong>\n              <p>{{membresias[2].salvador.aclaracion}}</p>\n            </div>\n          </div>\n        </div>\n        <a href=\"{{membresias[2].gform}}\" target=\"_blank\" class=\"button\">\n          <img src=\"assets/img/button-arrow.png\">\n          <span>Quiero ser miembro</span>\n        </a>\n      </div>\n    </div>\n  </div>\n\n<div id=\"membresias\" class=\"show-me wrapper wrapper-big\" >\n      <div class=\"wrapper\">\n        <h3 class=\"enter-x-r\">Membresías</h3>\n      </div>\n      <div class=\"wp\">\n        <a href=\"membresias/{{urlEncode(membresias[0].name)}}\" class=\"column enter-y delay-1\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[0].image + ')'}\" ></div>\n          <div class=\"text\">\n            <h4>{{membresias[0].name}}</h4>\n            <small>{{membresias[0].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[1].name)}}\" class=\"column enter-y delay-2\">\n          <div class=\"bg\" [ngStyle]=\"{background:' url(assets/uploads/' + membresias[1].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[1].name}}</h4>\n            <small>{{membresias[1].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[2].name)}}\" class=\"column enter-y delay-3\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[2].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[2].name}}</h4>\n            <small>{{membresias[2].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[3].name)}}\" class=\"column enter-y delay-4\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[3].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[3].name}}</h4>\n            <small>{{membresias[3].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>    \n</main>"

/***/ }),

/***/ "../../../../../src/app/views/membresias/desk.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeskComponent; });
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

var DeskComponent = (function () {
    function DeskComponent() {
        this.urlEncode = function (l) {
            if (l)
                return l.toLowerCase().split(' ').join('-');
            else
                return '';
        };
        this.lists = [
            {
                "id": "0",
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
                ]
            }
        ];
        this.slides = [
            {
                "id": "0",
                "slide": [
                    "5.jpg"
                ]
            },
            {
                "id": "1",
                "slide": [
                    "6.jpg"
                ]
            },
            {
                "id": "2",
                "slide": [
                    "7.jpg"
                ]
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
                "list": [
                    "Acceso a los beneficios y descuentos de la Comunidad A3.",
                    "Acceso 24x7.",
                    "Espacio exclusivo con puestos fijos y sillas ergonómicas Haworth.",
                    "Uso de todos los espacios compartidos, incluyendo living, cocina, ping pong y jardín.",
                    "Coffee break con café, infusiones, galletitas y frutas sin cargo.",
                    "Alianza con 650 coworkings de todo el mundo.",
                    "Terraza de 600m2 con una hermosa vista al jardín.",
                    "Acceso a eventos innovadores e inspiradores."
                ],
                "soho": {
                    "from": "$3.000 + IVA",
                    "aclaracion": "Por mes con un mínimo de 3 meses. "
                },
                "published": true
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
                "published": true
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
                "published": true
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
                "published": true
            }
        ];
    }
    DeskComponent.prototype.ngOnInit = function () {
    };
    DeskComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/membresias/desk.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], DeskComponent);
    return DeskComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/membresias/flex.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- carousel>\n  <slide>\n    <img src=\"assets/img/sliders/1.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n  </slide>\n  <slide>\n    <img src=\"assets/img/sliders/2.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n  </slide>\n  <slide>\n    <img src=\"assets/img/sliders/3.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n  </slide>\n</carousel-->\n\n\n\n<main id=\"nosotros\" class=\"interna membresia-detail\">\n\n  <div id=\"c1\" class=\"circle circle-1 show-me\"><img class=\"enter-y delay-5\" src=\"assets/img/circle-1.png\"></div>\n\n  <div class=\"wrapper show-me\" id=\"n1\">\n    <h4 class=\"enter-x-r\">Membresía {{membresias[1].name}}</h4>\n  </div>\n  <div id=\"slide-pics\" class=\"show-me\">\n    <div class=\"wrapper wrapper-big\">\n    <carousel>\n      <slide  class=\"slide-home enter-y\" *ngFor = \"let s of slides\"> \n       <img src=\"assets/img/sliders/{{s.slide[0]}}\" alt=\"First slide\">\n       </slide>\n    </carousel>\n    </div>\n  </div>\n  <div class=\"wrapper show-me\" id=\"n3\">\n\n    <div id=\"servicios\">\n      <div class=\"text\">\n        <h3>{{membresias[1].title}}</h3>\n      </div>\n      <div class=\"servicios\">\n        <strong>Servicios incluidos</strong>\n        <ul>\n          <!-- div *ngFor=\"let hero of heroes; trackBy: trackByHeroes\">\n            ({{hero.id}}) {{hero.name}}\n          </div-->\n          <li *ngFor =\"let l of lists\">\n          {{l.list[0]}}\n          </li>\n        </ul>\n        <div class=\"prices\">\n          <div>\n            <h6>Sede <br>A3 Soho</h6>\n            <div class=\"price\">\n              <span>Desde</span>\n              <strong>{{membresias[1].soho.from}}</strong>\n              <p>{{membresias[1].soho.aclaracion}}</p>\n            </div>\n          </div>\n          <div >\n            <h6>Sede <br>A3 El Salvador</h6>\n            <div class=\"price\">\n              <span>Desde</span>\n              <strong>{{membresias[1].salvador.from}}</strong>\n              <p>{{membresias[1].salvador.aclaracion}}</p>\n            </div>\n          </div>\n        </div>\n        <a href=\"{{membresias[1].gform}}\" target=\"_blank\" class=\"button\">\n          <img src=\"assets/img/button-arrow.png\">\n          <span>Quiero ser miembro</span>\n        </a>\n      </div>\n    </div>\n  </div>\n<div id=\"membresias\" class=\"show-me wrapper wrapper-big\" >\n      <div class=\"wrapper\">\n        <h3 class=\"enter-x-r\">Membresías</h3>\n      </div>\n      <div class=\"wp\">\n        <a href=\"membresias/{{urlEncode(membresias[0].name)}}\" class=\"column enter-y delay-1\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[0].image + ')'}\" ></div>\n          <div class=\"text\">\n            <h4>{{membresias[0].name}}</h4>\n            <small>{{membresias[0].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[1].name)}}\" class=\"column enter-y delay-2\">\n          <div class=\"bg\" [ngStyle]=\"{background:' url(assets/uploads/' + membresias[1].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[1].name}}</h4>\n            <small>{{membresias[1].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[2].name)}}\" class=\"column enter-y delay-3\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[2].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[2].name}}</h4>\n            <small>{{membresias[2].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[3].name)}}\" class=\"column enter-y delay-4\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[3].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[3].name}}</h4>\n            <small>{{membresias[3].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>  \n</main>"

/***/ }),

/***/ "../../../../../src/app/views/membresias/flex.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlexComponent; });
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

var FlexComponent = (function () {
    function FlexComponent() {
        this.urlEncode = function (l) {
            if (l)
                return l.toLowerCase().split(' ').join('-');
            else
                return '';
        };
        this.lists = [
            {
                "id": "0",
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
                ]
            }
        ];
        this.slides = [
            {
                "id": "0",
                "slide": [
                    "5.jpg"
                ]
            },
            {
                "id": "1",
                "slide": [
                    "6.jpg"
                ]
            },
            {
                "id": "2",
                "slide": [
                    "7.jpg"
                ]
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
                "list": [
                    "Acceso a los beneficios y descuentos de la Comunidad A3.",
                    "Acceso 24x7.",
                    "Espacio exclusivo con puestos fijos y sillas ergonómicas Haworth.",
                    "Uso de todos los espacios compartidos, incluyendo living, cocina, ping pong y jardín.",
                    "Coffee break con café, infusiones, galletitas y frutas sin cargo.",
                    "Alianza con 650 coworkings de todo el mundo.",
                    "Terraza de 600m2 con una hermosa vista al jardín.",
                    "Acceso a eventos innovadores e inspiradores."
                ],
                "soho": {
                    "from": "$3.000 + IVA",
                    "aclaracion": "Por mes con un mínimo de 3 meses. "
                },
                "published": true
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
                "published": true
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
                "published": true
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
                "published": true
            }
        ];
    }
    FlexComponent.prototype.trackByIndex = function (index, list) {
        return index;
    };
    FlexComponent.prototype.ngOnInit = function () {
    };
    FlexComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-flex',
            template: __webpack_require__("../../../../../src/app/views/membresias/flex.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FlexComponent);
    return FlexComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/membresias/labs.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- carousel>\n  <slide>\n    <img src=\"assets/img/sliders/1.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n  </slide>\n  <slide>\n    <img src=\"assets/img/sliders/2.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n  </slide>\n  <slide>\n    <img src=\"assets/img/sliders/3.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n  </slide>\n</carousel-->\n\n\n\n<main id=\"nosotros\" class=\"interna membresia-detail\">\n\n  <div id=\"c1\" class=\"circle circle-1 show-me\"><img class=\"enter-y delay-5\" src=\"assets/img/circle-1.png\"></div>\n\n  <div class=\"wrapper show-me\" id=\"n1\">\n    <h4 class=\"enter-x-r\">Membresía {{membresias[0].name}}</h4>\n  </div>\n  <div id=\"slide-pics\" class=\"show-me\">\n    <div class=\"wrapper wrapper-big\">\n    <carousel>\n      <slide  class=\"slide-home enter-y\" *ngFor = \"let s of slides\"> \n       <img src=\"assets/img/sliders/{{s.slide[0]}}\" alt=\"First slide\">\n       </slide>\n    </carousel>\n    </div>\n  </div>\n  <div class=\"wrapper show-me\" id=\"n3\">\n\n    <div id=\"servicios\">\n      <div class=\"text\">\n        <h3>{{membresias[0].title}}</h3>\n      </div>\n      <div class=\"servicios\">\n        <strong>Servicios incluidos</strong>\n        <ul>\n          <!-- div *ngFor=\"let hero of heroes; trackBy: trackByHeroes\">\n            ({{hero.id}}) {{hero.name}}\n          </div-->\n          <li *ngFor =\"let s of lists\">\n          {{s.list[0]}}\n          </li>\n        </ul>\n        <div class=\"prices\">\n          <div>\n            <h6>Sede <br>A3 Soho</h6>\n            <div class=\"price\">\n              <span>Desde</span>\n              <strong>{{membresias[0].soho.from}}</strong>\n              <p>{{membresias[0].soho.aclaracion}}</p>\n            </div>\n          </div>\n          <div >\n            <h6>Sede <br>A3 El Salvador</h6>\n            <div class=\"price\">\n              <span>Desde</span>\n              <strong>{{membresias[0].salvador.from}}</strong>\n              <p>{{membresias[0].salvador.aclaracion}}</p>\n            </div>\n          </div>\n        </div>\n        <a href=\"{{membresias[0].gform}}\" target=\"_blank\" class=\"button\">\n          <img src=\"assets/img/button-arrow.png\">\n          <span>Quiero ser miembro</span>\n        </a>\n      </div>\n    </div>\n  </div>\n\n<div id=\"membresias\" class=\"show-me wrapper wrapper-big\" >\n      <div class=\"wrapper\">\n        <h3 class=\"enter-x-r\">Membresías</h3>\n      </div>\n      <div class=\"wp\">\n        <a href=\"membresias/{{urlEncode(membresias[0].name)}}\" class=\"column enter-y delay-1\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[0].image + ')'}\" ></div>\n          <div class=\"text\">\n            <h4>{{membresias[0].name}}</h4>\n            <small>{{membresias[0].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[1].name)}}\" class=\"column enter-y delay-2\">\n          <div class=\"bg\" [ngStyle]=\"{background:' url(assets/uploads/' + membresias[1].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[1].name}}</h4>\n            <small>{{membresias[1].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[2].name)}}\" class=\"column enter-y delay-3\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[2].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[2].name}}</h4>\n            <small>{{membresias[2].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[3].name)}}\" class=\"column enter-y delay-4\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[3].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[3].name}}</h4>\n            <small>{{membresias[3].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>    \n</main>"

/***/ }),

/***/ "../../../../../src/app/views/membresias/labs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LabsComponent; });
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

var LabsComponent = (function () {
    function LabsComponent() {
        this.urlEncode = function (l) {
            if (l)
                return l.toLowerCase().split(' ').join('-');
            else
                return '';
        };
        this.lists = [
            {
                "id": "0",
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
                ]
            }
        ];
        this.slides = [
            {
                "id": "0",
                "slide": [
                    "5.jpg"
                ]
            },
            {
                "id": "1",
                "slide": [
                    "6.jpg"
                ]
            },
            {
                "id": "2",
                "slide": [
                    "7.jpg"
                ]
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
                "list": [
                    "Acceso a los beneficios y descuentos de la Comunidad A3.",
                    "Acceso 24x7.",
                    "Espacio exclusivo con puestos fijos y sillas ergonómicas Haworth.",
                    "Uso de todos los espacios compartidos, incluyendo living, cocina, ping pong y jardín.",
                    "Coffee break con café, infusiones, galletitas y frutas sin cargo.",
                    "Alianza con 650 coworkings de todo el mundo.",
                    "Terraza de 600m2 con una hermosa vista al jardín.",
                    "Acceso a eventos innovadores e inspiradores."
                ],
                "soho": {
                    "from": "$3.000 + IVA",
                    "aclaracion": "Por mes con un mínimo de 3 meses. "
                },
                "published": true
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
                "published": true
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
                "published": true
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
                "published": true
            }
        ];
    }
    LabsComponent.prototype.ngOnInit = function () {
    };
    LabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/membresias/labs.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], LabsComponent);
    return LabsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/membresias/membresias-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembresiasRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__desk_component__ = __webpack_require__("../../../../../src/app/views/membresias/desk.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flex_component__ = __webpack_require__("../../../../../src/app/views/membresias/flex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__labs_component__ = __webpack_require__("../../../../../src/app/views/membresias/labs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__office_component__ = __webpack_require__("../../../../../src/app/views/membresias/office.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        children: [
            {
                path: 'desk',
                component: __WEBPACK_IMPORTED_MODULE_2__desk_component__["a" /* DeskComponent */],
                data: {
                    title: 'Desk'
                }
            },
            {
                path: 'flex',
                component: __WEBPACK_IMPORTED_MODULE_3__flex_component__["a" /* FlexComponent */],
                data: {
                    title: 'Flex'
                }
            },
            {
                path: 'labs',
                component: __WEBPACK_IMPORTED_MODULE_4__labs_component__["a" /* LabsComponent */],
                data: {
                    title: 'Labs'
                }
            },
            {
                path: 'office',
                component: __WEBPACK_IMPORTED_MODULE_5__office_component__["a" /* OfficeComponent */],
                data: {
                    title: 'Office'
                }
            }
        ]
    }
];
var MembresiasRoutingModule = (function () {
    function MembresiasRoutingModule() {
    }
    MembresiasRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], MembresiasRoutingModule);
    return MembresiasRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/membresias/membresias.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"bg-1\">\r\n    <div id=\"membresias\" class=\"show-me wrapper wrapper-big\" style=\"padding-top: 200px; z-index: 2;\">\r\n      <div class=\"wrapper\">\r\n        <h3 class=\"enter-x-r\">Membresías</h3>\r\n      </div>\r\n      <div class=\"wp\">\r\n        <a href=\"membresias/{{urlEncode(membresias[0].name)}}\" class=\"column enter-y delay-1\">\r\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[0].image + ')'}\" ></div>\r\n          <div class=\"text\">\r\n            <h4>{{membresias[0].name}}</h4>\r\n            <small>{{membresias[0].desde}}</small>\r\n            <div class=\"button-wrap\">\r\n              <div class=\"button green\">\r\n                <img src=\"assets/img/button-arrow.png\">\r\n                <span>Ver más</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <a href=\"membresias/{{urlEncode(membresias[1].name)}}\" class=\"column enter-y delay-2\">\r\n          <div class=\"bg\" [ngStyle]=\"{background:' url(assets/uploads/' + membresias[1].image + ')'}\"></div>\r\n          <div class=\"text\">\r\n            <h4>{{membresias[1].name}}</h4>\r\n            <small>{{membresias[1].desde}}</small>\r\n            <div class=\"button-wrap\">\r\n              <div class=\"button green\">\r\n                <img src=\"assets/img/button-arrow.png\">\r\n                <span>Ver más</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <a href=\"membresias/{{urlEncode(membresias[2].name)}}\" class=\"column enter-y delay-3\">\r\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[2].image + ')'}\"></div>\r\n          <div class=\"text\">\r\n            <h4>{{membresias[2].name}}</h4>\r\n            <small>{{membresias[2].desde}}</small>\r\n            <div class=\"button-wrap\">\r\n              <div class=\"button green\">\r\n                <img src=\"assets/img/button-arrow.png\">\r\n                <span>Ver más</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <a href=\"membresias/{{urlEncode(membresias[3].name)}}\" class=\"column enter-y delay-4\">\r\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[3].image + ')'}\"></div>\r\n          <div class=\"text\">\r\n            <h4>{{membresias[3].name}}</h4>\r\n            <small>{{membresias[3].desde}}</small>\r\n            <div class=\"button-wrap\">\r\n              <div class=\"button green\">\r\n                <img src=\"assets/img/button-arrow.png\">\r\n                <span>Ver más</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </a>\r\n      </div>\r\n    </div>\r\n\r\n  <div id=\"c1\" class=\"circle circle-1 show-me\">\r\n    <img class=\"enter-y delay-5\" src=\"assets/img/circle-1.png\">\r\n  </div>\r\n   <div id=\"caracteristicas\" class=\"show-me wrapper wrapper-big\">\r\n      <div class=\"wrapper\">\r\n        <h3 class=\"enter-x-r\">El lugar donde las cosas pasan</h3>\r\n      </div>\r\n      <div class=\"wp\">\r\n        <div class=\"column enter-y delay-{{i+1}}\" *ngFor=\"let u of events; let i = index\">\r\n          <div class=\"thumb\">\r\n            <img src=\"assets/uploads/{{u.image}}\">\r\n            <h4>{{u.name}}</h4>\r\n          </div>\r\n          <div class=\"info\">\r\n            <img src=\"assets/uploads/{{u.image}}\">\r\n            <h4>{{u.name}}</h4>\r\n            <p>{{u.text}}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div id=\"gfe3\" class=\"show-me\" style=\"padding-bottom: 150px\">\r\n      <h4 class=\"enter-x-r\">#PartnersA3</h4>\r\n      <h3 class=\"enter-x delay-1\">que potencian tus ideas</h3>\r\n      <img src=\"assets/img/gfe3.jpg\" class=\"enter-y delay-2\">\r\n    </div>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/views/membresias/membresias.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MembresiasComponent; });
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

// import {ActivatedRoute} from "@angular/router";
var MembresiasComponent = (function () {
    function MembresiasComponent() {
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
    MembresiasComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/membresias/membresias.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], MembresiasComponent);
    return MembresiasComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/membresias/membresias.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembresiasModule", function() { return MembresiasModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__labs_component__ = __webpack_require__("../../../../../src/app/views/membresias/labs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flex_component__ = __webpack_require__("../../../../../src/app/views/membresias/flex.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__desk_component__ = __webpack_require__("../../../../../src/app/views/membresias/desk.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__office_component__ = __webpack_require__("../../../../../src/app/views/membresias/office.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__membresias_component__ = __webpack_require__("../../../../../src/app/views/membresias/membresias.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_carousel__ = __webpack_require__("../../../../ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__membresias_routing_module__ = __webpack_require__("../../../../../src/app/views/membresias/membresias-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Routing Membresias

var MembresiasModule = (function () {
    function MembresiasModule() {
    }
    MembresiasModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_8__membresias_routing_module__["a" /* MembresiasRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_carousel__["a" /* CarouselModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__labs_component__["a" /* LabsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__membresias_component__["a" /* MembresiasComponent */],
                __WEBPACK_IMPORTED_MODULE_3__flex_component__["a" /* FlexComponent */],
                __WEBPACK_IMPORTED_MODULE_4__desk_component__["a" /* DeskComponent */],
                __WEBPACK_IMPORTED_MODULE_5__office_component__["a" /* OfficeComponent */]
            ]
        })
    ], MembresiasModule);
    return MembresiasModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/membresias/office.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- carousel>\n  <slide>\n    <img src=\"assets/img/sliders/1.jpg\" alt=\"First slide\" style=\"display: block; width: 100%;\">\n  </slide>\n  <slide>\n    <img src=\"assets/img/sliders/2.jpg\" alt=\"Second slide\" style=\"display: block; width: 100%;\">\n  </slide>\n  <slide>\n    <img src=\"assets/img/sliders/3.jpg\" alt=\"Third slide\" style=\"display: block; width: 100%;\">\n  </slide>\n</carousel-->\n\n\n\n<main id=\"nosotros\" class=\"interna membresia-detail\">\n\n  <div id=\"c1\" class=\"circle circle-1 show-me\"><img class=\"enter-y delay-5\" src=\"assets/img/circle-1.png\"></div>\n\n  <div class=\"wrapper show-me\" id=\"n1\">\n    <h4 class=\"enter-x-r\">Membresía {{membresias[3].name}}</h4>\n  </div>\n  <div id=\"slide-pics\" class=\"show-me\">\n    <div class=\"wrapper wrapper-big\">\n    <carousel>\n      <slide  class=\"slide-home enter-y\" *ngFor = \"let s of slides\"> \n       <img src=\"assets/img/sliders/{{s.slide[0]}}\" alt=\"First slide\">\n       </slide>\n    </carousel>\n    </div>\n  </div>\n  <div class=\"wrapper show-me\" id=\"n3\">\n\n    <div id=\"servicios\">\n      <div class=\"text\">\n        <h3>{{membresias[3].title}}</h3>\n      </div>\n      <div class=\"servicios\">\n        <strong>Servicios incluidos</strong>\n        <ul>\n          <!-- div *ngFor=\"let hero of heroes; trackBy: trackByHeroes\">\n            ({{hero.id}}) {{hero.name}}\n          </div-->\n          <li *ngFor =\"let s of lists\">\n          {{s.list[0]}}\n          </li>\n        </ul>\n        <div class=\"prices\">\n          <div>\n            <h6>Sede <br>A3 Soho</h6>\n            <div class=\"price\">\n              <span>Desde</span>\n              <strong>{{membresias[3].soho.from}}</strong>\n              <p>{{membresias[3].soho.aclaracion}}</p>\n            </div>\n          </div>\n          <div >\n            <h6>Sede <br>A3 El Salvador</h6>\n            <div class=\"price\">\n              <span>Desde</span>\n              <strong>{{membresias[3].salvador.from}}</strong>\n              <p>{{membresias[3].salvador.aclaracion}}</p>\n            </div>\n          </div>\n        </div>\n        <a href=\"{{membresias[3].gform}}\" target=\"_blank\" class=\"button\">\n          <img src=\"assets/img/button-arrow.png\">\n          <span>Quiero ser miembro</span>\n        </a>\n      </div>\n    </div>\n</div>\n<div id=\"membresias\" class=\"show-me wrapper wrapper-big\" >\n      <div class=\"wrapper\">\n        <h3 class=\"enter-x-r\">Membresías</h3>\n      </div>\n      <div class=\"wp\">\n        <a href=\"membresias/{{urlEncode(membresias[0].name)}}\" class=\"column enter-y delay-1\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[0].image + ')'}\" ></div>\n          <div class=\"text\">\n            <h4>{{membresias[0].name}}</h4>\n            <small>{{membresias[0].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[1].name)}}\" class=\"column enter-y delay-2\">\n          <div class=\"bg\" [ngStyle]=\"{background:' url(assets/uploads/' + membresias[1].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[1].name}}</h4>\n            <small>{{membresias[1].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[2].name)}}\" class=\"column enter-y delay-3\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[2].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[2].name}}</h4>\n            <small>{{membresias[2].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n        <a href=\"membresias/{{urlEncode(membresias[3].name)}}\" class=\"column enter-y delay-4\">\n          <div class=\"bg\"  [ngStyle]=\"{background:' url(assets/uploads/' + membresias[3].image + ')'}\"></div>\n          <div class=\"text\">\n            <h4>{{membresias[3].name}}</h4>\n            <small>{{membresias[3].desde}}</small>\n            <div class=\"button-wrap\">\n              <div class=\"button green\">\n                <img src=\"assets/img/button-arrow.png\">\n                <span>Ver más</span>\n              </div>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n\n  \n</main>"

/***/ }),

/***/ "../../../../../src/app/views/membresias/office.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeComponent; });
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

var OfficeComponent = (function () {
    function OfficeComponent() {
        this.urlEncode = function (l) {
            if (l)
                return l.toLowerCase().split(' ').join('-');
            else
                return '';
        };
        this.lists = [
            {
                "id": "0",
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
                ]
            }
        ];
        this.slides = [
            {
                "id": "0",
                "slide": [
                    "5.jpg"
                ]
            },
            {
                "id": "1",
                "slide": [
                    "6.jpg"
                ]
            },
            {
                "id": "2",
                "slide": [
                    "7.jpg"
                ]
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
                "list": [
                    "Acceso a los beneficios y descuentos de la Comunidad A3.",
                    "Acceso 24x7.",
                    "Espacio exclusivo con puestos fijos y sillas ergonómicas Haworth.",
                    "Uso de todos los espacios compartidos, incluyendo living, cocina, ping pong y jardín.",
                    "Coffee break con café, infusiones, galletitas y frutas sin cargo.",
                    "Alianza con 650 coworkings de todo el mundo.",
                    "Terraza de 600m2 con una hermosa vista al jardín.",
                    "Acceso a eventos innovadores e inspiradores."
                ],
                "soho": {
                    "from": "$3.000 + IVA",
                    "aclaracion": "Por mes con un mínimo de 3 meses. "
                },
                "published": true
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
                "published": true
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
                "published": true
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
                "published": true
            }
        ];
    }
    OfficeComponent.prototype.ngOnInit = function () {
    };
    OfficeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("../../../../../src/app/views/membresias/office.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], OfficeComponent);
    return OfficeComponent;
}());



/***/ })

});
//# sourceMappingURL=membresias.module.chunk.js.map