(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_models/event.ts":
/*!**********************************!*\
  !*** ./src/app/_models/event.ts ***!
  \**********************************/
/*! exports provided: EVENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EVENT", function() { return EVENT; });
var EVENT = /** @class */ (function () {
    function EVENT() {
    }
    return EVENT;
}());



/***/ }),

/***/ "./src/app/_models/gmap-parameter.ts":
/*!*******************************************!*\
  !*** ./src/app/_models/gmap-parameter.ts ***!
  \*******************************************/
/*! exports provided: GMAP_PARAMETER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GMAP_PARAMETER", function() { return GMAP_PARAMETER; });
var GMAP_PARAMETER = /** @class */ (function () {
    function GMAP_PARAMETER() {
    }
    return GMAP_PARAMETER;
}());



/***/ }),

/***/ "./src/app/_models/triathlon.ts":
/*!**************************************!*\
  !*** ./src/app/_models/triathlon.ts ***!
  \**************************************/
/*! exports provided: Triathlon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Triathlon", function() { return Triathlon; });
var Triathlon = /** @class */ (function () {
    function Triathlon() {
    }
    return Triathlon;
}());



/***/ }),

/***/ "./src/app/_models/vtriathlon.ts":
/*!***************************************!*\
  !*** ./src/app/_models/vtriathlon.ts ***!
  \***************************************/
/*! exports provided: VTriathlon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VTriathlon", function() { return VTriathlon; });
/* harmony import */ var src_app_models_triathlon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_models/triathlon */ "./src/app/_models/triathlon.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var VTriathlon = /** @class */ (function (_super) {
    __extends(VTriathlon, _super);
    function VTriathlon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VTriathlon;
}(src_app_models_triathlon__WEBPACK_IMPORTED_MODULE_0__["Triathlon"]));



/***/ }),

/***/ "./src/app/_models/youbike-station.ts":
/*!********************************************!*\
  !*** ./src/app/_models/youbike-station.ts ***!
  \********************************************/
/*! exports provided: YoubikeStation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoubikeStation", function() { return YoubikeStation; });
var YoubikeStation = /** @class */ (function () {
    function YoubikeStation() {
    }
    return YoubikeStation;
}());



/***/ }),

/***/ "./src/app/_pipe/code2name.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/_pipe/code2name.pipe.ts ***!
  \*****************************************/
/*! exports provided: PipeParm, Code2namePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeParm", function() { return PipeParm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Code2namePipe", function() { return Code2namePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PipeParm;
(function (PipeParm) {
    PipeParm["CompileStatus"] = "CompileStatus";
    PipeParm["CompilePGType"] = "CompilePGType";
    PipeParm["YN2Boolean"] = "YN2Boolean";
    PipeParm["EventStatus"] = "EventStatus";
    PipeParm["MaskSaleStatus"] = "MaskSaleStatus";
})(PipeParm || (PipeParm = {}));
var Code2namePipe = /** @class */ (function () {
    function Code2namePipe() {
    }
    Code2namePipe.prototype.transform = function (code, exponent) {
        var name;
        if (exponent === PipeParm.CompileStatus) {
            if (code === -100) {
                name = '編譯失敗';
            }
            else if (code === 900) {
                name = '編譯成功';
            }
            else if (code === 1000) {
                name = '已佈署';
            }
            else if (code === 0) {
                name = '全部';
            }
        }
        if (exponent === PipeParm.CompilePGType) {
            if (code === 'T') {
                name = '.ts';
            }
            else if (code === 'H') {
                name = '.html';
            }
            else if (code === 'S') {
                name = '.scss';
            }
            else if (code === 'ALL') {
                name = '全部';
            }
        }
        if (exponent === PipeParm.EventStatus) {
            if (code === '-100') {
                name = '報名已截止';
            }
            else if (code === '0') {
                name = '尚未開始報名';
            }
            else if (code === '100') {
                name = '報名中';
            }
        }
        if (exponent === PipeParm.MaskSaleStatus) {
            if (code === 0) {
                name = '已售完';
            }
            else if (code > 0) {
                name = code;
                // } else if (code === 1000) {
                //   name = '已佈署';
                // } else if (code === 0) {
                //   name = '全部';
            }
        }
        return name;
    };
    Code2namePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'code2name'
        })
    ], Code2namePipe);
    return Code2namePipe;
}());



/***/ }),

/***/ "./src/app/_pipe/pipe.module.ts":
/*!**************************************!*\
  !*** ./src/app/_pipe/pipe.module.ts ***!
  \**************************************/
/*! exports provided: PipeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipeModule", function() { return PipeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _code2name_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./code2name.pipe */ "./src/app/_pipe/code2name.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipeModule = /** @class */ (function () {
    function PipeModule() {
    }
    PipeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_code2name_pipe__WEBPACK_IMPORTED_MODULE_2__["Code2namePipe"]],
            exports: [_code2name_pipe__WEBPACK_IMPORTED_MODULE_2__["Code2namePipe"]]
        })
    ], PipeModule);
    return PipeModule;
}());



/***/ }),

/***/ "./src/app/angular-material/angular-material.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/angular-material/angular-material.module.ts ***!
  \*************************************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AngularMaterialModule = /** @class */ (function () {
    function AngularMaterialModule() {
    }
    AngularMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
            ],
            exports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
            ],
            declarations: []
        })
    ], AngularMaterialModule);
    return AngularMaterialModule;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _programs_tri001_tri001_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./programs/tri001/tri001.component */ "./src/app/programs/tri001/tri001.component.ts");
