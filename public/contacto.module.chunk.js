webpackJsonp(["contacto.module"],{

/***/ "../../../../../src/app/views/contacto/contacto-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacto_component__ = __webpack_require__("../../../../../src/app/views/contacto/contacto.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__contacto_component__["a" /* ContactoComponent */],
        data: {
            title: 'Contacto'
        }
    }
];
var ContactoRoutingModule = (function () {
    function ContactoRoutingModule() {
    }
    ContactoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ContactoRoutingModule);
    return ContactoRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/views/contacto/contacto.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id=\"contacto\" class=\"interna\">\n\t<div id=\"c1\" class=\"circle circle-1 show-me\"><img class=\"enter-y delay-5\" src=\"assets/img/circle-1.png\"></div>\n\t<div class=\"wrapper\">\n\t\t<div id=\"form\" class=\"show-me\">\n\t\t\t<h4 class=\"enter-x-r\">Contactate con nosotros</h4>\n\t\t\t<form class=\"enter-y delay-1\" (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\" ngNativeValidate>\n\t\t\t\t<input type=\"text\" name=\"nombre\" placeholder=\"Nombre\" ngModel=\"\" required>\n\t\t\t\t<input type=\"text\" name=\"apellido\" placeholder=\"Apellido\" ngModel=\"\" required>\n\t\t\t\t<input type=\"email\" name=\"email\" placeholder=\"E-mail\"  ngModel=\"\" required>\n\t\t\t\t<input type=\"text\" name=\"number\" placeholder=\"Teléfono\" ngModel=\"\" required>\n\t\t\t\t<input type=\"text\" name=\"consulta\" placeholder=\"Mensaje\" ngModel=\"\" required>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<br>\n\t\t\t\t<!-- p style=\"color: #e1296b; margin-bottom: 30px;\" *ngIf=\"message\">{{message}}</p-->\n\t\t\t\t<div class=\"button\">\n\t\t\t\t\t<input type=\"submit\" value=\"\">\n\t\t\t\t\t<img src=\"assets/img/button-arrow.png\">\n\t\t\t\t\t<span>Enviar</span>\n\t\t\t\t</div>\n\t\t\t\t <!-- button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!contactForm.form.valid\">Submit</button-->\n\t\t\t</form>\n\t\t\t<div class=\"social enter-x delay-2\">\n\t\t\t\t<h5>¡Seguinos!</h5>\n\t\t\t\t<a href=\"https://www.facebook.com/vijaychauhanssn\" target=\"_blank\"><i class=\"fa fa-facebook\"></i> Facebook</a>\n\t\t\t\t<a href=\"https://twitter.com/vijaychauhanssn\" target=\"_blank\"><i class=\"fa fa-twitter\"></i> Twitter</a>\n\t\t\t\t<a href=\"https://www.instagram.com/vijaychauhanssn/\" target=\"_blank\">\n\t\t\t\t   <i class=\"fa fa-instagram\"></i>\n\t\t\t\t\t Instagram\n\t\t\t\t   </a>\n\t\t\t\t<a href=\"https://www.youtube.com/channel/vijaychauhanssn\" target=\"_blank\">\n\t\t\t\t\t<i class=\"fa fa-youtube-play\">\n\t\t\t\t\t</i>YouTube\n\t\t\t   </a>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div id=\"social\" class=\"show-me\">\n\t\t<div class=\"enter-y\">\n\t\t\t<i class=\"fa fa-twitter\"></i>\n\t\t\t<div class=\"text\">\n\t\t\t\t<h6>{{tweet}}</h6>\n\t\t\t\t<small>{{tweetTime}}</small>\n\t\t\t</div>\n\t\t\t<a href=\"https://twitter.com/vijaychauhanssn\" target=\"_blank\"></a>\n\t\t</div>\n\t\t<div class=\"enter-y delay-1\"    [ngStyle]=\"{'background-image':' url(' + instagram?.image + ')'}\">\n\t\t\t<i class=\"fa fa-instagram\"></i>\n\t\t\t <div class=\"text\">\n\t\t\t\t<p>{{instagram?.text}}</p>\n\t\t\t\t<small>{{instagram?.date}}</small>\n\t\t\t</div> \n\t\t\t<a href=\"{{instagram?.link}}\" target=\"_blank\"></a>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/views/contacto/contacto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ContactoComponent = (function () {
    function ContactoComponent(http) {
        this.http = http;
        this.results = '';
    }
    ContactoComponent.prototype.onSubmit = function (f) {
        console.log(f.value); // { first: '', last: '' }
        console.log(f.valid); // false
    };
    ContactoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=1555426027.1677ed0.2a7ad672ca3d45f38782bfc0ca9a8851', {}).subscribe(function (data) {
            console.log(data);
            var post = data[0];
            var options = { weekday: 'long', month: 'long', day: 'numeric' };
            console.log(post);
            _this.instagram = {
                image: post.images.standard_resolution.url,
                link: post.link,
                date: new Date(post.created_time * 1000).toLocaleDateString("es-ES", options),
                text: post.caption.text
            };
            console.log(data);
        });
    };
    ContactoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contacto',
            template: __webpack_require__("../../../../../src/app/views/contacto/contacto.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/views/contacto/contacto.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoModule", function() { return ContactoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contacto_component__ = __webpack_require__("../../../../../src/app/views/contacto/contacto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contacto_routing_module__ = __webpack_require__("../../../../../src/app/views/contacto/contacto-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ContactoModule = (function () {
    function ContactoModule() {
    }
    ContactoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__contacto_routing_module__["a" /* ContactoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__contacto_component__["a" /* ContactoComponent */]]
        })
    ], ContactoModule);
    return ContactoModule;
}());



/***/ })

});
//# sourceMappingURL=contacto.module.chunk.js.map