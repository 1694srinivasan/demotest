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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loginmodule_loginmodule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginmodule/loginmodule.component */ "./src/app/loginmodule/loginmodule.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");





var routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _loginmodule_loginmodule_component__WEBPACK_IMPORTED_MODULE_3__["LoginmoduleComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: '**', component: _loginmodule_loginmodule_component__WEBPACK_IMPORTED_MODULE_3__["LoginmoduleComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader\" *ngIf=\"showLoading\" style=\"width: 100%; height : 100%; position: absolute; z-index: 50001; background-color: rgba(255,255,255,0.25)\">\r\n    <svg class=\"circular\" viewBox=\"25 25 50 50\" >\r\n        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\r\n    </svg>\r\n  </div>\r\n  <span defaultOverlayTarget></span>\r\n  <header class=\"h-1000\" *ngIf=\"loginservice.isLoggedin\">\r\n    <mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark indigo\" [containerInside]=\"false\">\r\n      <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\">Demo Application</a></mdb-navbar-brand>\r\n      <links>\r\n        <ul class=\"navbar-nav ml-auto nav-flex-icons\">\r\n          <li class=\"nav-item dropdown\" dropdown>\r\n              <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n                <mdb-icon fas icon=\"user\"></mdb-icon> {{ crntusername }}<span class=\"caret\"></span></a>\r\n              <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown dropdown-primary\" role=\"menu\">\r\n                <a class=\"dropdown-item waves-light\" mdbWavesEffect (click)=\"logout()\">Log out</a>\r\n              </div>\r\n            </li>\r\n        </ul>\r\n      </links>\r\n    </mdb-navbar>\r\n  </header>\r\n  <router-outlet>\r\n  </router-outlet>\r\n  <footer class=\"page-footer font-large indigo\" *ngIf=\"loginservice.isLoggedin\">\r\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\r\n      <a href=\"https://mdbootstrap.com/education/angular/\"> MDBootstrap.com</a>\r\n    </div>\r\n  </footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.view.mainbg {\n  background-color: #21668D !important; }\n\nmdb-navbar-brand {\n  height: 40px !important;\n  font-family: Montserrat !important; }\n\n:host /deep/ nav.navbar.navbar-expand-lg.navbar-dark.indigo {\n  background-color: #171745 !important;\n  font-family: Montserrat !important; }\n\n.page-footer.font-large.indigo {\n  background-color: #171745 !important;\n  font-family: Montserrat !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFdlYmFwcHNcXEFuZ3VsYXJcXGRlbW90ZXN0L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQ0FBb0MsRUFBQTs7QUFFeEM7RUFDSSx1QkFBdUI7RUFDdkIsa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ksb0NBQW9DO0VBQ3BDLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLG9DQUFvQztFQUNwQyxrQ0FBa0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24udmlldy5tYWluYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNjY4RCAhaW1wb3J0YW50O1xyXG59XHJcbm1kYi1uYXZiYXItYnJhbmQge1xyXG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyBuYXYubmF2YmFyLm5hdmJhci1leHBhbmQtbGcubmF2YmFyLWRhcmsuaW5kaWdvIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3NDUgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnBhZ2UtZm9vdGVyLmZvbnQtbGFyZ2UuaW5kaWdve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTc0NSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQgIWltcG9ydGFudDtcclxufSJdfQ== */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loginmodule_loginmodule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginmodule/loginmodule.service */ "./src/app/loginmodule/loginmodule.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loading.service */ "./src/app/loading.service.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(loginservice, _router, loading) {
        this.loginservice = loginservice;
        this._router = _router;
        this.loading = loading;
        this.showLoading = false;
        this.title = 'codebase';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading.stateChange.subscribe(function (value) { return setTimeout(function () { return _this.showLoading = value; }); });
        if (localStorage.getItem('token')) {
            this.loginservice.isLoggedin = true;
            this._router.navigate(['dashboard']);
            this.crntusername = localStorage.getItem('username');
        }
        else {
            this.loginservice.isLoggedin = false;
            this._router.navigate(['login']);
        }
    };
    AppComponent.prototype.logout = function () {
        var _this = this;
        this.loginservice.logoutfn().then(function (res) {
            _this.loginservice.isLoggedin = false;
            _this._router.navigate(['login']);
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginmodule_loginmodule_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var angular2_highcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular2-highcharts */ "./node_modules/angular2-highcharts/index.js");
/* harmony import */ var angular2_highcharts__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(angular2_highcharts__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");
/* harmony import */ var angular_fusioncharts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-fusioncharts */ "./node_modules/angular-fusioncharts/index.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! fusioncharts */ "./node_modules/fusioncharts/fusioncharts.js");
/* harmony import */ var fusioncharts__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(fusioncharts__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! fusioncharts/fusioncharts.charts */ "./node_modules/fusioncharts/fusioncharts.charts.js");
/* harmony import */ var fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var fusioncharts_fusioncharts_powercharts__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! fusioncharts/fusioncharts.powercharts */ "./node_modules/fusioncharts/fusioncharts.powercharts.js");
/* harmony import */ var fusioncharts_fusioncharts_powercharts__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_fusioncharts_powercharts__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.fusion */ "./node_modules/fusioncharts/themes/fusioncharts.theme.fusion.js");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_candy__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! fusioncharts/themes/fusioncharts.theme.candy */ "./node_modules/fusioncharts/themes/fusioncharts.theme.candy.js");
/* harmony import */ var fusioncharts_themes_fusioncharts_theme_candy__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(fusioncharts_themes_fusioncharts_theme_candy__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _charttypes_charttypes_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./charttypes/charttypes.component */ "./src/app/charttypes/charttypes.component.ts");
/* harmony import */ var _loginmodule_loginmodule_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./loginmodule/loginmodule.component */ "./src/app/loginmodule/loginmodule.component.ts");
/* harmony import */ var _loginmodule_loginmodule_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./loginmodule/loginmodule.service */ "./src/app/loginmodule/loginmodule.service.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./config.service */ "./src/app/config.service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



















angular_fusioncharts__WEBPACK_IMPORTED_MODULE_13__["FusionChartsModule"].fcRoot(fusioncharts__WEBPACK_IMPORTED_MODULE_14__, fusioncharts_fusioncharts_charts__WEBPACK_IMPORTED_MODULE_15__, fusioncharts_themes_fusioncharts_theme_fusion__WEBPACK_IMPORTED_MODULE_17__, fusioncharts_themes_fusioncharts_theme_candy__WEBPACK_IMPORTED_MODULE_18__, fusioncharts_fusioncharts_powercharts__WEBPACK_IMPORTED_MODULE_16__);









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"],
                _charttypes_charttypes_component__WEBPACK_IMPORTED_MODULE_20__["CharttypesComponent"],
                _loginmodule_loginmodule_component__WEBPACK_IMPORTED_MODULE_21__["LoginmoduleComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["MDBBootstrapModule"].forRoot(),
                _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_10__["ChartsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"],
                angular_fusioncharts__WEBPACK_IMPORTED_MODULE_13__["FusionChartsModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyBwi1ZmDwnLv2MJL6WL2Sna7md2ok4UdGw'
                }),
                // tslint:disable-next-line: max-line-length
                angular2_highcharts__WEBPACK_IMPORTED_MODULE_11__["ChartModule"].forRoot(__webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js"), __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js"), __webpack_require__(/*! highcharts/modules/annotations */ "./node_modules/highcharts/modules/annotations.js"), __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js"), __webpack_require__(/*! highcharts/modules/solid-gauge */ "./node_modules/highcharts/modules/solid-gauge.js"), __webpack_require__(/*! highcharts/modules/drilldown */ "./node_modules/highcharts/modules/drilldown.js")),
                _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_12__["AmChartsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"].forRoot({
                    timeOut: 5000,
                    positionClass: 'toast-top-right',
                    preventDuplicates: false,
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]],
            providers: [_loginmodule_loginmodule_service__WEBPACK_IMPORTED_MODULE_22__["LoginService"], _config_service__WEBPACK_IMPORTED_MODULE_25__["ConfigService"], _loading_service__WEBPACK_IMPORTED_MODULE_26__["LoadingService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_19__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/charttypes/charttypes.component.html":
/*!******************************************************!*\
  !*** ./src/app/charttypes/charttypes.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"view mainbg\">\r\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark unique-color\" [containerInside]=\"false\">\r\n    <mdb-navbar-brand></mdb-navbar-brand>\r\n    <links>\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link waves-light active\" mdbWavesEffect>Charts<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link waves-light\" mdbWavesEffect>Tables</a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"navbar-nav ml-auto nav-flex-icons\">\r\n        <li class=\"nav-item dropdown\" dropdown>\r\n            <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\r\n              <mdb-icon fas icon=\"user\"></mdb-icon> Profile<span class=\"caret\"></span></a>\r\n            <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown dropdown-primary\" role=\"menu\">\r\n              <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">My account</a>\r\n              <a class=\"dropdown-item waves-light\" mdbWavesEffect (click)=\"logout()\">Log out</a>\r\n            </div>\r\n          </li>\r\n      </ul>\r\n    </links>\r\n  </mdb-navbar>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12\">\r\n        <mdb-card class=\"formcard\">\r\n          <mdb-card-body>\r\n            <form>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <select class=\"browser-default custom-select dashboardsetect\">\r\n                      <option selected>Select Dashboard</option>\r\n                      <option value=\"1\">Dashboard One</option>\r\n                      <option value=\"2\">Dashboard Two</option>\r\n                      <option value=\"3\">Dashboard Three</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n\r\n                </div>\r\n                <div class=\"col-md-2 text-right\">\r\n                  <div class=\"md-form\">\r\n                      <button mdbBtn type=\"button\" color=\"primary\" rounded=\"true\" mdbWavesEffect data-toggle=\"modal\" data-target=\"#basicExample\"\r\n                      (click)=\"basicModal.show()\" mdbWavesEffect>Add Dashboard</button>\r\n                      <div mdbModal #basicModal=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n                          <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n                            <div class=\"modal-content\">\r\n                              <div class=\"modal-header\">\r\n                                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Create New Dashboard</h4>\r\n                              </div>\r\n                              <div class=\"modal-body\">\r\n                              <form class=\"dashboardform\">\r\n                                <div class=\"form-row\">\r\n                                  <div class=\"col-md-4\">\r\n                                    <div class=\"md-form form-group\">\r\n                                      <input mdbInput type=\"text\" class=\"form-control\" id=\"dashboardname\" >\r\n                                      <label for=\"dashboardname\">Dashboard Name</label>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-md-4\">\r\n                                    <div class=\"md-form form-group\">\r\n                                        <select class=\"browser-default custom-select createdashboardselect\">\r\n                                            <option selected>Select Access Type</option>\r\n                                            <option value=\"1\">Facility</option>\r\n                                            <option value=\"2\">Organization</option>\r\n                                            <option value=\"3\">Company</option>\r\n                                          </select>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"col-md-4\">\r\n                                    <div class=\"md-form form-group\">\r\n                                        <select class=\"browser-default custom-select createdashboardselect\">\r\n                                          <option selected>Select Access For</option>\r\n                                          <option value=\"1\">Admin L1</option>\r\n                                          <option value=\"2\">Manager L2</option>\r\n                                          <option value=\"3\">User L3</option>\r\n                                        </select>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </form>\r\n                            </div>\r\n                            <div class=\"modal-footer\">\r\n                              <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"basicModal.hide()\" mdbWavesEffect>Close</button>\r\n                              <button type=\"button\" mdbBtn color=\"primary\" class=\"relative waves-light\" mdbWavesEffect>Create</button>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-2 text-right\">\r\n                  <div class=\"md-form\">\r\n                      <button mdbBtn type=\"button\" color=\"primary\" rounded=\"true\" mdbWavesEffect>Add Widget</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </form>\r\n          </mdb-card-body>\r\n        </mdb-card>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div mdbModal #amchart1=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Multi line stack column chart data</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                <form class=\"dashboardform\">\r\n                  <p class=\"datalabelchart\">Replace dictionary symbol instead of [ ]</p>\r\n                 <pre><code>\r\n                    [\r\n                      date: 2012-01-01,\r\n                      distance: 227,\r\n                      townName: New York,\r\n                      townName2: New York,\r\n                      townSize: 25,\r\n                      latitude: 40.71,\r\n                      duration: 408\r\n                    ]\r\n                 </code></pre>\r\n                </form>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"amchart1.hide()\" mdbWavesEffect>Close</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      <div class=\"col-lg-12\">\r\n        <mdb-card class=\"chartcard1\">\r\n          <mdb-card-header class=\"white-text indigo\" data-toggle=\"modal\" data-target=\"#amchart1\"\r\n          (click)=\"amchart1.show()\" mdbWavesEffect style=\"cursor: pointer;\">Multiple (line and stacked column) AmChart Demo</mdb-card-header>\r\n          <mdb-card-body>\r\n            <div id=\"chartdiv\" class=\"charts\">\r\n            </div>\r\n          </mdb-card-body>\r\n        </mdb-card>\r\n      </div>\r\n      <div mdbModal #amchart2=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Clustered Bar & Column chart data</h4>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n              <form class=\"dashboardform\">\r\n                <p class=\"datalabelchart\">Replace dictionary symbol instead of [ ]</p>\r\n               <pre><code>\r\n                  [\r\n                    \"year\": 2005,\r\n                    \"income\": 23.5,\r\n                    \"expenses\": 18.1\r\n                  ]\r\n               </code></pre>\r\n              </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"amchart2.hide()\" mdbWavesEffect>Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <mdb-card class=\"chartcard2\">\r\n          <mdb-card-header class=\"white-text indigo\" data-toggle=\"modal\" data-target=\"#amchart2\"\r\n          (click)=\"amchart2.show()\" mdbWavesEffect style=\"cursor: pointer;\">Clustered bar Amchart Demo</mdb-card-header>\r\n          <mdb-card-body>\r\n              <div id=\"clusterbarchartdiv\" class=\"charts\">\r\n              </div>\r\n          </mdb-card-body>\r\n        </mdb-card>\r\n      </div>\r\n      <div mdbModal #amchart3=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Multi Line chart & Line Area Chart data</h4>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n              <form class=\"dashboardform\">\r\n                <p class=\"datalabelchart\">Replace dictionary symbol instead of [ ]</p>\r\n               <pre><code>\r\n                  [\r\n                  \"year\": 2014,\r\n                  \"income\": 34.1,\r\n                  \"expenses\": 32.9,\r\n                  ]\r\n               </code></pre>\r\n              </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"amchart3.hide()\" mdbWavesEffect>Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <mdb-card class=\"chartcard2\">\r\n          <mdb-card-header class=\"white-text indigo\" data-toggle=\"modal\" data-target=\"#amchart3\"\r\n          (click)=\"amchart3.show()\" mdbWavesEffect style=\"cursor: pointer;\">Multiple Line Amchart Demo</mdb-card-header>\r\n          <mdb-card-body>\r\n              <div id=\"multilinechartdiv\" class=\"charts\">\r\n              </div>\r\n          </mdb-card-body>\r\n        </mdb-card>\r\n      </div>\r\n      <div mdbModal #fusion1=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">HeatMap chart data</h4>\r\n              </div>\r\n              <div class=\"modal-body\">\r\n              <form class=\"dashboardform\">\r\n                <p class=\"datalabelchart\">Replace dictionary symbol instead of [ ]</p>\r\n               <pre><code>\r\n                  [\r\n                    rowid: '40',\r\n                    columnid: '152',\r\n                    value: 17,\r\n                    trlabel:\r\n                      'You are in Moderate Thinness zone. You need to increase 5 kg to be in Normal zone'\r\n                  ]\r\n               </code></pre>\r\n              </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"fusion1.hide()\" mdbWavesEffect>Close</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-12\">\r\n        <mdb-card class=\"chartcard2\">\r\n          <mdb-card-header class=\"white-text indigo\" data-toggle=\"modal\" data-target=\"#fusion1\"\r\n          (click)=\"fusion1.show()\" mdbWavesEffect style=\"cursor: pointer;\">Heat Map Fusion Chart Demo</mdb-card-header>\r\n          <mdb-card-body>\r\n              <fusioncharts class=\"charts\"\r\n                width=\"100%\"\r\n                height=\"500\"\r\n                type=\"heatmap\"\r\n                dataFormat=\"json\"\r\n                [dataSource]=\"heatmapdataSource\"\r\n              >\r\n              </fusioncharts>\r\n          </mdb-card-body>\r\n        </mdb-card>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n          <mdb-card class=\"chartcard2\">\r\n            <mdb-card-header class=\"white-text indigo\" data-toggle=\"modal\" data-target=\"#amchart3\"\r\n            (click)=\"amchart3.show()\" mdbWavesEffect style=\"cursor: pointer;\">Line Area Amchart Demo</mdb-card-header>\r\n            <mdb-card-body>\r\n                <div id=\"lineareachartdiv\" class=\"charts\">\r\n                  </div>\r\n            </mdb-card-body>\r\n          </mdb-card>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <mdb-card class=\"chartcard2\">\r\n            <mdb-card-header class=\"white-text indigo\" data-toggle=\"modal\" data-target=\"#amchart2\"\r\n            (click)=\"amchart2.show()\" mdbWavesEffect style=\"cursor: pointer;\">Column Amchart Demo</mdb-card-header>\r\n            <mdb-card-body>\r\n                <div id=\"columnchartdiv\" class=\"charts\">\r\n                  </div>\r\n            </mdb-card-body>\r\n          </mdb-card>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n</section>"

/***/ }),