/* harmony import */ var _programs_tri002_tri002_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./programs/tri002/tri002.component */ "./src/app/programs/tri002/tri002.component.ts");
/* harmony import */ var _programs_trievent_trievent_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./programs/trievent/trievent.component */ "./src/app/programs/trievent/trievent.component.ts");
/* harmony import */ var _programs_trievent_trievent_add_trievent_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./programs/trievent/trievent-add/trievent-add.component */ "./src/app/programs/trievent/trievent-add/trievent-add.component.ts");
/* harmony import */ var _programs_ncov2019_ncov2019_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./programs/ncov2019/ncov2019.component */ "./src/app/programs/ncov2019/ncov2019.component.ts");
/* harmony import */ var _programs_mask2020_mask2020_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./programs/mask2020/mask2020.component */ "./src/app/programs/mask2020/mask2020.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{ path: '', redirectTo: '/mask2020', pathMatch: 'full' },
    { path: 'tri001', component: _programs_tri001_tri001_component__WEBPACK_IMPORTED_MODULE_2__["Tri001Component"] },
    { path: 'tri002', component: _programs_tri002_tri002_component__WEBPACK_IMPORTED_MODULE_3__["Tri002Component"] },
    { path: 'trievent', component: _programs_trievent_trievent_component__WEBPACK_IMPORTED_MODULE_4__["TrieventComponent"] },
    { path: 'trievent-Add', component: _programs_trievent_trievent_add_trievent_add_component__WEBPACK_IMPORTED_MODULE_5__["TrieventAddComponent"] },
    { path: 'ncov2019', component: _programs_ncov2019_ncov2019_component__WEBPACK_IMPORTED_MODULE_6__["Ncov2019Component"] },
    { path: 'mask2020', component: _programs_mask2020_mask2020_component__WEBPACK_IMPORTED_MODULE_7__["Mask2020Component"] }
];
// [
//   {
//     path: 'home',
//     component: TrinavComponent,
//     children: [
//       { path: 'tri001', component: Tri001Component },
//       { path: 'tri002', component: Tri002Component },
//       { path: '', redirectTo: 'home', pathMatch: 'full' },
//     ]
//   },
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
// ];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: false, enableTracing: false })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!-- <div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <nav>\n    <a routerLink=\"\">Home</a>\n    <a routerLink=\"/tri001\">Tri001</a>\n    <br>\n    <a routerLink=\"/tri002\">Tri002</a>\n  </nav>\n</div> -->\n<app-trinav></app-trinav>\n<!-- <router-outlet></router-outlet> -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'AngularTri';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-material/angular-material.module */ "./src/app/angular-material/angular-material.module.ts");
/* harmony import */ var _programs_trinav_trinav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./programs/trinav/trinav.component */ "./src/app/programs/trinav/trinav.component.ts");
/* harmony import */ var _programs_tri001_tri001_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./programs/tri001/tri001.component */ "./src/app/programs/tri001/tri001.component.ts");
/* harmony import */ var _programs_tri002_tri002_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./programs/tri002/tri002.component */ "./src/app/programs/tri002/tri002.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_pipe/pipe.module */ "./src/app/_pipe/pipe.module.ts");
/* harmony import */ var _share_dialog_share_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./share-dialog/share-dialog.component */ "./src/app/share-dialog/share-dialog.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _programs_trievent_trievent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./programs/trievent/trievent.component */ "./src/app/programs/trievent/trievent.component.ts");
/* harmony import */ var _programs_trievent_trievent_detail_trievent_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./programs/trievent/trievent-detail/trievent-detail.component */ "./src/app/programs/trievent/trievent-detail/trievent-detail.component.ts");
/* harmony import */ var _programs_trievent_trievent_add_trievent_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./programs/trievent/trievent-add/trievent-add.component */ "./src/app/programs/trievent/trievent-add/trievent-add.component.ts");
/* harmony import */ var _programs_ncov2019_ncov2019_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./programs/ncov2019/ncov2019.component */ "./src/app/programs/ncov2019/ncov2019.component.ts");
/* harmony import */ var _programs_mask2020_mask2020_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./programs/mask2020/mask2020.component */ "./src/app/programs/mask2020/mask2020.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { RouterModule } from '@angular/router';






 // <-- NgModel lives here








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _programs_trinav_trinav_component__WEBPACK_IMPORTED_MODULE_6__["TrinavComponent"],
                _programs_tri001_tri001_component__WEBPACK_IMPORTED_MODULE_7__["Tri001Component"],
                _programs_tri002_tri002_component__WEBPACK_IMPORTED_MODULE_8__["Tri002Component"],
                _share_dialog_share_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ShareDialogComponent"],
                _programs_trievent_trievent_component__WEBPACK_IMPORTED_MODULE_13__["TrieventComponent"],
                _programs_trievent_trievent_detail_trievent_detail_component__WEBPACK_IMPORTED_MODULE_14__["TrieventDetailComponent"],
                _programs_trievent_trievent_add_trievent_add_component__WEBPACK_IMPORTED_MODULE_15__["TrieventAddComponent"],
                _programs_ncov2019_ncov2019_component__WEBPACK_IMPORTED_MODULE_16__["Ncov2019Component"],
                _programs_mask2020_mask2020_component__WEBPACK_IMPORTED_MODULE_17__["Mask2020Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                // RouterModule,
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                _pipe_pipe_module__WEBPACK_IMPORTED_MODULE_10__["PipeModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
            ],
            providers: [],
            entryComponents: [_share_dialog_share_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ShareDialogComponent"], _programs_trievent_trievent_detail_trievent_detail_component__WEBPACK_IMPORTED_MODULE_14__["TrieventDetailComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/programs/mask2020/mask2020.component.html":
/*!***********************************************************!*\
  !*** ./src/app/programs/mask2020/mask2020.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <input type=\"file\" accept=\".csv\" (change)=\" csv2Array($event)\"> -->\n<!-- <div *ngFor=\"let u of SQLdatas\">\n  {{u}}\n</div> -->\n\n<!-- <div>\n  <mat-form-field>\n    <mat-select [(ngModel)]=\"selectedData\" placeholder=\"請選擇一個場站\">\n      <mat-option *ngFor=\"let u of maskData\" [value]=\"u\">\n        {{u.properties.name}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div> -->\n\n<div>\n  <mat-form-field>\n    <mat-select [(ngModel)]=\"selectCity\" (ngModelChange)=\"getDistrict(selectCity)\" placeholder=\"請選擇一個城市\">\n      <mat-option *ngFor=\"let u of cityCountry\" [value]=\"u.CityName\">\n        {{u.CityName}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field>\n    <mat-select [(ngModel)]=\"selectDistrict\" (ngModelChange)=\"findPharmacy(selectCity,selectDistrict)\"\n      placeholder=\"請選擇一個區\">\n      <mat-option *ngFor=\"let u of District\" [value]=\"u.AreaName\">\n        {{u.AreaName}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n<h1>{{this.selectCity}}{{this.selectArea}}{{this.PharmacyCount}}</h1>\n\n\n\n<!-- <div *ngFor=\"let u of District\" class=\"inlineButton\">\n  <button mat-fab color=\"warn\" (click)=\"findPharmacy(selectCity,u.AreaName)\">\n    {{u.AreaName}}</button>\n</div> -->\n\n<button mat-raised-button color=\"warn\" (click)=\"getTest()\">\n  還有成人口罩嗎\n</button>\n<h3>{{LastUpdatedTime}}</h3>\n<div class=\"GroupCard\">\n  <mat-card *ngFor=\"let results of PharmacyInfo\" (click)=\"openMapDialog(results.properties.name)\">\n    <mat-card-header>\n      <h1>{{results.properties.name}}</h1>\n    </mat-card-header>\n    <mat-card-content>\n      <h4>{{results.properties.phone}}</h4>\n      <h4>{{results.properties.address}}</h4>\n      <!-- <h3>{{results.properties.available}}</h3> -->\n      <!-- <div style=\"text-align:center;\">\n        <h3 style=\"display:inline;\">\n          成人\n          <span style=\"font-size:xx-large;\"> {{results.properties.mask_adult| code2name:'MaskSaleStatus'}}</span>\n        </h3>\n        <h3 style=\"display:inline;\">\n          小孩\n          <span style=\"font-size:xx-large;\"> {{results.properties.mask_child}}</span>\n        </h3>\n      </div> -->\n      <mat-chip-list style=\"text-align:center;\">\n        成人\n        <mat-chip [ngStyle]=\"{'background-color':changeColor(results.properties.mask_adult)}\"\n          style=\"font-size:xx-large;\">\n          {{results.properties.mask_adult}}</mat-chip>\n        小孩\n        <mat-chip [ngStyle]=\"{'background-color':changeColor(results.properties.mask_child)}\"\n          style=\"font-size:xx-large;\">{{results.properties.mask_child}}</mat-chip>\n      </mat-chip-list>\n      <!-- <DIV style=\"background-color:#C7FF91;width:300%;height:100%;text-align:center;line-height:100%;\">\n        　測試文字垂直置中\n      </DIV> -->\n      <!-- <label>資料更新時間</label>\n      <h3>{{results.properties.updated}}</h3> -->\n    </mat-card-content>\n  </mat-card>\n</div>\n\n\n\n\n\n\n\n\n\n<!-- {{ this.District|json}} -->\n<!-- <div>\n  <mat-form-field>\n    <mat-select [(ngModel)]=\"selectDistrict\" placeholder=\"請選擇一個區\">\n      <mat-option *ngFor=\"let u of District\" [value]=\"u\">\n        {{u.AreaName}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div> -->\n"

/***/ }),

/***/ "./src/app/programs/mask2020/mask2020.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/programs/mask2020/mask2020.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  position: relative;\n  padding: 16px;\n  border-radius: 50px;\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  display: -ms-inline-grid;\n  display: inline-grid;\n  margin: 20px;\n  border: 10px solid black; }\n\n.inlineButton {\n  display: inline; }\n\n.GroupCard {\n  display: block;\n  background-color: #20a08b; }\n"

/***/ }),

/***/ "./src/app/programs/mask2020/mask2020.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/programs/mask2020/mask2020.component.ts ***!
  \*********************************************************/
