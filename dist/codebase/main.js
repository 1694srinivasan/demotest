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

module.exports = "<div class=\"preloader\" *ngIf=\"showLoading\" style=\"width: 100%; height : 100%; position: absolute; z-index: 50001; background-color: rgba(255,255,255,0.25)\">\n    <svg class=\"circular\" viewBox=\"25 25 50 50\" >\n        <circle class=\"path\" cx=\"50\" cy=\"50\" r=\"20\" fill=\"none\" stroke-width=\"2\" stroke-miterlimit=\"10\" />\n    </svg>\n  </div>\n  <span defaultOverlayTarget></span>\n  <header class=\"h-1000\" *ngIf=\"loginservice.isLoggedin\">\n    <mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark indigo\" [containerInside]=\"false\">\n      <mdb-navbar-brand><a class=\"navbar-brand\" href=\"#\">Demo Application</a></mdb-navbar-brand>\n      <links>\n        <ul class=\"navbar-nav ml-auto nav-flex-icons\">\n          <li class=\"nav-item dropdown\" dropdown>\n              <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n                <mdb-icon fas icon=\"user\"></mdb-icon> {{ crntusername }}<span class=\"caret\"></span></a>\n              <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown dropdown-primary\" role=\"menu\">\n                <a class=\"dropdown-item waves-light\" mdbWavesEffect (click)=\"logout()\">Log out</a>\n              </div>\n            </li>\n        </ul>\n      </links>\n    </mdb-navbar>\n  </header>\n  <router-outlet>\n  </router-outlet>\n  <footer class=\"page-footer font-large indigo\" *ngIf=\"loginservice.isLoggedin\">\n    <div class=\"footer-copyright text-center py-3\">© 2018 Copyright:\n      <a href=\"https://mdbootstrap.com/education/angular/\"> MDBootstrap.com</a>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "section.view.mainbg {\n  background-color: #21668D !important; }\n\nmdb-navbar-brand {\n  height: 40px !important;\n  font-family: Montserrat !important; }\n\n:host /deep/ nav.navbar.navbar-expand-lg.navbar-dark.indigo {\n  background-color: #171745 !important;\n  font-family: Montserrat !important; }\n\n.page-footer.font-large.indigo {\n  background-color: #171745 !important;\n  font-family: Montserrat !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFBST0pFQ1RTXFxBTkdVTEFSXFxkZW1vdGVzdC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQW9DLEVBQUE7O0FBRXhDO0VBQ0ksdUJBQXVCO0VBQ3ZCLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLG9DQUFvQztFQUNwQyxrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxvQ0FBb0M7RUFDcEMsa0NBQWtDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uLnZpZXcubWFpbmJnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE2NjhEICFpbXBvcnRhbnQ7XG59XG5tZGItbmF2YmFyLWJyYW5kIHtcbiAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50O1xufVxuOmhvc3QgL2RlZXAvIG5hdi5uYXZiYXIubmF2YmFyLWV4cGFuZC1sZy5uYXZiYXItZGFyay5pbmRpZ28ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3NDUgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50O1xufVxuLnBhZ2UtZm9vdGVyLmZvbnQtbGFyZ2UuaW5kaWdve1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNzE3NDUgIWltcG9ydGFudDtcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50O1xufSJdfQ== */"

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
                    apiKey: 'AIzaSyDOkFIXQcEwUolnGnylmBbaukX8NsrvCuU'
                }),
                // tslint:disable-next-line: max-line-length
                angular2_highcharts__WEBPACK_IMPORTED_MODULE_11__["ChartModule"].forRoot(__webpack_require__(/*! highcharts/highstock */ "./node_modules/highcharts/highstock.js"), __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js"), __webpack_require__(/*! highcharts/modules/annotations */ "./node_modules/highcharts/modules/annotations.js"), __webpack_require__(/*! highcharts/highcharts-more */ "./node_modules/highcharts/highcharts-more.js"), __webpack_require__(/*! highcharts/modules/solid-gauge */ "./node_modules/highcharts/modules/solid-gauge.js"), __webpack_require__(/*! highcharts/modules/drilldown */ "./node_modules/highcharts/modules/drilldown.js")),
                _amcharts_amcharts3_angular__WEBPACK_IMPORTED_MODULE_12__["AmChartsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"].forRoot({
                    timeOut: 50000,
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

module.exports = "<section class=\"view mainbg\">\n<mdb-navbar SideClass=\"navbar navbar-expand-lg navbar-dark unique-color\" [containerInside]=\"false\">\n    <mdb-navbar-brand></mdb-navbar-brand>\n    <links>\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link waves-light active\" mdbWavesEffect>Charts<span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link waves-light\" mdbWavesEffect>Tables</a>\n        </li>\n      </ul>\n      <ul class=\"navbar-nav ml-auto nav-flex-icons\">\n        <li class=\"nav-item dropdown\" dropdown>\n            <a dropdownToggle mdbWavesEffect type=\"button\" class=\"nav-link dropdown-toggle waves-light\" mdbWavesEffect>\n              <mdb-icon fas icon=\"user\"></mdb-icon> Profile<span class=\"caret\"></span></a>\n            <div *dropdownMenu class=\"dropdown-menu dropdown-menu-right dropdown dropdown-primary\" role=\"menu\">\n              <a class=\"dropdown-item waves-light\" mdbWavesEffect href=\"#\">My account</a>\n              <a class=\"dropdown-item waves-light\" mdbWavesEffect (click)=\"logout()\">Log out</a>\n            </div>\n          </li>\n      </ul>\n    </links>\n  </mdb-navbar>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <mdb-card class=\"formcard\">\n          <mdb-card-body>\n            <form>\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  <select class=\"browser-default custom-select dashboardsetect\">\n                      <option selected>Select Dashboard</option>\n                      <option value=\"1\">Dashboard One</option>\n                      <option value=\"2\">Dashboard Two</option>\n                      <option value=\"3\">Dashboard Three</option>\n                    </select>\n                </div>\n                <div class=\"col-md-4\">\n\n                </div>\n                <div class=\"col-md-2 text-right\">\n                  <div class=\"md-form\">\n                      <button mdbBtn type=\"button\" color=\"primary\" rounded=\"true\" mdbWavesEffect data-toggle=\"modal\" data-target=\"#basicExample\"\n                      (click)=\"basicModal.show()\" mdbWavesEffect>Add Dashboard</button>\n                      <div mdbModal #basicModal=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\n                          <div class=\"modal-dialog modal-lg\" role=\"document\">\n                            <div class=\"modal-content\">\n                              <div class=\"modal-header\">\n                                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Create New Dashboard</h4>\n                              </div>\n                              <div class=\"modal-body\">\n                              <form class=\"dashboardform\">\n                                <div class=\"form-row\">\n                                  <div class=\"col-md-4\">\n                                    <div class=\"md-form form-group\">\n                                      <input mdbInput type=\"text\" class=\"form-control\" id=\"dashboardname\" >\n                                      <label for=\"dashboardname\">Dashboard Name</label>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-md-4\">\n                                    <div class=\"md-form form-group\">\n                                        <select class=\"browser-default custom-select createdashboardselect\">\n                                            <option selected>Select Access Type</option>\n                                            <option value=\"1\">Facility</option>\n                                            <option value=\"2\">Organization</option>\n                                            <option value=\"3\">Company</option>\n                                          </select>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-md-4\">\n                                    <div class=\"md-form form-group\">\n                                        <select class=\"browser-default custom-select createdashboardselect\">\n                                          <option selected>Select Access For</option>\n                                          <option value=\"1\">Admin L1</option>\n                                          <option value=\"2\">Manager L2</option>\n                                          <option value=\"3\">User L3</option>\n                                        </select>\n                                    </div>\n                                  </div>\n                                </div>\n                              </form>\n                            </div>\n                            <div class=\"modal-footer\">\n                              <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"basicModal.hide()\" mdbWavesEffect>Close</button>\n                              <button type=\"button\" mdbBtn color=\"primary\" class=\"relative waves-light\" mdbWavesEffect>Create</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                  </div>\n                </div>\n                <div class=\"col-md-2 text-right\">\n                  <div class=\"md-form\">\n                      <button mdbBtn type=\"button\" color=\"primary\" rounded=\"true\" mdbWavesEffect>Add Widget</button>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </mdb-card-body>\n        </mdb-card>\n      </div>\n    </div>\n    <div class=\"row\">\n        <div mdbModal #amchart1=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Multi line stack column chart data</h4>\n                </div>\n                <div class=\"modal-body\">\n                <form class=\"dashboardform\">\n                  <p class=\"datalabelchart\">Replace dictionary symbol instead of [ ]</p>\n                 <pre><code>\n                    [\n                      date: 2012-01-01,\n                      distance: 227,\n                      townName: New York,\n                      townName2: New York,\n                      townSize: 25,\n                      latitude: 40.71,\n                      duration: 408\n                    ]\n                 </code></pre>\n                </form>\n              </div>\n              <div class=\"modal-footer\">\n                <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"amchart1.hide()\" mdbWavesEffect>Close</button>\n              </div>\n            </div>\n          </div>\n        </div>\n      <div class=\"col-lg-12\">\n        <mdb-card class=\"chartcard1\">\n          <mdb-card-header class=\"white-text indigo\" data-toggle=\"modal\" data-target=\"#amchart1\"\n          (click)=\"amchart1.show()\" mdbWavesEffect style=\"cursor: pointer;\">Multiple (line and stacked column) AmChart Demo</mdb-card-header>\n          <mdb-card-body>\n            <div id=\"chartdiv\" class=\"charts\">\n            </div>\n          </mdb-card-body>\n        </mdb-card>\n      </div>\n      <div mdbModal #amchart2=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Clustered Bar & Column chart data</h4>\n              </div>\n              <div class=\"modal-body\">\n              <form class=\"dashboardform\">\n                <p class=\"datalabelchart\">Replace dictionary symbol instead of [ ]</p>\n               <pre><code>\n                  [\n                    \"year\": 2005,\n                    \"income\": 23.5,\n                    \"expenses\": 18.1\n                  ]\n               </code></pre>\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"amchart2.hide()\" mdbWavesEffect>Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <mdb-card class=\"chartcard2\">\n          <mdb-card-header class=\"white-text indigo\" data-toggle=\"modal\" data-target=\"#amchart2\"\n          (click)=\"amchart2.show()\" mdbWavesEffect style=\"cursor: pointer;\">Clustered bar Amchart Demo</mdb-card-header>\n          <mdb-card-body>\n              <div id=\"clusterbarchartdiv\" class=\"charts\">\n              </div>\n          </mdb-card-body>\n        </mdb-card>\n      </div>\n      <div mdbModal #amchart3=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">Multi Line chart & Line Area Chart data</h4>\n              </div>\n              <div class=\"modal-body\">\n              <form class=\"dashboardform\">\n                <p class=\"datalabelchart\">Replace dictionary symbol instead of [ ]</p>\n               <pre><code>\n                  [\n                  \"year\": 2014,\n                  \"income\": 34.1,\n                  \"expenses\": 32.9,\n                  ]\n               </code></pre>\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"amchart3.hide()\" mdbWavesEffect>Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <mdb-card class=\"chartcard2\">\n          <mdb-card-header class=\"white-text indigo\" data-toggle=\"modal\" data-target=\"#amchart3\"\n          (click)=\"amchart3.show()\" mdbWavesEffect style=\"cursor: pointer;\">Multiple Line Amchart Demo</mdb-card-header>\n          <mdb-card-body>\n              <div id=\"multilinechartdiv\" class=\"charts\">\n              </div>\n          </mdb-card-body>\n        </mdb-card>\n      </div>\n      <div mdbModal #fusion1=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <h4 class=\"modal-title w-100\" id=\"myModalLabel\">HeatMap chart data</h4>\n              </div>\n              <div class=\"modal-body\">\n              <form class=\"dashboardform\">\n                <p class=\"datalabelchart\">Replace dictionary symbol instead of [ ]</p>\n               <pre><code>\n                  [\n                    rowid: '40',\n                    columnid: '152',\n                    value: 17,\n                    trlabel:\n                      'You are in Moderate Thinness zone. You need to increase 5 kg to be in Normal zone'\n                  ]\n               </code></pre>\n              </form>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"fusion1.hide()\" mdbWavesEffect>Close</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-12\">\n        <mdb-card class=\"chartcard2\">\n          <mdb-card-header class=\"white-text indigo\" data-toggle=\"modal\" data-target=\"#fusion1\"\n          (click)=\"fusion1.show()\" mdbWavesEffect style=\"cursor: pointer;\">Heat Map Fusion Chart Demo</mdb-card-header>\n          <mdb-card-body>\n              <fusioncharts class=\"charts\"\n                width=\"100%\"\n                height=\"500\"\n                type=\"heatmap\"\n                dataFormat=\"json\"\n                [dataSource]=\"heatmapdataSource\"\n              >\n              </fusioncharts>\n          </mdb-card-body>\n        </mdb-card>\n      </div>\n      <div class=\"col-lg-6\">\n          <mdb-card class=\"chartcard2\">\n            <mdb-card-header class=\"white-text indigo\" data-toggle=\"modal\" data-target=\"#amchart3\"\n            (click)=\"amchart3.show()\" mdbWavesEffect style=\"cursor: pointer;\">Line Area Amchart Demo</mdb-card-header>\n            <mdb-card-body>\n                <div id=\"lineareachartdiv\" class=\"charts\">\n                  </div>\n            </mdb-card-body>\n          </mdb-card>\n        </div>\n        <div class=\"col-lg-6\">\n          <mdb-card class=\"chartcard2\">\n            <mdb-card-header class=\"white-text indigo\" data-toggle=\"modal\" data-target=\"#amchart2\"\n            (click)=\"amchart2.show()\" mdbWavesEffect style=\"cursor: pointer;\">Column Amchart Demo</mdb-card-header>\n            <mdb-card-body>\n                <div id=\"columnchartdiv\" class=\"charts\">\n                  </div>\n            </mdb-card-body>\n          </mdb-card>\n        </div>\n    </div>\n  </div>\n  \n</section>"

/***/ }),

/***/ "./src/app/charttypes/charttypes.component.scss":
/*!******************************************************!*\
  !*** ./src/app/charttypes/charttypes.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  height: 100% !important;\n  overflow: auto !important; }\n\nsection.view.mainbg {\n  background-color: #21668D !important; }\n\ncode {\n  color: white !important; }\n\n.datalabelchart {\n  color: white !important; }\n\nlabel {\n  color: white !important; }\n\nform.dashboardform input {\n  color: white !important; }\n\nselect.browser-default.custom-select.dashboardsetect {\n  margin: 30px;\n  background-color: #1f335a;\n  color: white; }\n\nselect.browser-default.custom-select.createdashboardselect {\n  background-color: #1f335a;\n  color: white; }\n\n.modal-content {\n  background-color: #1F335A; }\n\nh4#myModalLabel {\n  color: white;\n  text-align: center; }\n\nmdb-card.formcard.card {\n  margin-top: 30px !important;\n  margin-right: 30px !important;\n  margin-left: 30px !important;\n  margin-bottom: 10px !important;\n  font-size: 20px !important;\n  background-color: #1F335A !important; }\n\nmdb-card.chartcard1.card {\n  margin: 30px !important;\n  font-size: 20px !important;\n  background-color: #1F335A !important; }\n\nmdb-card.chartcard2.card {\n  margin: 30px !important;\n  font-size: 20px !important;\n  background-color: #1F335A !important; }\n\nmdb-navbar-brand {\n  height: 40px !important; }\n\nmdb-card-header.white-text.indigo.card-header {\n  background-color: #1F335A !important; }\n\nmdb-card-body.card-body {\n  background-color: #1f335a !important;\n  color: white !important; }\n\n:host /deep/ nav.navbar.navbar-expand-lg.navbar-dark.unique-color {\n  background-color: #1F335A !important; }\n\n.charts {\n  display: block;\n  width: 100%;\n  height: 500px;\n  background-color: #1f335a;\n  color: #fff; }\n\n#chartdiv {\n  width: 100%;\n  height: 500px;\n  font-size: 11px; }\n\n:host /deep/ g.raphael-group-4-background rect {\n  fill: #1f335a !important; }\n\n:host /deep/ rect.highcharts-background {\n  fill: #1f335a !important; }\n\n:host /deep/ g.highcharts-label.highcharts-data-label.highcharts-data-label-color-undefined text {\n  color: #ffffff !important;\n  fill: #ffffff !important; }\n\n:host /deep/ ol.breadcrumb.list-inline.list-unstyled.text- {\n  background-color: #171745 !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcnR0eXBlcy9FOlxcUFJPSkVDVFNcXEFOR1VMQVJcXGRlbW90ZXN0L3NyY1xcYXBwXFxjaGFydHR5cGVzXFxjaGFydHR5cGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLG9DQUFvQyxFQUFBOztBQUV4QztFQUNBLHVCQUFzQixFQUFBOztBQUVyQjtFQUNJLHVCQUF1QixFQUFBOztBQUU1QjtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsWUFBWSxFQUFBOztBQUdoQjtFQUNJLHlCQUF5QjtFQUN6QixZQUFZLEVBQUE7O0FBRWhCO0VBQ0kseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0ksWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsb0NBQW9DLEVBQUE7O0FBR3hDO0VBQ0ksdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUMxQixvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDSSx1QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLG9DQUFvQyxFQUFBOztBQUV4QztFQUNJLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLG9DQUFvQztFQUNwQyx1QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxvQ0FBb0MsRUFBQTs7QUFHeEM7RUFDQyxjQUFjO0VBQ1gsV0FBWTtFQUNaLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsV0FBVyxFQUFBOztBQUlmO0VBQ0MsV0FBYTtFQUNiLGFBQWU7RUFDZixlQUFnQixFQUFBOztBQUdqQjtFQUNJLHdCQUF5QixFQUFBOztBQUc3QjtFQUNJLHdCQUF3QixFQUFBOztBQUU1QjtFQUNJLHlCQUF5QjtFQUN6Qix3QkFBdUIsRUFBQTs7QUFHM0I7RUFDSSxvQ0FBb0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXJ0dHlwZXMvY2hhcnR0eXBlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWV3IHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xufVxuc2VjdGlvbi52aWV3Lm1haW5iZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNjY4RCAhaW1wb3J0YW50O1xufVxuY29kZSB7XG5jb2xvcjp3aGl0ZSAhaW1wb3J0YW50O1xuIH1cbiAuZGF0YWxhYmVsY2hhcnR7XG4gICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuIH1cbmxhYmVsIHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuZm9ybS5kYXNoYm9hcmRmb3JtIGlucHV0IHtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuc2VsZWN0LmJyb3dzZXItZGVmYXVsdC5jdXN0b20tc2VsZWN0LmRhc2hib2FyZHNldGVjdCB7XG4gICAgbWFyZ2luOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjMzNWE7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5zZWxlY3QuYnJvd3Nlci1kZWZhdWx0LmN1c3RvbS1zZWxlY3QuY3JlYXRlZGFzaGJvYXJkc2VsZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWYzMzVhO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5tb2RhbC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYzMzVBO1xufVxuaDQjbXlNb2RhbExhYmVsIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5tZGItY2FyZC5mb3JtY2FyZC5jYXJkIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMzM1QSAhaW1wb3J0YW50O1xufVxuXG5tZGItY2FyZC5jaGFydGNhcmQxLmNhcmQge1xuICAgIG1hcmdpbjogMzBweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjMzNUEgIWltcG9ydGFudDtcbn1cblxubWRiLWNhcmQuY2hhcnRjYXJkMi5jYXJkIHtcbiAgICBtYXJnaW4gOiAzMHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMzM1QSAhaW1wb3J0YW50O1xufVxubWRiLW5hdmJhci1icmFuZCB7XG4gICAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbm1kYi1jYXJkLWhlYWRlci53aGl0ZS10ZXh0LmluZGlnby5jYXJkLWhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMzM1QSAhaW1wb3J0YW50O1xufVxuXG5tZGItY2FyZC1ib2R5LmNhcmQtYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzM1YSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCAvZGVlcC8gbmF2Lm5hdmJhci5uYXZiYXItZXhwYW5kLWxnLm5hdmJhci1kYXJrLnVuaXF1ZS1jb2xvciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMzM1QSAhaW1wb3J0YW50O1xufVxuXG4uY2hhcnRzIHsgXG5cdGRpc3BsYXk6IGJsb2NrOyBcbiAgICB3aWR0aCA6IDEwMCU7IFxuICAgIGhlaWdodDogNTAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzM1YTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cblxuI2NoYXJ0ZGl2IHtcblx0d2lkdGhcdFx0OiAxMDAlO1xuXHRoZWlnaHRcdFx0OiA1MDBweDtcblx0Zm9udC1zaXplXHQ6IDExcHg7XG59XG5cbjpob3N0IC9kZWVwLyBnLnJhcGhhZWwtZ3JvdXAtNC1iYWNrZ3JvdW5kIHJlY3Qge1xuICAgIGZpbGw6ICAjMWYzMzVhICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IC9kZWVwLyAgcmVjdC5oaWdoY2hhcnRzLWJhY2tncm91bmQge1xuICAgIGZpbGw6ICMxZjMzNWEgIWltcG9ydGFudDtcbn1cbjpob3N0IC9kZWVwLyBnLmhpZ2hjaGFydHMtbGFiZWwuaGlnaGNoYXJ0cy1kYXRhLWxhYmVsLmhpZ2hjaGFydHMtZGF0YS1sYWJlbC1jb2xvci11bmRlZmluZWQgdGV4dHtcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgIGZpbGw6I2ZmZmZmZiAhaW1wb3J0YW50O1xuICAgICB9XG5cbjpob3N0IC9kZWVwLyBvbC5icmVhZGNydW1iLmxpc3QtaW5saW5lLmxpc3QtdW5zdHlsZWQudGV4dC17XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTc0NSAhaW1wb3J0YW50O1xufVxuXG4iXX0= */"

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

module.exports = "<section class=\"view mainbg\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div mdbModal #adddata=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close pull-right white-text\" aria-label=\"Close\" (click)=\"adddata.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                  </button>\n                  <h4 class=\"modal-title w-100 text-center\" id=\"myModalLabel\">Add Data</h4>\n                </div>\n                <div class=\"modal-body\">\n                  <form class=\"text-left p-5\">\n                    <label class=\"white-text\">Server Name : </label>\n                    <input type=\"text\"  id=\"servername\" mdbInput class=\"form-control mb-4 dashboardformfields\" placeholder=\"Server Name\" [(ngModel)]=\"metricform.servername\" [ngModelOptions]=\"{standalone: true}\" #servername=\"ngModel\" required=\"\">\n                    <label class=\"white-text\">No of CPU's : </label>\n                    <select  class=\"browser-default custom-select mb-4 dashboardformfields\" [(ngModel)]=\"metricform.cpuid\" [ngModelOptions]=\"{standalone: true}\" #cpuid=\"ngModel\" required=\"\">\n                      <option value=\"null\">Select No of CPU's</option>\n                      <option *ngFor=\"let data of cpu_list\" [attr.value]=\"data.category_item_id\">{{data.item_name}}</option>\n                    </select>\n                    <label class=\"white-text\">Total Memory : </label>\n                    <select  class=\"browser-default custom-select mb-4 dashboardformfields\" [(ngModel)]=\"metricform.memoryid\" [ngModelOptions]=\"{standalone: true}\" #memoryid=\"ngModel\" required=\"\">\n                      <option value=\"null\">Select Total Memory</option>\n                      <option *ngFor=\"let data of memory_list\" [attr.value]=\"data.category_item_id\">{{data.item_name}}</option>\n                    </select>\n                    <label class=\"white-text\">Total Storage : </label>\n                    <select  class=\"browser-default custom-select mb-4 dashboardformfields\" [(ngModel)]=\"metricform.storageid\" [ngModelOptions]=\"{standalone: true}\" #storageid=\"ngModel\" required=\"\">\n                      <option value=\"null\">Select Total Storage</option>\n                      <option *ngFor=\"let data of storage_list\" [attr.value]=\"data.category_item_id\">{{data.item_name}}</option>\n                    </select>\n                    <label class=\"white-text\">IP Address : </label>\n                    <input type=\"text\"  id=\"ipaddress\" mdbInput class=\"form-control mb-4 dashboardformfields\" placeholder=\"IP Address\" [(ngModel)]=\"metricform.ipaddress\" [ngModelOptions]=\"{standalone: true}\" #ipaddress=\"ngModel\" required=\"\">\n                    <label class=\"white-text\">Network : </label>\n                    <select  class=\"browser-default custom-select mb-4 dashboardformfields\" [(ngModel)]=\"metricform.networkid\" [ngModelOptions]=\"{standalone: true}\" #networkid=\"ngModel\" required=\"\">\n                      <option value=\"null\">Select Network</option>\n                      <option *ngFor=\"let data of network_list\" [attr.value]=\"data.category_item_id\">{{data.item_name}}</option>\n                    </select>\n                    <label class=\"white-text\">Location : </label>\n                    <input type=\"text\"  id=\"location\" mdbInput class=\"form-control mb-4 dashboardformfields\" placeholder=\"Location\" [(ngModel)]=\"metricform.location\" [ngModelOptions]=\"{standalone: true}\" #location=\"ngModel\" required=\"\">\n                  </form>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"adddata.hide();cancel()\" mdbWavesEffect>Cancel</button>\n                  <button type=\"button\" mdbBtn color=\"primary\" class=\"relative waves-light\" mdbWavesEffect [disabled]=\"servername.errors || cpuid.errors || memoryid.errors || storageid.errors || ipaddress.errors || networkid.errors || location.errors\" (click)=\"adddata.hide();savemetric()\">Save</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div mdbModal #mapdata=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close pull-right white-text\" aria-label=\"Close\" (click)=\"mapdata.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                  </button>\n                  <h4 class=\"modal-title w-100 text-center\" id=\"myModalLabel\">Map Data</h4>\n                </div>\n                <div class=\"modal-body\">\n                  <agm-map [latitude]=\"lat\" [longitude]=\"long\">\n                    <agm-marker [latitude]=\"lat\" [longitude]=\"long\"></agm-marker>\n                  </agm-map>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"mapdata.hide()\" mdbWavesEffect>Close</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div mdbModal #chartdata=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-lg\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close pull-right white-text\" aria-label=\"Close\" (click)=\"chartdata.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                  </button>\n                  <h4 class=\"modal-title w-100 text-center\" id=\"myModalLabel\">Chart Data</h4>\n                </div>\n                <div class=\"modal-body\">\n                  <div id=\"chartdiv\" class=\"charts\">\n                  </div>\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"chartdata.hide()\" mdbWavesEffect>Close</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div mdbModal #confirmdelete=\"mdbModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myBasicModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog modal-md\" role=\"document\">\n              <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                  <button type=\"button\" class=\"close pull-right white-text\" aria-label=\"Close\" (click)=\"confirmdelete.hide()\">\n                    <span aria-hidden=\"true\">×</span>\n                  </button>\n                  <h4 class=\"modal-title w-100 text-center\" id=\"myModalLabel\">Delete Confirmation</h4>\n                </div>\n                <div class=\"modal-body\">\n                  <p class=\"white-text text-center\">Are you sure you wanna delete this record ? </p>\n                  <input type=\"hidden\"  id=\"metricid\" mdbInput class=\"form-control mb-4 dashboardformfields\" placeholder=\"IP Address\" [(ngModel)]=\"metricform.metricid\" [ngModelOptions]=\"{standalone: true}\" #metricid=\"ngModel\" required=\"\">\n                </div>\n                <div class=\"modal-footer\">\n                  <button type=\"button\" mdbBtn color=\"secondary\" class=\"waves-light\" aria-label=\"Close\" (click)=\"confirmdelete.hide();cancel()\" mdbWavesEffect>Cancel</button>\n                  <button type=\"button\"mdbBtn color=\"primary\" class=\"relative waves-light\" mdbWavesEffect aria-label=\"Close\" (click)=\"confirmdelete.hide();deletemetric(metricform.metricid)\" mdbWavesEffect>Delete</button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <mdb-card class=\"chartcard2\">\n            <mdb-card-header class=\"white-text indigo\" mdbWavesEffect> Jquery Data Table Demo</mdb-card-header>\n            <mdb-card-body>\n              <div class=\"row\">\n                <div class=\"col-md-6 titlearea\">\n                  Table List : \n                </div>\n                <div class=\"col-md-6 buttonarea\">\n                  <button type=\"button\" mdbBtn color=\"primary\" class=\"relative waves-light tablebtn\" (click)=\"adddata.show();showaddpop()\" mdbWavesEffect>Add Data</button>\n                </div>\n                <div class=\"col-md-12 tablearea\">\n                  <div class=\"tbl-content\">\n                    <div class=\"table-responsive\">\n                      <table cellpadding=\"0\" cellspacing=\"0\" border=\"0\" id=\"demoapptable\" class=\"demoapptable\">\n                        <thead class = \"tbl-header\">\n                            <tr>\n                              <th style=\"width:100px !important\">S.No</th>\n                              <th style=\"width:200px !important\">Server Name</th>\n                              <th style=\"width:150px !important\">No of CPU's</th>\n                              <th style=\"width:150px !important\">Total Memory</th>\n                              <th style=\"width:150px !important\">Total Storage</th>\n                              <th style=\"width:150px !important\">IP Address</th>\n                              <th style=\"width:150px !important\">Network</th>\n                              <th style=\"width:150px !important\">Location</th>\n                              <th style=\"width:150px !important\">Action</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let post of tabledata;let myindex=index\">\n                            <td>{{myindex + 1}}</td>\n                            <td>{{post.met_name}}</td>\n                            <td>{{post.cpus_name}}</td>\n                            <td>{{post.memory_name}}</td>\n                            <td>{{post.storage_name}}</td>\n                            <td>{{post.ipaddress}}</td>\n                            <td>{{post.network}}</td>\n                            <td (click)=\"mapdata.show();loadmap(post.lat,post.lat)\" style=\"cursor: pointer;\">{{post.location }}</td>\n                            <td  style=\"cursor: pointer;\">\n                              <i class=\"fas fa-edit\"></i>&nbsp;\n                              <i class=\"fas fa-trash-alt\" (click)=\"confirmdelete.show();dmetric(post.met_id)\"></i>&nbsp;\n                              <i class=\"fas fa-binoculars\" (click)=\"chartdata.show()\"></i>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div> \n                </div>\n              </div>\n            </mdb-card-body>\n          </mdb-card>\n        </div>\n      </div>\n    </div>\n</section>\n  \n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".view {\n  height: 100% !important;\n  overflow: auto !important; }\n\nsection.view.mainbg {\n  background-color: #21668D !important; }\n\n.titlearea {\n  text-align: left; }\n\n.buttonarea {\n  text-align: right;\n  font-family: Montserrat !important; }\n\n.tablebtn {\n  padding: 0.5rem !important;\n  margin: 0rem !important; }\n\n.modal-content {\n  background-color: #1F335A;\n  font-family: Montserrat !important; }\n\nh4#myModalLabel {\n  color: white;\n  text-align: center; }\n\ninput.dashboardformfields {\n  background-color: #1f335a;\n  color: white !important; }\n\nselect.dashboardformfields {\n  background-color: #1f335a;\n  color: white !important; }\n\nmdb-card.formcard.card {\n  margin-top: 30px !important;\n  margin-right: 30px !important;\n  margin-left: 30px !important;\n  margin-bottom: 10px !important;\n  font-size: 20px !important;\n  background-color: #1F335A !important;\n  font-family: Montserrat !important; }\n\nmdb-card.chartcard2.card {\n  margin: 30px !important;\n  font-size: 20px !important;\n  background-color: #1F335A !important;\n  font-family: Montserrat !important; }\n\nmdb-card-header.white-text.indigo.card-header {\n  background-color: #1F335A !important;\n  font-family: Montserrat !important; }\n\nmdb-card-body.card-body {\n  background-color: #1f335a !important;\n  color: white !important;\n  font-family: Montserrat !important; }\n\nagm-map {\n  height: 500px; }\n\n.tablearea {\n  padding: 20px !important;\n  margin-top: 10px !important; }\n\n.demoapptable {\n  font-family: Montserrat !important;\n  border-collapse: collapse;\n  width: 100%;\n  overflow-x: auto !important;\n  table-layout: fixed !important;\n  word-wrap: break-word !important;\n  /* border: 1px solid  #337ab7; */ }\n\n.demoapptable tr:nth-child(even) {\n  background-color: #1F335A; }\n\n.demoapptable tr:nth-child(odd) {\n  background-color: #1F335A; }\n\n.demoapptable tr:hover {\n  background-color: #1F335A; }\n\n.demoapptable .icons {\n  font-size: 15px !important; }\n\n.demoapptable th {\n  padding: 20px 15px;\n  text-align: center;\n  font-weight: 800;\n  color: white !important;\n  text-transform: uppercase;\n  font-size: 15px !important;\n  font-family: Montserrat !important;\n  border-bottom: 1px solid  #337ab7; }\n\n.demoapptable td {\n  padding: 15px;\n  text-align: center;\n  vertical-align: middle;\n  font-weight: 500;\n  font-size: 15px;\n  color: white;\n  font-family: Montserrat !important;\n  border-bottom: solid 1px  #337ab7; }\n\ntfoot {\n  display: table-header-group !important;\n  vertical-align: middle;\n  border-color: inherit; }\n\n.charts {\n  display: block;\n  width: 100%;\n  height: 500px;\n  background-color: #1f335a;\n  color: #fff; }\n\n#chartdiv {\n  width: 100%;\n  height: 500px;\n  font-size: 11px; }\n\n:host /deep/ div#demoapptable_filter label {\n  color: white !important; }\n\n:host /deep/ div#demoapptable_info {\n  color: white !important; }\n\n:host /deep/ a#demoapptable_previous {\n  color: white !important; }\n\n:host /deep/ a#demoapptable_next {\n  color: white !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0U6XFxQUk9KRUNUU1xcQU5HVUxBUlxcZGVtb3Rlc3Qvc3JjXFxhcHBcXGRhc2hib2FyZFxcZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksdUJBQXVCO0VBQ3ZCLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLG9DQUFvQyxFQUFBOztBQUd4QztFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGlCQUFpQjtFQUNqQixrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSwwQkFBMEI7RUFDMUIsdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0kseUJBQXlCO0VBQ3pCLGtDQUFrQyxFQUFBOztBQUV0QztFQUNJLFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSx5QkFBeUI7RUFDekIsdUJBQXVCLEVBQUE7O0FBRTNCO0VBQ0kseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLDJCQUEyQjtFQUMzQiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLHVCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLG9DQUFvQztFQUNwQyxrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSxvQ0FBb0M7RUFDcEMsdUJBQXVCO0VBQ3ZCLGtDQUFrQyxFQUFBOztBQUd0QztFQUNJLGFBQWEsRUFBQTs7QUFHakI7RUFDSSx3QkFBd0I7RUFDeEIsMkJBQTJCLEVBQUE7O0FBRy9CO0VBQ0ksa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsMkJBQTBCO0VBQzFCLDhCQUE4QjtFQUM5QixnQ0FBK0I7RUFDL0IsZ0NBQUEsRUFBaUM7O0FBR25DO0VBQWlDLHlCQUEwQixFQUFBOztBQUMzRDtFQUFnQyx5QkFBMEIsRUFBQTs7QUFDMUQ7RUFBd0IseUJBQTBCLEVBQUE7O0FBQ2xEO0VBQ0UsMEJBQTBCLEVBQUE7O0FBRTVCO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QiwwQkFBMEI7RUFDMUIsa0NBQWtDO0VBQ2xDLGlDQUFpQyxFQUFBOztBQUVuQztFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0JBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxpQ0FBaUMsRUFBQTs7QUFHbkM7RUFDRSxzQ0FBc0M7RUFDdEMsc0JBQXNCO0VBQ3RCLHFCQUFxQixFQUFBOztBQUl2QjtFQUNELGNBQWM7RUFDWCxXQUFZO0VBQ1osYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBSWY7RUFDQyxXQUFhO0VBQ2IsYUFBZTtFQUNmLGVBQWdCLEVBQUE7O0FBSWpCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZpZXcge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdzogYXV0byAhaW1wb3J0YW50O1xyXG59XHJcbnNlY3Rpb24udmlldy5tYWluYmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxNjY4RCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGl0bGVhcmVhe1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmJ1dHRvbmFyZWEge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGVidG57XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMHJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubW9kYWwtY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUYzMzVBO1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQgIWltcG9ydGFudDtcclxufVxyXG5oNCNteU1vZGFsTGFiZWwge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlucHV0LmRhc2hib2FyZGZvcm1maWVsZHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzM1YTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcbnNlbGVjdC5kYXNoYm9hcmRmb3JtZmllbGRze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzM1YTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tZGItY2FyZC5mb3JtY2FyZC5jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMzM1QSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQgIWltcG9ydGFudDtcclxufVxyXG5cclxubWRiLWNhcmQuY2hhcnRjYXJkMi5jYXJkIHtcclxuICAgIG1hcmdpbiA6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGMzM1QSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQgIWltcG9ydGFudDtcclxufVxyXG5cclxubWRiLWNhcmQtaGVhZGVyLndoaXRlLXRleHQuaW5kaWdvLmNhcmQtaGVhZGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRjMzNUEgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1kYi1jYXJkLWJvZHkuY2FyZC1ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjMzNWEgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gIH1cclxuXHJcbi50YWJsZWFyZWEge1xyXG4gICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZGVtb2FwcHRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBNb250c2VycmF0ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OmF1dG8gIWltcG9ydGFudDtcclxuICAgIHRhYmxlLWxheW91dDogZml4ZWQgIWltcG9ydGFudDsgXHJcbiAgICB3b3JkLXdyYXA6YnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgICMzMzdhYjc7ICovXHJcbiAgfVxyXG4gIFxyXG4gIC5kZW1vYXBwdGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICMxRjMzNUEgfVxyXG4gIC5kZW1vYXBwdGFibGUgdHI6bnRoLWNoaWxkKG9kZCl7YmFja2dyb3VuZC1jb2xvcjogIzFGMzM1QSB9IFxyXG4gIC5kZW1vYXBwdGFibGUgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICMxRjMzNUEgfVxyXG4gIC5kZW1vYXBwdGFibGUgLmljb25ze1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kZW1vYXBwdGFibGUgdGh7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICAjMzM3YWI3O1xyXG4gIH1cclxuICAuZGVtb2FwcHRhYmxlIHRke1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LWZhbWlseTogTW9udHNlcnJhdCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICAjMzM3YWI3O1xyXG4gIH1cclxuICBcclxuICB0Zm9vdCB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXAgIWltcG9ydGFudDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBib3JkZXItY29sb3I6IGluaGVyaXQ7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmNoYXJ0cyB7IFxyXG5cdGRpc3BsYXk6IGJsb2NrOyBcclxuICAgIHdpZHRoIDogMTAwJTsgXHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmMzM1YTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuXHJcbiNjaGFydGRpdiB7XHJcblx0d2lkdGhcdFx0OiAxMDAlO1xyXG5cdGhlaWdodFx0XHQ6IDUwMHB4O1xyXG5cdGZvbnQtc2l6ZVx0OiAxMXB4O1xyXG59XHJcblxyXG5cclxuOmhvc3QgL2RlZXAvIGRpdiNkZW1vYXBwdGFibGVfZmlsdGVyIGxhYmVsIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gZGl2I2RlbW9hcHB0YWJsZV9pbmZvIHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCAvZGVlcC8gYSNkZW1vYXBwdGFibGVfcHJldmlvdXMge1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IC9kZWVwLyBhI2RlbW9hcHB0YWJsZV9uZXh0IHtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59Il19 */"

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
            // this.loadMap();
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
                    "bLengthChange": false,
                    "pageLength": 10,
                    "searching": true,
                    "bInfo": true,
                    "bSort": true,
                    "bPaginate": true,
                    "dom": 'frtip',
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
        this.cancel();
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
        this.loginservice.addmetric(this.metricform).then(function (res) {
            if (jQuery.fn.dataTable.isDataTable('#demoapptable')) {
                jQuery('#demoapptable').DataTable().clear().destroy();
            }
            _this.cancel();
            _this.gettabledata();
        });
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
        var chart = this.AmCharts.makeChart("chartdiv", {
            "type": "serial",
            "theme": "dark",
            "dataProvider": [{
                    "country": "USA",
                    "visits": 2025
                }, {
                    "country": "China",
                    "visits": 1882
                }, {
                    "country": "Japan",
                    "visits": 1809
                }, {
                    "country": "Germany",
                    "visits": 1322
                }, {
                    "country": "UK",
                    "visits": 1122
                }, {
                    "country": "France",
                    "visits": 1114
                }, {
                    "country": "India",
                    "visits": 984
                }, {
                    "country": "Spain",
                    "visits": 711
                }, {
                    "country": "Netherlands",
                    "visits": 665
                }, {
                    "country": "Russia",
                    "visits": 580
                }, {
                    "country": "South Korea",
                    "visits": 443
                }, {
                    "country": "Canada",
                    "visits": 441
                }, {
                    "country": "Brazil",
                    "visits": 395
                }],
            "valueAxes": [{
                    "gridColor": "#FFFFFF",
                    "gridAlpha": 0.2,
                    "dashLength": 0
                }],
            "gridAboveGraphs": true,
            "startDuration": 1,
            "graphs": [{
                    "balloonText": "[[category]]: <b>[[value]]</b>",
                    "fillAlphas": 0.8,
                    "lineAlpha": 0.2,
                    "type": "column",
                    "valueField": "visits"
                }],
            "chartCursor": {
                "categoryBalloonEnabled": false,
                "cursorAlpha": 0,
                "zoomable": false
            },
            "categoryField": "country",
            "categoryAxis": {
                "gridPosition": "start",
                "gridAlpha": 0,
                "tickPosition": "start",
                "tickLength": 20
            },
            "export": {
                "enabled": true
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

module.exports = "<section class=\"view intro-2\">\n    <div class=\"full-bg-img mask rgba-gradient\">\n      <div class=\"container flex-center\">\n        <div class=\"d-flex align-items-center content-height w-100\">\n          <div class=\"row flex-center pt-5 mt-3 w-100\">\n            <div class=\"col-md-12 col-xl-6 offset-xl-1\">\n              <mdb-card class=\"wow fadeInRight loginbox\" data-wow-delay=\"0.3s\">\n                <mdb-card-body>\n                  <div class=\"text-center\">\n                    <h3 class=\"white-text\">\n                      <mdb-icon fas icon=\"smile-beam\" class=\"text-white\"></mdb-icon> Demo App</h3>\n                    <hr class=\"hr-light\">\n                  </div>\n                  <div class=\"md-form\">\n                    <mdb-icon fas icon=\"envelope\" class=\"text-white active\"></mdb-icon>\n                    <input type=\"email\" id=\"form2\" class=\"text-white form-control\" mdbInput [(ngModel)]=\"localUser.emailid\" [ngModelOptions]=\"{standalone: true}\" required=\"\" #emailid=\"ngModel\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\">\n                    <label for=\"form2\" class=\"text-white\">Your email</label>\n                  </div>\n                  <div class=\"md-form\">\n                    <mdb-icon fas icon=\"lock\" class=\"text-white active\"></mdb-icon>\n                    <input type=\"password\" id=\"form4\" class=\"text-white form-control\" mdbInput [(ngModel)]=\"localUser.password\" [ngModelOptions]=\"{standalone: true}\" #password=\"ngModel\" required=\"\">\n                    <label for=\"form4\" class=\"text-white\">Your password</label>\n                  </div>\n                  <div class=\"text-center mt-4\">\n                    <button mdbBtn color=\"indigo\" [disabled]=\"emailid.errors || password.errors\" mdbWavesEffect (click)=\"login(localUser.emailid,localUser.password)\">Login</button>\n                  </div>\n                </mdb-card-body>\n              </mdb-card>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/loginmodule/loginmodule.component.scss":
/*!********************************************************!*\
  !*** ./src/app/loginmodule/loginmodule.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro-header {\n  height: unset !important; }\n\n.intro-2 {\n  background: url(\"https://mdbootstrap.com/img/Photos/Others/img%20(42).jpg\") no-repeat center center;\n  background-size: cover; }\n\n.view {\n  height: 100% !important; }\n\n.top-nav-collapse {\n  background-color: #3f51b5 !important; }\n\n.navbar:not(.top-nav-collapse) {\n  background: transparent !important; }\n\n:host /deep/ .card {\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12) !important;\n  border: 0 !important;\n  font-weight: 400 !important;\n  background-color: rgba(126, 123, 215, 0.2) !important; }\n\n@media (max-width: 768px) {\n  .navbar:not(.top-nav-collapse) {\n    background: #3f51b5 !important; } }\n\n.rgba-gradient .full-bg-img {\n  background: linear-gradient(45deg, rgba(83, 125, 210, 0.4), rgba(178, 30, 123, 0.4) 100%); }\n\n.full-bg-img {\n  height: 100%; }\n\n.card {\n  background-color: rgba(229, 228, 255, 0.2); }\n\n.md-form .prefix {\n  font-size: 1.5rem;\n  margin-top: 1rem; }\n\n.md-form label {\n  color: #ffffff; }\n\nh6 {\n  line-height: 1.7; }\n\n@media (max-width: 740px) {\n  .full-height,\n  .full-height body,\n  .full-height header,\n  .full-height header .view {\n    height: 1040px; } }\n\n#toast-container > div {\n  opacity: 1; }\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.toast-top-center {\n  top: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-bottom-center {\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-top-full-width {\n  top: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-bottom-full-width {\n  bottom: 0;\n  right: 0;\n  width: 100%; }\n\n.toast-top-left {\n  top: 12px;\n  left: 12px; }\n\n.toast-center-center {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n\n.toast-top-right {\n  top: 12px;\n  right: 12px; }\n\n.toast-bottom-right {\n  right: 12px;\n  bottom: 12px; }\n\n.toast-bottom-left {\n  bottom: 12px;\n  left: 12px; }\n\n/* toast styles */\n\n.toast-title {\n  font-weight: bold; }\n\n.toast-message {\n  word-wrap: break-word; }\n\n.toast-message a, .toast-message label {\n    color: #FFFFFF; }\n\n.toast-message a:hover {\n    color: #CCCCCC;\n    text-decoration: none; }\n\n.toast-close-button {\n  position: relative;\n  right: -0.3em;\n  top: -0.3em;\n  float: right;\n  font-size: 20px;\n  font-weight: bold;\n  color: #FFFFFF;\n  text-shadow: 0 1px 0 #ffffff;\n  /* opacity: 0.8; */ }\n\n.toast-close-button:hover, .toast-close-button:focus {\n    color: #000000;\n    text-decoration: none;\n    cursor: pointer;\n    opacity: 0.4; }\n\n/*Additional properties for button version\n iOS requires the button element instead of an anchor tag.\n If you want the anchor version, it requires `href=\"#\"`.*/\n\nbutton.toast-close-button {\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0; }\n\n.toast-container {\n  pointer-events: none;\n  position: fixed;\n  z-index: 999999; }\n\n.toast-container * {\n    box-sizing: border-box; }\n\n.toast-container .ngx-toastr {\n    position: relative;\n    overflow: hidden;\n    margin: 0 0 6px;\n    padding: 15px 15px 15px 50px;\n    width: 300px;\n    border-radius: 3px 3px 3px 3px;\n    background-position: 15px center;\n    background-repeat: no-repeat;\n    background-size: 24px;\n    box-shadow: 0 0 12px #999999;\n    color: #FFFFFF; }\n\n.toast-container .ngx-toastr:hover {\n      box-shadow: 0 0 12px #000000;\n      opacity: 1;\n      cursor: pointer; }\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/info-circle.svg */\n\n.toast-info {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z'/%3E%3C/svg%3E\"); }\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/times-circle.svg */\n\n.toast-error {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z'/%3E%3C/svg%3E\"); }\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/check.svg */\n\n.toast-success {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' width='512' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/%3E%3C/svg%3E\"); }\n\n/* https://github.com/FortAwesome/Font-Awesome-Pro/blob/master/advanced-options/raw-svg/regular/exclamation-triangle.svg */\n\n.toast-warning {\n  background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512' width='576' height='512'%3E%3Cpath fill='rgb(255,255,255)' d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'/%3E%3C/svg%3E\"); }\n\n.toast-container.toast-top-center .ngx-toastr, .toast-container.toast-bottom-center .ngx-toastr {\n  width: 300px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.toast-container.toast-top-full-width .ngx-toastr, .toast-container.toast-bottom-full-width .ngx-toastr {\n  width: 96%;\n  margin-left: auto;\n  margin-right: auto; }\n\n.ngx-toastr {\n  background-color: #030303;\n  pointer-events: auto; }\n\n.toast-success {\n  background-color: #51A351; }\n\n.toast-error {\n  background-color: #BD362F; }\n\n.toast-info {\n  background-color: #2F96B4; }\n\n.toast-warning {\n  background-color: #F89406; }\n\n.toast-progress {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  height: 4px;\n  background-color: #000000;\n  opacity: 0.4; }\n\n/* Responsive Design */\n\n@media all and (max-width: 240px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 11em; }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em; } }\n\n@media all and (min-width: 241px) and (max-width: 480px) {\n  .toast-container .ngx-toastr.div {\n    padding: 8px 8px 8px 50px;\n    width: 18em; }\n  .toast-container .toast-close-button {\n    right: -0.2em;\n    top: -0.2em; } }\n\n@media all and (min-width: 481px) and (max-width: 768px) {\n  .toast-container .ngx-toastr.div {\n    padding: 15px 15px 15px 50px;\n    width: 25em; } }\n\nmdb-card-body.card-body {\n  font-family: Montserrat !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW5tb2R1bGUvRTpcXFBST0pFQ1RTXFxBTkdVTEFSXFxkZW1vdGVzdC9zcmNcXGFwcFxcbG9naW5tb2R1bGVcXGxvZ2lubW9kdWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbm1vZHVsZS9sb2dpbm1vZHVsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUF3QixFQUFBOztBQUUxQjtFQUNFLG1HQUFrRztFQUNsRyxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSx1QkFBdUIsRUFBQTs7QUFFekI7RUFDRSxvQ0FBb0MsRUFBQTs7QUFFdEM7RUFDRSxrQ0FBa0MsRUFBQTs7QUFFcEM7RUFDTSx3RkFBd0Y7RUFDeEYsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQixxREFBcUQsRUFBQTs7QUFFM0Q7RUFDRTtJQUNFLDhCQUE4QixFQUFBLEVBQy9COztBQUVIO0VBQ0UseUZBQXlGLEVBQUE7O0FBRTNGO0VBQ0UsWUFBWSxFQUFBOztBQUVkO0VBQ0UsMENBQTBDLEVBQUE7O0FBRzVDO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUVsQjtFQUNFLGNBQWMsRUFBQTs7QUFFaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFFbEI7RUFDRTs7OztJQUlFLGNBQWMsRUFBQSxFQUNmOztBQUdIO0VBQ0UsVUFBUyxFQUFBOztBQUVYO0VBQ0UsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0MsRUFBQTs7QUFHbEM7RUFDRSxNQUFNO0VBQ04sUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUdiO0VBQ0UsTUFBTTtFQUNOLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBR2I7RUFDRSxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFHYjtFQUNFLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBRVo7RUFDRSxRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQyxFQUFBOztBQUVsQztFQUNFLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdkO0VBQ0UsWUFBWTtFQUNaLFVBQVUsRUFBQTs7QUFHWixpQkFBQTs7QUFFQTtFQUNFLGlCQUFpQixFQUFBOztBQUduQjtFQUNFLHFCQUFxQixFQUFBOztBQUR2QjtJQUdJLGNBQWMsRUFBQTs7QUFIbEI7SUFNSSxjQUFjO0lBQ2QscUJBQXFCLEVBQUE7O0FBSXpCO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztFQUNkLDRCQUE0QjtFQUM1QixrQkFBQSxFQUFtQjs7QUFUckI7SUFXSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixZQUFZLEVBQUE7O0FBSWhCOzt5RENqQnlEOztBRHFCekQ7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixTQUFTLEVBQUE7O0FBR1g7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFIakI7SUFLSSxzQkFBc0IsRUFBQTs7QUFMMUI7SUFRSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixnQ0FBZ0M7SUFDaEMsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsY0FBYyxFQUFBOztBQWxCbEI7TUFvQk0sNEJBQTRCO01BQzVCLFVBQVU7TUFDVixlQUFlLEVBQUE7O0FBS3JCLGlIQUFBOztBQUVBO0VBQ0UscWxCQUFxbEIsRUFBQTs7QUFHdmxCLGtIQUFBOztBQUVBO0VBQ0UsNmpCQUE2akIsRUFBQTs7QUFHL2pCLDJHQUFBOztBQUVBO0VBQ0Usd2RBQXdkLEVBQUE7O0FBRzFkLDBIQUFBOztBQUVBO0VBQ0Usc29CQUFzb0IsRUFBQTs7QUFHeG9CO0VBRUksWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTs7QUFKdEI7RUFPSSxVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUl0QjtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0IsRUFBQTs7QUFHdEI7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSx5QkFBeUIsRUFBQTs7QUFHM0I7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFNBQVM7RUFDVCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFlBQVksRUFBQTs7QUFHZCxzQkFBQTs7QUFDQTtFQUNFO0lBRUkseUJBQXlCO0lBQ3pCLFdBQVcsRUFBQTtFQUhmO0lBTUksYUFBYTtJQUNiLFdBQVcsRUFBQSxFQUNaOztBQUlMO0VBQ0U7SUFFSSx5QkFBeUI7SUFDekIsV0FBVyxFQUFBO0VBSGY7SUFNSSxhQUFhO0lBQ2IsV0FBVyxFQUFBLEVBQ1o7O0FBSUw7RUFDRTtJQUNFLDRCQUE0QjtJQUM1QixXQUFXLEVBQUEsRUFDWjs7QUFHSDtFQUNFLGtDQUFrQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW5tb2R1bGUvbG9naW5tb2R1bGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm8taGVhZGVyIHtcbiAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xufVxuLmludHJvLTIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCJodHRwczovL21kYm9vdHN0cmFwLmNvbS9pbWcvUGhvdG9zL090aGVycy9pbWclMjAoNDIpLmpwZ1wiKW5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnZpZXcge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbn1cbi50b3AtbmF2LWNvbGxhcHNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNmNTFiNSAhaW1wb3J0YW50O1xufVxuLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbjpob3N0IC9kZWVwLyAuY2FyZHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDAgIWltcG9ydGFudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI2LCAxMjMsIDIxNSwgMC4yKSAhaW1wb3J0YW50O1xuICB9XG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLm5hdmJhcjpub3QoLnRvcC1uYXYtY29sbGFwc2UpIHtcbiAgICBiYWNrZ3JvdW5kOiAjM2Y1MWI1ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5yZ2JhLWdyYWRpZW50IC5mdWxsLWJnLWltZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg4MywgMTI1LCAyMTAsIDAuNCksIHJnYmEoMTc4LCAzMCwgMTIzLCAwLjQpIDEwMCUpO1xufVxuLmZ1bGwtYmctaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwgMjI4LCAyNTUsIDAuMik7XG59XG5cbi5tZC1mb3JtIC5wcmVmaXgge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbn1cbi5tZC1mb3JtIGxhYmVsIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5oNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzQwcHgpIHtcbiAgLmZ1bGwtaGVpZ2h0LFxuICAuZnVsbC1oZWlnaHQgYm9keSxcbiAgLmZ1bGwtaGVpZ2h0IGhlYWRlcixcbiAgLmZ1bGwtaGVpZ2h0IGhlYWRlciAudmlldyB7XG4gICAgaGVpZ2h0OiAxMDQwcHg7XG4gIH1cbn1cblxuI3RvYXN0LWNvbnRhaW5lciA+IGRpdiB7XG4gIG9wYWNpdHk6MTtcbn1cbi50b2FzdC1jZW50ZXItY2VudGVyIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi50b2FzdC10b3AtY2VudGVyIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b2FzdC1ib3R0b20tY2VudGVyIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50b2FzdC10b3AtZnVsbC13aWR0aCB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udG9hc3QtYm90dG9tLWZ1bGwtd2lkdGgge1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRvYXN0LXRvcC1sZWZ0IHtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuLnRvYXN0LWNlbnRlci1jZW50ZXIge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi50b2FzdC10b3AtcmlnaHQge1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxMnB4O1xufVxuXG4udG9hc3QtYm90dG9tLXJpZ2h0IHtcbiAgcmlnaHQ6IDEycHg7XG4gIGJvdHRvbTogMTJweDtcbn1cblxuLnRvYXN0LWJvdHRvbS1sZWZ0IHtcbiAgYm90dG9tOiAxMnB4O1xuICBsZWZ0OiAxMnB4O1xufVxuXG4vKiB0b2FzdCBzdHlsZXMgKi9cblxuLnRvYXN0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50b2FzdC1tZXNzYWdlIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICBhLCBsYWJlbCB7XG4gICAgY29sb3I6ICNGRkZGRkY7XG4gIH1cbiAgYTpob3ZlciB7XG4gICAgY29sb3I6ICNDQ0NDQ0M7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB9XG59XG5cbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHJpZ2h0OiAtMC4zZW07XG4gIHRvcDogLTAuM2VtO1xuICBmbG9hdDogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LXNoYWRvdzogMCAxcHggMCAjZmZmZmZmO1xuICAvKiBvcGFjaXR5OiAwLjg7ICovXG4gICY6aG92ZXIsICY6Zm9jdXMge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cbi8qQWRkaXRpb25hbCBwcm9wZXJ0aWVzIGZvciBidXR0b24gdmVyc2lvblxuIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxuIElmIHlvdSB3YW50IHRoZSBhbmNob3IgdmVyc2lvbiwgaXQgcmVxdWlyZXMgYGhyZWY9XCIjXCJgLiovXG5cbmJ1dHRvbi50b2FzdC1jbG9zZS1idXR0b24ge1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDA7XG59XG5cbi50b2FzdC1jb250YWluZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5OTk7XG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbiAgLm5neC10b2FzdHIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMCAwIDZweDtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEycHggIzk5OTk5OTtcbiAgICBjb2xvcjogI0ZGRkZGRjtcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAxMnB4ICMwMDAwMDA7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9pbmZvLWNpcmNsZS5zdmcgKi9cblxuLnRvYXN0LWluZm8ge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00yNTYgOEMxMTkuMDQzIDggOCAxMTkuMDgzIDggMjU2YzAgMTM2Ljk5NyAxMTEuMDQzIDI0OCAyNDggMjQ4czI0OC0xMTEuMDAzIDI0OC0yNDhDNTA0IDExOS4wODMgMzkyLjk1NyA4IDI1NiA4em0wIDExMGMyMy4xOTYgMCA0MiAxOC44MDQgNDIgNDJzLTE4LjgwNCA0Mi00MiA0Mi00Mi0xOC44MDQtNDItNDIgMTguODA0LTQyIDQyLTQyem01NiAyNTRjMCA2LjYyNy01LjM3MyAxMi0xMiAxMmgtODhjLTYuNjI3IDAtMTItNS4zNzMtMTItMTJ2LTI0YzAtNi42MjcgNS4zNzMtMTIgMTItMTJoMTJ2LTY0aC0xMmMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmg2NGM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjEwMGgxMmM2LjYyNyAwIDEyIDUuMzczIDEyIDEydjI0eicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvdGltZXMtY2lyY2xlLnN2ZyAqL1xuXG4udG9hc3QtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00yNTYgOEMxMTkgOCA4IDExOSA4IDI1NnMxMTEgMjQ4IDI0OCAyNDggMjQ4LTExMSAyNDgtMjQ4UzM5MyA4IDI1NiA4em0xMjEuNiAzMTMuMWM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzM4IDM3Ny42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMjU2IDMxMmwtNjUuMSA2NS42Yy00LjcgNC43LTEyLjMgNC43LTE3IDBMMTM0LjQgMzM4Yy00LjctNC43LTQuNy0xMi4zIDAtMTdsNjUuNi02NS02NS42LTY1LjFjLTQuNy00LjctNC43LTEyLjMgMC0xN2wzOS42LTM5LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDY1IDY1LjcgNjUuMS02NS42YzQuNy00LjcgMTIuMy00LjcgMTcgMGwzOS42IDM5LjZjNC43IDQuNyA0LjcgMTIuMyAwIDE3TDMxMiAyNTZsNjUuNiA2NS4xeicvJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvY2hlY2suc3ZnICovXG5cbi50b2FzdC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB2aWV3Qm94PScwIDAgNTEyIDUxMicgd2lkdGg9JzUxMicgaGVpZ2h0PSc1MTInJTNFJTNDcGF0aCBmaWxsPSdyZ2IoMjU1LDI1NSwyNTUpJyBkPSdNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Jy8lM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4vKiBodHRwczovL2dpdGh1Yi5jb20vRm9ydEF3ZXNvbWUvRm9udC1Bd2Vzb21lLVByby9ibG9iL21hc3Rlci9hZHZhbmNlZC1vcHRpb25zL3Jhdy1zdmcvcmVndWxhci9leGNsYW1hdGlvbi10cmlhbmdsZS5zdmcgKi9cblxuLnRvYXN0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1NzYgNTEyJyB3aWR0aD0nNTc2JyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J001NjkuNTE3IDQ0MC4wMTNDNTg3Ljk3NSA0NzIuMDA3IDU2NC44MDYgNTEyIDUyNy45NCA1MTJINDguMDU0Yy0zNi45MzcgMC01OS45OTktNDAuMDU1LTQxLjU3Ny03MS45ODdMMjQ2LjQyMyAyMy45ODVjMTguNDY3LTMyLjAwOSA2NC43Mi0zMS45NTEgODMuMTU0IDBsMjM5Ljk0IDQxNi4wMjh6TTI4OCAzNTRjLTI1LjQwNSAwLTQ2IDIwLjU5NS00NiA0NnMyMC41OTUgNDYgNDYgNDYgNDYtMjAuNTk1IDQ2LTQ2LTIwLjU5NS00Ni00Ni00NnptLTQzLjY3My0xNjUuMzQ2bDcuNDE4IDEzNmMuMzQ3IDYuMzY0IDUuNjA5IDExLjM0NiAxMS45ODIgMTEuMzQ2aDQ4LjU0NmM2LjM3MyAwIDExLjYzNS00Ljk4MiAxMS45ODItMTEuMzQ2bDcuNDE4LTEzNmMuMzc1LTYuODc0LTUuMDk4LTEyLjY1NC0xMS45ODItMTIuNjU0aC02My4zODNjLTYuODg0IDAtMTIuMzU2IDUuNzgtMTEuOTgxIDEyLjY1NHonLyUzRSUzQy9zdmclM0VcIik7XG59XG5cbi50b2FzdC1jb250YWluZXIge1xuICAmLnRvYXN0LXRvcC1jZW50ZXIgLm5neC10b2FzdHIsICYudG9hc3QtYm90dG9tLWNlbnRlciAubmd4LXRvYXN0ciB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxuICAmLnRvYXN0LXRvcC1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyLCAmLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyIHtcbiAgICB3aWR0aDogOTYlO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgfVxufVxuXG4ubmd4LXRvYXN0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzAzMDM7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuXG4udG9hc3Qtc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MUEzNTE7XG59XG5cbi50b2FzdC1lcnJvciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNCRDM2MkY7XG59XG5cbi50b2FzdC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGOTZCNDtcbn1cblxuLnRvYXN0LXdhcm5pbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5NDA2O1xufVxuXG4udG9hc3QtcHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuNDtcbn1cblxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIge1xuICAgIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgICAgd2lkdGg6IDExZW07XG4gICAgfVxuICAgIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgICAgcmlnaHQ6IC0wLjJlbTtcbiAgICAgIHRvcDogLTAuMmVtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiAyNDFweCkgYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIge1xuICAgIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgICAgd2lkdGg6IDE4ZW07XG4gICAgfVxuICAgIC50b2FzdC1jbG9zZS1idXR0b24ge1xuICAgICAgcmlnaHQ6IC0wLjJlbTtcbiAgICAgIHRvcDogLTAuMmVtO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWluLXdpZHRoOiA0ODFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICAgIHdpZHRoOiAyNWVtO1xuICB9XG59XG5cbm1kYi1jYXJkLWJvZHkuY2FyZC1ib2R5IHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQgIWltcG9ydGFudDtcbn0iLCIuaW50cm8taGVhZGVyIHtcbiAgaGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50OyB9XG5cbi5pbnRyby0yIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9tZGJvb3RzdHJhcC5jb20vaW1nL1Bob3Rvcy9PdGhlcnMvaW1nJTIwKDQyKS5qcGdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7IH1cblxuLnZpZXcge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDsgfVxuXG4udG9wLW5hdi1jb2xsYXBzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjUgIWltcG9ydGFudDsgfVxuXG4ubmF2YmFyOm5vdCgudG9wLW5hdi1jb2xsYXBzZSkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50OyB9XG5cbjpob3N0IC9kZWVwLyAuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI2LCAxMjMsIDIxNSwgMC4yKSAhaW1wb3J0YW50OyB9XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAubmF2YmFyOm5vdCgudG9wLW5hdi1jb2xsYXBzZSkge1xuICAgIGJhY2tncm91bmQ6ICMzZjUxYjUgIWltcG9ydGFudDsgfSB9XG5cbi5yZ2JhLWdyYWRpZW50IC5mdWxsLWJnLWltZyB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg4MywgMTI1LCAyMTAsIDAuNCksIHJnYmEoMTc4LCAzMCwgMTIzLCAwLjQpIDEwMCUpOyB9XG5cbi5mdWxsLWJnLWltZyB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMjgsIDI1NSwgMC4yKTsgfVxuXG4ubWQtZm9ybSAucHJlZml4IHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIG1hcmdpbi10b3A6IDFyZW07IH1cblxuLm1kLWZvcm0gbGFiZWwge1xuICBjb2xvcjogI2ZmZmZmZjsgfVxuXG5oNiB7XG4gIGxpbmUtaGVpZ2h0OiAxLjc7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc0MHB4KSB7XG4gIC5mdWxsLWhlaWdodCxcbiAgLmZ1bGwtaGVpZ2h0IGJvZHksXG4gIC5mdWxsLWhlaWdodCBoZWFkZXIsXG4gIC5mdWxsLWhlaWdodCBoZWFkZXIgLnZpZXcge1xuICAgIGhlaWdodDogMTA0MHB4OyB9IH1cblxuI3RvYXN0LWNvbnRhaW5lciA+IGRpdiB7XG4gIG9wYWNpdHk6IDE7IH1cblxuLnRvYXN0LWNlbnRlci1jZW50ZXIge1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgfVxuXG4udG9hc3QtdG9wLWNlbnRlciB7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi50b2FzdC1ib3R0b20tY2VudGVyIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnRvYXN0LXRvcC1mdWxsLXdpZHRoIHtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIHtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLnRvYXN0LXRvcC1sZWZ0IHtcbiAgdG9wOiAxMnB4O1xuICBsZWZ0OiAxMnB4OyB9XG5cbi50b2FzdC1jZW50ZXItY2VudGVyIHtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cblxuLnRvYXN0LXRvcC1yaWdodCB7XG4gIHRvcDogMTJweDtcbiAgcmlnaHQ6IDEycHg7IH1cblxuLnRvYXN0LWJvdHRvbS1yaWdodCB7XG4gIHJpZ2h0OiAxMnB4O1xuICBib3R0b206IDEycHg7IH1cblxuLnRvYXN0LWJvdHRvbS1sZWZ0IHtcbiAgYm90dG9tOiAxMnB4O1xuICBsZWZ0OiAxMnB4OyB9XG5cbi8qIHRvYXN0IHN0eWxlcyAqL1xuLnRvYXN0LXRpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cblxuLnRvYXN0LW1lc3NhZ2Uge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IH1cbiAgLnRvYXN0LW1lc3NhZ2UgYSwgLnRvYXN0LW1lc3NhZ2UgbGFiZWwge1xuICAgIGNvbG9yOiAjRkZGRkZGOyB9XG4gIC50b2FzdC1tZXNzYWdlIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjQ0NDQ0NDO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuXG4udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICByaWdodDogLTAuM2VtO1xuICB0b3A6IC0wLjNlbTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1zaGFkb3c6IDAgMXB4IDAgI2ZmZmZmZjtcbiAgLyogb3BhY2l0eTogMC44OyAqLyB9XG4gIC50b2FzdC1jbG9zZS1idXR0b246aG92ZXIsIC50b2FzdC1jbG9zZS1idXR0b246Zm9jdXMge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMC40OyB9XG5cbi8qQWRkaXRpb25hbCBwcm9wZXJ0aWVzIGZvciBidXR0b24gdmVyc2lvblxuIGlPUyByZXF1aXJlcyB0aGUgYnV0dG9uIGVsZW1lbnQgaW5zdGVhZCBvZiBhbiBhbmNob3IgdGFnLlxuIElmIHlvdSB3YW50IHRoZSBhbmNob3IgdmVyc2lvbiwgaXQgcmVxdWlyZXMgYGhyZWY9XCIjXCJgLiovXG5idXR0b24udG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgcGFkZGluZzogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAwOyB9XG5cbi50b2FzdC1jb250YWluZXIge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTk5OTk7IH1cbiAgLnRvYXN0LWNvbnRhaW5lciAqIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG1hcmdpbjogMCAwIDZweDtcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCA1MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDNweCAzcHg7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTVweCBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEycHggIzk5OTk5OTtcbiAgICBjb2xvcjogI0ZGRkZGRjsgfVxuICAgIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHI6aG92ZXIge1xuICAgICAgYm94LXNoYWRvdzogMCAwIDEycHggIzAwMDAwMDtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cblxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvaW5mby1jaXJjbGUuc3ZnICovXG4udG9hc3QtaW5mbyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOS4wNDMgOCA4IDExOS4wODMgOCAyNTZjMCAxMzYuOTk3IDExMS4wNDMgMjQ4IDI0OCAyNDhzMjQ4LTExMS4wMDMgMjQ4LTI0OEM1MDQgMTE5LjA4MyAzOTIuOTU3IDggMjU2IDh6bTAgMTEwYzIzLjE5NiAwIDQyIDE4LjgwNCA0MiA0MnMtMTguODA0IDQyLTQyIDQyLTQyLTE4LjgwNC00Mi00MiAxOC44MDQtNDIgNDItNDJ6bTU2IDI1NGMwIDYuNjI3LTUuMzczIDEyLTEyIDEyaC04OGMtNi42MjcgMC0xMi01LjM3My0xMi0xMnYtMjRjMC02LjYyNyA1LjM3My0xMiAxMi0xMmgxMnYtNjRoLTEyYy02LjYyNyAwLTEyLTUuMzczLTEyLTEydi0yNGMwLTYuNjI3IDUuMzczLTEyIDEyLTEyaDY0YzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MTAwaDEyYzYuNjI3IDAgMTIgNS4zNzMgMTIgMTJ2MjR6Jy8lM0UlM0Mvc3ZnJTNFXCIpOyB9XG5cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL3RpbWVzLWNpcmNsZS5zdmcgKi9cbi50b2FzdC1lcnJvciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDUxMiA1MTInIHdpZHRoPSc1MTInIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTI1NiA4QzExOSA4IDggMTE5IDggMjU2czExMSAyNDggMjQ4IDI0OCAyNDgtMTExIDI0OC0yNDhTMzkzIDggMjU2IDh6bTEyMS42IDMxMy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wzMzggMzc3LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwyNTYgMzEybC02NS4xIDY1LjZjLTQuNyA0LjctMTIuMyA0LjctMTcgMEwxMzQuNCAzMzhjLTQuNy00LjctNC43LTEyLjMgMC0xN2w2NS42LTY1LTY1LjYtNjUuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDM5LjYtMzkuNmM0LjctNC43IDEyLjMtNC43IDE3IDBsNjUgNjUuNyA2NS4xLTY1LjZjNC43LTQuNyAxMi4zLTQuNyAxNyAwbDM5LjYgMzkuNmM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMzEyIDI1Nmw2NS42IDY1LjF6Jy8lM0UlM0Mvc3ZnJTNFXCIpOyB9XG5cbi8qIGh0dHBzOi8vZ2l0aHViLmNvbS9Gb3J0QXdlc29tZS9Gb250LUF3ZXNvbWUtUHJvL2Jsb2IvbWFzdGVyL2FkdmFuY2VkLW9wdGlvbnMvcmF3LXN2Zy9yZWd1bGFyL2NoZWNrLnN2ZyAqL1xuLnRvYXN0LXN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA1MTIgNTEyJyB3aWR0aD0nNTEyJyBoZWlnaHQ9JzUxMiclM0UlM0NwYXRoIGZpbGw9J3JnYigyNTUsMjU1LDI1NSknIGQ9J00xNzMuODk4IDQzOS40MDRsLTE2Ni40LTE2Ni40Yy05Ljk5Ny05Ljk5Ny05Ljk5Ny0yNi4yMDYgMC0zNi4yMDRsMzYuMjAzLTM2LjIwNGM5Ljk5Ny05Ljk5OCAyNi4yMDctOS45OTggMzYuMjA0IDBMMTkyIDMxMi42OSA0MzIuMDk1IDcyLjU5NmM5Ljk5Ny05Ljk5NyAyNi4yMDctOS45OTcgMzYuMjA0IDBsMzYuMjAzIDM2LjIwNGM5Ljk5NyA5Ljk5NyA5Ljk5NyAyNi4yMDYgMCAzNi4yMDRsLTI5NC40IDI5NC40MDFjLTkuOTk4IDkuOTk3LTI2LjIwNyA5Ljk5Ny0zNi4yMDQtLjAwMXonLyUzRSUzQy9zdmclM0VcIik7IH1cblxuLyogaHR0cHM6Ly9naXRodWIuY29tL0ZvcnRBd2Vzb21lL0ZvbnQtQXdlc29tZS1Qcm8vYmxvYi9tYXN0ZXIvYWR2YW5jZWQtb3B0aW9ucy9yYXctc3ZnL3JlZ3VsYXIvZXhjbGFtYXRpb24tdHJpYW5nbGUuc3ZnICovXG4udG9hc3Qtd2FybmluZyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbDtjaGFyc2V0PXV0ZjgsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgdmlld0JveD0nMCAwIDU3NiA1MTInIHdpZHRoPSc1NzYnIGhlaWdodD0nNTEyJyUzRSUzQ3BhdGggZmlsbD0ncmdiKDI1NSwyNTUsMjU1KScgZD0nTTU2OS41MTcgNDQwLjAxM0M1ODcuOTc1IDQ3Mi4wMDcgNTY0LjgwNiA1MTIgNTI3Ljk0IDUxMkg0OC4wNTRjLTM2LjkzNyAwLTU5Ljk5OS00MC4wNTUtNDEuNTc3LTcxLjk4N0wyNDYuNDIzIDIzLjk4NWMxOC40NjctMzIuMDA5IDY0LjcyLTMxLjk1MSA4My4xNTQgMGwyMzkuOTQgNDE2LjAyOHpNMjg4IDM1NGMtMjUuNDA1IDAtNDYgMjAuNTk1LTQ2IDQ2czIwLjU5NSA0NiA0NiA0NiA0Ni0yMC41OTUgNDYtNDYtMjAuNTk1LTQ2LTQ2LTQ2em0tNDMuNjczLTE2NS4zNDZsNy40MTggMTM2Yy4zNDcgNi4zNjQgNS42MDkgMTEuMzQ2IDExLjk4MiAxMS4zNDZoNDguNTQ2YzYuMzczIDAgMTEuNjM1LTQuOTgyIDExLjk4Mi0xMS4zNDZsNy40MTgtMTM2Yy4zNzUtNi44NzQtNS4wOTgtMTIuNjU0LTExLjk4Mi0xMi42NTRoLTYzLjM4M2MtNi44ODQgMC0xMi4zNTYgNS43OC0xMS45ODEgMTIuNjU0eicvJTNFJTNDL3N2ZyUzRVwiKTsgfVxuXG4udG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1jZW50ZXIgLm5neC10b2FzdHIsIC50b2FzdC1jb250YWluZXIudG9hc3QtYm90dG9tLWNlbnRlciAubmd4LXRvYXN0ciB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bzsgfVxuXG4udG9hc3QtY29udGFpbmVyLnRvYXN0LXRvcC1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyLCAudG9hc3QtY29udGFpbmVyLnRvYXN0LWJvdHRvbS1mdWxsLXdpZHRoIC5uZ3gtdG9hc3RyIHtcbiAgd2lkdGg6IDk2JTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bzsgfVxuXG4ubmd4LXRvYXN0ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMzAzMDM7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvOyB9XG5cbi50b2FzdC1zdWNjZXNzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUxQTM1MTsgfVxuXG4udG9hc3QtZXJyb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkQzNjJGOyB9XG5cbi50b2FzdC1pbmZvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJGOTZCNDsgfVxuXG4udG9hc3Qtd2FybmluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGODk0MDY7IH1cblxuLnRvYXN0LXByb2dyZXNzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGhlaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiAwLjQ7IH1cblxuLyogUmVzcG9uc2l2ZSBEZXNpZ24gKi9cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDI0MHB4KSB7XG4gIC50b2FzdC1jb250YWluZXIgLm5neC10b2FzdHIuZGl2IHtcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCA1MHB4O1xuICAgIHdpZHRoOiAxMWVtOyB9XG4gIC50b2FzdC1jb250YWluZXIgLnRvYXN0LWNsb3NlLWJ1dHRvbiB7XG4gICAgcmlnaHQ6IC0wLjJlbTtcbiAgICB0b3A6IC0wLjJlbTsgfSB9XG5cbkBtZWRpYSBhbGwgYW5kIChtaW4td2lkdGg6IDI0MXB4KSBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnRvYXN0LWNvbnRhaW5lciAubmd4LXRvYXN0ci5kaXYge1xuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDUwcHg7XG4gICAgd2lkdGg6IDE4ZW07IH1cbiAgLnRvYXN0LWNvbnRhaW5lciAudG9hc3QtY2xvc2UtYnV0dG9uIHtcbiAgICByaWdodDogLTAuMmVtO1xuICAgIHRvcDogLTAuMmVtOyB9IH1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDgxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAudG9hc3QtY29udGFpbmVyIC5uZ3gtdG9hc3RyLmRpdiB7XG4gICAgcGFkZGluZzogMTVweCAxNXB4IDE1cHggNTBweDtcbiAgICB3aWR0aDogMjVlbTsgfSB9XG5cbm1kYi1jYXJkLWJvZHkuY2FyZC1ib2R5IHtcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQgIWltcG9ydGFudDsgfVxuIl19 */"

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

module.exports = __webpack_require__(/*! E:\PROJECTS\ANGULAR\demotest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map