/***/ "./src/app/charttypes/charttypes.component.scss":
/*!******************************************************!*\
  !*** ./src/app/charttypes/charttypes.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  height: 100% !important;\n  overflow: auto !important; }\n\nsection.view.mainbg {\n  background-color: #21668D !important; }\n\ncode {\n  color: white !important; }\n\n.datalabelchart {\n  color: white !important; }\n\nlabel {\n  color: white !important; }\n\nform.dashboardform input {\n  color: white !important; }\n\nselect.browser-default.custom-select.dashboardsetect {\n  margin: 30px;\n  background-color: #1f335a;\n  color: white; }\n\nselect.browser-default.custom-select.createdashboardselect {\n  background-color: #1f335a;\n  color: white; }\n\n.modal-content {\n  background-color: #1F335A; }\n\nh4#myModalLabel {\n  color: white;\n  text-align: center; }\n\nmdb-card.formcard.card {\n  margin-top: 30px !important;\n  margin-right: 30px !important;\n  margin-left: 30px !important;\n  margin-bottom: 10px !important;\n  font-size: 20px !important;\n  background-color: #1F335A !important; }\n\nmdb-card.chartcard1.card {\n  margin: 30px !important;\n  font-size: 20px !important;\n  background-color: #1F335A !important; }\n\nmdb-card.chartcard2.card {\n  margin: 30px !important;\n  font-size: 20px !important;\n  background-color: #1F335A !important; }\n\nmdb-navbar-brand {\n  height: 40px !important; }\n\nmdb-card-header.white-text.indigo.card-header {\n  background-color: #1F335A !important; }\n\nmdb-card-body.card-body {\n  background-color: #1f335a !important;\n  color: white !important; }\n\n:host /deep/ nav.navbar.navbar-expand-lg.navbar-dark.unique-color {\n  background-color: #1F335A !important; }\n\n.charts {\n  display: block;\n  width: 100%;\n  height: 500px;\n  background-color: #1f335a;\n  color: #fff; }\n\n#chartdiv {\n  width: 100%;\n  height: 500px;\n  font-size: 11px; }\n\n:host /deep/ g.raphael-group-4-background rect {\n  fill: #1f335a !important; }\n\n:host /deep/ rect.highcharts-background {\n  fill: #1f335a !important; }\n\n:host /deep/ g.highcharts-label.highcharts-data-label.highcharts-data-label-color-undefined text {\n  color: #ffffff !important;\n  fill: #ffffff !important; }\n\n:host /deep/ ol.breadcrumb.list-inline.list-unstyled.text- {\n  background-color: #171745 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnR0eXBlcy9FOlxcV2ViYXBwc1xcQW5ndWxhclxcZGVtb3Rlc3Qvc3JjXFxhcHBcXGNoYXJ0dHlwZXNcXGNoYXJ0dHlwZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7RUFDdkIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksb0NBQW9DLEVBQUE7O0FBRXhDO0VBQ0EsdUJBQXNCLEVBQUE7O0FBRXJCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRTVCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBR2hCO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFFaEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxZQUFZO0VBQ1osa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSx1QkFBdUI7RUFDdkIsMEJBQTBCO0VBQzFCLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLHVCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsb0NBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksb0NBQW9DO0VBQ3BDLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNDLGNBQWM7RUFDWCxXQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBSWY7RUFDQyxXQUFhO0VBQ2IsYUFBZTtFQUNmLGVBQWdCLEVBQUE7O0FBR2pCO0VBQ0ksd0JBQXlCLEVBQUE7O0FBRzdCO0VBQ0ksd0JBQXdCLEVBQUE7O0FBRTVCO0VBQ0kseUJBQXlCO0VBQ3pCLHdCQUF1QixFQUFBOztBQUczQjtFQUNJLG9DQUFvQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY2hhcnR0eXBlcy9jaGFydHR5cGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXcge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbnNlY3Rpb24udmlldy5tYWluYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNjY4RCAhaW1wb3J0YW50O1xyXG59XHJcbmNvZGUge1xyXG5jb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmRhdGFsYWJlbGNoYXJ0e1xyXG4gICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gfVxyXG5sYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuZm9ybS5kYXNoYm9hcmRmb3JtIGlucHV0IHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zZWxlY3QuYnJvd3Nlci1kZWZhdWx0LmN1c3RvbS1zZWxlY3QuZGFzaGJvYXJkc2V0ZWN0IHtcclxuICAgIG1hcmdpbjogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjMzNWE7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbnNlbGVjdC5icm93c2VyLWRlZmF1bHQuY3VzdG9tLXNlbGVjdC5jcmVhdGVkYXNoYm9hcmRzZWxlY3Qge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzM1YTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYzMzVBO1xyXG59XHJcbmg0I215TW9kYWxMYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1kYi1jYXJkLmZvcm1jYXJkLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYzMzVBICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1kYi1jYXJkLmNoYXJ0Y2FyZDEuY2FyZCB7XHJcbiAgICBtYXJnaW46IDMwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMzM1QSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tZGItY2FyZC5jaGFydGNhcmQyLmNhcmQge1xyXG4gICAgbWFyZ2luIDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYzMzVBICFpbXBvcnRhbnQ7XHJcbn1cclxubWRiLW5hdmJhci1icmFuZCB7XHJcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxubWRiLWNhcmQtaGVhZGVyLndoaXRlLXRleHQuaW5kaWdvLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjMzNUEgIWltcG9ydGFudDtcclxufVxyXG5cclxubWRiLWNhcmQtYm9keS5jYXJkLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzM1YSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyBuYXYubmF2YmFyLm5hdmJhci1leHBhbmQtbGcubmF2YmFyLWRhcmsudW5pcXVlLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjMzNUEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNoYXJ0cyB7IFxyXG5cdGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIHdpZHRoIDogMTAwJTsgXHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzM1YTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuXHJcbiNjaGFydGRpdiB7XHJcblx0d2lkdGhcdFx0OiAxMDAlO1xyXG5cdGhlaWdodFx0XHQ6IDUwMHB4O1xyXG5cdGZvbnQtc2l6ZVx0OiAxMXB4O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gZy5yYXBoYWVsLWdyb3VwLTQtYmFja2dyb3VuZCByZWN0IHtcclxuICAgIGZpbGw6ICAjMWYzMzVhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyAgcmVjdC5oaWdoY2hhcnRzLWJhY2tncm91bmQge1xyXG4gICAgZmlsbDogIzFmMzM1YSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IC9kZWVwLyBnLmhpZ2hjaGFydHMtbGFiZWwuaGlnaGNoYXJ0cy1kYXRhLWxhYmVsLmhpZ2hjaGFydHMtZGF0YS1sYWJlbC1jb2xvci11bmRlZmluZWQgdGV4dHtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsOiNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICB9XHJcblxyXG46aG9zdCAvZGVlcC8gb2wuYnJlYWRjcnVtYi5saXN0LWlubGluZS5saXN0LXVuc3R5bGVkLnRleHQte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTc0NSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/charttypes/charttypes.component.ts":
/*!****************************************************!*\
  !*** ./src/app/charttypes/charttypes.component.ts ***!
  \****************************************************/
/*! exports provided: CharttypesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharttypesComponent", function() { return CharttypesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loginmodule_loginmodule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loginmodule/loginmodule.service */ "./src/app/loginmodule/loginmodule.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");