/*! exports provided: Mask2020Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mask2020Component", function() { return Mask2020Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _programs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../programs.service */ "./src/app/programs/programs.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _tri002_tri002_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tri002/tri002.component */ "./src/app/programs/tri002/tri002.component.ts");
/* harmony import */ var src_app_share_dialog_share_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/share-dialog/share-dialog.service */ "./src/app/share-dialog/share-dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Mask2020Component = /** @class */ (function () {
    // public Code: Array<string>;
    // public Description: Array<string>;
    function Mask2020Component(programService, shareDialogService, dialog) {
        this.programService = programService;
        this.shareDialogService = shareDialogService;
        this.dialog = dialog;
    }
    Mask2020Component.prototype.ngOnInit = function () {
        this.getCityCountryData();
        this.getMaskData();
        // this.getSQL();
        this.getLocation();
    };
    Mask2020Component.prototype.getSQL = function () {
        this.SQLdatas = new Array();
        var Code = ['abc',
            'peter test',
            't_委外',
            'test',
            'Test2',
            'Test2_委外',
            't_自營',
            'OI',
            'OI_自營',
            'OI_委外',
            '全基金(排除外匯風險)',
            '自營(排除外匯風險)',
            'OI',
            '國內委外(排除外匯風險)',
            'DF',
            'DF_自營',
            'DF_委外',
            'DE',
            'DE_自營',
            'DE_委外',
            '國外委外(排除外匯風險)',
            '國外部位',
            'GF',
            'GF_自營',
            'GF_委外',
            'GE',
            'GE_自營',
            'GE_委外',
            'DD',
            'DD_自營',
            'DD_委外'];
        var Description = ['abc',
            'peter',
            't',
            'test',
            'Test2',
            'Test2_委外',
            't-自營',
            '另類投資',
            '另類投資_自營',
            '另類投資_委外',
            '全基金(排除外匯風險)',
            '自營(排除外匯風險)',
            '其他',
            '國內委外(排除外匯風險)',
            '國內債務證券',
            '國內債務證券_自營',
            '國內債務證券_委外',
            '國內權益證券',
            '國內權益證券_自營',
            '國內權益證券_委外',
            '國外委外(排除外匯風險)',
            '國外部位',
            '國外債券證券',
            '國外債券證券_自營',
            '國外債券證券_委外',
            '國外權益證券',
            '國外權益證券_自營',
            '國外權益證券_委外',
            '銀行存款',
            '銀行存款_自營',
            '銀行存款_委外'];
        for (var i = 0; i <= Code.length - 1; i++) {
            var SQL = 'INSERT INTO [dbo].[tblUserDefinePortfolioCondition]([Code],[Description],[Moditime]) VALUES' +
                "('" + Code[i] + "','" + Description[i] + "', GETDATE())";
            this.SQLdatas.push(SQL);
        }
    };
    // callMap(pContent) {
    //   this.shareDialogService.openShareDialog(pContent);
    // }
    Mask2020Component.prototype.getCityCountryData = function () {
        var _this = this;
        this.programService.getCityCountyData().subscribe(function (response) {
            _this.cityCountry = response,
                console.log(_this.cityCountry);
        }, function (error) { return _this.programService.HandleError(error); });
    };
    Mask2020Component.prototype.getMaskData = function () {
        var _this = this;
        this.programService.getMaskData().subscribe(function (response) {
            _this.maskData = response.features,
                console.log(_this.maskData);
        }, function (error) { return _this.programService.HandleError(error); });
    };
    Mask2020Component.prototype.getDistrict = function (pCityName) {
        // 重選清空選擇區與藥局數量
        this.selectArea = null;
        this.PharmacyCount = null;
        var selectDistrict = this.cityCountry.find(function (x) { return x.CityName === pCityName; });
        this.District = selectDistrict.AreaList;
        // console.log(selectDistrict);
    };
    Mask2020Component.prototype.findPharmacy = function (pCityName, pAreaName) {
        console.log(pCityName, pAreaName);
        this.selectArea = pAreaName;
        this.PharmacyInfo = new Array();
        this.PharmacyInfo = this.maskData.filter(function (x) { return x.properties.county === pCityName
            && x.properties.town === pAreaName; });
        this.PharmacyCount = this.PharmacyInfo.length.toString() + '間';
        var updateData = this.PharmacyInfo.find(function (x) { return x.properties.updated != null; });
        this.LastUpdatedTime = '最後更新時間為 ' + updateData.properties.updated;
        console.log(this.LastUpdatedTime);
    };
    Mask2020Component.prototype.changeColor = function (item) {
        if (item === 0) {
            return 'GARY';
        }
        else if (item > 0 && item <= 150) {
            return '#f9090996';
        }
        else if (item > 150) {
            return '#3fb58961';
        }
    };
    Mask2020Component.prototype.getTest = function () {
        if (this.PharmacyInfo) {
            // this.PharmacyInfo.forEach(x => this.compare(x.properties.mask_adult, x.properties.mask_adult));
            // this.PharmacyInfo.sort(this.compare(a, b))
            this.PharmacyInfo = this.PharmacyInfo.filter(function (x) { return x.properties.mask_adult > 0; });
            this.PharmacyCount = this.PharmacyInfo.length.toString() + '間';
            var updateData = this.PharmacyInfo.find(function (x) { return x.properties.updated != null; });
            this.LastUpdatedTime = '最後更新時間為 ' + updateData.properties.updated;
        }
    };
    Mask2020Component.prototype.compare = function (a, b) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    };
    Mask2020Component.prototype.openMapDialog = function (pContent) {
        var dialogRef = this.dialog.open(_tri002_tri002_component__WEBPACK_IMPORTED_MODULE_3__["Tri002Component"], {
            width: '600px',
            data: { content: pContent }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(pContent);
        });
    };
    Mask2020Component.prototype.getLocation = function () {
        if (navigator.geolocation) {
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            navigator.geolocation.getCurrentPosition(this.showPosition, this.showError, options);
        }
        else {
            this.shareDialogService.openShareDialog('Geolocation is not supported by this browser.');
        }
    };
    Mask2020Component.prototype.showPosition = function (pos) {
        console.log(pos);
        var crd = pos.coords;
        var a = crd.latitude + ' ' + crd.longitude;
        console.log('Your current position is:');
        console.log('Latitude : ' + crd.latitude);
        console.log('Longitude: ' + crd.longitude);
        console.log('More or less ' + crd.accuracy + ' meters.');
        // alert(a.toString());
        // console.log(crd);
    };
    Mask2020Component.prototype.showError = function (err) {
        console.warn('ERROR(' + err.code + '): ' + err.message);
    };
    Mask2020Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mask2020',
            template: __webpack_require__(/*! ./mask2020.component.html */ "./src/app/programs/mask2020/mask2020.component.html"),
            styles: [__webpack_require__(/*! ./mask2020.component.scss */ "./src/app/programs/mask2020/mask2020.component.scss")]
        }),
        __metadata("design:paramtypes", [_programs_service__WEBPACK_IMPORTED_MODULE_1__["ProgramsService"],
            src_app_share_dialog_share_dialog_service__WEBPACK_IMPORTED_MODULE_4__["ShareDialogService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], Mask2020Component);
    return Mask2020Component;
}());



/***/ }),

/***/ "./src/app/programs/ncov2019/ncov2019.component.html":
/*!***********************************************************!*\
  !*** ./src/app/programs/ncov2019/ncov2019.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ncov2019 works!\n</p>\n<div *ngFor=\"let item of ncov2019Data\">\n  {{item.provinceName}}\n  <div *ngFor=\"let city of item.cities\">\n    {{city.cityName}}\n  </div>\n</div>\n{{ncov2019Data|json}}\n<!-- <div>\n  <mat-card *ngIf=\"getShow(showYN)\">{{item}}</mat-card>\n  <button mat-raised-button *ngIf=\"getShow(showYN)\">Basic</button>\n  <button mat-icon-button *ngIf=\"getShow(showYN)\">\n    <mat-icon>favorite</mat-icon>\n  </button>\n</div>\n\n<div [innerHTML]=\"getCard('GOOD')\"></div> -->\n\n<!-- <button mat-raised-button color='warn'>test</button> -->\n<!-- <div><button mat-raised-button color='warn'>Test</button></div> -->\n"

/***/ }),

/***/ "./src/app/programs/ncov2019/ncov2019.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/programs/ncov2019/ncov2019.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/programs/ncov2019/ncov2019.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/programs/ncov2019/ncov2019.component.ts ***!
  \*********************************************************/
/*! exports provided: Ncov2019Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ncov2019Component", function() { return Ncov2019Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _programs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../programs.service */ "./src/app/programs/programs.service.ts");
/* harmony import */ var src_app_share_dialog_share_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share-dialog/share-dialog.service */ "./src/app/share-dialog/share-dialog.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Ncov2019Component = /** @class */ (function () {
    function Ncov2019Component(programService, shareDialogService, sanitizer) {
        this.programService = programService;
        this.shareDialogService = shareDialogService;
        this.sanitizer = sanitizer;
        this.showYN = false;
        this.item = 'test';
    }
    Ncov2019Component.prototype.ngOnInit = function () {
        // this.getnCov2019Data();
        // this.getCard();
        // this.getShow(this.showYN);
    };
    Ncov2019Component.prototype.getnCov2019Data = function () {
        var _this = this;
        this.programService.getnCov2019Data().subscribe(function (response) {
            _this.ncov2019Data = response.results,
                console.log(_this.ncov2019Data);
        }, function (error) { return _this.programService.HandleError(error); });
    };
    Ncov2019Component.prototype.getCard = function (pItem) {
        var a = "<button mat-raised-button>" + pItem + "</button>";
        // const a = pItem.replace(pItem, `<button mat-raised-button color='warn'>${pItem}</button>`);
        // console.log(this.sanitizer.bypassSecurityTrustHtml(a));
        return this.sanitizer.bypassSecurityTrustHtml(a);
    };
    Ncov2019Component.prototype.getShow = function (pBol) {
        return !pBol;
    };
    Ncov2019Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ncov2019',
            template: __webpack_require__(/*! ./ncov2019.component.html */ "./src/app/programs/ncov2019/ncov2019.component.html"),
            styles: [__webpack_require__(/*! ./ncov2019.component.scss */ "./src/app/programs/ncov2019/ncov2019.component.scss")]
        }),
        __metadata("design:paramtypes", [_programs_service__WEBPACK_IMPORTED_MODULE_1__["ProgramsService"],
            src_app_share_dialog_share_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ShareDialogService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], Ncov2019Component);
    return Ncov2019Component;
}());



/***/ }),

/***/ "./src/app/programs/programs.service.ts":
/*!**********************************************!*\
  !*** ./src/app/programs/programs.service.ts ***!
  \**********************************************/
/*! exports provided: ProgramsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramsService", function() { return ProgramsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { environment } from 'src/environments/environment';

var ProgramsService = /** @class */ (function () {
    function ProgramsService(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "https://netcoretri30days.azurewebsites.net",
                "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
                "Access-Control-Max-Age": "86400"
            })
        };
    }
    ProgramsService.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 1000
            // horizontalPosition: 'right'
        });
    };
    ProgramsService.prototype.getBackendData = function () {
        var getURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TriBackendAPI + "/Triathlon/GetAllTri";
        return this.http.get(getURL);
    };
    ProgramsService.prototype.getBackendDataByQuery = function (parameter) {
        var URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TriBackendAPI + "/Triathlon/GetTriById";
        // const myparams = new URLSearchParams();
        var myparams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]();
        if (this.isValue(parameter.id)) {
            myparams = myparams.set('Id', parameter.id);
        }
        if (this.isValue(parameter.year)) {
            myparams = myparams.set('year', parameter.year);
        }
        if (this.isValue(parameter.month_S)) {
            myparams = myparams.set('monthS', parameter.month_S);
        }
        if (this.isValue(parameter.month_E)) {
            myparams = myparams.set('monthE', parameter.month_E);
        }
        if (this.isValue(parameter.place)) {
            myparams = myparams.set('place', parameter.place);
        }
        console.log(URL + '?' + myparams);
        return this.http.get(URL, { params: myparams });
    };
    ProgramsService.prototype.isValue = function (item) {
        console.log(item);
        if (item !== undefined && item !== '') {
            return true;
        }
    };
    ProgramsService.prototype.postBackendData = function (item) {
        // const _id = item.id;
        var URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TriBackendAPI + "/Triathlon/AddTri";
        console.log(URL);
        console.log(item);
        delete item.id;
        return this.http.post(URL, item);
    };
    ProgramsService.prototype.putBackendData = function (item) {
        // const _id = item.id;
        var URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TriBackendAPI + "/Triathlon/UpdateTri?Id=" + item.id;
        console.log(URL);
        console.log(item);
        delete item.id;
        // this.updateData = new Triathlon();
        // this.updateData = item;
        // console.log(this.updateData);
        return this.http.put(URL, item);
    };
    ProgramsService.prototype.deleteBackendData = function (id) {
        var URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].TriBackendAPI + "/Triathlon/DeleteTri?Id=" + id;
        console.log(URL);
        return this.http.delete(URL);
    };
    ProgramsService.prototype.getData = function () {
        // const getURL = 'https://netcoretri30days.azurewebsites.net/api/user/GetAllUser';
        // return this.http.get<any>(getURL, this.httpOptions);
        var getURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GithubPage + '/assets/jsonData.json';
        return this.http.get(getURL);
    };
    ProgramsService.prototype.getUbikeData = function () {
        var URL = "http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-000352-001";
        return this.http.get(URL, this.httpOptions);
    };
    ProgramsService.prototype.getCityCountyData = function () {
        var getURL = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].GithubPage + '/assets/CityCountyData.json';
        return this.http.get(getURL);
    };
    ProgramsService.prototype.getnCov2019Data = function () {
        var URL = "https://lab.isaaclin.cn/nCoV/api/area?latest=1&province=湖南省";
        return this.http.get(URL);
    };
    ProgramsService.prototype.getMaskData = function () {
        var URL = "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json";
        return this.http.get(URL);
    };
    ProgramsService.prototype.getDistance = function (start, end) {
        var lat1 = (Math.PI / 180) * start.latitude;
        var lat2 = (Math.PI / 180) * end.latitude;
        var lon1 = (Math.PI / 180) * start.longitude;
        var lon2 = (Math.PI / 180) * end.longitude;
        // 地球半徑
        var R = 6371;
        // 兩點間距離 km，如果想要米的話，結果*1000就可以了
        var d = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(lon2 - lon1)) * R;
        return d * 1000;
    };
    // http呼叫錯誤處理
    ProgramsService.prototype.HandleError = function (e) {
        console.log(e.error.Message);
        alert(e.error.Message);
    };
    ProgramsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], ProgramsService);
    return ProgramsService;
}());