var CharttypesComponent = /** @class */ (function () {
    function CharttypesComponent(loginservice, _router, AmCharts) {
        this.loginservice = loginservice;
        this._router = _router;
        this.AmCharts = AmCharts;
        this.multilinecolumnchart = [];
    }
    CharttypesComponent.prototype.ngOnInit = function () {
        this.optionsSelect = [
            { value: '1', label: 'Option 1' },
            { value: '2', label: 'Option 2' },
            { value: '3', label: 'Option 3' },
        ];
        if (localStorage.getItem('login') === 'true') {
            this.loggedin = true;
            this._router.navigate(['charttypes']);
            this.getamchart1();
            this.getamchart2();
            this.getamchart3();
            this.getfusion1();
            this.getamchart4();
            this.getamchart5();
        }
        else {
            this.loggedin = false;
            this._router.navigate(['login']);
        }
    };
    CharttypesComponent.prototype.getamchart5 = function () {
        var chart = this.AmCharts.makeChart('columnchartdiv', {
            'type': 'serial',
            'theme': 'dark',
            'dataProvider': [{
                    'country': 'USA',
                    'visits': 2025
                }, {
                    'country': 'China',
                    'visits': 1882
                }, {
                    'country': 'Japan',
                    'visits': 1809
                }, {
                    'country': 'Germany',
                    'visits': 1322
                }, {
                    'country': 'UK',
                    'visits': 1122
                }, {
                    'country': 'France',
                    'visits': 1114
                }, {
                    'country': 'India',
                    'visits': 984
                }, {
                    'country': 'Spain',
                    'visits': 711
                }, {
                    'country': 'Netherlands',
                    'visits': 665
                }, {
                    'country': 'Russia',
                    'visits': 580
                }, {
                    'country': 'South Korea',
                    'visits': 443
                }, {
                    'country': 'Canada',
                    'visits': 441
                }, {
                    'country': 'Brazil',
                    'visits': 395
                }],
            'valueAxes': [{
                    'gridColor': '#FFFFFF',
                    'gridAlpha': 0.2,
                    'dashLength': 0
                }],
            'gridAboveGraphs': true,
            'startDuration': 1,
            'graphs': [{
                    'balloonText': '[[category]]: <b>[[value]]</b>',
                    'fillAlphas': 0.8,
                    'lineAlpha': 0.2,
                    'type': 'column',
                    'valueField': 'visits'
                }],
            'chartCursor': {
                'categoryBalloonEnabled': false,
                'cursorAlpha': 0,
                'zoomable': false
            },
            'categoryField': 'country',
            'categoryAxis': {
                'gridPosition': 'start',
                'gridAlpha': 0,
                'tickPosition': 'start',
                'tickLength': 20
            },
            'export': {
                'enabled': true
            }
        });
    };
    CharttypesComponent.prototype.getamchart4 = function () {
        var chart = this.AmCharts.makeChart('lineareachartdiv', {
            'type': 'serial',
            'addClassNames': true,
            'theme': 'dark',
            'autoMargins': false,
            'marginLeft': 30,
            'marginRight': 8,
            'marginTop': 10,
            'marginBottom': 26,
            'balloon': {
                'adjustBorderColor': false,
                'horizontalPadding': 10,
                'verticalPadding': 8,
                'color': '#ffffff'
            },
            'dataProvider': [{
                    'year': 2009,
                    'income': 23.5,
                    'expenses': 21.1
                }, {
                    'year': 2010,
                    'income': 26.2,
                    'expenses': 30.5
                }, {
                    'year': 2011,
                    'income': 30.1,
                    'expenses': 34.9
                }, {
                    'year': 2012,
                    'income': 29.5,
                    'expenses': 31.1
                }, {
                    'year': 2013,
                    'income': 30.6,
                    'expenses': 28.2,
                }, {
                    'year': 2014,
                    'income': 34.1,
                    'expenses': 32.9,
                }],
            'valueAxes': [{
                    'axisAlpha': 0,
                    'position': 'left'
                }],
            'startDuration': 1,
            'graphs': [{
                    'alphaField': 'alpha',
                    // tslint:disable-next-line: max-line-length
                    'balloonText': '<span style=\'font-size:12px;\'>[[title]] in [[category]]:<br><span style=\'font-size:20px;\'>[[value]]</span> [[additional]]</span>',
                    'fillAlphas': 1,
                    'title': 'Income',
                    'type': 'line',
                    'valueField': 'income',
                    'dashLengthField': 'dashLengthColumn'
                }, {
                    'id': 'graph2',
                    // tslint:disable-next-line: max-line-length
                    'balloonText': '<span style=\'font-size:12px;\'>[[title]] in [[category]]:<br><span style=\'font-size:20px;\'>[[value]]</span> [[additional]]</span>',
                    'bullet': 'round',
                    'lineThickness': 3,
                    'bulletSize': 7,
                    'bulletBorderAlpha': 1,
                    'bulletColor': '#FFFFFF',
                    'useLineColorForBulletBorder': true,
                    'bulletBorderThickness': 3,
                    'fillAlphas': 0,
                    'lineAlpha': 1,
                    'title': 'Expenses',
                    'valueField': 'expenses',
                    'dashLengthField': 'dashLengthLine'
                }],
            'categoryField': 'year',
            'categoryAxis': {
                'gridPosition': 'start',
                'axisAlpha': 0,
                'tickLength': 0
            },
            'export': {
                'enabled': true
            }
        });
    };
    CharttypesComponent.prototype.getfusion1 = function () {
        this.heatmapdataSource = {
            chart: {
                caption: 'Body Mass Index Chart',
                xaxisname: 'Height (cm)',
                yaxisname: 'Weight (kg)',
                theme: 'fusion',
                showvalues: '1',
                plottooltext: '<b>BMI Value : $dataValue</b>{br}$trLabel'
            },
            dataset: [
                {
                    data: [
                        {
                            rowid: '40',
                            columnid: '152',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 5 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '155',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 5 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '158',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 8 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '161',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 11 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '164',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 11 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '167',
                            value: 14,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 14 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '170',
                            value: 14,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 14 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '173',
                            value: 13,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 18 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '176',
                            value: 13,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 18 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '179',
                            value: 12,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 23 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '182',
                            value: 12,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 23 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '185',
                            value: 12,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 23 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '188',
                            value: 11,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 29 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '191',
                            value: 11,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 29 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '194',
                            value: 11,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 29 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '197',
                            value: 10,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 36 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '200',
                            value: 10,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 36 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '203',
                            value: 10,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 36 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '206',
                            value: 9,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 44 kg to be in Normal zone'
                        },
                        {
                            rowid: '40',
                            columnid: '209',
                            value: 9,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 44 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '152',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '155',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '158',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 3 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '161',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 5 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '164',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 5 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '167',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 8 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '170',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 8 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '173',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 12 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '176',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 12 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '179',
                            value: 14,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 16 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '182',
                            value: 14,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 16 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '185',
                            value: 13,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 21 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '188',
                            value: 13,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 21 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '191',
                            value: 12,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 26 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '194',
                            value: 12,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 26 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '197',
                            value: 12,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 26 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '200',
                            value: 11,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 33 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '203',
                            value: 11,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 33 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '206',
                            value: 11,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 33 kg to be in Normal zone'
                        },
                        {
                            rowid: '45',
                            columnid: '209',
                            value: 10,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 41 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '152',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '155',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '158',
                            value: 20,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '161',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '164',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '167',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 3 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '170',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 6 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '173',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 6 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '176',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 9 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '179',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 9 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '182',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 13 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '185',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 13 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '188',
                            value: 14,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 18 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '191',
                            value: 14,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 18 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '194',
                            value: 13,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 23 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '197',
                            value: 13,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 23 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '200',
                            value: 13,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 23 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '203',
                            value: 12,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 29 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '206',
                            value: 12,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 29 kg to be in Normal zone'
                        },
                        {
                            rowid: '50',
                            columnid: '209',
                            value: 11,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 36 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '152',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '155',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '158',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '161',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '164',
                            value: 20,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '167',
                            value: 20,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '170',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '173',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 3 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '176',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 3 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '179',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 6 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '182',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 6 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '185',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 10 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '188',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 10 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '191',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 15 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '194',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 15 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '197',
                            value: 14,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 20 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '200',
                            value: 14,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 20 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '203',
                            value: 13,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 25 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '206',
                            value: 13,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 25 kg to be in Normal zone'
                        },
                        {
                            rowid: '55',
                            columnid: '209',
                            value: 13,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 25 kg to be in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '152',
                            value: 26,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 3 kg to be in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '155',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '158',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '161',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '164',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '167',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '170',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '173',
                            value: 20,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '176',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '179',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '182',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 3 kg to be in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '185',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 3 kg to be in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '188',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 7 kg to be in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '191',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 11 kg to be in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '194',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 11 kg to be in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '197',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 16 kg to be in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '200',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 16 kg to be in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '203',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 16 kg to be in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '206',
                            value: 14,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 21 kg to be in Normal zone'
                        },
                        {
                            rowid: '60',
                            columnid: '209',
                            value: 14,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 21 kg to be in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '152',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 8 kg to be in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '155',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 6 kg to be in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '158',
                            value: 26,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 4 kg to be in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '161',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '164',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '167',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '170',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '173',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '176',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '179',
                            value: 20,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '182',
                            value: 20,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '185',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '188',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '191',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '194',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 8 kg to be in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '197',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 8 kg to be in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '200',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 12 kg to be in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '203',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 12 kg to be in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '206',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 17 kg to be in Normal zone'
                        },
                        {
                            rowid: '65',
                            columnid: '209',
                            value: 15,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 17 kg to be in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '152',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 13 kg to be in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '155',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 11 kg to be in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '158',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 9 kg to be in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '161',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 6 kg to be in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '164',
                            value: 26,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 4 kg to be in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '167',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '170',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '173',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '176',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '179',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '182',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '185',
                            value: 20,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '188',
                            value: 20,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '191',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '194',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '197',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '200',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '203',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 8 kg to be in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '206',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 13 kg to be in Normal zone'
                        },
                        {
                            rowid: '70',
                            columnid: '209',
                            value: 16,
                            trlabel: 'You are in Severe Thinness zone.{br} You need to increase 13 kg to be in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '152',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 18 kg to be in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '155',
                            value: 31,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 16 kg to be in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '158',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 14 kg to be in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '161',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 12 kg to be in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '164',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 9 kg to be in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '167',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 7 kg to be in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '170',
                            value: 26,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 4 kg to be in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '173',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '176',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '179',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '182',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '185',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '188',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '191',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '194',
                            value: 20,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '197',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '200',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '203',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '206',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
                        },
                        {
                            rowid: '75',
                            columnid: '209',
                            value: 17,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 9 kg to be in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '152',
                            value: 35,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 24 kg to be in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '155',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 21 kg to be in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '158',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 19 kg to be in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '161',
                            value: 31,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 17 kg to be in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '164',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 15 kg to be in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '167',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 12 kg to be in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '170',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 10 kg to be in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '173',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 7 kg to be in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '176',
                            value: 26,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 5 kg to be in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '179',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '182',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '185',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '188',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '191',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '194',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '197',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '200',
                            value: 20,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '203',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '206',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '80',
                            columnid: '209',
                            value: 18,
                            trlabel: 'You are in Moderate Thinness zone.{br} You need to increase 4 kg to be in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '152',
                            value: 37,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 29 kg to be in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '155',
                            value: 35,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 25 kg to be in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '158',
                            value: 34,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 24 kg to be in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '161',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 22 kg to be in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '164',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 20 kg to be in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '167',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 16 kg to be in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '170',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 13 kg to be in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '173',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 11 kg to be in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '176',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 8 kg to be in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '179',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 8 kg to be in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '182',
                            value: 26,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 5 kg to be in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '185',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '188',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '191',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '194',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '197',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '200',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '203',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '206',
                            value: 20,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '85',
                            columnid: '209',
                            value: 19,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '152',
                            value: 39,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 33 kg to be in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '155',
                            value: 37,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 30 kg to be in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '158',
                            value: 36,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 29 kg to be in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '161',
                            value: 35,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 27 kg to be in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '164',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 23 kg to be in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '167',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 21 kg to be in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '170',
                            value: 31,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 19 kg to be in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '173',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 16 kg to be in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '176',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 14 kg to be in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '179',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 11 kg to be in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '182',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 8 kg to be in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '185',
                            value: 26,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 5 kg to be in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '188',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '191',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '194',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '197',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '200',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '203',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '206',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '90',
                            columnid: '209',
                            value: 21,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '152',
                            value: 41,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 38 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '155',
                            value: 40,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 37 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '158',
                            value: 38,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 34 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '161',
                            value: 37,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 32 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '164',
                            value: 35,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 28 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '167',
                            value: 34,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 27 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '170',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 24 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '173',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 22 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '176',
                            value: 31,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 20 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '179',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 17 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '182',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 15 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '185',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 12 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '188',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 9 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '191',
                            value: 26,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 5 kg to be in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '194',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '197',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '200',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '203',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '206',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '95',
                            columnid: '209',
                            value: 22,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '152',
                            value: 43,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 43 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '155',
                            value: 42,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 42 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '158',
                            value: 40,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 39 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '161',
                            value: 39,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 37 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '164',
                            value: 37,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 34 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '167',
                            value: 36,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 32 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '170',
                            value: 35,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 30 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '173',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 26 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '176',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 23 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '179',
                            value: 31,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 21 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '182',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 18 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '185',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 16 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '188',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 12 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '191',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 9 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '194',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 9 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '197',
                            value: 26,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 6 kg to be in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '200',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '203',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '206',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '100',
                            columnid: '209',
                            value: 23,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '152',
                            value: 45,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 48 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '155',
                            value: 44,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 47 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '158',
                            value: 42,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 44 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '161',
                            value: 41,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 42 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '164',
                            value: 39,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 39 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '167',
                            value: 38,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 37 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '170',
                            value: 36,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 34 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '173',
                            value: 35,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 31 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '176',
                            value: 34,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 29 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '179',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 27 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '182',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 25 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '185',
                            value: 31,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 22 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '188',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 19 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '191',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 16 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '194',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 13 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '197',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 10 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '200',
                            value: 26,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 6 kg to be in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '203',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '206',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '105',
                            columnid: '209',
                            value: 24,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '152',
                            value: 48,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 54 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '155',
                            value: 46,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 51 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '158',
                            value: 44,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 49 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '161',
                            value: 42,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 46 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '164',
                            value: 41,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 44 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '167',
                            value: 39,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 41 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '170',
                            value: 38,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 39 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '173',
                            value: 37,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 37 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '176',
                            value: 36,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 35 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '179',
                            value: 34,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 31 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '182',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 28 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '185',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 26 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '188',
                            value: 31,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 23 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '191',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 20 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '194',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 17 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '197',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 14 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '200',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 14 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '203',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 10 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '206',
                            value: 26,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 6 kg to be in Normal zone'
                        },
                        {
                            rowid: '110',
                            columnid: '209',
                            value: 25,
                            trlabel: 'You are in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '152',
                            value: 50,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 59 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '155',
                            value: 48,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 56 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '158',
                            value: 46,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 54 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '161',
                            value: 44,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 51 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '164',
                            value: 43,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 49 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '167',
                            value: 41,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 46 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '170',
                            value: 40,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 45 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '173',
                            value: 38,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 41 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '176',
                            value: 37,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 39 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '179',
                            value: 36,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 37 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '182',
                            value: 35,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 34 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '185',
                            value: 34,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 32 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '188',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 30 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '191',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 27 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '194',
                            value: 31,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 24 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '197',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 21 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '200',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 18 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '203',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 14 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '206',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 11 kg to be in Normal zone'
                        },
                        {
                            rowid: '115',
                            columnid: '209',
                            value: 26,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 7 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '152',
                            value: 52,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 63 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '155',
                            value: 50,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 61 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '158',
                            value: 48,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 59 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '161',
                            value: 46,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 56 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '164',
                            value: 45,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 55 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '167',
                            value: 43,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 52 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '170',
                            value: 42,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 50 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '173',
                            value: 40,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 46 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '176',
                            value: 39,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 45 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '179',
                            value: 37,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 41 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '182',
                            value: 36,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 38 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '185',
                            value: 35,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 36 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '188',
                            value: 34,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 34 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '191',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 31 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '194',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 28 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '197',
                            value: 31,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 25 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '200',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 22 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '203',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 19 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '206',
                            value: 28,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 15 kg to be in Normal zone'
                        },
                        {
                            rowid: '120',
                            columnid: '209',
                            value: 27,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 11 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '152',
                            value: 54,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 68 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '155',
                            value: 52,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 66 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '158',
                            value: 50,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 64 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '161',
                            value: 48,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 61 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '164',
                            value: 46,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 58 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '167',
                            value: 45,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 57 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '170',
                            value: 43,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 54 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '173',
                            value: 42,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 52 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '176',
                            value: 40,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 48 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '179',
                            value: 39,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 46 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '182',
                            value: 38,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 44 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '185',
                            value: 37,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 42 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '188',
                            value: 35,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 37 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '191',
                            value: 34,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 35 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '194',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 32 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '197',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 29 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '200',
                            value: 31,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 26 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '203',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 23 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '206',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 19 kg to be in Normal zone'
                        },
                        {
                            rowid: '125',
                            columnid: '209',
                            value: 29,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 19 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '152',
                            value: 56,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 73 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '155',
                            value: 54,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 71 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '158',
                            value: 52,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 69 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '161',
                            value: 50,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 66 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '164',
                            value: 48,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 64 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '167',
                            value: 47,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 62 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '170',
                            value: 45,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 59 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '173',
                            value: 43,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 56 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '176',
                            value: 42,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 54 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '179',
                            value: 41,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 52 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '182',
                            value: 39,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 48 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '185',
                            value: 38,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 46 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '188',
                            value: 37,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 44 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '191',
                            value: 36,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 42 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '194',
                            value: 35,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 39 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '197',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 33 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '200',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 33 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '203',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 30 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '206',
                            value: 31,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 27 kg to be in Normal zone'
                        },
                        {
                            rowid: '130',
                            columnid: '209',
                            value: 30,
                            trlabel: 'You are in Overweight zone.{br} You need to reduce 24 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '152',
                            value: 58,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 78 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '155',
                            value: 56,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 76 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '158',
                            value: 54,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 74 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '161',
                            value: 52,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 71 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '164',
                            value: 50,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 69 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '167',
                            value: 48,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 66 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '170',
                            value: 47,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 65 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '173',
                            value: 45,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 61 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '176',
                            value: 44,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 60 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '179',
                            value: 42,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 56 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '182',
                            value: 41,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 54 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '185',
                            value: 39,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 50 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '188',
                            value: 38,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 48 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '191',
                            value: 37,
                            trlabel: 'You are in Obese Class II.{br} You need to reduce 46 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '194',
                            value: 36,
                            trlabel: 'You are in Obese Class III.{br} You need to reduce 43 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '197',
                            value: 35,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 40 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '200',
                            value: 34,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 38 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '203',
                            value: 33,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 35 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '206',
                            value: 32,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 32 kg to be in Normal zone'
                        },
                        {
                            rowid: '135',
                            columnid: '209',
                            value: 31,
                            trlabel: 'You are in Obese Class I.{br} You need to reduce 28 kg to be in Normal zone'
                        }
                    ]
                }
            ],
            colorrange: {
                gradient: '0',
                minvalue: '0',
                code: 'E24B1A',
                startlabel: 'Severe Thinness',
                endlabel: 'Obese Class III',
                color: [
                    {
                        code: '0155E8',
                        minvalue: '0',
                        maxvalue: '16',
                        label: 'Severe Thinness'
                    },
                    {
                        code: '2BA8E8',
                        minvalue: '17',
                        maxvalue: '18',
                        label: 'Moderate Thinness'
                    },
                    {
                        code: '21C451',
                        minvalue: '18.5',
                        maxvalue: '25',
                        label: 'Normal'
                    },
                    {
                        code: 'FFD315',
                        minvalue: '25.5',
                        maxvalue: '30',
                        label: 'Overweight'
                    },
                    {
                        code: 'E8990C',
                        minvalue: '30.5',
                        maxvalue: '35',
                        label: 'Obese Class I'
                    },
                    {
                        code: 'C24314',
                        minvalue: '35.5',
                        maxvalue: '40',
                        label: 'Obese Class II'
                    },
                    {
                        code: 'FF0000',
                        minvalue: '40.5',
                        maxvalue: '100',
                        label: 'Obese Class III'
                    }
                ]
            }
        };
    };
    CharttypesComponent.prototype.getamchart3 = function () {
        var chart = this.AmCharts.makeChart('multilinechartdiv', {
            'type': 'serial',
            'addClassNames': true,
            'theme': 'dark',
            'autoMargins': false,
            'marginLeft': 30,
            'marginRight': 8,
            'marginTop': 10,
            'marginBottom': 26,
            'balloon': {
                'adjustBorderColor': false,
                'horizontalPadding': 10,
                'verticalPadding': 8,
                'color': '#ffffff'
            },
            'dataProvider': [{
                    'year': 2009,
                    'income': 23.5,
                    'expenses': 21.1
                }, {
                    'year': 2010,
                    'income': 26.2,
                    'expenses': 30.5
                }, {
                    'year': 2011,
                    'income': 30.1,
                    'expenses': 34.9
                }, {
                    'year': 2012,
                    'income': 29.5,
                    'expenses': 31.1
                }, {
                    'year': 2013,
                    'income': 30.6,
                    'expenses': 28.2,
                }, {
                    'year': 2014,
                    'income': 34.1,
                    'expenses': 32.9,
                }],
            'valueAxes': [{
                    'axisAlpha': 0,
                    'position': 'left'
                }],
            'startDuration': 1,
            'graphs': [{
                    'alphaField': 'alpha',
                    // tslint:disable-next-line: max-line-length
                    'balloonText': '<span style=\'font-size:12px;\'>[[title]] in [[category]]:<br><span style=\'font-size:20px;\'>[[value]]</span> [[additional]]</span>',
                    'lineAlpha': 1,
                    'bullet': 'round',
                    'lineThickness': 3,
                    'title': 'Income',
                    'type': 'line',
                    'valueField': 'income',
                    'dashLengthField': 'dashLengthColumn'
                }, {
                    'id': 'graph2',
                    // tslint:disable-next-line: max-line-length
                    'balloonText': '<span style=\'font-size:12px;\'>[[title]] in [[category]]:<br><span style=\'font-size:20px;\'>[[value]]</span> [[additional]]</span>',
                    'bullet': 'round',
                    'lineThickness': 3,
                    'bulletSize': 7,
                    'bulletBorderAlpha': 1,
                    'bulletColor': '#FFFFFF',
                    'useLineColorForBulletBorder': true,
                    'bulletBorderThickness': 3,
                    'fillAlphas': 0,
                    'lineAlpha': 1,
                    'title': 'Expenses',
                    'valueField': 'expenses',
                    'dashLengthField': 'dashLengthLine'
                }],
            'categoryField': 'year',
            'categoryAxis': {
                'gridPosition': 'start',
                'axisAlpha': 0,
                'tickLength': 0
            },
            'export': {
                'enabled': true
            }
        });
    };
    CharttypesComponent.prototype.getamchart2 = function () {
        var chart = this.AmCharts.makeChart('clusterbarchartdiv', {
            'type': 'serial',
            'theme': 'dark',
            'categoryField': 'year',
            'rotate': true,
            'startDuration': 1,
            'categoryAxis': {
                'gridPosition': 'start',
                'position': 'left'
            },
            'trendLines': [],
            'graphs': [
                {
                    'balloonText': 'Income:[[value]]',
                    'fillAlphas': 0.8,
                    'id': 'AmGraph-1',
                    'lineAlpha': 0.2,
                    'title': 'Income',
                    'type': 'column',
                    'valueField': 'income'
                },
                {
                    'balloonText': 'Expenses:[[value]]',
                    'fillAlphas': 0.8,
                    'id': 'AmGraph-2',
                    'lineAlpha': 0.2,
                    'title': 'Expenses',
                    'type': 'column',
                    'valueField': 'expenses'
                }
            ],
            'guides': [],
            'valueAxes': [
                {
                    'id': 'ValueAxis-1',
                    'position': 'top',
                    'axisAlpha': 0
                }
            ],
            'allLabels': [],
            'balloon': {},
            'titles': [],
            'dataProvider': [
                {
                    'year': 2005,
                    'income': 23.5,
                    'expenses': 18.1
                },
                {
                    'year': 2006,
                    'income': 26.2,
                    'expenses': 22.8
                },
                {
                    'year': 2007,
                    'income': 30.1,
                    'expenses': 23.9
                },
                {
                    'year': 2008,
                    'income': 29.5,
                    'expenses': 25.1
                },
                {
                    'year': 2009,
                    'income': 24.6,
                    'expenses': 25
                }
            ],
            'export': {
                'enabled': true
            }
        });
    };
    CharttypesComponent.prototype.getamchart1 = function () {
        this.multilinecolumnchart = [{
                'date': '2012-01-01',
                'distance': 227,
                'townName': 'New York',
                'townName2': 'New York',
                'townSize': 25,
                'latitude': 40.71,
                'duration': 408
            }, {
                'date': '2012-01-02',
                'distance': 371,
                'townName': 'Washington',
                'townSize': 14,
                'latitude': 38.89,
                'duration': 482
            }, {
                'date': '2012-01-03',
                'distance': 433,
                'townName': 'Wilmington',
                'townSize': 6,
                'latitude': 34.22,
                'duration': 562
            }, {
                'date': '2012-01-04',
                'distance': 345,
                'townName': 'Jacksonville',
                'townSize': 7,
                'latitude': 30.35,
                'duration': 379
            }, {
                'date': '2012-01-05',
                'distance': 480,
                'townName': 'Miami',
                'townName2': 'Miami',
                'townSize': 10,
                'latitude': 25.83,
                'duration': 501
            }, {
                'date': '2012-01-06',
                'distance': 386,
                'townName': 'Tallahassee',
                'townSize': 7,
                'latitude': 30.46,
                'duration': 443
            }, {
                'date': '2012-01-07',
                'distance': 348,
                'townName': 'New Orleans',
                'townSize': 10,
                'latitude': 29.94,
                'duration': 405
            }, {
                'date': '2012-01-08',
                'distance': 238,
                'townName': 'Houston',
                'townName2': 'Houston',
                'townSize': 16,
                'latitude': 29.76,
                'duration': 309
            }, {
                'date': '2012-01-09',
                'distance': 218,
                'townName': 'Dalas',
                'townSize': 17,
                'latitude': 32.8,
                'duration': 287
            }, {
                'date': '2012-01-10',
                'distance': 349,
                'townName': 'Oklahoma City',
                'townSize': 11,
                'latitude': 35.49,
                'duration': 485
            }, {
                'date': '2012-01-11',
                'distance': 603,
                'townName': 'Kansas City',
                'townSize': 10,
                'latitude': 39.1,
                'duration': 890
            }, {
                'date': '2012-01-12',
                'distance': 534,
                'townName': 'Denver',
                'townName2': 'Denver',
                'townSize': 18,
                'latitude': 39.74,
                'duration': 810
            }, {
                'date': '2012-01-13',
                'townName': 'Salt Lake City',
                'townSize': 12,
                'distance': 425,
                'duration': 670,
                'latitude': 40.75,
            }];
        var chart = this.AmCharts.makeChart('chartdiv', {
            'type': 'serial',
            'theme': 'none',
            'legend': {
                'equalWidths': false,
                'useGraphSettings': true,
                'valueAlign': 'left',
            },
            'dataProvider': this.multilinecolumnchart,
            'valueAxes': [{
                    'stackType': 'regular',
                    'axisAlpha': 0.3,
                    'gridAlpha': 0,
                    'title': 'count'
                }, {
                    'id': 'durationAxis',
                    'duration': 'mm',
                    'durationUnits': {
                        'hh': 'h ',
                        'mm': 'min'
                    },
                    'axisAlpha': 0,
                    'gridAlpha': 0,
                    'inside': true,
                    'position': 'right',
                    'title': 'duration'
                }],
            'graphs': [{
                    'alphaField': 'alpha',
                    'balloonText': '[[value]] miles',
                    'dashLengthField': 'dashLength',
                    'fillAlphas': 0.7,
                    'legendPeriodValueText': 'total: [[value.sum]] mi',
                    'legendValueText': '[[value]] mi',
                    'title': 'distance',
                    'type': 'column',
                    'valueField': 'distance',
                    'valueAxis': 'distanceAxis'
                }, {
                    'balloonText': 'latitude:[[value]]',
                    'bullet': 'round',
                    'bulletBorderAlpha': 1,
                    'useLineColorForBulletBorder': true,
                    'bulletColor': '#FFFFFF',
                    'bulletSizeField': 'townSize',
                    'dashLengthField': 'dashLength',
                    'descriptionField': 'townName',
                    'labelPosition': 'right',
                    'labelText': '[[townName2]]',
                    'legendValueText': '[[value]]/[[description]]',
                    'title': 'latitude/city',
                    'fillAlphas': 0.7,
                    'type': 'column',
                    'valueField': 'latitude',
                    'valueAxis': 'latitudeAxis'
                }, {
                    'bullet': 'square',
                    'bulletBorderAlpha': 1,
                    'bulletBorderThickness': 1,
                    'dashLengthField': 'dashLength',
                    'legendValueText': '[[value]]',
                    'title': 'duration',
                    'fillAlphas': 0,
                    'valueField': 'duration',
                    'valueAxis': 'durationAxis'
                }],
            'chartCursor': {
                'categoryBalloonDateFormat': 'DD',
                'cursorAlpha': 0.1,
                'cursorColor': '#000000',
                'fullWidth': true,
                'valueBalloonsEnabled': false,
                'zoomable': false
            },
            'dataDateFormat': 'YYYY-MM-DD',
            'categoryField': 'date',
            'categoryAxis': {
                'dateFormats': [{
                        'period': 'DD',
                        'format': 'DD'
                    }, {
                        'period': 'WW',
                        'format': 'MMM DD'
                    }, {
                        'period': 'MM',
                        'format': 'MMM'
                    }, {
                        'period': 'YYYY',
                        'format': 'YYYY'
                    }],
                'parseDates': true,
                'autoGridCount': false,
                'axisColor': '#555555',
                'gridAlpha': 0.1,
                'gridColor': '#FFFFFF',
                'gridCount': 50
            },
            'export': {
                'enabled': true
            }
        });
    };
    CharttypesComponent.prototype.logout = function () {
        localStorage.setItem('login', 'false');
        this.loggedin = false;
        this._router.navigate(['login']);
        window.location.reload();
    };
    CharttypesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-charttypes',
            template: __webpack_require__(/*! ./charttypes.component.html */ "./src/app/charttypes/charttypes.component.html"),
            styles: [__webpack_require__(/*! ./charttypes.component.scss */ "./src/app/charttypes/charttypes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginmodule_loginmodule_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_4__["AmChartsService"]])
    ], CharttypesComponent);
    return CharttypesComponent;
}());