/***/ }),

/***/ "./src/app/programs/tri001/tri001.component.html":
/*!*******************************************************!*\
  !*** ./src/app/programs/tri001/tri001.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  tri001 works!\n</p>\n\n\nPipe List\n<ul>\n  <li>number</li>\n  {{123456789.98765| number}}\n  {{3.14| number:'4.5-5'}}\n  <li> currency</li>\n  {{123456789.98765 | currency:'EUR'}}\n  <li>json</li>\n  {{items | json}}\n  <li>uppercase</li>\n  {{uBikeData.sareaen| uppercase}}\n  <li>lowercase </li>\n  {{uBikeData.snaen |lowercase}}\n</ul>\n\n{{900| code2name:'CompileStatus'}}\n{{1000| code2name:'CompileStatus'}}\n{{'H'| code2name:'CompilePGType'}}\n{{'T'|code2name:'CompilePGType'}}\n\n\n\n<mat-checkbox>Check me!</mat-checkbox>\n<div class=\"standard-closed\">\n  <button mat-raised-button color=\"primary\">Primary</button>\n</div>\n<div>\n  <mat-form-field>\n    <input matInput placeholder=\"Favorite food\" value=\"Vegetable\">\n  </mat-form-field>\n</div>\n<mat-form-field class=\"standard-width standard-closed\">\n  <input matInput placeholder=\" food\" value=\"HAMBUGER\">\n</mat-form-field>\n\n\n\n<button mat-fab color=\"warn\" (click)=\"openDialog()\">\n  <span matTooltip=\"Search\">\n    <mat-icon>search</mat-icon>\n  </span>\n</button>\n<!--\n<h1 i18n=\"@@introductionHeader\">Hello i18n!</h1>\n<h3 i18n=\"@@Hello\">Hello</h3> -->\n\n\n<!--\n<ul>\n  <li *ngFor=\"let i of uBike\">\n    <span>{{i.sno}}</span> {{i.sna}}\n  </li>\n</ul> -->\n\n\n\n\n<div>\n  <mat-form-field>\n    <mat-select [(ngModel)]=\"selectedData\" (ngModelChange)=\"getUikeDataStation(selectedData)\" placeholder=\"請選擇一個場站\">\n      <mat-option *ngFor=\"let u of uBike \" [value]=\"u\">\n        {{u.sno}} {{u.sna}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n</div>\n<!-- {{selectedBikeData.snaen}} -->\n<!-- {{uBikeData.tot}} -->\n\n<!-- {{uBikeData.lng}} -->\n\n<!-- <div *ngFor=\"let i of uBikeOneSelected\"> -->\n<!-- <ul>\n  <li>場站名稱：{{uBikeData.sna}}</li>\n  <li>總停車格：{{uBikeData.tot}}</li>\n  <li>可借車位數：{{uBikeData.sbi}}</li>\n  <li>資料更新時間：{{uBikeData.mday}}</li>\n  {{uBikeData.lat}} {{uBikeData.lng}}\n  <app-tri002 [width]=\"'80%'\" [latit]=\"uBikeData.lat\" [longit]=\"uBikeData.lng\" ></app-tri002>\n</ul> -->\n<!-- </div> -->\n\n<!-- {{strFormChild}} -->\n時間 => <span style='color:red'> {{ strFormChild | date : 'yyyy-MM-dd hh:mm:ss' }}</span>\n<div *ngFor=\"\n    let i of uBikeOneSelected\">\n  {{i.sna}}-\n  總停車格：{{i.tot}}\n  可借車位數：{{i.sbi}}\n  資料更新時間：{{i.mday}}\n  <app-tri002 [width]=\"'80%'\" [latit]=\"i.lat\" [longit]='i.lng' (childEvent)=\"onListenChild($event);\"></app-tri002>\n</div>\n\n<!-- <app-tri002 [width]=\"'80%'\" [latit]=\"'23.58'\" [longit]='\"120.58\" '></app-tri002> -->\n"

/***/ }),

/***/ "./src/app/programs/tri001/tri001.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/programs/tri001/tri001.component.ts ***!
  \*****************************************************/
/*! exports provided: Tri001Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tri001Component", function() { return Tri001Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _programs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../programs.service */ "./src/app/programs/programs.service.ts");
/* harmony import */ var _models_youbike_station__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_models/youbike-station */ "./src/app/_models/youbike-station.ts");
/* harmony import */ var src_app_share_dialog_share_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share-dialog/share-dialog.service */ "./src/app/share-dialog/share-dialog.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Tri001Component = /** @class */ (function () {
    function Tri001Component(programService, shareDialogService) {
        this.programService = programService;
        this.shareDialogService = shareDialogService;
        this.uBike = new Array();
        // public uBike: any;
        this.uBikeOneSelected = new Array();
        this.uBikeData = new _models_youbike_station__WEBPACK_IMPORTED_MODULE_2__["YoubikeStation"](); // 關鍵要new
        // public vAddress: Array<VALUE_LANG>;
        this.strFormChild = ''; // <==兒子的回傳值的顯示屬性
    }
    Tri001Component.prototype.ngOnInit = function () {
        this.getData();
        this.getUbikeData();
        this.getnCov2019Data();
    };
    // Child模板事件發生時，會呼叫此方法回傳值
    Tri001Component.prototype.onListenChild = function ($event) {
        console.log($event);
        this.strFormChild = $event;
    };
    Tri001Component.prototype.openSnackbar = function () {
        this.shareDialogService.openShareDialog('鐵人三十天測試一波');
    };
    Tri001Component.prototype.openDialog = function (item) {
        // this.shareDialogService.openShareDialog('鐵人三十天測試一波');
        this.shareDialogService.openShareDialog(JSON.stringify(this.uBike[2]));
    };
    Tri001Component.prototype.getData = function () {
        var _this = this;
        this.programService.getData()
            .subscribe(function (response) {
            _this.items = response;
            // 20181022
            // this.items.map(x => { x.Address = JSON.parse(x.Address), x.City = JSON.parse(x.City); });
            // this.items[0].Address.List[1].Value
            // this.items.map(y => y.Address[0].Value);
            // const t = JSON.parse(this.items[0].Address);
            // this.vAddress = t.List[1].Value;
            // const u = s.filter(x => x.LANG = 'zh-TW');
            console.log(_this.items);
        }, function (error) { return _this.programService.HandleError(error); });
    };
    Tri001Component.prototype.getUbikeData = function () {
        var _this = this;
        this.programService.getUbikeData().subscribe(function (response) {
            _this.uBike = response.result.records,
                console.log(_this.uBike);
        }, function (error) { return _this.programService.HandleError(error); });
    };
    Tri001Component.prototype.getUikeDataStation = function (item) {
        // this.uBikeData = item;
        this.uBikeOneSelected = [];
        // const refreshTime = item.mday.substring(0, 4);
        // item.mday = refreshTime;
        this.uBikeOneSelected.push(item);
        console.log(this.uBikeData);
        this.programService.openSnackBar(item.lat, item.lng);
    };
    Tri001Component.prototype.getnCov2019Data = function () {
        var _this = this;
        this.programService.getnCov2019Data().subscribe(function (response) {
            _this.nCov2019Data = response,
                console.log(_this.nCov2019Data);
        }, function (error) { return _this.programService.HandleError(error); });
    };
    Tri001Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tri001',
            template: __webpack_require__(/*! ./tri001.component.html */ "./src/app/programs/tri001/tri001.component.html"),
        }),
        __metadata("design:paramtypes", [_programs_service__WEBPACK_IMPORTED_MODULE_1__["ProgramsService"],
            src_app_share_dialog_share_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ShareDialogService"]])
    ], Tri001Component);
    return Tri001Component;
}());



/***/ }),