/***/ }),

/***/ "./src/app/config.service.ts":
/*!***********************************!*\
  !*** ./src/app/config.service.ts ***!
  \***********************************/
/*! exports provided: ConfigService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigService", function() { return ConfigService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfigService = /** @class */ (function () {
    function ConfigService() {
        this._config = {
            "API_URL": "https://cvbackend.herokuapp.com/"
        };
    }
    ConfigService.prototype.get = function (propName) {
        return this._config[propName];
    };
    ConfigService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ConfigService);
    return ConfigService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"view mainbg\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div mdbModal #adddata=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close pull-right white-text\" aria-label=\"Close\" (click)=\"adddata.hide()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                  </button>\r\n                  <h4 class=\"modal-title w-100 text-center\" id=\"myModalLabel\">{{modaltitle}} Data</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <form class=\"text-left\">\r\n                    <div class=\"form-row mb-4\">\r\n                      <div class=\"col\">\r\n                        <label class=\"white-text\">Server Name : </label>\r\n                        <input type=\"text\"  id=\"servername\" mdbInput class=\"form-control mb-4 dashboardformfields\" placeholder=\"Server Name\" [(ngModel)]=\"metricform.servername\" [ngModelOptions]=\"{standalone: true}\" #servername=\"ngModel\" required=\"\">\r\n                        <input type=\"hidden\"  id=\"metricid\" mdbInput class=\"form-control mb-4 dashboardformfields\" placeholder=\"IP Address\" [(ngModel)]=\"metricform.metricid\" [ngModelOptions]=\"{standalone: true}\" #metricid=\"ngModel\" required=\"\">\r\n                      </div>\r\n                      <div class=\"col\">\r\n                        <label class=\"white-text\">No of CPU's : </label>\r\n                        <select  class=\"browser-default custom-select mb-4 dashboardformfields\" [(ngModel)]=\"metricform.cpuid\" [ngModelOptions]=\"{standalone: true}\" #cpuid=\"ngModel\" required=\"\">\r\n                          <option value=\"null\">Select No of CPU's</option>\r\n                          <option *ngFor=\"let data of cpu_list\" [attr.value]=\"data.category_item_id\">{{data.item_name}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-row mb-4\">\r\n                      <div class=\"col\">\r\n                        <label class=\"white-text\">Total Memory : </label>\r\n                        <select  class=\"browser-default custom-select mb-4 dashboardformfields\" [(ngModel)]=\"metricform.memoryid\" [ngModelOptions]=\"{standalone: true}\" #memoryid=\"ngModel\" required=\"\">\r\n                          <option value=\"null\">Select Total Memory</option>\r\n                          <option *ngFor=\"let data of memory_list\" [attr.value]=\"data.category_item_id\">{{data.item_name}}</option>\r\n                        </select>\r\n                      </div>\r\n                      <div class=\"col\">\r\n                        <label class=\"white-text\">Total Storage : </label>\r\n                        <select  class=\"browser-default custom-select mb-4 dashboardformfields\" [(ngModel)]=\"metricform.storageid\" [ngModelOptions]=\"{standalone: true}\" #storageid=\"ngModel\" required=\"\">\r\n                          <option value=\"null\">Select Total Storage</option>\r\n                          <option *ngFor=\"let data of storage_list\" [attr.value]=\"data.category_item_id\">{{data.item_name}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-row mb-4\">\r\n                      <div class=\"col\">\r\n                        <label class=\"white-text\">IP Address : </label>\r\n                        <input type=\"text\"  id=\"ipaddress\" mdbInput class=\"form-control mb-4 dashboardformfields\" placeholder=\"IP Address\" [(ngModel)]=\"metricform.ipaddress\" [ngModelOptions]=\"{standalone: true}\" #ipaddress=\"ngModel\" required=\"\">      \r\n                      </div>\r\n                      <div class=\"col\">\r\n                        <label class=\"white-text\">Network : </label>\r\n                        <select  class=\"browser-default custom-select mb-4 dashboardformfields\" [(ngModel)]=\"metricform.networkid\" [ngModelOptions]=\"{standalone: true}\" #networkid=\"ngModel\" required=\"\">\r\n                          <option value=\"null\">Select Network</option>\r\n                          <option *ngFor=\"let data of network_list\" [attr.value]=\"data.category_item_id\">{{data.item_name}}</option>\r\n                        </select>\r\n                      </div>\r\n                    </div>\r\n                    <label class=\"white-text\">Location : </label>\r\n                    <input type=\"text\"  id=\"location\" mdbInput class=\"form-control mb-4 dashboardformfields\" placeholder=\"Location\" [(ngModel)]=\"metricform.location\" [ngModelOptions]=\"{standalone: true}\" #location=\"ngModel\" required=\"\">\r\n                  </form>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"adddata.hide();cancel()\" mdbWavesEffect>Cancel</button>\r\n                  <button type=\"button\" mdbBtn color=\"primary\" class=\"relative waves-light\" mdbWavesEffect [disabled]=\"servername.errors || cpuid.errors || memoryid.errors || storageid.errors || ipaddress.errors || networkid.errors || location.errors\" (click)=\"adddata.hide();savemetric()\">{{btntitle}}</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div mdbModal #mapdata=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close pull-right white-text\" aria-label=\"Close\" (click)=\"mapdata.hide()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                  </button>\r\n                  <h4 class=\"modal-title w-100 text-center\" id=\"myModalLabel\">Map Data</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <agm-map [latitude]=\"lat\" [longitude]=\"long\">\r\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"long\"></agm-marker>\r\n                  </agm-map>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"mapdata.hide()\" mdbWavesEffect>Close</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div mdbModal #chartdata=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close pull-right white-text\" aria-label=\"Close\" (click)=\"chartdata.hide()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                  </button>\r\n                  <h4 class=\"modal-title w-100 text-center\" id=\"myModalLabel\">Chart Data</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div id=\"chartdiv\" class=\"charts\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"chartdata.hide()\" mdbWavesEffect>Close</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div mdbModal #confirmdelete=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-md\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <button type=\"button\" class=\"close pull-right white-text\" aria-label=\"Close\" (click)=\"confirmdelete.hide()\">\r\n                    <span aria-hidden=\"true\">×</span>\r\n                  </button>\r\n                  <h4 class=\"modal-title w-100 text-center\" id=\"myModalLabel\">Delete Confirmation</h4>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <p class=\"white-text text-center\">Are you sure you wanna delete this record ? </p>\r\n                  <input type=\"hidden\"  id=\"metricid\" mdbInput class=\"form-control mb-4 dashboardformfields\" placeholder=\"IP Address\" [(ngModel)]=\"metricform.metricid\" [ngModelOptions]=\"{standalone: true}\" #metricid=\"ngModel\" required=\"\">\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"confirmdelete.hide();cancel()\" mdbWavesEffect>Cancel</button>\r\n                  <button type=\"button\"mdbBtn color=\"primary\" class=\"relative waves-light\" mdbWavesEffect aria-label=\"Close\" (click)=\"confirmdelete.hide();deletemetric(metricform.metricid)\" mdbWavesEffect>Delete</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <mdb-card class=\"chartcard2\">\r\n            <mdb-card-header class=\"white-text indigo\" mdbWavesEffect> Jquery Data Table Demo</mdb-card-header>\r\n            <mdb-card-body>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-6 titlearea\">\r\n                  Table List : \r\n                </div>\r\n                <div class=\"col-md-6 buttonarea\">\r\n                  <button type=\"button\" mdbBtn color=\"primary\" class=\"relative waves-light tablebtn\" (click)=\"adddata.show();showaddpop()\" mdbWavesEffect>Add Data</button>\r\n                </div>\r\n                <div class=\"col-md-12 tablearea\">\r\n                  <div class=\"tbl-content\">\r\n                    <div class=\"table-responsive\">\r\n                      <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" id=\"demoapptable\" class=\"demoapptable\">\r\n                        <thead class = \"tbl-header\">\r\n                            <tr>\r\n                              <th style=\"width:100px !important\">S.No</th>\r\n                              <th style=\"width:200px !important\">Server Name</th>\r\n                              <th style=\"width:150px !important\">No of CPU's</th>\r\n                              <th style=\"width:150px !important\">Total Memory</th>\r\n                              <th style=\"width:150px !important\">Total Storage</th>\r\n                              <th style=\"width:150px !important\">IP Address</th>\r\n                              <th style=\"width:150px !important\">Network</th>\r\n                              <th style=\"width:150px !important\">Location</th>\r\n                              <th style=\"width:150px !important\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let post of tabledata;let myindex=index\">\r\n                            <td>{{myindex + 1}}</td>\r\n                            <td>{{post.met_name}}</td>\r\n                            <td>{{post.cpus_name}}</td>\r\n                            <td>{{post.memory_name}}</td>\r\n                            <td>{{post.storage_name}}</td>\r\n                            <td>{{post.ipaddress}}</td>\r\n                            <td>{{post.network}}</td>\r\n                            <td (click)=\"mapdata.show();loadmap(post.lat,post.long)\" style=\"cursor: pointer;\">{{post.location }}</td>\r\n                            <td  style=\"cursor: pointer;\">\r\n                              <i class=\"fas fa-edit\" (click)=\"adddata.show();emetric(post.met_id,post.met_name,post.cpus,post.memory,post.storage,post.ipaddress,post.network,post.location)\"></i>&nbsp;\r\n                              <i class=\"fas fa-trash-alt\" (click)=\"confirmdelete.show();dmetric(post.met_id)\"></i>&nbsp;\r\n                              <i class=\"fas fa-binoculars\" (click)=\"chartdata.show()\"></i>\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div> \r\n                </div>\r\n              </div>\r\n            </mdb-card-body>\r\n          </mdb-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</section>\r\n  \r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  height: 100% !important;\n  overflow: auto !important; }\n\nsection.view.mainbg {\n  background-color: #21668D !important; }\n\n.titlearea {\n  text-align: left; }\n\n.buttonarea {\n  text-align: right;\n  font-family: Montserrat !important; }\n\n.tablebtn {\n  padding: 0.5rem !important;\n  margin: 0rem !important; }\n\n.modal-content {\n  background-color: #1F335A;\n  font-family: Montserrat !important; }\n\nh4#myModalLabel {\n  color: white;\n  text-align: center; }\n\ninput.dashboardformfields {\n  background-color: #1f335a;\n  color: white !important; }\n\nselect.dashboardformfields {\n  background-color: #1f335a;\n  color: white !important; }\n\nmdb-card.formcard.card {\n  margin-top: 30px !important;\n  margin-right: 30px !important;\n  margin-left: 30px !important;\n  margin-bottom: 10px !important;\n  font-size: 20px !important;\n  background-color: #1F335A !important;\n  font-family: Montserrat !important; }\n\nmdb-card.chartcard2.card {\n  margin: 30px !important;\n  font-size: 20px !important;\n  background-color: #1F335A !important;\n  font-family: Montserrat !important; }\n\nmdb-card-header.white-text.indigo.card-header {\n  background-color: #1F335A !important;\n  font-family: Montserrat !important; }\n\nmdb-card-body.card-body {\n  background-color: #1f335a !important;\n  color: white !important;\n  font-family: Montserrat !important; }\n\nagm-map {\n  height: 500px; }\n\n.tablearea {\n  padding: 20px !important;\n  margin-top: 10px !important; }\n\n.demoapptable {\n  font-family: Montserrat !important;\n  border-collapse: collapse;\n  width: 100%;\n  overflow-x: auto !important;\n  table-layout: fixed !important;\n  word-wrap: break-word !important;\n  /* border: 1px solid  #337ab7; */ }\n\n.demoapptable tr:nth-child(even) {\n  background-color: #1F335A; }\n\n.demoapptable tr:nth-child(odd) {\n  background-color: #1F335A; }\n\n.demoapptable tr:hover {\n  background-color: #1F335A; }\n\n.demoapptable .icons {\n  font-size: 15px !important; }\n\n.demoapptable th {\n  padding: 20px 15px;\n  text-align: center;\n  font-weight: 800;\n  color: white !important;\n  text-transform: uppercase;\n  font-size: 15px !important;\n  font-family: Montserrat !important;\n  border-bottom: 1px solid  #337ab7; }\n\n.demoapptable td {\n  padding: 15px;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 500;\n  font-size: 15px;\n  color: white;\n  font-family: Montserrat !important;\n  border-bottom: solid 1px  #337ab7; }\n\ntfoot {\n  display: table-header-group !important;\n  vertical-align: middle;\n  border-color: inherit; }\n\n.charts {\n  display: block;\n  width: 100%;\n  height: 500px;\n  background-color: #1f335a;\n  color: #fff; }\n\n#chartdiv {\n  width: 100%;\n  height: 500px;\n  font-size: 11px; }\n\n:host /deep/ div#demoapptable_filter label {\n  color: white !important; }\n\n:host /deep/ div#demoapptable_info {\n  color: white !important; }\n\n:host /deep/ a#demoapptable_previous {\n  color: white !important; }\n\n:host /deep/ a#demoapptable_next {\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0U6XFxXZWJhcHBzXFxBbmd1bGFyXFxkZW1vdGVzdC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBdUI7RUFDdkIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLDBCQUEwQjtFQUMxQix1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSx5QkFBeUI7RUFDekIsa0NBQWtDLEVBQUE7O0FBRXRDO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUV0QjtFQUNJLHlCQUF5QjtFQUN6Qix1QkFBdUIsRUFBQTs7QUFFM0I7RUFDSSx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksMkJBQTJCO0VBQzNCLDZCQUE2QjtFQUM3Qiw0QkFBNEI7RUFDNUIsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksdUJBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixvQ0FBb0M7RUFDcEMsa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksb0NBQW9DO0VBQ3BDLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLG9DQUFvQztFQUNwQyx1QkFBdUI7RUFDdkIsa0NBQWtDLEVBQUE7O0FBR3RDO0VBQ0ksYUFBYSxFQUFBOztBQUdqQjtFQUNJLHdCQUF3QjtFQUN4QiwyQkFBMkIsRUFBQTs7QUFHL0I7RUFDSSxrQ0FBa0M7RUFDbEMseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCwyQkFBMEI7RUFDMUIsOEJBQThCO0VBQzlCLGdDQUErQjtFQUMvQixnQ0FBQSxFQUFpQzs7QUFHbkM7RUFBaUMseUJBQTBCLEVBQUE7O0FBQzNEO0VBQWdDLHlCQUEwQixFQUFBOztBQUMxRDtFQUF3Qix5QkFBMEIsRUFBQTs7QUFDbEQ7RUFDRSwwQkFBMEIsRUFBQTs7QUFFNUI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLDBCQUEwQjtFQUMxQixrQ0FBa0M7RUFDbEMsaUNBQWlDLEVBQUE7O0FBRW5DO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixzQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixZQUFZO0VBQ1osa0NBQWtDO0VBQ2xDLGlDQUFpQyxFQUFBOztBQUduQztFQUNFLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIscUJBQXFCLEVBQUE7O0FBSXZCO0VBQ0QsY0FBYztFQUNYLFdBQVk7RUFDWixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFdBQVcsRUFBQTs7QUFJZjtFQUNDLFdBQWE7RUFDYixhQUFlO0VBQ2YsZUFBZ0IsRUFBQTs7QUFJakI7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSx1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlldyB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIG92ZXJmbG93OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuc2VjdGlvbi52aWV3Lm1haW5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE2NjhEICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXRsZWFyZWF7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uYnV0dG9uYXJlYSB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50YWJsZWJ0bntcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwcmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjMzNUE7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50O1xyXG59XHJcbmg0I215TW9kYWxMYWJlbCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuaW5wdXQuZGFzaGJvYXJkZm9ybWZpZWxkcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYzMzVhO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuc2VsZWN0LmRhc2hib2FyZGZvcm1maWVsZHN7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYzMzVhO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1kYi1jYXJkLmZvcm1jYXJkLmNhcmQge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYzMzVBICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tZGItY2FyZC5jaGFydGNhcmQyLmNhcmQge1xyXG4gICAgbWFyZ2luIDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYzMzVBICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tZGItY2FyZC1oZWFkZXIud2hpdGUtdGV4dC5pbmRpZ28uY2FyZC1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMzM1QSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQgIWltcG9ydGFudDtcclxufVxyXG5cclxubWRiLWNhcmQtYm9keS5jYXJkLWJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzM1YSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hZ20tbWFwIHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgfVxyXG5cclxuLnRhYmxlYXJlYSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5kZW1vYXBwdGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6YXV0byAhaW1wb3J0YW50O1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZCAhaW1wb3J0YW50OyBcclxuICAgIHdvcmQtd3JhcDpicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCAgIzMzN2FiNzsgKi9cclxuICB9XHJcbiAgXHJcbiAgLmRlbW9hcHB0YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogIzFGMzM1QSB9XHJcbiAgLmRlbW9hcHB0YWJsZSB0cjpudGgtY2hpbGQob2RkKXtiYWNrZ3JvdW5kLWNvbG9yOiAjMUYzMzVBIH0gXHJcbiAgLmRlbW9hcHB0YWJsZSB0cjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogIzFGMzM1QSB9XHJcbiAgLmRlbW9hcHB0YWJsZSAuaWNvbnN7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmRlbW9hcHB0YWJsZSB0aHtcclxuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgICMzMzdhYjc7XHJcbiAgfVxyXG4gIC5kZW1vYXBwdGFibGUgdGR7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246bWlkZGxlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggICMzMzdhYjc7XHJcbiAgfVxyXG4gIFxyXG4gIHRmb290IHtcclxuICAgIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cCAhaW1wb3J0YW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGJvcmRlci1jb2xvcjogaW5oZXJpdDtcclxuICB9XHJcblxyXG5cclxuICAuY2hhcnRzIHsgXHJcblx0ZGlzcGxheTogYmxvY2s7IFxyXG4gICAgd2lkdGggOiAxMDAlOyBcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYzMzVhO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB9XHJcblxyXG5cclxuI2NoYXJ0ZGl2IHtcclxuXHR3aWR0aFx0XHQ6IDEwMCU7XHJcblx0aGVpZ2h0XHRcdDogNTAwcHg7XHJcblx0Zm9udC1zaXplXHQ6IDExcHg7XHJcbn1cclxuXHJcblxyXG46aG9zdCAvZGVlcC8gZGl2I2RlbW9hcHB0YWJsZV9maWx0ZXIgbGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyBkaXYjZGVtb2FwcHRhYmxlX2luZm8ge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyBhI2RlbW9hcHB0YWJsZV9wcmV2aW91cyB7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgL2RlZXAvIGEjZGVtb2FwcHRhYmxlX25leHQge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loginmodule_loginmodule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loginmodule/loginmodule.service */ "./src/app/loginmodule/loginmodule.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @amcharts/amcharts3-angular */ "./node_modules/@amcharts/amcharts3-angular/es2015/index.js");






var dt = __webpack_require__(/*! datatables.net */ "./node_modules/datatables.net/js/jquery.dataTables.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(loginservice, _router, toastr, AmCharts) {
        this.loginservice = loginservice;
        this._router = _router;
        this.toastr = toastr;
        this.AmCharts = AmCharts;
        this.tabledata = [];
        this.cpu_list = [];
        this.memory_list = [];
        this.storage_list = [];
        this.network_list = [];
        this.metricform = {
            servername: '',
            cpuid: '',
            memoryid: '',
            storageid: '',
            ipaddress: '',
            networkid: '',
            location: '',
            metricid: ''
        };
    }
    DashboardComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token')) {
            this.loginservice.isLoggedin = true;
            this._router.navigate(['dashboard']);
            this.gettabledata();
            this.getdropdowndata();
            this.loadchart();
            this.metricform.cpuid = null;
            this.metricform.memoryid = null;
            this.metricform.storageid = null;
            this.metricform.networkid = null;
        }
        else {
            this.loginservice.isLoggedin = false;
            this._router.navigate(['login']);
        }
    };
    DashboardComponent.prototype.gettabledata = function () {
        var _this = this;
        this.loginservice.getmetricadatalistgeneral().then(function (res) {
            var data = JSON.parse(JSON.stringify(res));
            _this.tabledata = data.Metrics;
            jQuery(document).ready(function () {
                jQuery('#demoapptable').DataTable({
                    'bLengthChange': false,
                    'pageLength': 10,
                    'searching': true,
                    'bInfo': true,
                    'bSort': true,
                    'bPaginate': true,
                    'dom': 'frtip',
                });
            });
        });
    };
    DashboardComponent.prototype.getdropdowndata = function () {
        var _this = this;
        this.loginservice.getdropdownlistgeneral().then(function (res) {
            var data = JSON.parse(JSON.stringify(res));
            _this.cpu_list = data.category[0].CPU;
            _this.memory_list = data.category[1].Memory;
            _this.storage_list = data.category[2].Storage;
            _this.network_list = data.category[3].Network;
        });
    };
    DashboardComponent.prototype.showaddpop = function () {
        this.modaltitle = 'Add';
        this.btntitle = 'Save';
        this.cancel();
    };
    DashboardComponent.prototype.emetric = function (met_id, met_name, cpus, memory, storage, ipaddress, network, location) {
        this.modaltitle = 'Edit';
        this.btntitle = 'Update';
        this.metricform = {
            servername: met_name,
            cpuid: cpus,
            memoryid: memory,
            storageid: storage,
            ipaddress: ipaddress,
            networkid: network,
            location: location,
            metricid: met_id
        };
    };
    DashboardComponent.prototype.cancel = function () {
        this.metricform.metricid = null;
        this.metricform.servername = '';
        this.metricform.cpuid = null;
        this.metricform.memoryid = null;
        this.metricform.storageid = null;
        this.metricform.ipaddress = '';
        this.metricform.networkid = null;
        this.metricform.location = '';
    };
    DashboardComponent.prototype.savemetric = function () {
        var _this = this;
        if (this.metricform.metricid == '' || this.metricform.metricid == null || this.metricform.metricid == undefined) {
            this.loginservice.addmetric(this.metricform).then(function (res) {
                if (jQuery.fn.dataTable.isDataTable('#demoapptable')) {
                    jQuery('#demoapptable').DataTable().clear().destroy();
                }
                _this.cancel();
                _this.gettabledata();
            });
        }
        else {
            this.loginservice.updatemetric(this.metricform).then(function (res) {
                if (jQuery.fn.dataTable.isDataTable('#demoapptable')) {
                    jQuery('#demoapptable').DataTable().clear().destroy();
                }
                _this.cancel();
                _this.gettabledata();
            });
        }
    };
    DashboardComponent.prototype.deletemetric = function (id) {
        var _this = this;
        this.loginservice.deletemetric(id).then(function (res) {
            if (jQuery.fn.dataTable.isDataTable('#demoapptable')) {
                jQuery('#demoapptable').DataTable().clear().destroy();
            }
            _this.cancel();
            _this.gettabledata();
        });
    };
    DashboardComponent.prototype.loadmap = function (lat, long) {
        this.lat = lat;
        this.long = long;
    };
    DashboardComponent.prototype.dmetric = function (id) {
        this.cancel();
        this.metricform.metricid = id;
    };
    DashboardComponent.prototype.loadchart = function () {
        var chart = this.AmCharts.makeChart('chartdiv', {
            'type': 'serial',
            'theme': 'dark',
            'dataProvider': [{
                    'country': 'USA',
                    'visits': 2025
                }, {
                    'country': 'China',
                    'visits': 1882
                }, {
                    'country': 'Japan',
                    'visits': 1809
                }, {
                    'country': 'Germany',
                    'visits': 1322
                }, {
                    'country': 'UK',
                    'visits': 1122
                }, {
                    'country': 'France',
                    'visits': 1114
                }, {
                    'country': 'India',
                    'visits': 984
                }, {
                    'country': 'Spain',
                    'visits': 711
                }, {
                    'country': 'Netherlands',
                    'visits': 665
                }, {
                    'country': 'Russia',
                    'visits': 580
                }, {
                    'country': 'South Korea',
                    'visits': 443
                }, {
                    'country': 'Canada',
                    'visits': 441
                }, {
                    'country': 'Brazil',
                    'visits': 395
                }],
            'valueAxes': [{
                    'gridColor': '#FFFFFF',
                    'gridAlpha': 0.2,
                    'dashLength': 0
                }],
            'gridAboveGraphs': true,
            'startDuration': 1,
            'graphs': [{
                    'balloonText': '[[category]]: <b>[[value]]</b>',
                    'fillAlphas': 0.8,
                    'lineAlpha': 0.2,
                    'type': 'column',
                    'valueField': 'visits'
                }],
            'chartCursor': {
                'categoryBalloonEnabled': false,
                'cursorAlpha': 0,
                'zoomable': false
            },
            'categoryField': 'country',
            'categoryAxis': {
                'gridPosition': 'start',
                'gridAlpha': 0,
                'tickPosition': 'start',
                'tickLength': 20
            },
            'export': {
                'enabled': true
            }
        });
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginmodule_loginmodule_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_5__["AmChartsService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/loading.service.ts":
/*!************************************!*\
  !*** ./src/app/loading.service.ts ***!
  \************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");



var LoadingService = /** @class */ (function () {
    function LoadingService() {
        this.stateChange = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    LoadingService.prototype.showLoading = function () {
        this.stateChange.next(true);
    };
    LoadingService.prototype.hideLoading = function () {
        this.stateChange.next(false);
    };
    LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingService);
    return LoadingService;
}());



/***/ }),