/***/ "./src/app/programs/tri002/tri002.component.html":
/*!*******************************************************!*\
  !*** ./src/app/programs/tri002/tri002.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <mat-form-field>\r\n    <input matInput type=\"number\" step=\"0.01\" [(ngModel)]=\"gmap.latit\" placeholder=\"緯度\" (ngModelChange)=\"getGmapURL()\">\r\n  </mat-form-field>\r\n  <mat-form-field class=\"standard-width\">\r\n    <input matInput type=\"number\" step=\"0.01\" [(ngModel)]=\"gmap.longit\" placeholder=\"經度\" (ngModelChange)=\"getGmapURL()\">\r\n  </mat-form-field>\r\n  <mat-slider min=\"1\" max=\"15\" step=\"1\" [(ngModel)]=\"gmap.scale\" thumbLabel color=\"primary\" (ngModelChange)=\"getGmapURL()\"\r\n    class=\"standard-width\"></mat-slider>\r\n  <mat-form-field>\r\n    <mat-select [(ngModel)]=\"gmap.mode\" (ngModelChange)=\"getGmapURL()\">\r\n      <mat-option value=\"\">預設</mat-option>\r\n      <mat-option value=\"h\">衛星圖</mat-option>\r\n      <mat-option value=\"p\">地形圖</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <mat-form-field class=\"standard-width\">\r\n    <mat-select placeholder=\"地圖語言別\" [(ngModel)]=\"gmap.language\" (ngModelChange)=\"getGmapURL()\" required>\r\n      <!-- <mat-option *ngFor=\"let cp of gmap.language\" [value]=\"cp\">\r\n          {{cp}}\r\n        </mat-option> -->\r\n\r\n      <mat-option value=\"zh-TW\">中文</mat-option>\r\n      <mat-option value=\"en-GB\">英文</mat-option>\r\n    </mat-select>\r\n  </mat-form-field>\r\n  <!-- {{gmap.mode}} -->\r\n  <!-- <button (click)=\"onChildClick()\">回傳父親時間</button> -->\r\n</div>\r\n\r\n<iframe [width]=\"width\" height=\"500\" frameborder=\"50\" [src]=\"frameUrl\">\r\n</iframe>\r\n\r\n<!-- <iframe width=\"60%\" height=\"500\" frameborder=\"50\" [src]=\"frameUrl\">\r\n</iframe> -->\r\n\r\n<!-- {{latit}} {{longit}} {{width}} -->\r\n"

/***/ }),

/***/ "./src/app/programs/tri002/tri002.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/programs/tri002/tri002.component.ts ***!
  \*****************************************************/
/*! exports provided: Tri002Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tri002Component", function() { return Tri002Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_models_gmap_parameter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models/gmap-parameter */ "./src/app/_models/gmap-parameter.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tri002Component = /** @class */ (function () {
    // localization: any;
    function Tri002Component(sanitizer) {
        this.sanitizer = sanitizer;
        this.childEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](); // 提供Output裝飾器，讓該事件成為父親模板的事件
        this.gmap = new src_app_models_gmap_parameter__WEBPACK_IMPORTED_MODULE_2__["GMAP_PARAMETER"]();
        this.count = 0;
    }
    Tri002Component.prototype.ngOnInit = function () {
        this.width = (this.width == null) ? '80%' : this.width;
        this.latit = (this.latit == null) ? '23.58' : this.latit;
        this.longit = (this.longit == null) ? '120.58' : this.longit;
        this.gmap.latit = this.latit;
        this.gmap.longit = this.longit;
        this.gmap.language = 'zh-TW';
        this.gmap.scale = '12';
        this.gmap.mode = '';
        // this.getGoogleLocalizationData();
        // this.getData();
        this.getGmapURL();
        // console.log('20181029');
        // console.log(this.latit);
        // console.log(this.longit);
    };
    Tri002Component.prototype.getGmapURL = function () {
        // this.gmap.latit = this.latit;
        // this.gmap.longit = this.longit;
        var URL = 'https://www.google.com/maps?q='
            + this.gmap.latit + ',' + this.gmap.longit + '&hl=' + this.gmap.language
            + '&z=' + this.gmap.scale + '&t=' + this.gmap.mode + '&output=embed';
        console.log(URL);
        this.onChildClick();
        return this.frameUrl = this.sanitizer.bypassSecurityTrustResourceUrl(URL);
        // return this.frameUrl = URL;
    };
    Tri002Component.prototype.onChildClick = function () {
        // this.childEvent.emit(new Date());
        var nowTime = new Date();
        this.count = this.count + 1;
        this.childEvent.emit(nowTime);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Tri002Component.prototype, "mapurl", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Tri002Component.prototype, "width", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Tri002Component.prototype, "latit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], Tri002Component.prototype, "longit", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], Tri002Component.prototype, "childEvent", void 0);
    Tri002Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tri002',
            template: __webpack_require__(/*! ./tri002.component.html */ "./src/app/programs/tri002/tri002.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], Tri002Component);
    return Tri002Component;
}());



/***/ }),

/***/ "./src/app/programs/trievent/trievent-add/trievent-add.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/programs/trievent/trievent-add/trievent-add.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <p>\n  trievent-add works!\n</p> -->\n<button mat-fab color=\"primary\" (click)=\"goBack()\">\n  <span matTooltip=\"回前頁\">\n    <mat-icon>reply</mat-icon>\n  </span>\n</button>\n<button mat-fab color=\"accent\" (click)=\"createTriData(newTridata)\">\n  <span matTooltip=\"確認新增\">\n    <mat-icon>file_download</mat-icon>\n  </span>\n</button>\n\n<div>\n  <mat-form-field class=\"standard-width\">\n    <mat-select [(ngModel)]=\"newTridata.year\" placeholder=\"年\">\n      <mat-option value=\"2018\"> 2018</mat-option>\n      <mat-option value=\"2019\"> 2019</mat-option>\n      <mat-option value=\"2020\"> 2020</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n<mat-form-field class=\"standard-width\">\n<mat-select placeholder=\"月\" [(ngModel)]=\"newTridata.month\">\n    <mat-option>-</mat-option>\n    <mat-option *ngFor=\"let i of months\" [value]=\"i.CODE\">\n      {{i.NAME}}\n    </mat-option>\n  </mat-select>\n</mat-form-field>\n\n  <mat-form-field class=\"standard-width\">\n    <input matInput [(ngModel)]=\"newTridata.day\" placeholder=\"日\">\n  </mat-form-field>\n\n\n  <mat-form-field class=\"standard-width\">\n    <input matInput [(ngModel)]=\"newTridata.place\" placeholder=\"比賽地點\">\n  </mat-form-field>\n\n  <mat-form-field class=\"standard-width\">\n    <input matInput [(ngModel)]=\"newTridata.name\" placeholder=\"比賽名稱\">\n  </mat-form-field>\n  <h3>競賽組別</h3>\n  <div>\n    <mat-card *ngFor=\"let i of newTridata.tri_event\" class=\"card-added\">\n      <mat-form-field class=\"standard-width\">\n        <input matInput [(ngModel)]='i.eventgroup' placeholder=\"組別\" readonly>\n      </mat-form-field>\n      <mat-form-field class=\"standard-width\">\n        <input matInput [(ngModel)]='i.name' placeholder=\"競賽名稱\" readonly>\n      </mat-form-field>\n      <mat-form-field class=\"standard-width\">\n        <input matInput [(ngModel)]='i.startDate' placeholder=\"競賽日期\" readonly>\n      </mat-form-field>\n      <mat-form-field class=\"standard-width\">\n        <input matInput [(ngModel)]='i.startTime' placeholder=\"出發時間\" readonly>\n      </mat-form-field>\n      <mat-form-field class=\"standard-width\">\n        <input matInput [(ngModel)]='i.cost' placeholder=\"報名費\" readonly>\n      </mat-form-field>\n      <mat-form-field class=\"standard-width\">\n        <input matInput [(ngModel)]='i.timelimit' placeholder=\"競賽限時\" readonly>\n      </mat-form-field>\n    </mat-card>\n  </div>\n  <div>\n    <mat-card>\n      <mat-form-field class=\"standard-width\">\n        <input matInput [(ngModel)]='newEvent.eventgroup' placeholder=\"組別\">\n      </mat-form-field>\n      <mat-form-field class=\"standard-width\">\n        <input matInput [(ngModel)]='newEvent.name' placeholder=\"競賽名稱\">\n      </mat-form-field>\n      <mat-form-field class=\"standard-width\">\n        <input matInput [(ngModel)]='newEvent.startDate' placeholder=\"競賽日期\">\n      </mat-form-field>\n      <mat-form-field class=\"standard-width\">\n        <input matInput [(ngModel)]='newEvent.startTime' placeholder=\"出發時間\">\n      </mat-form-field>\n      <mat-form-field class=\"standard-width\">\n        <input matInput [(ngModel)]='newEvent.cost' placeholder=\"報名費\">\n      </mat-form-field>\n      <mat-form-field class=\"standard-width\">\n        <input matInput [(ngModel)]='newEvent.timelimit' placeholder=\"競賽限時\">\n      </mat-form-field>\n      <button mat-fab color=\"primary\" (click)=\"addEvent2TriData(newEvent)\">\n        <span matTooltip=\"增加一筆競賽組別\">\n          <mat-icon>add</mat-icon>\n        </span>\n      </button>\n    </mat-card>\n  </div>\n\n\n  <mat-form-field class=\"standard-width\">\n    <input matInput [(ngModel)]=\"newTridata.organizer\" placeholder=\"主辦單位\">\n  </mat-form-field>\n\n  <mat-form-field class=\"standard-width\">\n    <input matInput [(ngModel)]=\"newTridata.location\" placeholder=\"比賽地區\">\n  </mat-form-field>\n\n  <mat-form-field class=\"standard-width\">\n    <input matInput [(ngModel)]=\"newTridata.locationmap\" placeholder=\"google地圖\">\n  </mat-form-field>\n\n  <mat-form-field class=\"standard-width\">\n    <input matInput [(ngModel)]=\"newTridata.applydate\" placeholder=\"報名日期\">\n  </mat-form-field>\n\n  <mat-form-field class=\"standard-width\">\n    <input matInput [(ngModel)]=\"newTridata.onlineapplyurl\" placeholder=\"線上報名網址\">\n  </mat-form-field>\n\n  <!-- <mat-form-field class=\"standard-width\">\n    <input matInput [(ngModel)]=\"newTridata.status\" placeholder=\"報名狀態\">\n  </mat-form-field> -->\n\n  <mat-form-field>\n    <mat-select placeholder=\"報名狀態\" [(ngModel)]=\"newTridata.status\">\n      <mat-option *ngFor=\"let i of Eventstatus\" [value]=\"i.CODE\">\n        {{i.NAME}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n\n\n  <mat-form-field class=\"standard-width\">\n    <input matInput [(ngModel)]=\"newTridata.remark\" placeholder=\"備註\">\n  </mat-form-field>\n\n\n  <!-- <mat-form-field class=\"standard-width inputSize\">\n    <input matInput [matDatepicker]=\"RENTED_START_DATEpicker\" [(ngModel)]=\"ngContractData.RENTED_START_DATE\"\n      placeholder=\"租約開始日\n  \">\n    <mat-datepicker-toggle matSuffix [for]=\"RENTED_START_DATEpicker\"></mat-datepicker-toggle>\n    <mat-datepicker #RENTED_START_DATEpicker></mat-datepicker>\n  </mat-form-field> -->\n</div>\n"