/***/ "./src/app/loginmodule/loginmodule.component.html":
/*!********************************************************!*\
  !*** ./src/app/loginmodule/loginmodule.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"view intro-2\">\r\n    <div class=\"full-bg-img mask rgba-gradient\">\r\n      <div class=\"container flex-center\">\r\n        <div class=\"d-flex align-items-center content-height w-100\">\r\n          <div class=\"row flex-center pt-5 mt-3 w-100\">\r\n            <div class=\"col-md-12 col-xl-6 offset-xl-1\">\r\n              <mdb-card class=\"wow fadeInRight loginbox\" data-wow-delay=\"0.3s\">\r\n                <mdb-card-body>\r\n                  <div class=\"text-center\">\r\n                    <h3 class=\"white-text\">\r\n                      <mdb-icon fas icon=\"smile-beam\" class=\"text-white\"></mdb-icon> Demo App</h3>\r\n                    <hr class=\"hr-light\">\r\n                  </div>\r\n                  <div class=\"md-form\">\r\n                    <mdb-icon fas icon=\"envelope\" class=\"text-white active\"></mdb-icon>\r\n                    <input type=\"email\" id=\"form2\" class=\"text-white form-control\" mdbInput [(ngModel)]=\"localUser.emailid\" [ngModelOptions]=\"{standalone: true}\" required=\"\" #emailid=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\r\n                    <label for=\"form2\" class=\"text-white\">Your email</label>\r\n                  </div>\r\n                  <div class=\"md-form\">\r\n                    <mdb-icon fas icon=\"lock\" class=\"text-white active\"></mdb-icon>\r\n                    <input type=\"password\" id=\"form4\" class=\"text-white form-control\" mdbInput [(ngModel)]=\"localUser.password\" [ngModelOptions]=\"{standalone: true}\" #password=\"ngModel\" required=\"\">\r\n                    <label for=\"form4\" class=\"text-white\">Your password</label>\r\n                  </div>\r\n                  <div class=\"text-center mt-4\">\r\n                    <button mdbBtn color=\"indigo\" [disabled]=\"emailid.errors || password.errors\" mdbWavesEffect (click)=\"login(localUser.emailid,localUser.password)\">Login</button>\r\n                  </div>\r\n                </mdb-card-body>\r\n              </mdb-card>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>"

/***/ }),

/***/ "./src/app/loginmodule/loginmodule.component.scss":
/*!********************************************************!*\
  !*** ./src/app/loginmodule/loginmodule.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-header {\n  height: unset !important; }\n\n.intro-2 {\n  background: url(\"https://mdbootstrap.com/img/Photos/Others/img%20(42).jpg\") no-repeat center center;\n  background-size: cover; }\n\n.view {\n  height: 100% !important; }\n\n.top-nav-collapse {\n  background-color: #3f51b5 !important; }\n\n.navbar:not(.top-nav-collapse) {\n  background: transparent !important; }\n\n:host /deep/ .card {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;\n  border: 0 !important;\n  font-weight: 400 !important;\n  background-color: rgba(126, 123, 215, 0.2) !important; }\n\n@media (max-width: 768px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #3f51b5 !important; } }\n\n.rgba-gradient .full-bg-img {\n  background: linear-gradient(45deg, rgba(83, 125, 210, 0.4), rgba(178, 30, 123, 0.4) 100%); }\n\n.full-bg-img {\n  height: 100%; }\n\n.card {\n  background-color: rgba(229, 228, 255, 0.2); }\n\n.md-form .prefix {\n  font-size: 1.5rem;\n  margin-top: 1rem; }\n\n.md-form label {\n  color: #ffffff; }\n\nh6 {\n  line-height: 1.7; }\n\n@media (max-width: 740px) {\n  .full-height,\n  .full-height body,\n  .full-height header,\n  .full-height header .view {\n    height: 1040px; } }\n\n#toast-container > div {\n  opacity: 1; }\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-top-left {\n  top: 12px;\n  left: 12px; }\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.toast-top-right {\n  top: 12px;\n  right: 12px; }\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px; }\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px; }\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold; }\n\n.toast-message {\n  word-wrap: break-word; }\n\n.toast-message a, .toast-message label {\n    color: #FFFFFF; }\n\n.toast-message a:hover {\n    color: #CCCCCC;\n    text-decoration: none; }\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */ }\n\n.toast-close-button:hover, .toast-close-button:focus {\n    color: #000000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.4; }\n\n/*Additional properties for button version\r\n iOS requires the button element instead of an anchor tag.\r\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0; }\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999; }\n\n.toast-container * {\n    box-sizing: border-box; }\n\n.toast-container .ngx-toastr {\n    position: relative;\n    overflow: hidden;\n    margin: 0 0 6px;\n    padding: 15px 15px 15px 50px;\n    width: 300px;\n    border-radius: 3px 3px 3px 3px;\n    background-position: 15px center;\n    background-repeat: no-repeat;\n    background-size: 24px;\n    box-shadow: 0 0 12px #999999;\n    color: #FFFFFF; }\n\n.toast-container .ngx-toastr:hover {\n      box-shadow: 0 0 12px #000000;\n      opacity: 1;\n      cursor: pointer; }\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\"); }\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\"); }\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\"); }\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\"); }\n\n.toast-container.toast-top-center .ngx-toastr, .toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.toast-container.toast-top-full-width .ngx-toastr, .toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto; }\n\n.toast-success {\n  background-color: #51A351; }\n\n.toast-error {\n  background-color: #BD362F; }\n\n.toast-info {\n  background-color: #2F96B4; }\n\n.toast-warning {\n  background-color: #F89406; }\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4; }\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em; }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em; } }\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em; }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em; } }\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em; } }\n\nmdb-card-body.card-body {\n  font-family: Montserrat !important; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5tb2R1bGUvRTpcXFdlYmFwcHNcXEFuZ3VsYXJcXGRlbW90ZXN0L3NyY1xcYXBwXFxsb2dpbm1vZHVsZVxcbG9naW5tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvZ2lubW9kdWxlL2xvZ2lubW9kdWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCLEVBQUE7O0FBRTFCO0VBQ0UsbUdBQWtHO0VBQ2xHLHNCQUFzQixFQUFBOztBQUV4QjtFQUNFLHVCQUF1QixFQUFBOztBQUV6QjtFQUNFLG9DQUFvQyxFQUFBOztBQUV0QztFQUNFLGtDQUFrQyxFQUFBOztBQUVwQztFQUNNLHdGQUF3RjtFQUN4RixvQkFBb0I7RUFDcEIsMkJBQTJCO0VBQzNCLHFEQUFxRCxFQUFBOztBQUUzRDtFQUNFO0lBQ0UsOEJBQThCLEVBQUEsRUFDL0I7O0FBRUg7RUFDRSx5RkFBeUYsRUFBQTs7QUFFM0Y7RUFDRSxZQUFZLEVBQUE7O0FBRWQ7RUFDRSwwQ0FBMEMsRUFBQTs7QUFHNUM7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBRWxCO0VBQ0UsY0FBYyxFQUFBOztBQUVoQjtFQUNFLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFOzs7O0lBSUUsY0FBYyxFQUFBLEVBQ2Y7O0FBR0g7RUFDRSxVQUFTLEVBQUE7O0FBRVg7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQyxFQUFBOztBQUdsQztFQUNFLE1BQU07RUFDTixRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUdiO0VBQ0UsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBR2I7RUFDRSxNQUFNO0VBQ04sUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUdiO0VBQ0UsU0FBUztFQUNULFVBQVUsRUFBQTs7QUFFWjtFQUNFLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDLEVBQUE7O0FBRWxDO0VBQ0UsU0FBUztFQUNULFdBQVcsRUFBQTs7QUFHYjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdaLGlCQUFBOztBQUVBO0VBQ0UsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UscUJBQXFCLEVBQUE7O0FBRHZCO0lBR0ksY0FBYyxFQUFBOztBQUhsQjtJQU1JLGNBQWM7SUFDZCxxQkFBcUIsRUFBQTs7QUFJekI7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNEJBQTRCO0VBQzVCLGtCQUFBLEVBQW1COztBQVRyQjtJQVdJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFlBQVksRUFBQTs7QUFJaEI7O3lEQ2pCeUQ7O0FEcUJ6RDtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFNBQVMsRUFBQTs7QUFHWDtFQUNFLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsZUFBZSxFQUFBOztBQUhqQjtJQUtJLHNCQUFzQixFQUFBOztBQUwxQjtJQVFJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGdDQUFnQztJQUNoQyw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDRCQUE0QjtJQUM1QixjQUFjLEVBQUE7O0FBbEJsQjtNQW9CTSw0QkFBNEI7TUFDNUIsVUFBVTtNQUNWLGVBQWUsRUFBQTs7QUFLckIsaUhBQUE7O0FBRUE7RUFDRSxxbEJBQXFsQixFQUFBOztBQUd2bEIsa0hBQUE7O0FBRUE7RUFDRSw2akJBQTZqQixFQUFBOztBQUcvakIsMkdBQUE7O0FBRUE7RUFDRSx3ZEFBd2QsRUFBQTs7QUFHMWQsMEhBQUE7O0FBRUE7RUFDRSxzb0JBQXNvQixFQUFBOztBQUd4b0I7RUFFSSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUp0QjtFQU9JLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBSXRCO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsU0FBUztFQUNULFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdkLHNCQUFBOztBQUNBO0VBQ0U7SUFFSSx5QkFBeUI7SUFDekIsV0FBVyxFQUFBO0VBSGY7SUFNSSxhQUFhO0lBQ2IsV0FBVyxFQUFBLEVBQ1o7O0FBSUw7RUFDRTtJQUVJLHlCQUF5QjtJQUN6QixXQUFXLEVBQUE7RUFIZjtJQU1JLGFBQWE7SUFDYixXQUFXLEVBQUEsRUFDWjs7QUFJTDtFQUNFO0lBQ0UsNEJBQTRCO0lBQzVCLFdBQVcsRUFBQSxFQUNaOztBQUdIO0VBQ0Usa0NBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sb2dpbm1vZHVsZS9sb2dpbm1vZHVsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRyby1oZWFkZXIge1xyXG4gIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDtcclxufVxyXG4uaW50cm8tMiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9tZGJvb3RzdHJhcC5jb20vaW1nL1Bob3Rvcy9PdGhlcnMvaW1nJTIwKDQyKS5qcGdcIiluby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi52aWV3IHtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4udG9wLW5hdi1jb2xsYXBzZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXZiYXI6bm90KC50b3AtbmF2LWNvbGxhcHNlKSB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCAvZGVlcC8gLmNhcmR7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI2LCAxMjMsIDIxNSwgMC4yKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcclxuICAgIGJhY2tncm91bmQ6ICMzZjUxYjUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLnJnYmEtZ3JhZGllbnQgLmZ1bGwtYmctaW1nIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoODMsIDEyNSwgMjEwLCAwLjQpLCByZ2JhKDE3OCwgMzAsIDEyMywgMC40KSAxMDAlKTtcclxufVxyXG4uZnVsbC1iZy1pbWcge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDIyOCwgMjU1LCAwLjIpO1xyXG59XHJcblxyXG4ubWQtZm9ybSAucHJlZml4IHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG59XHJcbi5tZC1mb3JtIGxhYmVsIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5oNiB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNztcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAuZnVsbC1oZWlnaHQsXHJcbiAgLmZ1bGwtaGVpZ2h0IGJvZHksXHJcbiAgLmZ1bGwtaGVpZ2h0IGhlYWRlcixcclxuICAuZnVsbC1oZWlnaHQgaGVhZGVyIC52aWV3IHtcclxuICAgIGhlaWdodDogMTA0MHB4O1xyXG4gIH1cclxufVxyXG5cclxuI3RvYXN0LWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgb3BhY2l0eToxO1xyXG59XHJcbi50b2FzdC1jZW50ZXItY2VudGVyIHtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi50b2FzdC10b3AtY2VudGVyIHtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b2FzdC1ib3R0b20tY2VudGVyIHtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50b2FzdC10b3AtZnVsbC13aWR0aCB7XHJcbiAgdG9wOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRvYXN0LXRvcC1sZWZ0IHtcclxuICB0b3A6IDEycHg7XHJcbiAgbGVmdDogMTJweDtcclxufVxyXG4udG9hc3QtY2VudGVyLWNlbnRlciB7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcbi50b2FzdC10b3AtcmlnaHQge1xyXG4gIHRvcDogMTJweDtcclxuICByaWdodDogMTJweDtcclxufVxyXG5cclxuLnRvYXN0LWJvdHRvbS1yaWdodCB7XHJcbiAgcmlnaHQ6IDEycHg7XHJcbiAgYm90dG9tOiAxMnB4O1xyXG59XHJcblxyXG4udG9hc3QtYm90dG9tLWxlZnQge1xyXG4gIGJvdHRvbTogMTJweDtcclxuICBsZWZ0OiAxMnB4O1xyXG59XHJcblxyXG4vKiB0b2FzdCBzdHlsZXMgKi9cclxuXHJcbi50b2FzdC10aXRsZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi50b2FzdC1tZXNzYWdlIHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgYSwgbGFiZWwge1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNDQ0NDQ0M7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4udG9hc3QtY2xvc2UtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6IC0wLjNlbTtcclxuICB0b3A6IC0wLjNlbTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmZmZmY7XHJcbiAgLyogb3BhY2l0eTogMC44OyAqL1xyXG4gICY6aG92ZXIsICY6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKkFkZGl0aW9uYWwgcHJvcGVydGllcyBmb3IgYnV0dG9uIHZlcnNpb25cclxuIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxyXG4gSWYgeW91IHdhbnQgdGhlIGFuY2hvciB2ZXJzaW9uLCBpdCByZXF1aXJlcyBgaHJlZj1cIiNcImAuKi9cclxuXHJcbmJ1dHRvbi50b2FzdC1jbG9zZS1idXR0b24ge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnRvYXN0LWNvbnRhaW5lciB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDk5OTk5OTtcclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIC5uZ3gtdG9hc3RyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46IDAgMCA2cHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEycHggIzk5OTk5OTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMnB4ICMwMDAwMDA7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2luZm8tY2lyY2xlLnN2ZyAqL1xyXG5cclxuLnRvYXN0LWluZm8ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci90aW1lcy1jaXJjbGUuc3ZnICovXHJcblxyXG4udG9hc3QtZXJyb3Ige1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTEyMS42IDMxMy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMzggMzc3LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMzEybC02NS4xIDY1LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwxMzQuNCAzMzhjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2NS42LTY1LTY1LjYtNjUuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDM5LjYtMzkuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjUgNjUuNyA2NS4xLTY1LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDM5LjYgMzkuNmM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzEyIDI1Nmw2NS42IDY1LjF6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xyXG59XHJcblxyXG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9jaGVjay5zdmcgKi9cclxuXHJcbi50b2FzdC1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXonLyUzRSUzQy9zdmclM0VcIik7XHJcbn1cclxuXHJcbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2V4Y2xhbWF0aW9uLXRyaWFuZ2xlLnN2ZyAqL1xyXG5cclxuLnRvYXN0LXdhcm5pbmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInIHdpZHRoPSc1NzYnIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicvJTNFJTNDL3N2ZyUzRVwiKTtcclxufVxyXG5cclxuLnRvYXN0LWNvbnRhaW5lciB7XHJcbiAgJi50b2FzdC10b3AtY2VudGVyIC5uZ3gtdG9hc3RyLCAmLnRvYXN0LWJvdHRvbS1jZW50ZXIgLm5neC10b2FzdHIge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG4gICYudG9hc3QtdG9wLWZ1bGwtd2lkdGggLm5neC10b2FzdHIsICYudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGggLm5neC10b2FzdHIge1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLm5neC10b2FzdHIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzAzMDM7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbn1cclxuXHJcbi50b2FzdC1zdWNjZXNzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBMzUxO1xyXG59XHJcblxyXG4udG9hc3QtZXJyb3Ige1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCRDM2MkY7XHJcbn1cclxuXHJcbi50b2FzdC1pbmZvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY5NkI0O1xyXG59XHJcblxyXG4udG9hc3Qtd2FybmluZyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTQwNjtcclxufVxyXG5cclxuLnRvYXN0LXByb2dyZXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IDA7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgRGVzaWduICovXHJcbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XHJcbiAgLnRvYXN0LWNvbnRhaW5lciB7XHJcbiAgICAubmd4LXRvYXN0ci5kaXYge1xyXG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xyXG4gICAgICB3aWR0aDogMTFlbTtcclxuICAgIH1cclxuICAgIC50b2FzdC1jbG9zZS1idXR0b24ge1xyXG4gICAgICByaWdodDogLTAuMmVtO1xyXG4gICAgICB0b3A6IC0wLjJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDI0MXB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAudG9hc3QtY29udGFpbmVyIHtcclxuICAgIC5uZ3gtdG9hc3RyLmRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XHJcbiAgICAgIHdpZHRoOiAxOGVtO1xyXG4gICAgfVxyXG4gICAgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XHJcbiAgICAgIHJpZ2h0OiAtMC4yZW07XHJcbiAgICAgIHRvcDogLTAuMmVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XHJcbiAgICB3aWR0aDogMjVlbTtcclxuICB9XHJcbn1cclxuXHJcbm1kYi1jYXJkLWJvZHkuY2FyZC1ib2R5IHtcclxuICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50O1xyXG59IiwiLmludHJvLWhlYWRlciB7XG4gIGhlaWdodDogdW5zZXQgIWltcG9ydGFudDsgfVxuXG4uaW50cm8tMiB7XG4gIGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vbWRib290c3RyYXAuY29tL2ltZy9QaG90b3MvT3RoZXJzL2ltZyUyMCg0MikuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyB9XG5cbi52aWV3IHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7IH1cblxuLnRvcC1uYXYtY29sbGFwc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Y1MWI1ICFpbXBvcnRhbnQ7IH1cblxuLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDsgfVxuXG46aG9zdCAvZGVlcC8gLmNhcmQge1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNiwgMTIzLCAyMTUsIDAuMikgIWltcG9ydGFudDsgfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1ICFpbXBvcnRhbnQ7IH0gfVxuXG4ucmdiYS1ncmFkaWVudCAuZnVsbC1iZy1pbWcge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoODMsIDEyNSwgMjEwLCAwLjQpLCByZ2JhKDE3OCwgMzAsIDEyMywgMC40KSAxMDAlKTsgfVxuXG4uZnVsbC1iZy1pbWcge1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwgMjI4LCAyNTUsIDAuMik7IH1cblxuLm1kLWZvcm0gLnByZWZpeCB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tdG9wOiAxcmVtOyB9XG5cbi5tZC1mb3JtIGxhYmVsIHtcbiAgY29sb3I6ICNmZmZmZmY7IH1cblxuaDYge1xuICBsaW5lLWhlaWdodDogMS43OyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NDBweCkge1xuICAuZnVsbC1oZWlnaHQsXG4gIC5mdWxsLWhlaWdodCBib2R5LFxuICAuZnVsbC1oZWlnaHQgaGVhZGVyLFxuICAuZnVsbC1oZWlnaHQgaGVhZGVyIC52aWV3IHtcbiAgICBoZWlnaHQ6IDEwNDBweDsgfSB9XG5cbiN0b2FzdC1jb250YWluZXIgPiBkaXYge1xuICBvcGFjaXR5OiAxOyB9XG5cbi50b2FzdC1jZW50ZXItY2VudGVyIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cblxuLnRvYXN0LXRvcC1jZW50ZXIge1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTsgfVxuXG4udG9hc3QtYm90dG9tLWNlbnRlciB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi50b2FzdC10b3AtZnVsbC13aWR0aCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi50b2FzdC1ib3R0b20tZnVsbC13aWR0aCB7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi50b2FzdC10b3AtbGVmdCB7XG4gIHRvcDogMTJweDtcbiAgbGVmdDogMTJweDsgfVxuXG4udG9hc3QtY2VudGVyLWNlbnRlciB7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyB9XG5cbi50b2FzdC10b3AtcmlnaHQge1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4OyB9XG5cbi50b2FzdC1ib3R0b20tcmlnaHQge1xuICByaWdodDogMTJweDtcbiAgYm90dG9tOiAxMnB4OyB9XG5cbi50b2FzdC1ib3R0b20tbGVmdCB7XG4gIGJvdHRvbTogMTJweDtcbiAgbGVmdDogMTJweDsgfVxuXG4vKiB0b2FzdCBzdHlsZXMgKi9cbi50b2FzdC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkOyB9XG5cbi50b2FzdC1tZXNzYWdlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkOyB9XG4gIC50b2FzdC1tZXNzYWdlIGEsIC50b2FzdC1tZXNzYWdlIGxhYmVsIHtcbiAgICBjb2xvcjogI0ZGRkZGRjsgfVxuICAudG9hc3QtbWVzc2FnZSBhOmhvdmVyIHtcbiAgICBjb2xvcjogI0NDQ0NDQztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cblxuLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcmlnaHQ6IC0wLjNlbTtcbiAgdG9wOiAtMC4zZW07XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmZmZmY7XG4gIC8qIG9wYWNpdHk6IDAuODsgKi8gfVxuICAudG9hc3QtY2xvc2UtYnV0dG9uOmhvdmVyLCAudG9hc3QtY2xvc2UtYnV0dG9uOmZvY3VzIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG9wYWNpdHk6IDAuNDsgfVxuXG4vKkFkZGl0aW9uYWwgcHJvcGVydGllcyBmb3IgYnV0dG9uIHZlcnNpb25cclxuIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxyXG4gSWYgeW91IHdhbnQgdGhlIGFuY2hvciB2ZXJzaW9uLCBpdCByZXF1aXJlcyBgaHJlZj1cIiNcImAuKi9cbmJ1dHRvbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7IH1cblxuLnRvYXN0LWNvbnRhaW5lciB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDk5OTk5OTsgfVxuICAudG9hc3QtY29udGFpbmVyICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWFyZ2luOiAwIDAgNnB4O1xuICAgIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDUwcHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDNweCAzcHggM3B4IDNweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxNXB4IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTJweCAjOTk5OTk5O1xuICAgIGNvbG9yOiAjRkZGRkZGOyB9XG4gICAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0cjpob3ZlciB7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMTJweCAjMDAwMDAwO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuXG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9pbmZvLWNpcmNsZS5zdmcgKi9cbi50b2FzdC1pbmZvIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5LjA0MyA4IDggMTE5LjA4MyA4IDI1NmMwIDEzNi45OTcgMTExLjA0MyAyNDggMjQ4IDI0OHMyNDgtMTExLjAwMyAyNDgtMjQ4QzUwNCAxMTkuMDgzIDM5Mi45NTcgOCAyNTYgOHptMCAxMTBjMjMuMTk2IDAgNDIgMTguODA0IDQyIDQycy0xOC44MDQgNDItNDIgNDItNDItMTguODA0LTQyLTQyIDE4LjgwNC00MiA0Mi00MnptNTYgMjU0YzAgNi42MjctNS4zNzMgMTItMTIgMTJoLTg4Yy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDEydi02NGgtMTJjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoNjRjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYxMDBoMTJjNi42MjcgMCAxMiA1LjM3MyAxMiAxMnYyNHonLyUzRSUzQy9zdmclM0VcIik7IH1cblxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvdGltZXMtY2lyY2xlLnN2ZyAqL1xuLnRvYXN0LWVycm9yIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMjU2IDhDMTE5IDggOCAxMTkgOCAyNTZzMTExIDI0OCAyNDggMjQ4IDI0OC0xMTEgMjQ4LTI0OFMzOTMgOCAyNTYgOHptMTIxLjYgMzEzLjFjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMzOCAzNzcuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDI1NiAzMTJsLTY1LjEgNjUuNmMtNC43IDQuNy0xMi4zIDQuNy0xNyAwTDEzNC40IDMzOGMtNC43LTQuNy00LjctMTIuMyAwLTE3bDY1LjYtNjUtNjUuNi02NS4xYy00LjctNC43LTQuNy0xMi4zIDAtMTdsMzkuNi0zOS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGw2NSA2NS43IDY1LjEtNjUuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsMzkuNiAzOS42YzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMTIgMjU2bDY1LjYgNjUuMXonLyUzRSUzQy9zdmclM0VcIik7IH1cblxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvY2hlY2suc3ZnICovXG4udG9hc3Qtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTE3My44OTggNDM5LjQwNGwtMTY2LjQtMTY2LjRjLTkuOTk3LTkuOTk3LTkuOTk3LTI2LjIwNiAwLTM2LjIwNGwzNi4yMDMtMzYuMjA0YzkuOTk3LTkuOTk4IDI2LjIwNy05Ljk5OCAzNi4yMDQgMEwxOTIgMzEyLjY5IDQzMi4wOTUgNzIuNTk2YzkuOTk3LTkuOTk3IDI2LjIwNy05Ljk5NyAzNi4yMDQgMGwzNi4yMDMgMzYuMjA0YzkuOTk3IDkuOTk3IDkuOTk3IDI2LjIwNiAwIDM2LjIwNGwtMjk0LjQgMjk0LjQwMWMtOS45OTggOS45OTctMjYuMjA3IDkuOTk3LTM2LjIwNC0uMDAxeicvJTNFJTNDL3N2ZyUzRVwiKTsgfVxuXG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9leGNsYW1hdGlvbi10cmlhbmdsZS5zdmcgKi9cbi50b2FzdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTc2IDUxMicgd2lkdGg9JzU3NicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNNTY5LjUxNyA0NDAuMDEzQzU4Ny45NzUgNDcyLjAwNyA1NjQuODA2IDUxMiA1MjcuOTQgNTEySDQ4LjA1NGMtMzYuOTM3IDAtNTkuOTk5LTQwLjA1NS00MS41NzctNzEuOTg3TDI0Ni40MjMgMjMuOTg1YzE4LjQ2Ny0zMi4wMDkgNjQuNzItMzEuOTUxIDgzLjE1NCAwbDIzOS45NCA0MTYuMDI4ek0yODggMzU0Yy0yNS40MDUgMC00NiAyMC41OTUtNDYgNDZzMjAuNTk1IDQ2IDQ2IDQ2IDQ2LTIwLjU5NSA0Ni00Ni0yMC41OTUtNDYtNDYtNDZ6bS00My42NzMtMTY1LjM0Nmw3LjQxOCAxMzZjLjM0NyA2LjM2NCA1LjYwOSAxMS4zNDYgMTEuOTgyIDExLjM0Nmg0OC41NDZjNi4zNzMgMCAxMS42MzUtNC45ODIgMTEuOTgyLTExLjM0Nmw3LjQxOC0xMzZjLjM3NS02Ljg3NC01LjA5OC0xMi42NTQtMTEuOTgyLTEyLjY1NGgtNjMuMzgzYy02Ljg4NCAwLTEyLjM1NiA1Ljc4LTExLjk4MSAxMi42NTR6Jy8lM0UlM0Mvc3ZnJTNFXCIpOyB9XG5cbi50b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWNlbnRlciAubmd4LXRvYXN0ciwgLnRvYXN0LWNvbnRhaW5lci50b2FzdC1ib3R0b20tY2VudGVyIC5uZ3gtdG9hc3RyIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG5cbi50b2FzdC1jb250YWluZXIudG9hc3QtdG9wLWZ1bGwtd2lkdGggLm5neC10b2FzdHIsIC50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWZ1bGwtd2lkdGggLm5neC10b2FzdHIge1xuICB3aWR0aDogOTYlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG5cbi5uZ3gtdG9hc3RyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAzMDMwMztcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87IH1cblxuLnRvYXN0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTFBMzUxOyB9XG5cbi50b2FzdC1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRDM2MkY7IH1cblxuLnRvYXN0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkY5NkI0OyB9XG5cbi50b2FzdC13YXJuaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4OTQwNjsgfVxuXG4udG9hc3QtcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuNDsgfVxuXG4vKiBSZXNwb25zaXZlIERlc2lnbiAqL1xuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogMjQwcHgpIHtcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XG4gICAgd2lkdGg6IDExZW07IH1cbiAgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICByaWdodDogLTAuMmVtO1xuICAgIHRvcDogLTAuMmVtOyB9IH1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMjQxcHgpIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogOHB4IDhweCA4cHggNTBweDtcbiAgICB3aWR0aDogMThlbTsgfVxuICAudG9hc3QtY29udGFpbmVyIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgIHJpZ2h0OiAtMC4yZW07XG4gICAgdG9wOiAtMC4yZW07IH0gfVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICAgIHdpZHRoOiAyNWVtOyB9IH1cblxubWRiLWNhcmQtYm9keS5jYXJkLWJvZHkge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/loginmodule/loginmodule.component.ts":
/*!******************************************************!*\
  !*** ./src/app/loginmodule/loginmodule.component.ts ***!
  \******************************************************/
/*! exports provided: LoginmoduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginmoduleComponent", function() { return LoginmoduleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _loginmodule_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginmodule.service */ "./src/app/loginmodule/loginmodule.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var LoginmoduleComponent = /** @class */ (function () {
    function LoginmoduleComponent(loginservice, _router, toastr) {
        this.loginservice = loginservice;
        this._router = _router;
        this.toastr = toastr;
        this.localUser = {
            emailid: '',
            password: ''
        };
    }
    LoginmoduleComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('token')) {
            this.loginservice.isLoggedin = true;
            this._router.navigate(['dashboard']);
        }
        else {
            this.loginservice.isLoggedin = false;
            this._router.navigate(['login']);
        }
    };
    LoginmoduleComponent.prototype.login = function (email, password) {
        var _this = this;
        this.loginservice.loginfn(email, password).then(function (res) {
            _this.loginservice.isLoggedin = true;
            _this._router.navigate(['dashboard']);
        });
    };
    LoginmoduleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loginmodule',
            template: __webpack_require__(/*! ./loginmodule.component.html */ "./src/app/loginmodule/loginmodule.component.html"),
            styles: [__webpack_require__(/*! ./loginmodule.component.scss */ "./src/app/loginmodule/loginmodule.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_loginmodule_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginmoduleComponent);
    return LoginmoduleComponent;
}());