/***/ }),

/***/ "./src/app/programs/trievent/trievent-add/trievent-add.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/programs/trievent/trievent-add/trievent-add.component.ts ***!
  \**************************************************************************/
/*! exports provided: TrieventAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieventAddComponent", function() { return TrieventAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_models_triathlon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/_models/triathlon */ "./src/app/_models/triathlon.ts");
/* harmony import */ var src_app_share_dialog_share_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/share-dialog/share-dialog.service */ "./src/app/share-dialog/share-dialog.service.ts");
/* harmony import */ var _programs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../programs.service */ "./src/app/programs/programs.service.ts");
/* harmony import */ var src_app_models_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_models/event */ "./src/app/_models/event.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrieventAddComponent = /** @class */ (function () {
    function TrieventAddComponent(location, programService, shareDialogService) {
        this.location = location;
        this.programService = programService;
        this.shareDialogService = shareDialogService;
        this.newTridata = new src_app_models_triathlon__WEBPACK_IMPORTED_MODULE_2__["Triathlon"]();
        this.newEvent = new src_app_models_event__WEBPACK_IMPORTED_MODULE_5__["EVENT"]();
        this.Events = new Array();
        this.Month = 12;
        this.Eventstatus = [
            { CODE: '-100', NAME: '報名已截止' },
            { CODE: '0', NAME: '尚未開始報名' },
            { CODE: '100', NAME: '報名中' }
        ];
        this.months = [
            { CODE: '01', NAME: '1' },
            { CODE: '02', NAME: '2' },
            { CODE: '03', NAME: '3' },
            { CODE: '04', NAME: '4' },
            { CODE: '05', NAME: '5' },
            { CODE: '06', NAME: '6' },
            { CODE: '07', NAME: '7' },
            { CODE: '08', NAME: '8' },
            { CODE: '09', NAME: '9' },
            { CODE: '10', NAME: '10' },
            { CODE: '11', NAME: '11' },
            { CODE: '12', NAME: '12' },
        ];
    }
    TrieventAddComponent.prototype.ngOnInit = function () { };
    /**回前頁 */
    TrieventAddComponent.prototype.goBack = function () {
        this.location.back();
    };
    TrieventAddComponent.prototype.createTriData = function (item) {
        var _this = this;
        // this.shareDialogService.openShareDialog(JSON.stringify(item));
        this.programService.postBackendData(item).subscribe(function (response) {
            // console.log(item);
            // this.programService.openSnackBar(response.isSuccess, '已新增');
            _this.shareDialogService.openShareDialog(response.data.name + '新增成功');
            // console.log(response);
        }, function (error) { return _this.programService.HandleError(error); });
    };
    TrieventAddComponent.prototype.addEvent2TriData = function (item) {
        // console.log(item);
        this.Events.push(item);
        // console.log(this.Events);
        this.newTridata.tri_event = this.Events;
        // console.log(this.newTridata);
        this.newEvent = new src_app_models_event__WEBPACK_IMPORTED_MODULE_5__["EVENT"]();
    };
    TrieventAddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trievent-add',
            template: __webpack_require__(/*! ./trievent-add.component.html */ "./src/app/programs/trievent/trievent-add/trievent-add.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"],
            _programs_service__WEBPACK_IMPORTED_MODULE_4__["ProgramsService"],
            src_app_share_dialog_share_dialog_service__WEBPACK_IMPORTED_MODULE_3__["ShareDialogService"]])
    ], TrieventAddComponent);
    return TrieventAddComponent;
}());



/***/ }),

/***/ "./src/app/programs/trievent/trievent-detail/trievent-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/programs/trievent/trievent-detail/trievent-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\" row col-md-12 col-lg-12\">\n  <mat-card *ngFor=\"let results of eventData\">\n\n    <mat-card-content>\n      <label>組別:</label>\n      <h3>{{results.eventgroup}}</h3>\n    </mat-card-content>\n    <mat-card-content>\n      <label>組別名稱</label>\n      <h3>{{results.name}}</h3>\n    </mat-card-content>\n    <mat-card-content>\n      <label>比賽日期:</label>\n      <h3>{{results.startDate}}</h3>\n    </mat-card-content>\n    <mat-card-content>\n      <label>出發時間: </label>\n      <h3>{{results.startTime}}</h3>\n    </mat-card-content>\n    <mat-card-content>\n      <label>報名費: </label>\n      <h3>{{results.cost}}</h3>\n    </mat-card-content>\n    <mat-card-content>\n      <label>時間限制:</label>\n      <h3>{{results.timelimit}}</h3>\n    </mat-card-content>\n    <!--\n      <button mat-raised-button color=\"primary\" style=\"width:100%\" (click)=\"viewDetail(results)\">交易單細節</button>\n    </mat-card-actions>\n    <mat-card-actions>\n      <button mat-raised-button color=\"accent\" style=\"width:100%\" (click)=\"viewDetailByVoucher(results)\">現金傳票細節</button>\n    </mat-card-actions> -->\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/programs/trievent/trievent-detail/trievent-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/programs/trievent/trievent-detail/trievent-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: TrieventDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieventDetailComponent", function() { return TrieventDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TrieventDetailComponent = /** @class */ (function () {
    function TrieventDetailComponent(dialogRef, // 定義dialog
    data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.eventData = new Array();
    }
    TrieventDetailComponent.prototype.ngOnInit = function () {
        this.eventData = this.data.pData;
        console.log(this.eventData);
    };
    TrieventDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trievent-detail',
            template: __webpack_require__(/*! ./trievent-detail.component.html */ "./src/app/programs/trievent/trievent-detail/trievent-detail.component.html")
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], TrieventDetailComponent);
    return TrieventDetailComponent;
}());



/***/ }),

/***/ "./src/app/programs/trievent/trievent.component.html":
/*!***********************************************************!*\
  !*** ./src/app/programs/trievent/trievent.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>台灣地區三鐵比賽</h2>\n<div>\n\n  <mat-form-field class=\"standard-width\">\n    <mat-select placeholder=\"年\" [(ngModel)]=\"queryTridata.year\">\n      <mat-option>-</mat-option>\n      <mat-option value=\"2018\"> 2018</mat-option>\n      <mat-option value=\"2019\"> 2019</mat-option>\n      <mat-option value=\"2020\"> 2020</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n  <mat-form-field class=\"standard-width\">\n    <mat-select placeholder=\"起始月\" [(ngModel)]=\"queryTridata.month_S\">\n      <mat-option>-</mat-option>\n      <mat-option *ngFor=\"let i of months\" [value]=\"i.CODE\">\n        {{i.NAME}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field class=\"standard-width\">\n    <mat-select placeholder=\"結束月\" [(ngModel)]=\"queryTridata.month_E\">\n      <mat-option>-</mat-option>\n      <mat-option *ngFor=\"let i of months\" [value]=\"i.CODE\">\n        {{i.NAME}}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <!-- <mat-form-field>\n    <input matInput placeholder=\"結束月\" [(ngModel)]=\"queryTridata.month_E\">\n  </mat-form-field> -->\n  <mat-form-field class=\"standard-width\">\n    <input matInput placeholder=\"區域\" [(ngModel)]=\"queryTridata.place\">\n  </mat-form-field>\n  <button mat-fab color=\"primary\" (click)=\"getTriDataByQuery(queryTridata)\">\n    <span matTooltip=\"Search\">\n      <mat-icon>search</mat-icon>\n    </span>\n  </button>\n  <button mat-fab color=\"warn\" (click)=\"addTriData()\">\n    <span matTooltip=\"Add\">\n      <mat-icon>add</mat-icon>\n    </span>\n  </button>\n  <div>\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"關鍵字搜尋\">\n      <mat-hint align=\"end\">至少打兩個字</mat-hint>\n    </mat-form-field>\n  </div>\n\n\n  <!-- {{tridata|json}}\n<div *ngFor=\"let i of tridata\">\n  {{i.name}}\n  <div *ngFor=\"let e of i.event\">\n    {{e.eventgroup}}{{e.eventname}}\n  </div>\n</div> -->\n\n  <div>\n    <mat-paginator #paginator [length]=\"totalCount\" [pageIndex]=\"0\" [pageSize]=\"10\" [pageSizeOptions]=\"[5, 10, 15]\"\n      matSort>\n    </mat-paginator>\n    <div>\n      <table mat-table [dataSource]=\"tridataTable\" matSort #sortTableUser=\"matSort\">\n        <ng-container matColumnDef=\"EDIT_BUTTON\">\n          <th mat-header-cell *matHeaderCellDef>編輯</th>\n          <td mat-cell *matCellDef=\"let row\">\n            <button *ngIf=!row.isDisabled mat-mini-fab color=\"primary\" (click)=\"row.isDisabled=true\">\n              <span matTooltip=\"Edit\">\n                <mat-icon>edit</mat-icon>\n              </span>\n            </button>\n            <button *ngIf=row.isDisabled mat-mini-fab color=\"warn\" (click)=\"row.isDisabled=false\">\n              <span matTooltip=\"Cancel\">\n                <mat-icon>clear</mat-icon>\n              </span>\n            </button>\n            <button *ngIf=row.isDisabled mat-mini-fab color=\"primary\" (click)=\"updateTriData(row);row.isDisabled=false\">\n              <span matTooltip=\"Confirm\">\n                <mat-icon>send</mat-icon>\n              </span>\n            </button>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"DELETE_BUTTON\">\n          <th mat-header-cell *matHeaderCellDef>停用</th>\n          <td mat-cell *matCellDef=\"let row\">\n            <button mat-mini-fab color=\"warn\" (click)=\"deleteTriData(row.id)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </td>\n          <!-- *ngIf=\"!deleteIcon(row)\" -->\n        </ng-container>\n        <ng-container matColumnDef=\"DELETE_YN\">\n          <th mat-header-cell *matHeaderCellDef>是否中止合約\n          </th>\n          <td mat-cell *matCellDef=\"let row\" [ngStyle]=\"{'color':changeColor(row)}\">\n            <!-- <mat-icon *ngIf=\"deleteIcon(row)\">backspace</mat-icon> -->\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"date\">\n          <th mat-header-cell *matHeaderCellDef>date</th>\n          <td mat-cell *matCellDef=\"let row\">{{ row.date }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"year\">\n          <th mat-header-cell *matHeaderCellDef>年</th>\n          <td mat-cell *matCellDef=\"let row\">\n            <div *ngIf=\"row.isDisabled\">\n              <mat-form-field class=\"inputSize\">\n                <input matInput [(ngModel)]=\"row.year\">\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"!row.isDisabled\">\n              {{ row.year }}\n            </div>\n\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"month\">\n          <th mat-header-cell *matHeaderCellDef>月</th>\n          <td mat-cell *matCellDef=\"let row\">\n            <div *ngIf=\"row.isDisabled\">\n              <mat-form-field class=\"inputSize\">\n                <input matInput [(ngModel)]=\"row.month\">\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"!row.isDisabled\">\n              {{ row.month }}\n            </div>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"day\">\n          <th mat-header-cell *matHeaderCellDef>日</th>\n          <td mat-cell *matCellDef=\"let row\">\n            <div *ngIf=\"row.isDisabled\">\n              <mat-form-field class=\"inputSize\">\n                <input matInput [(ngModel)]=\"row.day\">\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"!row.isDisabled\">\n              {{ row.day }}\n            </div>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"place\">\n          <th mat-header-cell *matHeaderCellDef>地點</th>\n          <td mat-cell *matCellDef=\"let row\">\n            <div *ngIf=\"row.isDisabled\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"row.place\">\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"!row.isDisabled\">\n              {{ row.place }}\n            </div>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"name\">\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>競賽名稱</th>\n          <td mat-cell *matCellDef=\"let row\">\n            <div *ngIf=\"row.isDisabled\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"row.name\">\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"!row.isDisabled\">\n              {{ row.name }}\n            </div>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"RENTED_START_DATE\">\n          <th mat-header-cell *matHeaderCellDef>租約開始日</th>\n          <td mat-cell *matCellDef=\"let row\">\n            <mat-form-field class=\"inputSize\">\n              <input matInput [matDatepicker]=\"RENTED_START_DATEpicker\" [(ngModel)]=\"row.RENTED_START_DATE\"\n                [disabled]=\"true\">\n              <mat-datepicker-toggle matSuffix [for]=\"RENTED_START_DATEpicker\"></mat-datepicker-toggle>\n              <mat-datepicker #RENTED_START_DATEpicker></mat-datepicker>\n            </mat-form-field>\n          </td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"organizer\">\n          <th mat-header-cell *matHeaderCellDef>主辦單位</th>\n          <td mat-cell *matCellDef=\"let row\">\n            <div *ngIf=\"row.isDisabled\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"row.organizer\">\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"!row.isDisabled\">\n              {{ row.organizer }}\n            </div>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"location\">\n          <th mat-header-cell *matHeaderCellDef>競賽場地</th>\n          <td mat-cell *matCellDef=\"let row\">\n            <div *ngIf=\"row.isDisabled\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"row.location\">\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"!row.isDisabled\">\n              {{ row.location }}\n            </div>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"locationmap\">\n          <th mat-header-cell *matHeaderCellDef>locationmap</th>\n          <td mat-cell *matCellDef=\"let row\">{{ row.locationmap }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"applydate\">\n          <th mat-header-cell *matHeaderCellDef>報名日期</th>\n          <td mat-cell *matCellDef=\"let row\">\n            <div *ngIf=\"row.isDisabled\">\n              <mat-form-field>\n                <input matInput [(ngModel)]=\"row.applydate\">\n              </mat-form-field>\n            </div>\n            <div *ngIf=\"!row.isDisabled\">\n              {{ row.applydate }}\n            </div>\n          </td>\n        </ng-container>\n        <ng-container matColumnDef=\"onlineapplyurl\">\n          <th mat-header-cell *matHeaderCellDef>onlineapplyurl</th>\n          <td mat-cell *matCellDef=\"let row\">{{ row.onlineapplyurl }}</td>\n        </ng-container>\n        <ng-container matColumnDef=\"status\">\n          <th mat-header-cell *matHeaderCellDef>報名狀態</th>\n          <td mat-cell *matCellDef=\"let row\">{{ row.status| code2name:'EventStatus' }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"remark\">\n          <th mat-header-cell *matHeaderCellDef>remark</th>\n          <td mat-cell *matCellDef=\"let row\">{{ row.remark }}</td>\n        </ng-container>\n\n        <ng-container matColumnDef=\"Detail\">\n          <th mat-header-cell *matHeaderCellDef>競賽組別</th>\n          <td mat-cell *matCellDef=\"let row\">\n            <button mat-mini-fab color=\"accent\" (click)=\"openDetailDialog(row.event)\">\n              <mat-icon>\n                assignment\n              </mat-icon>\n            </button>\n          </td>\n        </ng-container>\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n      </table>\n    </div>\n"

/***/ }),

/***/ "./src/app/programs/trievent/trievent.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/programs/trievent/trievent.component.ts ***!
  \*********************************************************/