/***/ }),

/***/ "./src/app/loginmodule/loginmodule.service.ts":
/*!****************************************************!*\
  !*** ./src/app/loginmodule/loginmodule.service.ts ***!
  \****************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/toPromise */ "./node_modules/rxjs-compat/_esm5/add/operator/toPromise.js");
/* harmony import */ var rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_toPromise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config.service */ "./src/app/config.service.ts");
/* harmony import */ var _loading_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loading.service */ "./src/app/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");










var LoginService = /** @class */ (function () {
    function LoginService(_http, configservice, loadingService, _router, toastr) {
        this._http = _http;
        this.configservice = configservice;
        this.loadingService = loadingService;
        this._router = _router;
        this.toastr = toastr;
        this._user = {
            displayName: '',
            email: '',
            is_admin: '',
            token: '',
            user_id: '',
            master: ''
        };
        this.LoginURL = this.configservice.get("API_URL");
        this.getmetricadatalist = this.configservice.get("API_URL") + 'getmetricadata';
        this.getdropdownlist = this.configservice.get("API_URL") + 'dropdownlist';
        this.addmetrictolist = this.configservice.get("API_URL") + 'addmetricadata';
        this.updatemetrictolist = this.configservice.get("API_URL") + 'updatemetricadata';
        this.deletemetrictolist = this.configservice.get("API_URL") + 'deletemetricadata';
    }
    LoginService.prototype.loginfn = function (email, password) {
        var _this = this;
        this.isLoggedin = false;
        this.loadingService.showLoading();
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var creds = 'email_id=' + email + '&' + 'password=' + password;
        return new Promise(function (resolve) {
            _this._http.post(_this.LoginURL + 'login', creds, { headers: headers })
                .subscribe(function (data) {
                _this.loadingService.hideLoading();
                _this.isLoggedin = true;
                localStorage.setItem('token', data['user'].token);
                localStorage.setItem('username', data['user'].username);
                localStorage.setItem('user_id', data['user'].user_id);
                localStorage.setItem('email', data['user'].email);
                localStorage.setItem('is_admin', data['user'].is_admin);
                window.location.reload();
                resolve(_this.isLoggedin);
            }, function (err) {
                _this.loadingService.hideLoading();
                _this.toastr.error(err.error['message'], 'Hey There');
            });
        });
    };
    LoginService.prototype.logoutfn = function () {
        var _this = this;
        this.loadingService.showLoading();
        var token = localStorage.getItem('token');
        var username = localStorage.getItem('username');
        var user_id = localStorage.getItem('user_id');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': '{"name":"' + username + '","token": "' + token + '"}' });
        var creds = 'user_id=' + user_id;
        return new Promise(function (resolve) {
            _this._http.post(_this.LoginURL + 'logout', creds, { headers: headers })
                .subscribe(function (data) {
                _this.loadingService.hideLoading();
                localStorage.removeItem('token');
                localStorage.removeItem('username');
                localStorage.removeItem('user_id');
                localStorage.removeItem('email');
                localStorage.removeItem('is_admin');
                _this.isLoggedin = false;
                window.location.reload();
                resolve(_this.isLoggedin);
            }, function (err) {
                _this.loadingService.hideLoading();
                _this.toastr.error(err.error['message'], 'Hey There');
            });
        });
    };
    LoginService.prototype.getmetricadatalistgeneral = function () {
        var _this = this;
        this.loadingService.showLoading();
        var token = localStorage.getItem('token');
        var username = localStorage.getItem('username');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': '{"name":"' + username + '","token": "' + token + '"}' });
        return new Promise(function (resolve) {
            _this._http.get(_this.getmetricadatalist, { headers: headers })
                .subscribe(function (data) {
                _this.loadingService.hideLoading();
                resolve(data);
            }, function (err) {
                _this.loadingService.hideLoading();
                _this.toastr.error(err.error['message'], 'Hey There');
            });
        });
    };
    LoginService.prototype.getdropdownlistgeneral = function () {
        var _this = this;
        this.loadingService.showLoading();
        var token = localStorage.getItem('token');
        var username = localStorage.getItem('username');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': '{"name":"' + username + '","token": "' + token + '"}' });
        return new Promise(function (resolve) {
            _this._http.get(_this.getdropdownlist, { headers: headers })
                .subscribe(function (data) {
                _this.loadingService.hideLoading();
                resolve(data);
            }, function (err) {
                _this.loadingService.hideLoading();
                _this.toastr.error(err.error['message'], 'Hey There');
            });
        });
    };
    LoginService.prototype.addmetric = function (metricform) {
        var _this = this;
        this.loadingService.showLoading();
        var token = localStorage.getItem('token');
        var username = localStorage.getItem('username');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': '{"name":"' + username + '","token": "' + token + '"}' });
        var creds = 'met_name=' + metricform.servername + '&' + 'cpus=' + metricform.cpuid + '&' + 'memory=' + metricform.memoryid + '&' + 'storage=' + metricform.storageid + '&' + 'ipaddress=' + metricform.ipaddress + '&' + 'network=' + metricform.networkid + '&' + 'location=' + metricform.location;
        return new Promise(function (resolve) {
            _this._http.post(_this.addmetrictolist, creds, { headers: headers })
                .subscribe(function (data) {
                _this.loadingService.hideLoading();
                _this.toastr.success(data['message'], 'Hey There');
                resolve(data);
            }, function (err) {
                _this.loadingService.hideLoading();
                _this.toastr.error(err.error['message'], 'Hey There');
            });
        });
    };
    LoginService.prototype.updatemetric = function (metricform) {
        var _this = this;
        this.loadingService.showLoading();
        var token = localStorage.getItem('token');
        var username = localStorage.getItem('username');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': '{"name":"' + username + '","token": "' + token + '"}' });
        var creds = 'met_name=' + metricform.servername + '&' + 'cpus=' + metricform.cpuid + '&' + 'memory=' + metricform.memoryid + '&' + 'storage=' + metricform.storageid + '&' + 'ipaddress=' + metricform.ipaddress + '&' + 'network=' + metricform.networkid + '&' + 'location=' + metricform.location + '&' + 'met_id=' + metricform.metricid;
        return new Promise(function (resolve) {
            _this._http.put(_this.updatemetrictolist, creds, { headers: headers })
                .subscribe(function (data) {
                _this.loadingService.hideLoading();
                _this.toastr.success(data['message'], 'Hey There');
                resolve(data);
            }, function (err) {
                _this.loadingService.hideLoading();
                _this.toastr.error(err.error['message'], 'Hey There');
            });
        });
    };
    LoginService.prototype.deletemetric = function (met_id) {
        var _this = this;
        this.loadingService.showLoading();
        var token = localStorage.getItem('token');
        var username = localStorage.getItem('username');
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': '{"name":"' + username + '","token": "' + token + '"}' });
        var creds = 'met_id=' + met_id;
        return new Promise(function (resolve) {
            _this._http.post(_this.deletemetrictolist, creds, { headers: headers })
                .subscribe(function (data) {
                _this.loadingService.hideLoading();
                _this.toastr.error(data['message'], 'Hey There');
                resolve(data);
            }, function (err) {
                _this.loadingService.hideLoading();
                _this.toastr.error(err.error['message'], 'Hey There');
            });
        });
    };
    LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _config_service__WEBPACK_IMPORTED_MODULE_6__["ConfigService"], _loading_service__WEBPACK_IMPORTED_MODULE_7__["LoadingService"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


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
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment.prod */ "./src/environments/environment.prod.ts");




if (_environments_environment_prod__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
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

module.exports = __webpack_require__(/*! E:\Webapps\Angular\demotest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map