/*! exports provided: TrieventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrieventComponent", function() { return TrieventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _programs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../programs.service */ "./src/app/programs/programs.service.ts");
/* harmony import */ var src_app_share_dialog_share_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/share-dialog/share-dialog.service */ "./src/app/share-dialog/share-dialog.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _trievent_detail_trievent_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trievent-detail/trievent-detail.component */ "./src/app/programs/trievent/trievent-detail/trievent-detail.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_models_vtriathlon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/_models/vtriathlon */ "./src/app/_models/vtriathlon.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TrieventComponent = /** @class */ (function () {
    function TrieventComponent(programService, shareDialogService, dialog, _router) {
        this.programService = programService;
        this.shareDialogService = shareDialogService;
        this.dialog = dialog;
        this._router = _router;
        this.tridataTable = new _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.totalCount = 0;
        this.queryTridata = new src_app_models_vtriathlon__WEBPACK_IMPORTED_MODULE_6__["VTriathlon"]();
        this.displayedColumns = ['EDIT_BUTTON', 'DELETE_BUTTON', 'Detail', 'year', 'month',
            'day', 'place', 'name', 'organizer', 'location', 'applydate', 'status'];
        this.months = [
            { CODE: '01', NAME: '1' },
            { CODE: '02', NAME: '2' },
            { CODE: '03', NAME: '3' },
            { CODE: '04', NAME: '4' },
            { CODE: '05', NAME: '5' },
            { CODE: '06', NAME: '6' },
            { CODE: '07', NAME: '7' },
            { CODE: '08', NAME: '8' },
            { CODE: '09', NAME: '9' },
            { CODE: '10', NAME: '10' },
            { CODE: '11', NAME: '11' },
            { CODE: '12', NAME: '12' },
        ];
    }
    TrieventComponent.prototype.ngOnInit = function () {
        this.getTriData();
        this.tridataTable.sort = this.sortTable;
        // this.tridataTable.data = fakedata;
    };
    TrieventComponent.prototype.getTriData = function () {
        var _this = this;
        this.programService.getData()
            .subscribe(function (response) {
            _this.tridata = response.data;
            _this.tridataTable.data = response.data;
            _this.tridataTable.paginator = _this.paginator;
            _this.tridataTable.sort = _this.sortTable;
            _this.totalCount = response.data.length;
            console.log(_this.tridata);
            console.log(_this.tridataTable.data);
        }, function (error) { return _this.programService.HandleError(error); });
    };
    TrieventComponent.prototype.addTriData = function (data) {
        // console.log(data);
        this._router.navigate(['/trievent-Add'], {
            queryParams: {
            // pAgentCode: data.AGENT_CODE,
            // pLoginUser: this.webLfcUserInfo.LOGIN_USER
            }
        });
    };
    // 打開detail視窗
    TrieventComponent.prototype.openDetailDialog = function (Data) {
        var dialogRef = this.dialog.open(_trievent_detail_trievent_detail_component__WEBPACK_IMPORTED_MODULE_4__["TrieventDetailComponent"], {
            width: '1500px',
            data: { pData: Data },
            disableClose: false // focus or not
        });
        // dialog關閉後可以觸發之動作
        dialogRef.afterClosed().subscribe(function (result) {
            // this.getBuildingContract(this.ngContractData);
            console.log('The dialog was closed');
        });
    };
    TrieventComponent.prototype.getTriDataByQuery = function (item) {
        var _this = this;
        this.programService.getBackendDataByQuery(item)
            .subscribe(function (response) {
            _this.tridataTable.data = response.data;
            _this.tridataTable.paginator = _this.paginator;
            _this.tridataTable.sort = _this.sortTable;
            _this.totalCount = response.data.length;
            // console.log(this.tridata);
            // console.log(this.tridataTable.data);
        }, function (error) { return _this.programService.HandleError(error); });
    };
    // Data Table Filter功能
    TrieventComponent.prototype.applyFilter = function (filterValue) {
        // console.log(filterValue);
        if (filterValue.length >= 2) {
            this.tridataTable.filter = filterValue.trim().toUpperCase();
        }
        else {
            this.tridataTable.filter = null;
        }
    };
    TrieventComponent.prototype.updateTriData = function (item) {
        var _this = this;
        this.shareDialogService.openShareDialog(JSON.stringify(item));
        this.programService
            .putBackendData(item)
            .subscribe(function (response) {
            console.log(item);
            _this.programService.openSnackBar(response.data.name, '已修改');
            console.log(response);
        }, function (error) { return _this.programService.HandleError(error); });
    };
    TrieventComponent.prototype.deleteTriData = function (pID) {
        var _this = this;
        this.programService.deleteBackendData(pID)
            .subscribe(function (response) {
            console.log(pID);
            // this.programService.openSnackBar(response.isSuccess, '已');
            _this.shareDialogService.openShareDialog(response.data.name + '已刪除');
            console.log(response);
            _this.getTriData();
        }, function (error) { return _this.programService.HandleError(error); });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_trievent_detail_trievent_detail_component__WEBPACK_IMPORTED_MODULE_4__["TrieventDetailComponent"])
        // 定義分頁
        ,
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], TrieventComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], TrieventComponent.prototype, "sortTable", void 0);
    TrieventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trievent',
            template: __webpack_require__(/*! ./trievent.component.html */ "./src/app/programs/trievent/trievent.component.html"),
        }),
        __metadata("design:paramtypes", [_programs_service__WEBPACK_IMPORTED_MODULE_1__["ProgramsService"],
            src_app_share_dialog_share_dialog_service__WEBPACK_IMPORTED_MODULE_2__["ShareDialogService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TrieventComponent);
    return TrieventComponent;
}());



/***/ }),

/***/ "./src/app/programs/trinav/trinav.component.html":
/*!*******************************************************!*\
  !*** ./src/app/programs/trinav/trinav.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"warn\" class=\"header-toolbar\">\n  <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"toggleSideNav(drawer)\">\n    <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n  </button>\n  <span>AngularTri</span>\n  <span class=\"toolbar-seprator\"></span>\n  <span>{{programName}}</span>\n  <button mat-icon-button (click)=\"toggleSideNav(drawerRight)\">\n    <mat-icon>face</mat-icon>\n  </button>\n  <button mat-icon-button>\n    <mat-icon>exit_to_app</mat-icon>\n  </button>\n</mat-toolbar>\n<mat-sidenav-container fixedInViewport=\"true\">\n  <mat-sidenav #drawer position=\"start\" mode=\"side\" class=\"sidenav\">\n    <mat-toolbar color=\"primary\">\n      <span>Program</span>\n      <span>\n        <mat-icon>verified_user</mat-icon>\n      </span>\n    </mat-toolbar>\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"./trievent\" (click)=\"show('Tri-Event')\">Tri-Event</a>\n      <a mat-list-item routerLink=\"./tri001\" (click)=\"show('Tri001')\">Tri001</a>\n      <a mat-list-item routerLink=\"./tri002\" (click)=\"show('Tri002')\">Tri002</a>\n      <a mat-list-item routerLink=\"./ncov2019\" (click)=\"show('ncov2019')\">ncov2019</a>\n      <a mat-list-item routerLink=\"./mask2020\" (click)=\"show('mask2020')\">mask2020</a>\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <router-outlet></router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<mat-sidenav-container fixedInViewport=\"true\">\n  <mat-sidenav #drawerRight position=\"end\" mode=\"side\" class=\"sidenavRight\">\n    <mat-toolbar color=\"primary\">\n      <span>基本資料</span>\n      <span>\n        <mat-icon>verified_user</mat-icon>\n      </span>\n    </mat-toolbar>\n    <mat-list>\n      <mat-list-item class=\"l-sub-section\">\n        <mat-icon>code</mat-icon>\n        Peterhu2Tri\n      </mat-list-item>\n      <mat-list-item class=\"l-sub-section\">\n        <mat-icon>account_circle</mat-icon>\n        三十天鐵人賽\n      </mat-list-item>\n      <mat-list-item class=\"l-sub-section\">\n        <mat-icon>account_balance</mat-icon>\n        IT\n      </mat-list-item>\n      <mat-list-item class=\"l-sub-section\">\n        <mat-icon>phone</mat-icon>\n        165\n      </mat-list-item>\n      <mat-list-item class=\"l-sub-section\">\n        <mat-icon>email</mat-icon>\n        Peterhu2Tri@gmail.com\n      </mat-list-item>\n    </mat-list>\n  </mat-sidenav>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/programs/trinav/trinav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/programs/trinav/trinav.component.ts ***!
  \*****************************************************/
/*! exports provided: TrinavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrinavComponent", function() { return TrinavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TrinavComponent = /** @class */ (function () {
    function TrinavComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) { return result.matches; }));
        this.programName = 'mask2020';
    }
    TrinavComponent.prototype.toggleSideNav = function (drawer) {
        drawer.toggle().then(function (result) {
            console.log('選單狀態：' + result);
            console.log(drawer);
        });
    };
    TrinavComponent.prototype.show = function (item) {
        this.programName = item;
    };
    TrinavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-trinav',
            template: __webpack_require__(/*! ./trinav.component.html */ "./src/app/programs/trinav/trinav.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], TrinavComponent);
    return TrinavComponent;
}());



/***/ }),

/***/ "./src/app/share-dialog/share-dialog.component.html":
/*!**********************************************************!*\
  !*** ./src/app/share-dialog/share-dialog.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h2 mat-dialof-title>溫馨小提醒</h2>\n  <mat-dialog-content>\n    {{data.content}}\n  </mat-dialog-content>\n  <mat-dialog-actions>\n    <button mat-raised-button (click)=\"onClose()\" color=\"warn\">OK</button>\n  </mat-dialog-actions>\n</div>\n\n<!-- <button mat-raised-button (click)=\"openDialog()\">呼叫自己</button> -->\n"

/***/ }),

/***/ "./src/app/share-dialog/share-dialog.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/share-dialog/share-dialog.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/share-dialog/share-dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/share-dialog/share-dialog.component.ts ***!
  \********************************************************/
/*! exports provided: ShareDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDialogComponent", function() { return ShareDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ShareDialogComponent = /** @class */ (function () {
    function ShareDialogComponent(dialogRef, // 定義dialog
    data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ShareDialogComponent.prototype.ngOnInit = function () {
    };
    ShareDialogComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ShareDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-share-dialog',
            template: __webpack_require__(/*! ./share-dialog.component.html */ "./src/app/share-dialog/share-dialog.component.html"),
            styles: [__webpack_require__(/*! ./share-dialog.component.scss */ "./src/app/share-dialog/share-dialog.component.scss")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ShareDialogComponent);
    return ShareDialogComponent;
}());



/***/ }),

/***/ "./src/app/share-dialog/share-dialog.service.ts":
/*!******************************************************!*\
  !*** ./src/app/share-dialog/share-dialog.service.ts ***!
  \******************************************************/
/*! exports provided: ShareDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareDialogService", function() { return ShareDialogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _share_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./share-dialog.component */ "./src/app/share-dialog/share-dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShareDialogService = /** @class */ (function () {
    function ShareDialogService(dialog) {
        this.dialog = dialog;
    }
    ShareDialogService.prototype.openShareDialog = function (pContent) {
        var dialogRef = this.dialog.open(_share_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ShareDialogComponent"], {
            width: '600px',
            data: { content: pContent }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            console.log(pContent);
        });
    };
    ShareDialogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], ShareDialogService);
    return ShareDialogService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    TriBackendAPI: 'https://localhost:5001/api',
    GithubPage: '../..'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\peter.ch.hu\Desktop\nCoV2View\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map