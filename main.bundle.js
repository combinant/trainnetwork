webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/ArrayDataSource.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArrayDataSource; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ArrayDataSource = (function (_super) {
    __extends(ArrayDataSource, _super);
    function ArrayDataSource() {
        var _this = _super.call(this) || this;
        _this.subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_BehaviorSubject__["BehaviorSubject"]([]);
        return _this;
    }
    Object.defineProperty(ArrayDataSource.prototype, "currentData", {
        get: function () {
            return this.subject.value;
        },
        enumerable: true,
        configurable: true
    });
    ArrayDataSource.prototype.setData = function (data) {
        this.subject.next(data);
    };
    ArrayDataSource.prototype.connect = function () {
        return this.subject.asObservable();
    };
    ArrayDataSource.prototype.disconnect = function () { };
    return ArrayDataSource;
}(__WEBPACK_IMPORTED_MODULE_1__angular_cdk__["_1" /* DataSource */]));

//# sourceMappingURL=ArrayDataSource.js.map

/***/ }),

/***/ "../../../../../src/app/RouteUrls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteUrls; });
var RouteUrls = (function () {
    function RouteUrls() {
    }
    return RouteUrls;
}());

RouteUrls.ADD_SUFFIX = '/add';
RouteUrls.URL_MAP = 'map';
RouteUrls.URL_ROUTES = 'routes';
RouteUrls.URL_ROUTE_ADD = "" + RouteUrls.URL_ROUTES + RouteUrls.ADD_SUFFIX;
RouteUrls.URL_OPERATORS = 'operators';
RouteUrls.URL_OPERATOR_ADD = "" + RouteUrls.URL_OPERATORS + RouteUrls.ADD_SUFFIX;
//# sourceMappingURL=RouteUrls.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_map_container_map_container_component__ = __webpack_require__("../../../../../src/app/map/map-container/map-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__routes_routes_container_routes_container_component__ = __webpack_require__("../../../../../src/app/routes/routes-container/routes-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__RouteUrls__ = __webpack_require__("../../../../../src/app/RouteUrls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__routes_route_container_route_container_component__ = __webpack_require__("../../../../../src/app/routes/route-container/route-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_cancel_route_detail_guard__ = __webpack_require__("../../../../../src/app/guards/cancel-route-detail.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__operators_operators_container_operators_container_component__ = __webpack_require__("../../../../../src/app/operators/operators-container/operators-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__operators_operator_container_operator_container_component__ = __webpack_require__("../../../../../src/app/operators/operator-container/operator-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_cancel_operator_detail_guard__ = __webpack_require__("../../../../../src/app/guards/cancel-operator-detail.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: __WEBPACK_IMPORTED_MODULE_4__RouteUrls__["a" /* RouteUrls */].URL_MAP,
        component: __WEBPACK_IMPORTED_MODULE_2__map_map_container_map_container_component__["a" /* MapContainerComponent */]
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_4__RouteUrls__["a" /* RouteUrls */].URL_ROUTES,
        component: __WEBPACK_IMPORTED_MODULE_3__routes_routes_container_routes_container_component__["a" /* RoutesContainerComponent */]
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_4__RouteUrls__["a" /* RouteUrls */].URL_ROUTES + '/:id',
        component: __WEBPACK_IMPORTED_MODULE_5__routes_route_container_route_container_component__["a" /* RouteContainerComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_6__guards_cancel_route_detail_guard__["a" /* CancelRouteDetailGuard */]]
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_4__RouteUrls__["a" /* RouteUrls */].URL_ROUTE_ADD,
        component: __WEBPACK_IMPORTED_MODULE_5__routes_route_container_route_container_component__["a" /* RouteContainerComponent */]
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_4__RouteUrls__["a" /* RouteUrls */].URL_OPERATORS,
        component: __WEBPACK_IMPORTED_MODULE_7__operators_operators_container_operators_container_component__["a" /* OperatorsContainerComponent */]
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_4__RouteUrls__["a" /* RouteUrls */].URL_OPERATORS + '/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__operators_operator_container_operator_container_component__["a" /* OperatorContainerComponent */],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_9__guards_cancel_operator_detail_guard__["a" /* CancelOperatorDetailGuard */]]
    },
    {
        path: __WEBPACK_IMPORTED_MODULE_4__RouteUrls__["a" /* RouteUrls */].URL_OPERATOR_ADD,
        component: __WEBPACK_IMPORTED_MODULE_8__operators_operator_container_operator_container_component__["a" /* OperatorContainerComponent */]
    },
    {
        path: '',
        redirectTo: __WEBPACK_IMPORTED_MODULE_4__RouteUrls__["a" /* RouteUrls */].URL_MAP,
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__guards_cancel_route_detail_guard__["a" /* CancelRouteDetailGuard */],
            __WEBPACK_IMPORTED_MODULE_9__guards_cancel_operator_detail_guard__["a" /* CancelOperatorDetailGuard */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-shell-container *ngIf=\"sb.isAuthenticated$|async\"></app-shell-container>\n<app-login *ngIf=\"!(sb.isAuthenticated$|async)\"></app-login>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_sandbox__ = __webpack_require__("../../../../../src/app/app.sandbox.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(sb) {
        this.sb = sb;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush,
        providers: [__WEBPACK_IMPORTED_MODULE_1__app_sandbox__["a" /* AppSandbox */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_sandbox__["a" /* AppSandbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_sandbox__["a" /* AppSandbox */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_core__ = __webpack_require__("../../../../@ngrx/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngrx_store_freeze__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shell_shell_container_shell_container_component__ = __webpack_require__("../../../../../src/app/shell/shell-container/shell-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__statemanagement_rootReducer__ = __webpack_require__("../../../../../src/statemanagement/rootReducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__hmr__ = __webpack_require__("../../../../../src/hmr.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__map_map_container_map_container_component__ = __webpack_require__("../../../../../src/app/map/map-container/map-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_raven_js__ = __webpack_require__("../../../../raven-js/src/singleton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_raven_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_raven_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__statemanagement_metareducers_reset_reducer__ = __webpack_require__("../../../../../src/statemanagement/metareducers/reset-reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__shell_menu_menu_component__ = __webpack_require__("../../../../../src/app/shell/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_cdk__ = __webpack_require__("../../../cdk/@angular/cdk.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__routes_routes_container_routes_container_component__ = __webpack_require__("../../../../../src/app/routes/routes-container/routes-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__routes_routes_list_routes_list_component__ = __webpack_require__("../../../../../src/app/routes/routes-list/routes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__routes_route_detail_route_detail_component__ = __webpack_require__("../../../../../src/app/routes/route-detail/route-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__routes_route_container_route_container_component__ = __webpack_require__("../../../../../src/app/routes/route-container/route-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__trainnetwork_services_routes_service__ = __webpack_require__("../../../../../src/trainnetwork/services/routes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__operators_operators_container_operators_container_component__ = __webpack_require__("../../../../../src/app/operators/operators-container/operators-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__operators_operators_list_operators_list_component__ = __webpack_require__("../../../../../src/app/operators/operators-list/operators-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__operators_operator_detail_operator_detail_component__ = __webpack_require__("../../../../../src/app/operators/operator-detail/operator-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__operators_operator_container_operator_container_component__ = __webpack_require__("../../../../../src/app/operators/operator-container/operator-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__trainnetwork_services_operators_service__ = __webpack_require__("../../../../../src/trainnetwork/services/operators.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shell_shell_sandbox__ = __webpack_require__("../../../../../src/app/shell/shell.sandbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__map_map_view_map_view_component__ = __webpack_require__("../../../../../src/app/map/map-view/map-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_localStorage_service__ = __webpack_require__("../../../../../src/app/services/localStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40_trainnetwork_services_authorizedHttpOptions_service__ = __webpack_require__("../../../../../src/trainnetwork/services/authorizedHttpOptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__trainnetwork_services_authentication_service__ = __webpack_require__("../../../../../src/trainnetwork/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__routes_timing_dialog_timing_dialog_component__ = __webpack_require__("../../../../../src/app/routes/timing-dialog/timing-dialog.component.ts");
/* unused harmony export getComposedReducer */
/* unused harmony export RavenErrorHandler */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































function createComposedReducer() {
    if (__WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].production) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_core__["a" /* compose */])(__WEBPACK_IMPORTED_MODULE_21__statemanagement_metareducers_reset_reducer__["a" /* reset */], __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* combineReducers */])(__WEBPACK_IMPORTED_MODULE_14__statemanagement_rootReducer__["a" /* rootReducer */]);
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_core__["a" /* compose */])(__WEBPACK_IMPORTED_MODULE_21__statemanagement_metareducers_reset_reducer__["a" /* reset */], __WEBPACK_IMPORTED_MODULE_8_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["a" /* combineReducers */])(__WEBPACK_IMPORTED_MODULE_14__statemanagement_rootReducer__["a" /* rootReducer */]);
}
function getComposedReducer(state, action) {
    return createComposedReducer()(state, action);
}
var imports = [
    __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["b" /* StoreModule */].provideStore(getComposedReducer, __WEBPACK_IMPORTED_MODULE_16__hmr__["a" /* appState */]),
    __WEBPACK_IMPORTED_MODULE_22__ngrx_router_store__["a" /* RouterStoreModule */].connectRouter(),
    __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
    __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_5__angular_flex_layout__["a" /* FlexLayoutModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material__["a" /* MaterialModule */],
    __WEBPACK_IMPORTED_MODULE_17__app_routing_module__["a" /* AppRoutingModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material__["b" /* MdTableModule */],
    __WEBPACK_IMPORTED_MODULE_24__angular_cdk__["a" /* CdkTableModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material__["c" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material__["d" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material__["e" /* MdSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material__["f" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material__["g" /* MdChipsModule */],
    __WEBPACK_IMPORTED_MODULE_9__angular_material__["h" /* MdDialogModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
    __WEBPACK_IMPORTED_MODULE_37__agm_core__["a" /* AgmCoreModule */].forRoot({
        apiKey: 'AIzaSyCI-TrT5xbpbakJqRM2i34WtNSq9RrTHFY',
        libraries: ['places']
    })
];
if (!__WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].production) {
    // instrument after importing StoreModule and when not in production
    imports.push(__WEBPACK_IMPORTED_MODULE_19__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({
        maxAge: 50
    }));
}
__WEBPACK_IMPORTED_MODULE_20_raven_js__["config"](__WEBPACK_IMPORTED_MODULE_15__environments_environment__["a" /* environment */].sentryUrl)
    .install();
var RavenErrorHandler = (function () {
    function RavenErrorHandler() {
    }
    RavenErrorHandler.prototype.handleError = function (err) {
        __WEBPACK_IMPORTED_MODULE_20_raven_js__["captureException"](err.originalError || err);
    };
    return RavenErrorHandler;
}());

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__shell_shell_container_shell_container_component__["a" /* ShellContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__map_map_container_map_container_component__["a" /* MapContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_23__shell_menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_25__routes_routes_container_routes_container_component__["a" /* RoutesContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_26__routes_routes_list_routes_list_component__["a" /* RoutesListComponent */],
            __WEBPACK_IMPORTED_MODULE_27__routes_route_detail_route_detail_component__["a" /* RouteDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_28__routes_route_container_route_container_component__["a" /* RouteContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_30__operators_operators_container_operators_container_component__["a" /* OperatorsContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_31__operators_operators_list_operators_list_component__["a" /* OperatorsListComponent */],
            __WEBPACK_IMPORTED_MODULE_32__operators_operator_detail_operator_detail_component__["a" /* OperatorDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_33__operators_operator_container_operator_container_component__["a" /* OperatorContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_38__map_map_view_map_view_component__["a" /* MapViewComponent */],
            __WEBPACK_IMPORTED_MODULE_42__routes_timing_dialog_timing_dialog_component__["a" /* TimingDialogComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_42__routes_timing_dialog_timing_dialog_component__["a" /* TimingDialogComponent */]],
        imports: imports,
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* ErrorHandler */], useClass: RavenErrorHandler },
            __WEBPACK_IMPORTED_MODULE_29__trainnetwork_services_routes_service__["a" /* RoutesService */],
            __WEBPACK_IMPORTED_MODULE_34__trainnetwork_services_operators_service__["a" /* OperatorsService */],
            __WEBPACK_IMPORTED_MODULE_35__services_notification_service__["a" /* NotificationService */],
            __WEBPACK_IMPORTED_MODULE_36__shell_shell_sandbox__["a" /* ShellSandbox */],
            __WEBPACK_IMPORTED_MODULE_39__services_localStorage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_40_trainnetwork_services_authorizedHttpOptions_service__["a" /* AuthorizedHttpOptionsService */],
            __WEBPACK_IMPORTED_MODULE_41__trainnetwork_services_authentication_service__["a" /* AuthenticationService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.sandbox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSandbox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppSandbox = (function () {
    function AppSandbox(store) {
        this.store = store;
        this.isAuthenticated$ = this.store.select(function (state) { return state.data.authentication.isAuthenticated; });
    }
    return AppSandbox;
}());
AppSandbox = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === "function" && _a || Object])
], AppSandbox);

var _a;
//# sourceMappingURL=app.sandbox.js.map

/***/ }),

/***/ "../../../../../src/app/guards/cancel-operator-detail.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__ = __webpack_require__("../../../../../src/app/shell/shell.sandbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__("../../../../../src/app/messages.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelOperatorDetailGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CancelOperatorDetailGuard = (function () {
    function CancelOperatorDetailGuard(sb) {
        var _this = this;
        this.sb = sb;
        sb.operatorDetailPristine$.subscribe(function (pristine) { return _this.isOperatorDetailPrisitine = pristine.isPristine; });
    }
    CancelOperatorDetailGuard.prototype.ngOnDestroy = function () {
        this.isOperatorDetailPristineSubscription.unsubscribe();
    };
    CancelOperatorDetailGuard.prototype.canDeactivate = function (component, currentOperator, currentState, nextState) {
        if (!this.isOperatorDetailPrisitine) {
            var result = confirm(__WEBPACK_IMPORTED_MODULE_2__messages__["a" /* unsavedChangesMessage */]);
            if (result) {
                this.sb.setOperatorDetailPristine();
            }
            return result;
        }
        return true;
    };
    return CancelOperatorDetailGuard;
}());
CancelOperatorDetailGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__["a" /* ShellSandbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__["a" /* ShellSandbox */]) === "function" && _a || Object])
], CancelOperatorDetailGuard);

var _a;
//# sourceMappingURL=cancel-operator-detail.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/cancel-route-detail.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__ = __webpack_require__("../../../../../src/app/shell/shell.sandbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages__ = __webpack_require__("../../../../../src/app/messages.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CancelRouteDetailGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CancelRouteDetailGuard = (function () {
    function CancelRouteDetailGuard(sb) {
        var _this = this;
        this.sb = sb;
        sb.routeDetailPristine$.subscribe(function (pristine) { return _this.isRouteDetailPrisitine = pristine.isPristine; });
    }
    CancelRouteDetailGuard.prototype.ngOnDestroy = function () {
        this.isRouteDetailPristineSubscription.unsubscribe();
    };
    CancelRouteDetailGuard.prototype.canDeactivate = function (component, currentRoute, currentState, nextState) {
        if (!this.isRouteDetailPrisitine) {
            var result = confirm(__WEBPACK_IMPORTED_MODULE_2__messages__["a" /* unsavedChangesMessage */]);
            if (result) {
                this.sb.setRouteDetailPristine();
            }
            return result;
        }
        return true;
    };
    return CancelRouteDetailGuard;
}());
CancelRouteDetailGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__["a" /* ShellSandbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__["a" /* ShellSandbox */]) === "function" && _a || Object])
], CancelRouteDetailGuard);

var _a;
//# sourceMappingURL=cancel-route-detail.guard.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form id=\"login-box\" fxLayoutAlign=\"center center\">\n  <div id=\"login-window\" class=\"mat-elevation-z4\">\n    <md-toolbar color=\"primary\">\n      <span class=\"combinant-icons-logo logo\"></span>\n      <span class=\"fill-remaining-space\"></span>\n      <md-icon class=\"righted-small\">directions_railway</md-icon>\n    </md-toolbar>\n    <div class=\"margined-large\">\n      <div class=\"bottomed\">\n        <md-input-container class=\"full-width\">\n          <input type=\"email\" placeholder=\"Email\" mdInput [(ngModel)]=\"email\" email [formControl]=\"emailFormControl\" />\n          <md-error *ngIf=\"emailFormControl.hasError('required')\">\n            Email is <strong>required</strong>\n          </md-error>\n          <md-error *ngIf=\"!emailFormControl.hasError('required') &amp;&amp; emailFormControl.hasError('email')\">\n            Email is <strong>invalid</strong>\n          </md-error>\n        </md-input-container>\n      </div>\n      <div>\n        <md-input-container class=\"full-width\">\n          <input type=\"password\" placeholder=\"Password\" mdInput [(ngModel)]=\"password\" [formControl]=\"passwordFormControl\" />\n          <md-error *ngIf=\"passwordFormControl.hasError('required')\">\n            Password is <strong>required</strong>\n          </md-error>\n        </md-input-container>\n      </div>\n    </div>\n    <md-toolbar>\n      <button type=\"submit\" md-raised-button [disabled]=\"loginFormGroup.invalid\" (click)=\"login()\">Login</button>\n    </md-toolbar>\n  </div>\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_sandbox__ = __webpack_require__("../../../../../src/app/login/login.sandbox.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(sb) {
        this.sb = sb;
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
        this.passwordFormControl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["h" /* Validators */].required]);
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginFormGroup = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["j" /* FormGroup */]({});
        this.loginFormGroup.addControl('email', this.emailFormControl);
        this.loginFormGroup.addControl('password', this.passwordFormControl);
    };
    LoginComponent.prototype.login = function () {
        this.sb.login(this.email, this.password);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].Default,
        providers: [__WEBPACK_IMPORTED_MODULE_1__login_sandbox__["a" /* LoginSandbox */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_sandbox__["a" /* LoginSandbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__login_sandbox__["a" /* LoginSandbox */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.sandbox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statemanagement_actions_data_authentication__ = __webpack_require__("../../../../../src/statemanagement/actions/data/authentication.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__trainnetwork_entities_TokenData__ = __webpack_require__("../../../../../src/trainnetwork/entities/TokenData.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_localStorage_service__ = __webpack_require__("../../../../../src/app/services/localStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trainnetwork_services_authentication_service__ = __webpack_require__("../../../../../src/trainnetwork/services/authentication.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginSandbox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginSandbox = (function () {
    function LoginSandbox(store, authenticationService, notificationService, localStorageService) {
        this.store = store;
        this.authenticationService = authenticationService;
        this.notificationService = notificationService;
        this.localStorageService = localStorageService;
        this.isAuthenticated$ = this.store.select(function (state) { return state.data.authentication.isAuthenticated; });
        this.routes$ = this.store.select(function (state) { return state.data.routes; });
        if (this.localStorageService.token !== null) {
            this.loginWithToken(this.localStorageService.token);
        }
    }
    LoginSandbox.prototype.login = function (email, password) {
        this.loginWithToken(btoa(email + ":" + password));
    };
    LoginSandbox.prototype.loginWithToken = function (token) {
        var _this = this;
        var tokenData = new __WEBPACK_IMPORTED_MODULE_4__trainnetwork_entities_TokenData__["a" /* TokenData */](token);
        this.authenticationService.login(tokenData).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__statemanagement_actions_data_authentication__["a" /* Login */]());
            }
            else {
                _this.notificationService.show('Login failed');
            }
        }, function (err) { return _this.notificationService.show('Login failed'); });
    };
    return LoginSandbox;
}());
LoginSandbox = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__trainnetwork_services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__trainnetwork_services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_notification_service__["a" /* NotificationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_localStorage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_localStorage_service__["a" /* LocalStorageService */]) === "function" && _d || Object])
], LoginSandbox);

var _a, _b, _c, _d;
//# sourceMappingURL=login.sandbox.js.map

/***/ }),

/***/ "../../../../../src/app/map/map-container/map-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map-container\" class=\"mat-elevation-z4\">\r\n    <md-toolbar>\r\n        <span>Map</span>\r\n        <span class=\"fill-remaining-space\"></span>\r\n        <button title=\"Zoom to fit\" md-button class=\"icon-button\" (click)=\"mapView.zoomToFit()\"><span class=\"material-icons\">zoom_out_map</span></button>\r\n        <button title=\"Refresh map\" md-button class=\"icon-button\" (click)=\"sb.loadRoutes()\"><span class=\"material-icons\">cached</span></button>\r\n    </md-toolbar>\r\n    <div id=\"map-view-wrapper\">\r\n        <app-map-view #mapView [routes]=\"sb.routes$ | async\" [operators]=\"sb.operators$ | async\" id=\"map-view\"></app-map-view>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/map/map-container/map-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__ = __webpack_require__("../../../../../src/app/shell/shell.sandbox.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapContainerComponent = (function () {
    function MapContainerComponent(sb) {
        this.sb = sb;
    }
    MapContainerComponent.prototype.ngOnInit = function () {
        this.sb.loadRoutes();
        this.sb.loadOperators();
    };
    return MapContainerComponent;
}());
MapContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/map/map-container/map-container.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__["a" /* ShellSandbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__["a" /* ShellSandbox */]) === "function" && _a || Object])
], MapContainerComponent);

var _a;
//# sourceMappingURL=map-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/map/map-view/Line.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Line; });
var Line = (function () {
    function Line(from, to, color) {
        this.from = from;
        this.to = to;
        this.color = color;
    }
    return Line;
}());

//# sourceMappingURL=Line.js.map

/***/ }),

/***/ "../../../../../src/app/map/map-view/Location.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Location; });
var Location = (function () {
    function Location(latitude, longitude, timings, name, iconUrl) {
        this.latitude = latitude;
        this.longitude = longitude;
        this.timings = timings;
        this.name = name;
        this.iconUrl = iconUrl;
    }
    return Location;
}());

//# sourceMappingURL=Location.js.map

/***/ }),

/***/ "../../../../../src/app/map/map-view/MapTransformationHelper.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Line__ = __webpack_require__("../../../../../src/app/map/map-view/Line.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Location__ = __webpack_require__("../../../../../src/app/map/map-view/Location.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapTransformationHelper; });


var MapTransformationHelper = (function () {
    function MapTransformationHelper() {
    }
    MapTransformationHelper.getLocations = function (routes) {
        var _this = this;
        var locations = routes.map(function (route) {
            return new __WEBPACK_IMPORTED_MODULE_1__Location__["a" /* Location */](route.terminal.coordinates.latitude, route.terminal.coordinates.longitude, route.timings, route.terminal.name, route.viaIds !== null && route.viaIds.length > 0 ? _this.blueIcon : _this.purpleIcon);
        });
        return [this.combinantLocation].concat(locations);
    };
    MapTransformationHelper.getBounds = function (locations) {
        var bounds = {
            north: this.combinantLocation.latitude,
            east: this.combinantLocation.longitude,
            south: this.combinantLocation.latitude,
            west: this.combinantLocation.longitude
        };
        locations.map(function (curr) {
            if (curr.latitude > bounds.north) {
                bounds.north = curr.latitude;
            }
            if (curr.latitude < bounds.south) {
                bounds.south = curr.latitude;
            }
            if (curr.longitude > bounds.east) {
                bounds.east = curr.longitude;
            }
            if (curr.longitude < bounds.west) {
                bounds.west = curr.longitude;
            }
        });
        return bounds;
    };
    MapTransformationHelper.getLines = function (routes) {
        var _this = this;
        var lines = [];
        routes.map(function (route) {
            var from = _this.combinantLocation;
            if (route.viaIds !== null && route.viaIds.length > 0) {
                route.viaIds.forEach(function (item, index) {
                    if (item) {
                        var fromCoordinates = routes.find(function (r) { return r.id === item; }).terminal.coordinates;
                        from = new __WEBPACK_IMPORTED_MODULE_1__Location__["a" /* Location */](fromCoordinates.latitude, fromCoordinates.longitude);
                        lines.push(new __WEBPACK_IMPORTED_MODULE_0__Line__["a" /* Line */](from, new __WEBPACK_IMPORTED_MODULE_1__Location__["a" /* Location */](route.terminal.coordinates.latitude, route.terminal.coordinates.longitude), '#0000FF'));
                    }
                });
            }
            else {
                lines.push(new __WEBPACK_IMPORTED_MODULE_0__Line__["a" /* Line */](from, new __WEBPACK_IMPORTED_MODULE_1__Location__["a" /* Location */](route.terminal.coordinates.latitude, route.terminal.coordinates.longitude), '#FF0000'));
            }
        });
        return lines;
    };
    return MapTransformationHelper;
}());

MapTransformationHelper.redIcon = 'http://maps.google.com/mapfiles/ms/icons/red-dot.png';
MapTransformationHelper.purpleIcon = 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png';
MapTransformationHelper.blueIcon = 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png';
MapTransformationHelper.combinantLocation = new __WEBPACK_IMPORTED_MODULE_1__Location__["a" /* Location */](51.37123953903346, 4.288451224565506, null, 'Combinant', MapTransformationHelper.redIcon);
//# sourceMappingURL=MapTransformationHelper.js.map

/***/ }),

/***/ "../../../../../src/app/map/map-view/map-view.component.html":
/***/ (function(module, exports) {

module.exports = "<agm-map #gm [fitBounds]=\"fitBounds\">\n  <agm-marker *ngFor=\"let location of locations; let idx = index\" [latitude]=\"location.latitude\" [longitude]=\"location.longitude\"\n    [iconUrl]=\"location.iconUrl\" [draggable]=\"false\" (markerClick)=\"gm.lastOpen?.close(); gm.lastOpen = infoWindow\">\n    <agm-info-window #infoWindow>\n      <b>{{location.name}}</b><br/>\n      <div *ngFor=\"let timing of location.timings\">\n        <hr/>\n        <span *ngIf=\"!hasOperatorUrl(timing)\"><b>{{getOperatorName(timing)}}</b></span>\n        <span *ngIf=\"hasOperatorUrl(timing)\"><a [href]=\"getOperatorUrl(timing)\" target=\"_blank\"><b>{{getOperatorName(timing)}}</b></a></span>\n        <br/>\n        <pre *ngIf=\"hasTimingData(timing.timingDataFrom)\" class=\"timing-data\">{{getFormattedTimingData('from Combinant to ' + location.name + ':', timing.timingDataFrom)}}</pre>\n        <pre *ngIf=\"hasTimingData(timing.timingDataTo)\" class=\"timing-data\">{{getFormattedTimingData('from ' + location.name + ' to Combinant:', timing.timingDataTo)}}</pre>\n        <span *ngIf=\"hasOperatorComments(timing)\" class=\"comment\">{{getOperatorComments(timing)}}</span>\n      </div>\n    </agm-info-window>\n  </agm-marker>\n  <agm-polyline [strokeColor]=\"line.color\" *ngFor=\"let line of lines;\">\n    <agm-polyline-point [latitude]=\"line.from.latitude\" [longitude]=\"line.from.longitude\"></agm-polyline-point>\n    <agm-polyline-point [latitude]=\"line.to.latitude\" [longitude]=\"line.to.longitude\"></agm-polyline-point>\n  </agm-polyline>\n</agm-map>"

/***/ }),

/***/ "../../../../../src/app/map/map-view/map-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__MapTransformationHelper__ = __webpack_require__("../../../../../src/app/map/map-view/MapTransformationHelper.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapViewComponent = (function () {
    function MapViewComponent() {
        this.locations = [];
    }
    Object.defineProperty(MapViewComponent.prototype, "routes", {
        set: function (value) {
            this._routes = value;
            this.initData();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MapViewComponent.prototype, "operators", {
        set: function (value) {
            this._operators = value;
            this.initData();
        },
        enumerable: true,
        configurable: true
    });
    MapViewComponent.prototype.initData = function () {
        if (this._routes && this._operators) {
            this.locations = __WEBPACK_IMPORTED_MODULE_1__MapTransformationHelper__["a" /* MapTransformationHelper */].getLocations(this._routes);
            this.lines = __WEBPACK_IMPORTED_MODULE_1__MapTransformationHelper__["a" /* MapTransformationHelper */].getLines(this._routes);
            this.fitBounds = __WEBPACK_IMPORTED_MODULE_1__MapTransformationHelper__["a" /* MapTransformationHelper */].getBounds(this.locations);
        }
    };
    MapViewComponent.prototype.zoomToFit = function () {
        // some trickery to trigger the databinding again, DO NOT USE OnPush databinding!
        var bounds = Object.assign({}, this.fitBounds);
        this.fitBounds = { north: 0, east: 0, south: 0, west: 0 };
        this.fitBounds = bounds;
    };
    MapViewComponent.prototype.getOperator = function (operatorId) {
        var operator = this._operators.find(function (o) { return o.id === operatorId; });
        if (operator) {
            return operator;
        }
        else {
            return null;
        }
    };
    MapViewComponent.prototype.getOperatorName = function (timing) {
        var operator = this.getOperator(timing.operatorId);
        if (operator) {
            return operator.name;
        }
        else {
            return null;
        }
    };
    MapViewComponent.prototype.hasOperatorUrl = function (timing) {
        return this.getOperatorUrl(timing) !== null;
    };
    MapViewComponent.prototype.getOperatorUrl = function (timing) {
        var operator = this.getOperator(timing.operatorId);
        if (operator) {
            var url = operator.url;
            if (url && url.trim() !== '') {
                return url;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    MapViewComponent.prototype.hasOperatorComments = function (timing) {
        return this.getOperatorComments(timing) !== null;
    };
    MapViewComponent.prototype.getOperatorComments = function (timing) {
        var operator = this.getOperator(timing.operatorId);
        if (operator) {
            var comments = operator.comments;
            if (comments && comments.trim() !== '') {
                return comments;
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    MapViewComponent.prototype.hasTimingData = function (timingData) {
        return timingData !== null
            && timingData.departure !== null
            && timingData.closing !== null
            && timingData.pickup !== null
            && timingData.profile !== null;
    };
    MapViewComponent.prototype.getFormattedTimingData = function (prefix, timingData) {
        return prefix + "\n departure " + timingData.departure + "\n   closing " + timingData.closing + "\n    pickup " + timingData.pickup + "\n   profile " + timingData.profile;
    };
    return MapViewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], MapViewComponent.prototype, "routes", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], MapViewComponent.prototype, "operators", null);
MapViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-map-view',
        template: __webpack_require__("../../../../../src/app/map/map-view/map-view.component.html"),
    })
], MapViewComponent);

//# sourceMappingURL=map-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return unsavedChangesMessage; });
var unsavedChangesMessage = 'You have unsaved changes. Is it OK to discard those changes?';
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ "../../../../../src/app/operators/operator-container/operator-container.component.html":
/***/ (function(module, exports) {

module.exports = "<app-operator-detail [operator]=\"sb.operator$ | async\" [operators]=\"sb.operators$ | async\" (cancel)=\"sb.gotoOperators()\" (save)=\"sb.addOrUpdateOperator($event)\" (pristine)=\"checkPristine($event)\"></app-operator-detail>"

/***/ }),

/***/ "../../../../../src/app/operators/operator-container/operator-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shell_shell_sandbox__ = __webpack_require__("../../../../../src/app/shell/shell.sandbox.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OperatorContainerComponent = (function () {
    function OperatorContainerComponent(urlOperator, sb) {
        this.urlOperator = urlOperator;
        this.sb = sb;
    }
    OperatorContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.urlOperator.params.subscribe(function (params) {
            _this.sb.loadOperators();
            _this.operatorId = params['id'];
            if (_this.operatorId === 'add') {
                _this.operatorId = null;
                _this.sb.clearFetchedOperator();
            }
            else {
                // TODO: figure out ho to remove hack underneath (fetch twice) to fix placeholder bug in mdInput
                _this.sb.fetchOperator(_this.operatorId);
                _this.sb.fetchOperator(_this.operatorId);
            }
        });
    };
    OperatorContainerComponent.prototype.checkPristine = function (pristine) {
        if (pristine) {
            this.sb.setOperatorDetailPristine();
        }
        else {
            this.sb.clearOperatorDetailPristine();
        }
    };
    OperatorContainerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return OperatorContainerComponent;
}());
OperatorContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-operator',
        template: __webpack_require__("../../../../../src/app/operators/operator-container/operator-container.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shell_shell_sandbox__["a" /* ShellSandbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shell_shell_sandbox__["a" /* ShellSandbox */]) === "function" && _b || Object])
], OperatorContainerComponent);

var _a, _b;
//# sourceMappingURL=operator-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/operators/operator-detail/operator-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"mat-elevation-z4\">\n    <md-toolbar>\n        <div>\n            <span class=\"righted-small\">{{getTitle(operatorModel)}}</span>\n            <b>{{operatorModel.name}}</b>\n            <md-icon *ngIf=\"!isPristine\" class=\"indicator-icon\">lens</md-icon>\n        </div>\n    </md-toolbar>\n    <div fxLayout=\"row\" fxLayout.xs=\"column\" class=\"margined\">\n        <md-card class=\"fill-remaining-space\">\n            <md-card-content>\n                <div class=\"bottomed\">\n                    <md-input-container>\n                        <input placeholder=\"Name\" mdInput [(ngModel)]=\"operatorModel.name\" [formControl]=\"nameFormControl\" />\n                        <md-error *ngIf=\"nameFormControl.hasError('required')\">\n                            Name is <strong>required</strong>\n                        </md-error>\n                    </md-input-container>\n                </div>\n                <div class=\"bottomed\">\n                    <md-input-container>\n                        <input placeholder=\"Website\" mdInput [(ngModel)]=\"operatorModel.url\" [formControl]=\"urlFormControl\" />\n                    </md-input-container>\n                </div>\n                <div>\n                    <md-input-container>\n                        <input placeholder=\"Comments\" mdInput [(ngModel)]=\"operatorModel.comments\" [formControl]=\"commentsFormControl\" />\n                    </md-input-container>\n                </div>\n            </md-card-content>\n        </md-card>\n    </div>\n    <md-toolbar>\n        <span class=\"righted\"><button (click)=\"saveDetail()\" [disabled]=\"detailFormGroup.invalid\" md-raised-button>Save</button></span>\n        <button (click)=\"cancelDetail()\" md-raised-button>Cancel</button>\n    </md-toolbar>\n</form>"

/***/ }),

/***/ "../../../../../src/app/operators/operator-detail/operator-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Operator__ = __webpack_require__("../../../../../src/trainnetwork/entities/Operator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trainnetwork_model_OperatorModel__ = __webpack_require__("../../../../../src/trainnetwork/model/OperatorModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OperatorDetailComponent = (function () {
    function OperatorDetailComponent() {
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.urlFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]();
        this.commentsFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]();
        this.isPristine = true;
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */];
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */];
        this.pristine = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */];
    }
    Object.defineProperty(OperatorDetailComponent.prototype, "operators", {
        set: function (value) {
            this._operators = value;
            this.setAvailableOperators();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OperatorDetailComponent.prototype, "operator", {
        set: function (value) {
            this.operatorModel = new __WEBPACK_IMPORTED_MODULE_2__trainnetwork_model_OperatorModel__["a" /* OperatorModel */](value);
            this.setAvailableOperators();
            this.intitialOperatorModelJson = JSON.stringify(this.operatorModel);
        },
        enumerable: true,
        configurable: true
    });
    OperatorDetailComponent.prototype.setAvailableOperators = function () {
        var _this = this;
        if (this.operatorModel && this._operators) {
            this.availableOperators = this._operators.filter(function (r) { return r.id !== _this.operatorModel.id; });
        }
    };
    OperatorDetailComponent.prototype.ngOnInit = function () {
        this.initializeFormGroup();
        this.initializeCheckModel();
    };
    OperatorDetailComponent.prototype.initializeCheckModel = function () {
        var _this = this;
        var changeSignaler = function (value) { return _this.checkModel(); };
        this.nameFormControl.valueChanges.subscribe(changeSignaler);
        this.urlFormControl.valueChanges.subscribe(changeSignaler);
        this.commentsFormControl.valueChanges.subscribe(changeSignaler);
    };
    OperatorDetailComponent.prototype.initializeFormGroup = function () {
        this.detailFormGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormGroup */]({});
        this.detailFormGroup.addControl('name', this.nameFormControl);
        this.detailFormGroup.addControl('url', this.urlFormControl);
        this.detailFormGroup.addControl('comments', this.commentsFormControl);
    };
    OperatorDetailComponent.prototype.getTitle = function (operatorModel) {
        if (operatorModel.id) {
            return 'Edit operator';
        }
        return 'Add operator';
    };
    OperatorDetailComponent.prototype.cancelDetail = function () {
        this.cancel.emit(null);
    };
    OperatorDetailComponent.prototype.saveDetail = function () {
        this.save.emit(this.operatorModel.toOperator());
    };
    OperatorDetailComponent.prototype.checkModel = function () {
        var currentPristine = JSON.stringify(this.operatorModel) === this.intitialOperatorModelJson;
        if (this.isPristine !== currentPristine) {
            this.isPristine = currentPristine;
            this.pristine.emit(currentPristine);
        }
    };
    return OperatorDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], OperatorDetailComponent.prototype, "operators", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Operator__["a" /* Operator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Operator__["a" /* Operator */]) === "function" && _a || Object),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Operator__["a" /* Operator */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Operator__["a" /* Operator */]) === "function" && _b || Object])
], OperatorDetailComponent.prototype, "operator", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _c || Object)
], OperatorDetailComponent.prototype, "cancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _d || Object)
], OperatorDetailComponent.prototype, "save", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _e || Object)
], OperatorDetailComponent.prototype, "pristine", void 0);
OperatorDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-operator-detail',
        template: __webpack_require__("../../../../../src/app/operators/operator-detail/operator-detail.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].Default
    })
], OperatorDetailComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=operator-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/operators/operators-container/operators-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4\">\n    <md-toolbar>\n        <span>Operators</span>\n        <span class=\"fill-remaining-space\"></span>\n        <button md-button title=\"Add operator\" class=\"icon-button\" (click)=\"sb.gotoAddOperator()\"><span class=\"material-icons\">add</span></button>\n        <button md-button title=\"Refresh operators\" class=\"icon-button\" (click)=\"sb.loadOperators()\"><span class=\"material-icons\">cached</span></button>\n    </md-toolbar>\n    <app-operators-list [operators]=\"sb.operators$ | async\" (removeOperator)=\"removeOperator($event)\" (editOperator)=\"editOperator($event)\"></app-operators-list>\n</div>"

/***/ }),

/***/ "../../../../../src/app/operators/operators-container/operators-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__ = __webpack_require__("../../../../../src/app/shell/shell.sandbox.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorsContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OperatorsContainerComponent = (function () {
    function OperatorsContainerComponent(sb) {
        this.sb = sb;
    }
    OperatorsContainerComponent.prototype.ngOnInit = function () {
        this.sb.loadOperators();
    };
    OperatorsContainerComponent.prototype.removeOperator = function (operator) {
        if (confirm("Are you sure you want to remove operator \"" + operator.name + "\"?")) {
            this.sb.removeOperator(operator.id);
        }
    };
    OperatorsContainerComponent.prototype.editOperator = function (operator) {
        this.sb.gotoEditOperator(operator.id);
    };
    OperatorsContainerComponent.prototype.createOrUpdateOperator = function (operator) {
        this.sb.addOrUpdateOperator(operator);
    };
    return OperatorsContainerComponent;
}());
OperatorsContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-operators',
        template: __webpack_require__("../../../../../src/app/operators/operators-container/operators-container.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__["a" /* ShellSandbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__["a" /* ShellSandbox */]) === "function" && _a || Object])
], OperatorsContainerComponent);

var _a;
//# sourceMappingURL=operators-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/operators/operators-list/operators-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-table #table [dataSource]=\"dataSource\">\n\n  <ng-container cdkColumnDef=\"name\">\n    <md-header-cell *cdkHeaderCellDef> Name </md-header-cell>\n    <md-cell *cdkCellDef=\"let row\"> <b>{{row.name}}</b> </md-cell>\n  </ng-container>\n\n  <ng-container cdkColumnDef=\"url\">\n    <md-header-cell *cdkHeaderCellDef> Website </md-header-cell>\n    <md-cell *cdkCellDef=\"let row\"> <a href=\"{{row.url}}\" target=\"_blank\">{{row.url}}</a> </md-cell>\n  </ng-container>\n\n  <ng-container cdkColumnDef=\"comments\">\n    <md-header-cell *cdkHeaderCellDef> Comments </md-header-cell>\n    <md-cell *cdkCellDef=\"let row\"> {{row.comments}} </md-cell>\n  </ng-container>\n\n  <ng-container cdkColumnDef=\"actions\">\n    <md-header-cell class=\"cell-two-buttons\" *cdkHeaderCellDef></md-header-cell>\n    <md-cell class=\"cell-two-buttons\" *cdkCellDef=\"let row\">\n      <button md-button [title]=\"'Edit operator ' + row.name\" class=\"icon-button\" (click)=\"edit(row)\"><span class=\"material-icons\">create</span></button>\n      <button md-button [title]=\"'Delete operator ' + row.name\" class=\"icon-button\" (click)=\"remove(row)\"><span class=\"material-icons\">delete</span></button></md-cell>\n  </ng-container>\n\n  <md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row>\n  <md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row>\n</md-table>"

/***/ }),

/***/ "../../../../../src/app/operators/operators-list/operators-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ArrayDataSource__ = __webpack_require__("../../../../../src/app/ArrayDataSource.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OperatorsListComponent = (function () {
    function OperatorsListComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.displayedColumns = ['name', 'url', 'comments', 'actions'];
        this.removeOperator = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.editOperator = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__ArrayDataSource__["a" /* ArrayDataSource */]();
    }
    Object.defineProperty(OperatorsListComponent.prototype, "operators", {
        set: function (value) {
            this.dataSource.setData(value);
            this.triggerChangeDetection();
        },
        enumerable: true,
        configurable: true
    });
    OperatorsListComponent.prototype.remove = function (operator) {
        this.removeOperator.emit(operator);
    };
    OperatorsListComponent.prototype.edit = function (operator) {
        this.editOperator.emit(operator);
    };
    // TODO: check out why this hack is needed
    OperatorsListComponent.prototype.triggerChangeDetection = function () {
        var _this = this;
        setTimeout(function () { return _this.changeDetectorRef.detectChanges(); }, 0);
        setTimeout(function () { return _this.changeDetectorRef.detectChanges(); }, 0);
        setTimeout(function () { return _this.changeDetectorRef.detectChanges(); }, 0);
    };
    return OperatorsListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], OperatorsListComponent.prototype, "operators", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], OperatorsListComponent.prototype, "removeOperator", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], OperatorsListComponent.prototype, "editOperator", void 0);
OperatorsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-operators-list',
        template: __webpack_require__("../../../../../src/app/operators/operators-list/operators-list.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */]) === "function" && _c || Object])
], OperatorsListComponent);

var _a, _b, _c;
//# sourceMappingURL=operators-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/TimingDialogModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingDialogModel; });

var TimingDialogModel = (function () {
    function TimingDialogModel(terminalName, operatorName, add, timing) {
        this.terminalName = terminalName;
        this.operatorName = operatorName;
        this.add = add;
        this.originalTimingModel = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](timing);
        this.modifiedTimingModel = __WEBPACK_IMPORTED_MODULE_0_lodash__["cloneDeep"](timing);
    }
    return TimingDialogModel;
}());

//# sourceMappingURL=TimingDialogModel.js.map

/***/ }),

/***/ "../../../../../src/app/routes/route-container/route-container.component.html":
/***/ (function(module, exports) {

module.exports = "<app-route-detail [route]=\"sb.route$ | async\" [routes]=\"sb.routes$ | async\"  [operators]=\"sb.operators$ | async\" (cancel)=\"sb.gotoRoutes()\" (save)=\"sb.addOrUpdateRoute($event)\" (pristine)=\"checkPristine($event)\"></app-route-detail>"

/***/ }),

/***/ "../../../../../src/app/routes/route-container/route-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shell_shell_sandbox__ = __webpack_require__("../../../../../src/app/shell/shell.sandbox.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RouteContainerComponent = (function () {
    function RouteContainerComponent(urlRoute, sb) {
        this.urlRoute = urlRoute;
        this.sb = sb;
    }
    RouteContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.urlRoute.params.subscribe(function (params) {
            _this.sb.loadRoutes();
            _this.sb.loadOperators();
            _this.routeId = params['id'];
            if (_this.routeId === 'add') {
                _this.routeId = null;
                _this.sb.clearFetchedRoute();
            }
            else {
                // TODO: figure out ho to remove hack underneath (fetch twice) to fix placeholder bug in mdInput
                _this.sb.fetchRoute(_this.routeId);
                _this.sb.fetchRoute(_this.routeId);
            }
        });
    };
    RouteContainerComponent.prototype.checkPristine = function (pristine) {
        if (pristine) {
            this.sb.setRouteDetailPristine();
        }
        else {
            this.sb.clearRouteDetailPristine();
        }
    };
    RouteContainerComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return RouteContainerComponent;
}());
RouteContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-route',
        template: __webpack_require__("../../../../../src/app/routes/route-container/route-container.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shell_shell_sandbox__["a" /* ShellSandbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shell_shell_sandbox__["a" /* ShellSandbox */]) === "function" && _b || Object])
], RouteContainerComponent);

var _a, _b;
//# sourceMappingURL=route-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/route-detail/route-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"mat-elevation-z4\">\n    <md-toolbar>\n        <div>\n            <span class=\"righted-small\">{{getTitle(routeModel)}}</span>\n            <b>{{routeModel.terminal.name}}</b>\n            <md-icon *ngIf=\"!isPristine\" class=\"indicator-icon\">lens</md-icon>\n        </div>\n    </md-toolbar>\n    <div fxLayoutWrap class=\"padded\">\n        <md-card class=\"fill-remaining-space margined\">\n            <md-card-title>\n                Terminal\n            </md-card-title>\n            <md-card-content>\n                <div class=\"bottomed\">\n                    <md-input-container>\n                        <input placeholder=\"Name\" mdInput [(ngModel)]=\"routeModel.terminal.name\" [formControl]=\"nameFormControl\" />\n                        <md-error *ngIf=\"nameFormControl.hasError('required')\">\n                            Name is <strong>required</strong>\n                        </md-error>\n                    </md-input-container>\n                </div>\n                <div class=\"mat-elevation-z4 bottomed\">\n                    <md-toolbar>\n                        <span>Via(s)</span>\n                        <span class=\"fill-remaining-space\"></span>\n                        <div *ngIf=\"availableRoutes !== null &amp;&amp; availableRoutes.length > 0\">\n                            <md-select class=\"righted\" placeholder=\"Via\" [(ngModel)]=\"selectedAvailableRouteId\" [formControl]=\"viaFormControl\">\n                                <md-option *ngFor=\"let route of availableRoutes\" [value]=\"route.id\">{{route.terminal.name}}</md-option>\n                            </md-select>\n                            <button md-button title=\"Add via\" [disabled]=\"selectedAvailableRouteId === null\" class=\"icon-button\" (click)=\"addViaRoute()\"><span class=\"material-icons\">add</span></button>\n                        </div>\n                    </md-toolbar>\n                    <md-table *ngIf=\"routeModel.viaIds !== null &amp;&amp; routeModel.viaIds.length > 0\" #table [dataSource]=\"dataSourceVias\">\n                        <ng-container cdkColumnDef=\"terminal\">\n                            <md-header-cell *cdkHeaderCellDef> Terminal </md-header-cell>\n                            <md-cell *cdkCellDef=\"let row\"> <b>{{row.terminal.name}}</b> </md-cell>\n                        </ng-container>\n\n                        <ng-container cdkColumnDef=\"type\">\n                            <md-header-cell *cdkHeaderCellDef> Type </md-header-cell>\n                            <md-cell *cdkCellDef=\"let row\"> {{row.type}} </md-cell>\n                        </ng-container>\n\n                        <ng-container cdkColumnDef=\"actions\">\n                            <md-header-cell class=\"cell-one-button\" *cdkHeaderCellDef></md-header-cell>\n                            <md-cell class=\"cell-one-button\" *cdkCellDef=\"let row\">\n                                <button md-button [title]=\"'Delete route ' + row.terminal.name\" class=\"icon-button\" (click)=\"removeViaRoute(row)\"><span class=\"material-icons\">delete</span></button></md-cell>\n                        </ng-container>\n\n                        <md-header-row *cdkHeaderRowDef=\"displayedColumnsRoute\"></md-header-row>\n                        <md-row *cdkRowDef=\"let row; columns: displayedColumnsRoute;\"></md-row>\n                    </md-table>\n                    <div class=\"padded\" *ngIf=\"routeModel.viaIds === null || routeModel.viaIds.length === 0\">There are currently no via(s) for this terminal since it is a direct route.</div>\n                </div>\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\">\n                    <span class=\"righted\">Type:</span>\n                    <md-chip-list>\n                        <md-chip>{{routeModel.type}}</md-chip>\n                    </md-chip-list>\n                </div>\n            </md-card-content>\n        </md-card>\n        <md-card class=\"fill-remaining-space margined\">\n            <md-card-title>\n                Coordinates\n            </md-card-title>\n            <md-card-content>\n                <div class=\"bottomed\">\n                    <md-input-container>\n                        <input type=\"number\" placeholder=\"Latitude\" mdInput [(ngModel)]=\"routeModel.terminal.coordinates.latitude\" [formControl]=\"latitudeFormControl\"\n                        />\n                        <md-error *ngIf=\"latitudeFormControl.hasError('required')\">\n                            Latitude is <strong>required</strong>\n                        </md-error>\n                    </md-input-container>\n                </div>\n                <div class=\"bottomed\">\n                    <md-input-container>\n                        <input type=\"number\" placeholder=\"Longitude\" mdInput [(ngModel)]=\"routeModel.terminal.coordinates.longitude\" [formControl]=\"longitudeFormControl\"\n                        />\n                        <md-error *ngIf=\"longitudeFormControl.hasError('required')\">\n                            Longitude is <strong>required</strong>\n                        </md-error>\n                    </md-input-container>\n                </div>\n                <div class=\"mat-elevation-z4\">\n                    <md-toolbar style=\"height: 85px;\">\n                        <md-input-container style=\"margin-top: 30px;\">\n                            <input placeholder=\"Search\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"off\" mdInput #search name=\"search\" />\n                        </md-input-container>\n                        <span class=\"fill-remaining-space\"></span>\n                        <md-checkbox name=\"pinMode\" [(ngModel)]=\"pinMode\" class=\"righted\">Drop pin mode</md-checkbox>\n                        <button title=\"Zoom to fit\" md-button class=\"icon-button\" (click)=\"zoomToFit()\"><span class=\"material-icons\">zoom_out_map</span></button>\n                    </md-toolbar>\n                    <div id=\"map-detail-wrapper\">\n                        <agm-map (mapClick)=\"clickedMap($event)\" [mapTypeId]=\"'hybrid'\" id=\"map-detail\" [fitBounds]=\"fitBounds\">\n                            <agm-marker [longitude]=\"routeModel.terminal.coordinates.longitude\" [latitude]=\"routeModel.terminal.coordinates.latitude\"></agm-marker>\n                        </agm-map>\n                    </div>\n                </div>\n            </md-card-content>\n        </md-card>\n        <md-card class=\"fill-remaining-space margined\">\n            <md-card-content>\n                <div class=\"mat-elevation-z4 bottomed\">\n                    <md-toolbar>\n                        <span>Timing(s)</span>\n                        <span class=\"fill-remaining-space\"></span>\n                        <div *ngIf=\"availableOperators !== null &amp;&amp; availableOperators.length > 0\">\n                            <md-select class=\"righted\" placeholder=\"Operator\" [(ngModel)]=\"selectedAvailableOperatorId\" [formControl]=\"operatorFormControl\">\n                                <md-option *ngFor=\"let operator of availableOperators\" [value]=\"operator.id\">{{operator.name}}</md-option>\n                            </md-select>\n                            <button md-button title=\"Add timing\" [disabled]=\"selectedAvailableOperatorId === null\" class=\"icon-button\" (click)=\"addTiming()\"><span class=\"material-icons\">add</span></button>\n                        </div>\n                    </md-toolbar>\n                    <md-table *ngIf=\"routeModel.timings !== null &amp;&amp; routeModel.timings.length > 0\" #table [dataSource]=\"dataSourceTimings\">\n                        <ng-container cdkColumnDef=\"operator\">\n                            <md-header-cell *cdkHeaderCellDef> Operator </md-header-cell>\n                            <md-cell *cdkCellDef=\"let row\"> <b>{{getOperatorName(row)}}</b> </md-cell>\n                        </ng-container>\n\n                        <ng-container cdkColumnDef=\"To\">\n                            <md-header-cell *cdkHeaderCellDef> From Combinant to {{routeModel.terminal.name}} </md-header-cell>\n                            <md-cell *cdkCellDef=\"let row\">\n                                <pre>{{getTimingDataToDisplay(row.timingDataTo)}}</pre> </md-cell>\n                        </ng-container>\n\n                        <ng-container cdkColumnDef=\"From\">\n                            <md-header-cell *cdkHeaderCellDef> From {{routeModel.terminal.name}} to Combinant </md-header-cell>\n                            <md-cell *cdkCellDef=\"let row\">\n                                <pre>{{getTimingDataToDisplay(row.timingDataFrom)}}</pre> </md-cell>\n                        </ng-container>\n\n                        <ng-container cdkColumnDef=\"actions\">\n                            <md-header-cell class=\"cell-two-buttons\" *cdkHeaderCellDef></md-header-cell>\n                            <md-cell class=\"cell-two-buttons\" *cdkCellDef=\"let row\">\n                                <button md-button [title]=\"'Edit timing for ' + getOperatorName(row)\" class=\"icon-button\" (click)=\"editTiming(getOperatorName(row), row)\"><span class=\"material-icons\">create</span></button>\n                                <button md-button [title]=\"'Delete timing for ' + getOperatorName(row)\" class=\"icon-button\" (click)=\"removeTiming(row)\"><span class=\"material-icons\">delete</span></button></md-cell>\n                        </ng-container>\n\n                        <md-header-row *cdkHeaderRowDef=\"displayedColumnsTiming\"></md-header-row>\n                        <md-row style=\"height: 90px;\" *cdkRowDef=\"let row; columns: displayedColumnsTiming;\"></md-row>\n                    </md-table>\n                    <div class=\"padded\" *ngIf=\"routeModel.timings === null || routeModel.timings.length === 0\">There are currently no timings for this terminal.</div>\n                </div>\n            </md-card-content>\n        </md-card>\n    </div>\n    <md-toolbar>\n        <span class=\"righted\"><button [disabled]=\"detailFormGroup.invalid\" (click)=\"saveDetail()\" md-raised-button>Save</button></span>\n        <button (click)=\"cancelDetail()\" md-raised-button>Cancel</button>\n    </md-toolbar>\n</form>"

/***/ }),

/***/ "../../../../../src/app/routes/route-detail/route-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Route__ = __webpack_require__("../../../../../src/trainnetwork/entities/Route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__trainnetwork_model_RouteModel__ = __webpack_require__("../../../../../src/trainnetwork/model/RouteModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ArrayDataSource__ = __webpack_require__("../../../../../src/app/ArrayDataSource.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trainnetwork_model_TimingModel__ = __webpack_require__("../../../../../src/trainnetwork/model/TimingModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__timing_dialog_timing_dialog_component__ = __webpack_require__("../../../../../src/app/routes/timing-dialog/timing-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TimingDialogModel__ = __webpack_require__("../../../../../src/app/routes/TimingDialogModel.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RouteDetailComponent = (function () {
    function RouteDetailComponent(mapsAPILoader, ngZone, changeDetectorRef, dialog) {
        this.mapsAPILoader = mapsAPILoader;
        this.ngZone = ngZone;
        this.changeDetectorRef = changeDetectorRef;
        this.dialog = dialog;
        this.nameFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.viaFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]();
        this.operatorFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]();
        this.latitudeFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.longitudeFormControl = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["i" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["h" /* Validators */].required]);
        this.pinMode = false;
        this.displayedColumnsRoute = ['terminal', 'type', 'actions'];
        this.displayedColumnsTiming = ['operator', 'To', 'From', 'actions'];
        this.isPristine = true;
        this.cancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */];
        this.save = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */];
        this.pristine = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */];
        this.dataSourceVias = new __WEBPACK_IMPORTED_MODULE_4__ArrayDataSource__["a" /* ArrayDataSource */]();
        this.dataSourceTimings = new __WEBPACK_IMPORTED_MODULE_4__ArrayDataSource__["a" /* ArrayDataSource */]();
    }
    Object.defineProperty(RouteDetailComponent.prototype, "routes", {
        set: function (value) {
            this._routes = value;
            this.setAvailableRoutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteDetailComponent.prototype, "route", {
        set: function (value) {
            this.routeModel = new __WEBPACK_IMPORTED_MODULE_2__trainnetwork_model_RouteModel__["a" /* RouteModel */](value);
            this.setAvailableRoutes();
            this.setAvailableOperators();
            this.intitialRouteModelJson = JSON.stringify(this.routeModel);
            this.zoomToFit();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteDetailComponent.prototype, "operators", {
        set: function (value) {
            this._operators = value;
            this.setAvailableOperators();
        },
        enumerable: true,
        configurable: true
    });
    RouteDetailComponent.prototype.zoomToFit = function () {
        this.zoomToPoint(this.routeModel.terminal.coordinates.latitude, this.routeModel.terminal.coordinates.longitude);
    };
    RouteDetailComponent.prototype.zoomToPoint = function (latitude, longitude) {
        if (latitude === 0 && longitude === 0) {
            this.fitBounds = {
                north: 65.4765075626,
                east: 52.734375,
                south: 35.8178131587,
                west: -10.8984375
            };
        }
        else {
            this.fitBounds = {
                north: latitude + 0.5,
                east: longitude + 0.7,
                south: latitude - 0.5,
                west: longitude - 0.7
            };
        }
    };
    // TODO: check out why this hack is needed
    RouteDetailComponent.prototype.triggerChangeDetection = function () {
        var _this = this;
        setTimeout(function () { return _this.changeDetectorRef.detectChanges(); }, 0);
        setTimeout(function () { return _this.changeDetectorRef.detectChanges(); }, 0);
        setTimeout(function () { return _this.changeDetectorRef.detectChanges(); }, 0);
    };
    RouteDetailComponent.prototype.setAvailableRoutes = function () {
        var _this = this;
        this.selectedAvailableRouteId = null;
        if (this.routeModel && this._routes) {
            this.availableRoutes = this._routes.filter(function (r) { return r.id !== _this.routeModel.id && !__WEBPACK_IMPORTED_MODULE_5_lodash__["includes"](_this.routeModel.viaIds, r.id); });
            var currentRoutes = this._routes.filter(function (r) { return __WEBPACK_IMPORTED_MODULE_5_lodash__["includes"](_this.routeModel.viaIds, r.id); });
            this.dataSourceVias.setData(currentRoutes);
            this.triggerChangeDetection();
        }
    };
    RouteDetailComponent.prototype.setAvailableOperators = function () {
        this.selectedAvailableOperatorId = null;
        if (this.routeModel && this._operators) {
            var operatorIds_1 = [];
            this.routeModel.timings.forEach(function (t) { return operatorIds_1.push(t.operatorId); });
            this.availableOperators = this._operators.filter(function (o) { return !__WEBPACK_IMPORTED_MODULE_5_lodash__["includes"](operatorIds_1, o.id); });
            this.dataSourceTimings.setData(this.routeModel.timings);
            this.triggerChangeDetection();
        }
    };
    RouteDetailComponent.prototype.ngOnInit = function () {
        this.initializeFormGroup();
        this.initializeCheckModel();
        this.initializeMaps();
    };
    RouteDetailComponent.prototype.initializeMaps = function () {
        var _this = this;
        this.mapsAPILoader.load().then(function () {
            var autocomplete = new google.maps.places.Autocomplete(_this.searchElementRef.nativeElement, {
                types: ['(cities)']
            });
            google.maps.event.addListener(autocomplete, 'place_changed', function () {
                _this.ngZone.run(function () {
                    // get the place result
                    var place = autocomplete.getPlace();
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }
                    // set latitude, longitude and zoom
                    _this.zoomToPoint(place.geometry.location.lat(), place.geometry.location.lng());
                    _this.changeDetectorRef.detectChanges();
                });
            });
        });
    };
    RouteDetailComponent.prototype.initializeCheckModel = function () {
        var _this = this;
        var changeSignaler = function (value) { return _this.checkModel(); };
        this.nameFormControl.valueChanges.subscribe(changeSignaler);
        this.viaFormControl.valueChanges.subscribe(changeSignaler);
        this.operatorFormControl.valueChanges.subscribe(changeSignaler);
        this.latitudeFormControl.valueChanges.subscribe(changeSignaler);
        this.longitudeFormControl.valueChanges.subscribe(changeSignaler);
    };
    RouteDetailComponent.prototype.initializeFormGroup = function () {
        this.detailFormGroup = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["j" /* FormGroup */]({});
        this.detailFormGroup.addControl('name', this.nameFormControl);
        this.detailFormGroup.addControl('via', this.viaFormControl);
        this.detailFormGroup.addControl('operator', this.operatorFormControl);
        this.detailFormGroup.addControl('latitude', this.latitudeFormControl);
        this.detailFormGroup.addControl('longitude', this.longitudeFormControl);
    };
    RouteDetailComponent.prototype.getTitle = function (routeModel) {
        if (routeModel.id) {
            return 'Edit route';
        }
        return 'Add route';
    };
    RouteDetailComponent.prototype.cancelDetail = function () {
        this.cancel.emit(null);
    };
    RouteDetailComponent.prototype.saveDetail = function () {
        this.save.emit(this.routeModel.toRoute());
    };
    RouteDetailComponent.prototype.checkModel = function () {
        var currentPristine = JSON.stringify(this.routeModel) === this.intitialRouteModelJson;
        if (this.isPristine !== currentPristine) {
            this.isPristine = currentPristine;
            this.pristine.emit(currentPristine);
        }
    };
    RouteDetailComponent.prototype.removeViaRoute = function (viaRoute) {
        this.routeModel.viaIds = this.routeModel.viaIds.filter(function (id) { return viaRoute.id !== id; });
        this.setAvailableRoutes();
        this.checkModel();
    };
    RouteDetailComponent.prototype.addViaRoute = function () {
        if (this.routeModel.viaIds === null) {
            this.routeModel.viaIds = [];
        }
        if (this.selectedAvailableRouteId) {
            this.routeModel.viaIds = this.routeModel.viaIds.concat([this.selectedAvailableRouteId]);
        }
        this.setAvailableRoutes();
        this.checkModel();
    };
    RouteDetailComponent.prototype.clickedMap = function (event) {
        if (this.pinMode) {
            this.routeModel.terminal.coordinates.latitude = event.coords.lat;
            this.routeModel.terminal.coordinates.longitude = event.coords.lng;
            this.pinMode = false;
        }
    };
    RouteDetailComponent.prototype.getOperatorName = function (timing) {
        var operator = this._operators.find(function (o) { return o.id === timing.operatorId; });
        return operator === null ? 'Unknown' : operator.name;
    };
    RouteDetailComponent.prototype.removeTiming = function (timing) {
        var index = __WEBPACK_IMPORTED_MODULE_5_lodash__["findIndex"](this.routeModel.timings, __WEBPACK_IMPORTED_MODULE_5_lodash__["pick"](timing, 'operatorId'));
        if (index !== -1) {
            this.routeModel.timings.splice(index, 1);
            this.setAvailableOperators();
            this.checkModel();
        }
    };
    RouteDetailComponent.prototype.editTiming = function (operatorName, timing, add) {
        var _this = this;
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_9__timing_dialog_timing_dialog_component__["a" /* TimingDialogComponent */], {
            disableClose: true,
            data: new __WEBPACK_IMPORTED_MODULE_10__TimingDialogModel__["a" /* TimingDialogModel */](this.routeModel.terminal.name, operatorName, add, timing)
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                var timingDialogModel = result;
                if (timingDialogModel.add ||
                    JSON.stringify(timingDialogModel.originalTimingModel) !== JSON.stringify(timingDialogModel.modifiedTimingModel)) {
                    var index = __WEBPACK_IMPORTED_MODULE_5_lodash__["findIndex"](_this.routeModel.timings, __WEBPACK_IMPORTED_MODULE_5_lodash__["pick"](timingDialogModel.modifiedTimingModel, 'operatorId'));
                    if (index !== -1) {
                        _this.routeModel.timings.splice(index, 1, timingDialogModel.modifiedTimingModel);
                    }
                    else {
                        _this.routeModel.timings.push(timingDialogModel.modifiedTimingModel);
                    }
                    _this.setAvailableOperators();
                    _this.checkModel();
                }
            }
        });
    };
    RouteDetailComponent.prototype.getTimingDataToDisplay = function (timingData) {
        if (timingData === null) {
            return null;
        }
        else {
            if (this.hasTimingData(timingData)) {
                return (timingData.departure === null || timingData.departure.trim() === '' ? 'Unknown' : timingData.departure) + "\n" + (timingData.closing === null || timingData.closing.trim() === '' ? 'Unknown' : timingData.closing) + "\n" + (timingData.pickup === null || timingData.pickup.trim() === '' ? 'Unknown' : timingData.pickup) + "\n" + (timingData.profile === null || timingData.profile.trim() === '' ? 'Unknown' : timingData.profile);
            }
            else {
                return '';
            }
        }
    };
    RouteDetailComponent.prototype.hasTimingData = function (timingData) {
        if (timingData.departure !== null && timingData.departure.trim() !== '') {
            return true;
        }
        if (timingData.closing !== null && timingData.closing.trim() !== '') {
            return true;
        }
        if (timingData.pickup !== null && timingData.pickup.trim() !== '') {
            return true;
        }
        if (timingData.profile !== null && timingData.profile.trim() !== '') {
            return true;
        }
        return false;
    };
    RouteDetailComponent.prototype.addTiming = function () {
        if (this.selectedAvailableOperatorId) {
            var timingModel = new __WEBPACK_IMPORTED_MODULE_7__trainnetwork_model_TimingModel__["a" /* TimingModel */]();
            timingModel.operatorId = this.selectedAvailableOperatorId;
            this.editTiming(this.getOperatorName(timingModel), timingModel, true);
        }
    };
    return RouteDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], RouteDetailComponent.prototype, "searchElementRef", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], RouteDetailComponent.prototype, "routes", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Route__["a" /* Route */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Route__["a" /* Route */]) === "function" && _b || Object),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Route__["a" /* Route */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Route__["a" /* Route */]) === "function" && _c || Object])
], RouteDetailComponent.prototype, "route", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], RouteDetailComponent.prototype, "operators", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _d || Object)
], RouteDetailComponent.prototype, "cancel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _e || Object)
], RouteDetailComponent.prototype, "save", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _f || Object)
], RouteDetailComponent.prototype, "pristine", void 0);
RouteDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-route-detail',
        template: __webpack_require__("../../../../../src/app/routes/route-detail/route-detail.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].Default
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__agm_core__["b" /* MapsAPILoader */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* NgZone */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MdDialog */]) === "function" && _k || Object])
], RouteDetailComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=route-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/routes-container/routes-container.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-elevation-z4\">\n    <md-toolbar>\n        <span>Routes</span>\n        <span class=\"fill-remaining-space\"></span>\n        <button md-button title=\"Add route\" class=\"icon-button\" (click)=\"sb.gotoAddRoute()\"><span class=\"material-icons\">add</span></button>\n        <button md-button title=\"Refresh routes\" class=\"icon-button\" (click)=\"sb.loadRoutes()\"><span class=\"material-icons\">cached</span></button>\n    </md-toolbar>\n    <app-routes-list [routes]=\"sb.routes$ | async\" (removeRoute)=\"removeRoute($event)\" (editRoute)=\"editRoute($event)\"></app-routes-list>\n</div>"

/***/ }),

/***/ "../../../../../src/app/routes/routes-container/routes-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__ = __webpack_require__("../../../../../src/app/shell/shell.sandbox.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoutesContainerComponent = (function () {
    function RoutesContainerComponent(sb) {
        this.sb = sb;
    }
    RoutesContainerComponent.prototype.ngOnInit = function () {
        this.sb.loadRoutes();
    };
    RoutesContainerComponent.prototype.removeRoute = function (route) {
        if (confirm("Are you sure you want to remove route \"" + route.terminal.name + "\"?")) {
            this.sb.removeRoute(route.id);
        }
    };
    RoutesContainerComponent.prototype.editRoute = function (route) {
        this.sb.gotoEditRoute(route.id);
    };
    RoutesContainerComponent.prototype.createOrUpdateRoute = function (route) {
        this.sb.addOrUpdateRoute(route);
    };
    return RoutesContainerComponent;
}());
RoutesContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-routes',
        template: __webpack_require__("../../../../../src/app/routes/routes-container/routes-container.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__["a" /* ShellSandbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shell_shell_sandbox__["a" /* ShellSandbox */]) === "function" && _a || Object])
], RoutesContainerComponent);

var _a;
//# sourceMappingURL=routes-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/routes-list/routes-list.component.html":
/***/ (function(module, exports) {

module.exports = "<md-table #table [dataSource]=\"dataSource\">\n\n  <ng-container cdkColumnDef=\"via\">\n    <md-header-cell *cdkHeaderCellDef> Via </md-header-cell>\n    <md-cell *cdkCellDef=\"let row\"> {{getFromName(row)}} </md-cell>\n  </ng-container>\n\n  <ng-container cdkColumnDef=\"terminal\">\n    <md-header-cell *cdkHeaderCellDef> Terminal </md-header-cell>\n    <md-cell *cdkCellDef=\"let row\"> <b>{{row.terminal.name}}</b> </md-cell>\n  </ng-container>\n\n  <ng-container cdkColumnDef=\"type\">\n    <md-header-cell *cdkHeaderCellDef> Type </md-header-cell>\n    <md-cell *cdkCellDef=\"let row\"> {{row.type}} </md-cell>\n  </ng-container>\n\n  <ng-container cdkColumnDef=\"actions\">\n    <md-header-cell class=\"cell-two-buttons\" *cdkHeaderCellDef></md-header-cell>\n    <md-cell class=\"cell-two-buttons\" *cdkCellDef=\"let row\">\n      <button md-button [title]=\"'Edit route ' + row.terminal.name\" class=\"icon-button\" (click)=\"edit(row)\"><span class=\"material-icons\">create</span></button>\n      <button md-button [title]=\"'Delete route ' + row.terminal.name\" class=\"icon-button\" (click)=\"remove(row)\"><span class=\"material-icons\">delete</span></button></md-cell>\n  </ng-container>\n\n  <md-header-row *cdkHeaderRowDef=\"displayedColumns\"></md-header-row>\n  <md-row *cdkRowDef=\"let row; columns: displayedColumns;\"></md-row>\n</md-table>"

/***/ }),

/***/ "../../../../../src/app/routes/routes-list/routes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ArrayDataSource__ = __webpack_require__("../../../../../src/app/ArrayDataSource.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoutesListComponent = (function () {
    function RoutesListComponent(changeDetectorRef) {
        this.changeDetectorRef = changeDetectorRef;
        this.displayedColumns = ['terminal', 'via', 'type', 'actions'];
        this.removeRoute = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.editRoute = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.dataSource = new __WEBPACK_IMPORTED_MODULE_1__ArrayDataSource__["a" /* ArrayDataSource */]();
    }
    Object.defineProperty(RoutesListComponent.prototype, "routes", {
        set: function (value) {
            this.dataSource.setData(value);
            this.triggerChangeDetection();
        },
        enumerable: true,
        configurable: true
    });
    RoutesListComponent.prototype.getFromName = function (route) {
        if (route.type === 'Indirect') {
            return this.getViaName(route.viaIds);
        }
        return 'Combinant';
    };
    RoutesListComponent.prototype.remove = function (route) {
        this.removeRoute.emit(route);
    };
    RoutesListComponent.prototype.edit = function (route) {
        this.editRoute.emit(route);
    };
    RoutesListComponent.prototype.getViaName = function (viaIds) {
        var _this = this;
        var viaName = viaIds.reduce(function (prev, curr, index) {
            if (curr) {
                return prev += (prev.length === 0 ? '' : ', ') + _this.dataSource.currentData.find(function (r) { return r.id === curr; }).terminal.name;
            }
            else {
                return prev;
            }
        }, '');
        return viaName;
    };
    // TODO: check out why this hack is needed
    RoutesListComponent.prototype.triggerChangeDetection = function () {
        var _this = this;
        setTimeout(function () { return _this.changeDetectorRef.detectChanges(); }, 0);
        setTimeout(function () { return _this.changeDetectorRef.detectChanges(); }, 0);
        setTimeout(function () { return _this.changeDetectorRef.detectChanges(); }, 0);
    };
    return RoutesListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], RoutesListComponent.prototype, "routes", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _a || Object)
], RoutesListComponent.prototype, "removeRoute", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], RoutesListComponent.prototype, "editRoute", void 0);
RoutesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-routes-list',
        template: __webpack_require__("../../../../../src/app/routes/routes-list/routes-list.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* ChangeDetectorRef */]) === "function" && _c || Object])
], RoutesListComponent);

var _a, _b, _c;
//# sourceMappingURL=routes-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/routes/timing-dialog/timing-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 md-dialog-title><span *ngIf=\"!data.add\">Edit</span><span *ngIf=\"data.add\">Add</span> timing for {{data.operatorName}}</h2>\n<md-dialog-content>\n  <md-card>\n    <md-card-title>\n      From Combinant to {{data.terminalName}}\n    </md-card-title>\n    <md-card-content fxLayoutWrap fxLayoutGap=\"20px\">\n      <md-input-container>\n        <input placeholder=\"Departure\" mdInput [(ngModel)]=\"data.modifiedTimingModel.timingDataTo.departure\" name=\"departureTo\" />\n      </md-input-container>\n      <md-input-container>\n        <input placeholder=\"Closing\" mdInput [(ngModel)]=\"data.modifiedTimingModel.timingDataTo.closing\" name=\"closingTo\" />\n      </md-input-container>\n      <md-input-container>\n        <input placeholder=\"Pickup\" mdInput [(ngModel)]=\"data.modifiedTimingModel.timingDataTo.pickup\" name=\"pickupTo\" />\n      </md-input-container>\n      <md-input-container>\n        <input placeholder=\"Profile\" mdInput [(ngModel)]=\"data.modifiedTimingModel.timingDataTo.profile\" name=\"profileTo\" />\n      </md-input-container>\n    </md-card-content>\n  </md-card>\n  <md-card>\n    <md-card-title>\n      From {{data.terminalName}} to Combinant\n    </md-card-title>\n    <md-card-content fxLayoutWrap fxLayoutGap=\"20px\">\n      <md-input-container>\n        <input placeholder=\"Departure\" mdInput [(ngModel)]=\"data.modifiedTimingModel.timingDataFrom.departure\" name=\"departureFrom\"\n        />\n      </md-input-container>\n      <md-input-container>\n        <input placeholder=\"Closing\" mdInput [(ngModel)]=\"data.modifiedTimingModel.timingDataFrom.closing\" name=\"closingFrom\" />\n      </md-input-container>\n      <md-input-container>\n        <input placeholder=\"Pickup\" mdInput [(ngModel)]=\"data.modifiedTimingModel.timingDataFrom.pickup\" name=\"pickupFrom\" />\n      </md-input-container>\n      <md-input-container>\n        <input placeholder=\"Profile\" mdInput [(ngModel)]=\"data.modifiedTimingModel.timingDataFrom.profile\" name=\"profileFrom\" />\n      </md-input-container>\n    </md-card-content>\n  </md-card>\n</md-dialog-content>\n<md-dialog-actions>\n  <button md-button (click)=\"okClicked()\">OK</button>\n  <button md-button (click)=\"cancelClicked()\">Cancel</button>\n</md-dialog-actions>"

/***/ }),

/***/ "../../../../../src/app/routes/timing-dialog/timing-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TimingDialogModel__ = __webpack_require__("../../../../../src/app/routes/TimingDialogModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TimingDialogComponent = (function () {
    function TimingDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    TimingDialogComponent.prototype.ngOnInit = function () {
    };
    TimingDialogComponent.prototype.okClicked = function () {
        this.dialogRef.close(this.data);
    };
    TimingDialogComponent.prototype.cancelClicked = function () {
        this.dialogRef.close();
    };
    return TimingDialogComponent;
}());
TimingDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-timing-dialog',
        template: __webpack_require__("../../../../../src/app/routes/timing-dialog/timing-dialog.component.html"),
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MdDialogRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__TimingDialogModel__["a" /* TimingDialogModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__TimingDialogModel__["a" /* TimingDialogModel */]) === "function" && _b || Object])
], TimingDialogComponent);

var _a, _b;
//# sourceMappingURL=timing-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/localStorage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LOCALSTORAGE_TOKEN = 'LOCALSTORAGE_TOKEN';
var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    Object.defineProperty(LocalStorageService.prototype, "token", {
        get: function () {
            return window.localStorage.getItem(LOCALSTORAGE_TOKEN);
        },
        set: function (value) {
            window.localStorage.setItem(LOCALSTORAGE_TOKEN, value);
        },
        enumerable: true,
        configurable: true
    });
    LocalStorageService.prototype.clear = function () {
        window.localStorage.removeItem(LOCALSTORAGE_TOKEN);
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], LocalStorageService);

//# sourceMappingURL=localStorage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/notification.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = (function () {
    function NotificationService(snackBar) {
        this.snackBar = snackBar;
    }
    NotificationService.prototype.show = function (message) {
        this.snackBar.open(message, null, { duration: 3000 });
    };
    return NotificationService;
}());
NotificationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_material__["i" /* MdSnackBar */]) === "function" && _a || Object])
], NotificationService);

var _a;
//# sourceMappingURL=notification.service.js.map

/***/ }),

/***/ "../../../../../src/app/shell/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<md-toolbar class=\"fixed-header\" color=\"primary\">\n  <span class=\"combinant-icons-logo logo\"></span>\n  <span class=\"fill-remaining-space\"></span>\n  <div fxLayout=\"row\" fxShow=\"false\" fxShow.gt-sm>\n    <button md-button (click)=\"sb.gotoMap()\"><md-icon class=\"righted-small\">map</md-icon>Map</button>\n    <button md-button (click)=\"sb.gotoRoutes()\"><md-icon class=\"righted-small\">place</md-icon>Routes</button>\n    <button md-button (click)=\"sb.gotoOperators()\"><md-icon class=\"righted-small\">directions_railway</md-icon>Operators</button>\n    <button md-button (click)=\"sb.logout()\"><md-icon class=\"righted-small\">exit_to_app</md-icon>Logout {{sb.email}}</button>\n  </div>\n  <button md-button [md-menu-trigger-for]=\"menu\" fxHide=\"false\" fxHide.gt-sm>\n    <md-icon>menu</md-icon>\n  </button>\n</md-toolbar>\n\n<md-menu x-position=\"before\" #menu=\"mdMenu\">\n  <button md-menu-item (click)=\"sb.gotoMap()\"><md-icon>map</md-icon>Map</button>\n  <button md-menu-item (click)=\"sb.gotoRoutes()\"><md-icon>place</md-icon>Routes</button>\n  <button md-menu-item (click)=\"sb.gotoOperators()\"><md-icon>directions_railway</md-icon>Operators</button>\n  <hr/>\n  <button md-menu-item (click)=\"sb.logout()\"><md-icon>exit_to_app</md-icon>Logout</button>\n</md-menu>"

/***/ }),

/***/ "../../../../../src/app/shell/menu/menu.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shell/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RouteUrls__ = __webpack_require__("../../../../../src/app/RouteUrls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shell_sandbox__ = __webpack_require__("../../../../../src/app/shell/shell.sandbox.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MenuComponent = (function () {
    function MenuComponent(sb) {
        this.sb = sb;
        this.mapUrl = __WEBPACK_IMPORTED_MODULE_1__RouteUrls__["a" /* RouteUrls */].URL_MAP;
        this.routesUrl = __WEBPACK_IMPORTED_MODULE_1__RouteUrls__["a" /* RouteUrls */].URL_ROUTES;
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/shell/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shell/menu/menu.component.sass")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shell_sandbox__["a" /* ShellSandbox */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shell_sandbox__["a" /* ShellSandbox */]) === "function" && _a || Object])
], MenuComponent);

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/shell/shell-container/shell-container.component.html":
/***/ (function(module, exports) {

module.exports = "<app-menu></app-menu>\n<div class=\"main-content\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/shell/shell-container/shell-container.component.sass":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shell/shell-container/shell-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shell_sandbox__ = __webpack_require__("../../../../../src/app/shell/shell.sandbox.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShellContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShellContainerComponent = (function () {
    function ShellContainerComponent() {
    }
    ShellContainerComponent.prototype.ngOnInit = function () {
    };
    return ShellContainerComponent;
}());
ShellContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* Component */])({
        selector: 'app-shell-container',
        template: __webpack_require__("../../../../../src/app/shell/shell-container/shell-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shell/shell-container/shell-container.component.sass")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush,
        providers: [__WEBPACK_IMPORTED_MODULE_1__shell_sandbox__["a" /* ShellSandbox */]]
    }),
    __metadata("design:paramtypes", [])
], ShellContainerComponent);

//# sourceMappingURL=shell-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/shell/shell.sandbox.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__statemanagement_metareducers_reset_reducer__ = __webpack_require__("../../../../../src/statemanagement/metareducers/reset-reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__RouteUrls__ = __webpack_require__("../../../../../src/app/RouteUrls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__statemanagement_actions_data_route__ = __webpack_require__("../../../../../src/statemanagement/actions/data/route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trainnetwork_entities_Route__ = __webpack_require__("../../../../../src/trainnetwork/entities/Route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__trainnetwork_services_routes_service__ = __webpack_require__("../../../../../src/trainnetwork/services/routes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trainnetwork_services_operators_service__ = __webpack_require__("../../../../../src/trainnetwork/services/operators.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_notification_service__ = __webpack_require__("../../../../../src/app/services/notification.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__statemanagement_actions_containers_route_detail__ = __webpack_require__("../../../../../src/statemanagement/actions/containers/route-detail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__messages__ = __webpack_require__("../../../../../src/app/messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_localStorage_service__ = __webpack_require__("../../../../../src/app/services/localStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__statemanagement_actions_data_operator__ = __webpack_require__("../../../../../src/statemanagement/actions/data/operator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__trainnetwork_entities_Operator__ = __webpack_require__("../../../../../src/trainnetwork/entities/Operator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__statemanagement_actions_containers_operator_detail__ = __webpack_require__("../../../../../src/statemanagement/actions/containers/operator-detail.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__trainnetwork_model_RouteModel__ = __webpack_require__("../../../../../src/trainnetwork/model/RouteModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShellSandbox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var ShellSandbox = (function () {
    function ShellSandbox(store, routesService, operatorsService, notificationService, localStorageService) {
        var _this = this;
        this.store = store;
        this.routesService = routesService;
        this.operatorsService = operatorsService;
        this.notificationService = notificationService;
        this.localStorageService = localStorageService;
        this.isAuthenticated$ = this.store.select(function (state) { return state.data.authentication.isAuthenticated; });
        this.routes$ = this.store.select(function (state) { return state.data.routes; });
        this.route$ = this.store.select(function (state) { return state.data.route; });
        this.routeDetailPristine$ = this.store.select(function (state) { return state.containers.routeDetailPristine; });
        this.operators$ = this.store.select(function (state) { return state.data.operators; });
        this.operator$ = this.store.select(function (state) { return state.data.operator; });
        this.operatorDetailPristine$ = this.store.select(function (state) { return state.containers.operatorDetailPristine; });
        this.routeDetailPristineSubscription = this.routeDetailPristine$.subscribe(function (pristine) {
            return _this.routeDetailPristine = pristine.isPristine;
        });
        this.operatorDetailPristineSubscription = this.operatorDetailPristine$.subscribe(function (pristine) {
            return _this.operatorDetailPristine = pristine.isPristine;
        });
        this.email = this.getEmail(this.localStorageService.token);
        __insp.push(['identify', this.email]);
        __insp.push(['tagSession', {
                email: this.email,
                environmentIsHmr: __WEBPACK_IMPORTED_MODULE_17__environments_environment__["a" /* environment */].hmr,
                environmentIsProduction: __WEBPACK_IMPORTED_MODULE_17__environments_environment__["a" /* environment */].production
            }]);
    }
    ShellSandbox.prototype.getEmail = function (token) {
        return atob(token).split(':')[0];
    };
    ShellSandbox.prototype.ngOnDestroy = function () {
        this.routeDetailPristineSubscription.unsubscribe();
        this.operatorDetailPristineSubscription.unsubscribe();
    };
    ShellSandbox.prototype.logout = function () {
        if (!this.routeDetailPristine || !this.operatorDetailPristine) {
            if (!confirm(__WEBPACK_IMPORTED_MODULE_11__messages__["a" /* unsavedChangesMessage */])) {
                return;
            }
        }
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_2__statemanagement_metareducers_reset_reducer__["b" /* ResetStore */]());
        this.localStorageService.clear();
        this.gotoMap();
    };
    // Route methods
    ShellSandbox.prototype.loadRoutes = function () {
        var _this = this;
        this.routesService.fetchAll().subscribe(function (routes) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__statemanagement_actions_data_route__["a" /* SetAllRoutes */](routes));
        }, function (err) { return _this.notificationService.show('An error occured when loading the routes.'); });
    };
    ShellSandbox.prototype.removeRoute = function (routeId) {
        var _this = this;
        var routeSubscription = this.routes$.subscribe(function (routes) {
            routes.forEach(function (route) {
                var routeModel = new __WEBPACK_IMPORTED_MODULE_16__trainnetwork_model_RouteModel__["a" /* RouteModel */](route);
                if (routeModel.viaIds) {
                    var impactedIndex = routeModel.viaIds.findIndex(function (viaId) { return viaId === routeId; });
                    if (impactedIndex > -1) {
                        routeModel.viaIds = routeModel.viaIds.filter(function (viaId) { return viaId !== routeId; });
                        _this.addOrUpdateRoute(routeModel.toRoute(), true);
                    }
                }
            });
            _this.routesService.remove(routeId).subscribe(function (response) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__statemanagement_actions_data_route__["b" /* RemoveRoute */](routeId));
                _this.notificationService.show('Route was removed.');
            }, function (err) { return _this.notificationService.show('An error occured when removing the route.'); });
        });
        this.loadRoutes();
        routeSubscription.unsubscribe();
    };
    ShellSandbox.prototype.onRouteSavedSuccessfully = function (message, noRedirect) {
        this.setRouteDetailPristine();
        this.notificationService.show(message);
        if (!noRedirect) {
            this.gotoRoutes();
        }
    };
    ShellSandbox.prototype.addOrUpdateRoute = function (route, noRedirect) {
        var _this = this;
        if (!route.id) {
            this.routesService.add(route).subscribe(function (response) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__statemanagement_actions_data_route__["c" /* AddRoute */](new __WEBPACK_IMPORTED_MODULE_6__trainnetwork_entities_Route__["a" /* Route */](response.text(), route.viaIds, route.terminal, route.type)));
                _this.onRouteSavedSuccessfully("Route \"" + route.terminal.name + "\" was added.", noRedirect);
            }, function (err) { return _this.notificationService.show("An error occured when adding route \"" + route.terminal.name + "\"."); });
        }
        else {
            this.routesService.update(route).subscribe(function (response) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__statemanagement_actions_data_route__["d" /* UpdateRoute */](route.id, route));
                _this.onRouteSavedSuccessfully("Route \"" + route.terminal.name + "\" was updated.", noRedirect);
            }, function (err) { return _this.notificationService.show("An error occured when updating route \"" + route.terminal.name + "\"."); });
        }
    };
    ShellSandbox.prototype.fetchRoute = function (routeId) {
        var _this = this;
        this.routesService.fetch(routeId).subscribe(function (route) { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__statemanagement_actions_data_route__["e" /* AddFetchedRoute */](route)); }, function (err) { return _this.notificationService.show('An error occured when fetching the route.'); });
    };
    ShellSandbox.prototype.clearFetchedRoute = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_4__statemanagement_actions_data_route__["f" /* ClearFetchedRoute */]());
    };
    ShellSandbox.prototype.setRouteDetailPristine = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_10__statemanagement_actions_containers_route_detail__["a" /* SetRouteDetailPristine */]());
    };
    ShellSandbox.prototype.clearRouteDetailPristine = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_10__statemanagement_actions_containers_route_detail__["b" /* ClearRouteDetailPristine */]());
    };
    // Operator methods
    ShellSandbox.prototype.loadOperators = function () {
        var _this = this;
        this.operatorsService.fetchAll().subscribe(function (operators) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_13__statemanagement_actions_data_operator__["a" /* SetAllOperators */](operators));
        }, function (err) { return _this.notificationService.show('An error occured when loading the operators.'); });
    };
    ShellSandbox.prototype.removeOperator = function (operatorId) {
        var _this = this;
        var routeSubscription = this.routes$.subscribe(function (routes) {
            routes.forEach(function (route) {
                var routeModel = new __WEBPACK_IMPORTED_MODULE_16__trainnetwork_model_RouteModel__["a" /* RouteModel */](route);
                if (routeModel.timings) {
                    var impactedTimings = routeModel.timings.filter(function (timing) { return timing.operatorId === operatorId; });
                    if (impactedTimings.length > 0) {
                        impactedTimings.forEach(function (timing) {
                            var index = routeModel.timings.indexOf(timing);
                            routeModel.timings.splice(index, 1);
                        });
                        _this.addOrUpdateRoute(routeModel.toRoute(), true);
                    }
                }
            });
            _this.operatorsService.remove(operatorId).subscribe(function (response) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_13__statemanagement_actions_data_operator__["b" /* RemoveOperator */](operatorId));
                _this.notificationService.show('Operator was removed.');
            }, function (err) { return _this.notificationService.show('An error occured when removing the operator.'); });
        });
        this.loadRoutes();
        routeSubscription.unsubscribe();
    };
    ShellSandbox.prototype.onOperatorSavedSuccessfully = function (message, noRedirect) {
        this.setOperatorDetailPristine();
        this.notificationService.show(message);
        if (!noRedirect) {
            this.gotoOperators();
        }
    };
    ShellSandbox.prototype.addOrUpdateOperator = function (operator, noRedirect) {
        var _this = this;
        if (!operator.id) {
            this.operatorsService.add(operator).subscribe(function (response) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_13__statemanagement_actions_data_operator__["c" /* AddOperator */](new __WEBPACK_IMPORTED_MODULE_14__trainnetwork_entities_Operator__["a" /* Operator */](response.text(), operator.name, operator.url, operator.comments)));
                _this.onOperatorSavedSuccessfully("Operator \"" + operator.name + "\" was added.", noRedirect);
            }, function (err) { return _this.notificationService.show("An error occured when adding operator \"" + operator.name + "\"."); });
        }
        else {
            this.operatorsService.update(operator).subscribe(function (response) {
                _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_13__statemanagement_actions_data_operator__["d" /* UpdateOperator */](operator.id, operator));
                _this.onOperatorSavedSuccessfully("Operator \"" + operator.name + "\" was updated.", noRedirect);
            }, function (err) { return _this.notificationService.show("An error occured when updating operator \"" + operator.name + "\"."); });
        }
    };
    ShellSandbox.prototype.fetchOperator = function (operatorId) {
        var _this = this;
        this.operatorsService.fetch(operatorId).subscribe(function (operator) { return _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_13__statemanagement_actions_data_operator__["e" /* AddFetchedOperator */](operator)); }, function (err) { return _this.notificationService.show('An error occured when fetching the operator.'); });
    };
    ShellSandbox.prototype.clearFetchedOperator = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_13__statemanagement_actions_data_operator__["f" /* ClearFetchedOperator */]());
    };
    ShellSandbox.prototype.setOperatorDetailPristine = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_15__statemanagement_actions_containers_operator_detail__["a" /* SetOperatorDetailPristine */]());
    };
    ShellSandbox.prototype.clearOperatorDetailPristine = function () {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_15__statemanagement_actions_containers_operator_detail__["b" /* ClearOperatorDetailPristine */]());
    };
    // Map routes
    ShellSandbox.prototype.gotoMap = function () {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ngrx_router_store__["b" /* go */])(__WEBPACK_IMPORTED_MODULE_3__RouteUrls__["a" /* RouteUrls */].URL_MAP));
    };
    // Route routes
    ShellSandbox.prototype.gotoRoutes = function () {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ngrx_router_store__["b" /* go */])(__WEBPACK_IMPORTED_MODULE_3__RouteUrls__["a" /* RouteUrls */].URL_ROUTES));
    };
    ShellSandbox.prototype.gotoEditRoute = function (routeId) {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ngrx_router_store__["b" /* go */])(__WEBPACK_IMPORTED_MODULE_3__RouteUrls__["a" /* RouteUrls */].URL_ROUTES + '/' + routeId));
    };
    ShellSandbox.prototype.gotoAddRoute = function () {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ngrx_router_store__["b" /* go */])(__WEBPACK_IMPORTED_MODULE_3__RouteUrls__["a" /* RouteUrls */].URL_ROUTE_ADD));
    };
    // Operator operators
    ShellSandbox.prototype.gotoOperators = function () {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ngrx_router_store__["b" /* go */])(__WEBPACK_IMPORTED_MODULE_3__RouteUrls__["a" /* RouteUrls */].URL_OPERATORS));
    };
    ShellSandbox.prototype.gotoEditOperator = function (operatorId) {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ngrx_router_store__["b" /* go */])(__WEBPACK_IMPORTED_MODULE_3__RouteUrls__["a" /* RouteUrls */].URL_OPERATORS + '/' + operatorId));
    };
    ShellSandbox.prototype.gotoAddOperator = function () {
        this.store.dispatch(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ngrx_router_store__["b" /* go */])(__WEBPACK_IMPORTED_MODULE_3__RouteUrls__["a" /* RouteUrls */].URL_OPERATOR_ADD));
    };
    return ShellSandbox;
}());
ShellSandbox = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["c" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__trainnetwork_services_routes_service__["a" /* RoutesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__trainnetwork_services_routes_service__["a" /* RoutesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__trainnetwork_services_operators_service__["a" /* OperatorsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__trainnetwork_services_operators_service__["a" /* OperatorsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__services_notification_service__["a" /* NotificationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__services_notification_service__["a" /* NotificationService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_12__services_localStorage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_localStorage_service__["a" /* LocalStorageService */]) === "function" && _e || Object])
], ShellSandbox);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=shell.sandbox.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    hmr: false,
    sentryUrl: 'https://c92d9a4e6d0844f7b58a92be41b3b7e9@sentry.io/191287',
    apiUrl: 'http://localhost:32771/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/hmr.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__ = __webpack_require__("../../../../@angularclass/hmr/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angularclass_hmr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appState; });
/* unused harmony export hmrBootstrap */




var appState = {};
var hmrBootstrap = function (module, bootstrap) {
    var ngModule;
    module.hot.accept();
    bootstrap().then(function (mod) { return ngModule = mod; });
    module.hot.dispose(function () {
        var appRef = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ApplicationRef */]);
        var elements = appRef.components.map(function (c) { return c.location.nativeElement; });
        var store = ngModule.injector.get(__WEBPACK_IMPORTED_MODULE_2__ngrx_store__["c" /* Store */]);
        store.take(1).subscribe(function (s) {
            appState = s;
        });
        var makeVisible = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angularclass_hmr__["createNewHosts"])(elements);
        ngModule.destroy();
        makeVisible();
    });
};
//# sourceMappingURL=hmr.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__hmr__ = __webpack_require__("../../../../../src/hmr.ts");





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
var bootstrap = function () { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]); };
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].hmr) {
    if (false) {
        hmrBootstrap(module, bootstrap);
    }
    else {
        console.error('HMR is not enabled for webpack-dev-server!');
        console.log('Are you using the --hmr flag for ng serve?');
    }
}
else {
    bootstrap();
}
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/actions/containers/operator-detail.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__("../../../../../src/util/util.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetOperatorDetailPristine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClearOperatorDetailPristine; });

var ActionTypes = {
    SET_PRESTINE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('CONTAINER_OPERATORDETAIL_SET_PRISTINE'),
    CLEAR_PRESTINE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('CONTAINER_OPERATORDETAIL_CLEAR_PRISTINE'),
};
var SetOperatorDetailPristine = (function () {
    function SetOperatorDetailPristine() {
        this.type = ActionTypes.SET_PRESTINE;
    }
    return SetOperatorDetailPristine;
}());

var ClearOperatorDetailPristine = (function () {
    function ClearOperatorDetailPristine() {
        this.type = ActionTypes.CLEAR_PRESTINE;
    }
    return ClearOperatorDetailPristine;
}());

//# sourceMappingURL=operator-detail.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/actions/containers/route-detail.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__("../../../../../src/util/util.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetRouteDetailPristine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ClearRouteDetailPristine; });

var ActionTypes = {
    SET_PRESTINE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('CONTAINER_ROUTEDETAIL_SET_PRISTINE'),
    CLEAR_PRESTINE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('CONTAINER_ROUTEDETAIL_CLEAR_PRISTINE'),
};
var SetRouteDetailPristine = (function () {
    function SetRouteDetailPristine() {
        this.type = ActionTypes.SET_PRESTINE;
    }
    return SetRouteDetailPristine;
}());

var ClearRouteDetailPristine = (function () {
    function ClearRouteDetailPristine() {
        this.type = ActionTypes.CLEAR_PRESTINE;
    }
    return ClearRouteDetailPristine;
}());

//# sourceMappingURL=route-detail.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/actions/data/authentication.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__("../../../../../src/util/util.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });

var ActionTypes = {
    LOGIN: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_AUTHENTICATION_LOGIN'),
};
var Login = (function () {
    function Login() {
        this.type = ActionTypes.LOGIN;
    }
    return Login;
}());

//# sourceMappingURL=authentication.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/actions/data/operator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__("../../../../../src/util/util.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AddFetchedOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ClearFetchedOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoveOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UpdateOperator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetAllOperators; });

var ActionTypes = {
    OPERATORS_ADD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_OPERATORS_ADD'),
    OPERATORS_REMOVE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_OPERATORS_REMOVE'),
    OPERATORS_UPDATE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_OPERATORS_UPDATE'),
    OPERATORS_SET_ALL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_OPERATORS_ADD_ALL'),
    OPERATOR_ADD_FETCHED: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_OPERATOR_ADD_FETCHED'),
    OPERATOR_CLEAR_FETCHED: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_OPERATOR_CLEAR_FETCHED')
};
var AddFetchedOperator = (function () {
    function AddFetchedOperator(operator) {
        this.type = ActionTypes.OPERATOR_ADD_FETCHED;
        this.payload = { operator: operator };
    }
    return AddFetchedOperator;
}());

var ClearFetchedOperator = (function () {
    function ClearFetchedOperator() {
        this.type = ActionTypes.OPERATOR_CLEAR_FETCHED;
    }
    return ClearFetchedOperator;
}());

var AddOperator = (function () {
    function AddOperator(operator) {
        this.type = ActionTypes.OPERATORS_ADD;
        this.payload = { operator: operator };
    }
    return AddOperator;
}());

var RemoveOperator = (function () {
    function RemoveOperator(id) {
        this.type = ActionTypes.OPERATORS_REMOVE;
        this.payload = { id: id };
    }
    return RemoveOperator;
}());

var UpdateOperator = (function () {
    function UpdateOperator(id, operator) {
        this.type = ActionTypes.OPERATORS_UPDATE;
        this.payload = { id: id, operator: operator };
    }
    return UpdateOperator;
}());

var SetAllOperators = (function () {
    function SetAllOperators(operators) {
        this.type = ActionTypes.OPERATORS_SET_ALL;
        this.payload = { operators: operators };
    }
    return SetAllOperators;
}());

//# sourceMappingURL=operator.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/actions/data/route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__("../../../../../src/util/util.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return AddFetchedRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ClearFetchedRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RemoveRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UpdateRoute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetAllRoutes; });

var ActionTypes = {
    ROUTES_ADD: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_ROUTES_ADD'),
    ROUTES_REMOVE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_ROUTES_REMOVE'),
    ROUTES_UPDATE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_ROUTES_UPDATE'),
    ROUTES_SET_ALL: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_ROUTES_ADD_ALL'),
    ROUTE_ADD_FETCHED: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_ROUTE_ADD_FETCHED'),
    ROUTE_CLEAR_FETCHED: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('DATA_ROUTE_CLEAR_FETCHED')
};
var AddFetchedRoute = (function () {
    function AddFetchedRoute(route) {
        this.type = ActionTypes.ROUTE_ADD_FETCHED;
        this.payload = { route: route };
    }
    return AddFetchedRoute;
}());

var ClearFetchedRoute = (function () {
    function ClearFetchedRoute() {
        this.type = ActionTypes.ROUTE_CLEAR_FETCHED;
    }
    return ClearFetchedRoute;
}());

var AddRoute = (function () {
    function AddRoute(route) {
        this.type = ActionTypes.ROUTES_ADD;
        this.payload = { route: route };
    }
    return AddRoute;
}());

var RemoveRoute = (function () {
    function RemoveRoute(id) {
        this.type = ActionTypes.ROUTES_REMOVE;
        this.payload = { id: id };
    }
    return RemoveRoute;
}());

var UpdateRoute = (function () {
    function UpdateRoute(id, route) {
        this.type = ActionTypes.ROUTES_UPDATE;
        this.payload = { id: id, route: route };
    }
    return UpdateRoute;
}());

var SetAllRoutes = (function () {
    function SetAllRoutes(routes) {
        this.type = ActionTypes.ROUTES_SET_ALL;
        this.payload = { routes: routes };
    }
    return SetAllRoutes;
}());

//# sourceMappingURL=route.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/metareducers/reset-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_util__ = __webpack_require__("../../../../../src/util/util.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResetStore; });
/* harmony export (immutable) */ __webpack_exports__["a"] = reset;

var actionTypes = {
    RESET_STORE: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('RESET_STORE'),
    GENERIC_ACTION: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_util__["a" /* type */])('GENERIC_ACTION')
};
var ResetStore = (function () {
    function ResetStore() {
        this.type = actionTypes.RESET_STORE;
    }
    return ResetStore;
}());

var GenericAction = (function () {
    function GenericAction() {
        this.type = actionTypes.GENERIC_ACTION;
    }
    return GenericAction;
}());
function reset(reducer, initialState) {
    return function (state, action) {
        if (action.type === actionTypes.RESET_STORE) {
            return reducer(undefined, new GenericAction());
        }
        return reducer(state, action);
    };
}
//# sourceMappingURL=reset-reducer.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/reducers/containers/operator-detail.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_containers_operator_detail__ = __webpack_require__("../../../../../src/statemanagement/actions/containers/operator-detail.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = operatorDetailPristineReducer;

var initialState = {
    isPristine: true
};
function operatorDetailPristineReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_containers_operator_detail__["c" /* ActionTypes */].CLEAR_PRESTINE:
            return {
                isPristine: false
            };
        case __WEBPACK_IMPORTED_MODULE_0__actions_containers_operator_detail__["c" /* ActionTypes */].SET_PRESTINE:
            return {
                isPristine: true
            };
        default:
            return state;
    }
}
;
//# sourceMappingURL=operator-detail.reducer.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/reducers/containers/route-detail.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_containers_route_detail__ = __webpack_require__("../../../../../src/statemanagement/actions/containers/route-detail.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = routeDetailPristineReducer;

var initialState = {
    isPristine: true
};
function routeDetailPristineReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_containers_route_detail__["c" /* ActionTypes */].CLEAR_PRESTINE:
            return {
                isPristine: false
            };
        case __WEBPACK_IMPORTED_MODULE_0__actions_containers_route_detail__["c" /* ActionTypes */].SET_PRESTINE:
            return {
                isPristine: true
            };
        default:
            return state;
    }
}
;
//# sourceMappingURL=route-detail.reducer.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/reducers/data/authentication.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_data_authentication__ = __webpack_require__("../../../../../src/statemanagement/actions/data/authentication.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = authenticationReducer;

var initialState = {
    isAuthenticated: false
};
function authenticationReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_authentication__["b" /* ActionTypes */].LOGIN:
            return {
                isAuthenticated: true
            };
        default:
            return state;
    }
}
;
//# sourceMappingURL=authentication.reducer.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/reducers/data/operator.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_data_operator__ = __webpack_require__("../../../../../src/statemanagement/actions/data/operator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Operator__ = __webpack_require__("../../../../../src/trainnetwork/entities/Operator.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = operatorReducer;


function operatorReducer(state, action) {
    if (state === void 0) { state = new __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Operator__["a" /* Operator */](); }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_operator__["g" /* ActionTypes */].OPERATOR_ADD_FETCHED:
            return Object.assign({}, action.payload.operator);
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_operator__["g" /* ActionTypes */].OPERATOR_CLEAR_FETCHED:
            return new __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Operator__["a" /* Operator */]();
        default:
            return state;
    }
}
;
//# sourceMappingURL=operator.reducer.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/reducers/data/operators.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_data_operator__ = __webpack_require__("../../../../../src/statemanagement/actions/data/operator.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = operatorsReducer;

function operatorsReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_operator__["g" /* ActionTypes */].OPERATORS_ADD:
            return state.concat([action.payload.operator]);
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_operator__["g" /* ActionTypes */].OPERATORS_SET_ALL:
            return action.payload.operators.slice();
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_operator__["g" /* ActionTypes */].OPERATORS_REMOVE:
            return state.filter(function (item) { return item.id !== action.payload.id; });
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_operator__["g" /* ActionTypes */].OPERATORS_UPDATE:
            return state.map(function (item) { return item.id === action.payload.id ? Object.assign({}, action.payload.operator) : item; });
        default:
            return state;
    }
}
;
//# sourceMappingURL=operators.reducer.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/reducers/data/route.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_data_route__ = __webpack_require__("../../../../../src/statemanagement/actions/data/route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Route__ = __webpack_require__("../../../../../src/trainnetwork/entities/Route.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = routeReducer;


function routeReducer(state, action) {
    if (state === void 0) { state = new __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Route__["a" /* Route */](); }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_route__["g" /* ActionTypes */].ROUTE_ADD_FETCHED:
            return Object.assign({}, action.payload.route);
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_route__["g" /* ActionTypes */].ROUTE_CLEAR_FETCHED:
            return new __WEBPACK_IMPORTED_MODULE_1__trainnetwork_entities_Route__["a" /* Route */]();
        default:
            return state;
    }
}
;
//# sourceMappingURL=route.reducer.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/reducers/data/routes.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_data_route__ = __webpack_require__("../../../../../src/statemanagement/actions/data/route.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = routesReducer;

function routesReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_route__["g" /* ActionTypes */].ROUTES_ADD:
            return state.concat([action.payload.route]);
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_route__["g" /* ActionTypes */].ROUTES_SET_ALL:
            return action.payload.routes.slice();
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_route__["g" /* ActionTypes */].ROUTES_REMOVE:
            return state.filter(function (item) { return item.id !== action.payload.id; });
        case __WEBPACK_IMPORTED_MODULE_0__actions_data_route__["g" /* ActionTypes */].ROUTES_UPDATE:
            return state.map(function (item) { return item.id === action.payload.id ? Object.assign({}, action.payload.route) : item; });
        default:
            return state;
    }
}
;
//# sourceMappingURL=routes.reducer.js.map

/***/ }),

/***/ "../../../../../src/statemanagement/rootReducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_data_authentication_reducer__ = __webpack_require__("../../../../../src/statemanagement/reducers/data/authentication.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducers_data_routes_reducer__ = __webpack_require__("../../../../../src/statemanagement/reducers/data/routes.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__ = __webpack_require__("../../../../@ngrx/router-store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reducers_data_route_reducer__ = __webpack_require__("../../../../../src/statemanagement/reducers/data/route.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers_containers_route_detail_reducer__ = __webpack_require__("../../../../../src/statemanagement/reducers/containers/route-detail.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reducers_containers_operator_detail_reducer__ = __webpack_require__("../../../../../src/statemanagement/reducers/containers/operator-detail.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducers_data_operators_reducer__ = __webpack_require__("../../../../../src/statemanagement/reducers/data/operators.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_statemanagement_reducers_data_operator_reducer__ = __webpack_require__("../../../../../src/statemanagement/reducers/data/operator.reducer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rootReducer; });









var dataReducers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* combineReducers */])({
    authentication: __WEBPACK_IMPORTED_MODULE_1__reducers_data_authentication_reducer__["a" /* authenticationReducer */],
    routes: __WEBPACK_IMPORTED_MODULE_2__reducers_data_routes_reducer__["a" /* routesReducer */],
    route: __WEBPACK_IMPORTED_MODULE_4__reducers_data_route_reducer__["a" /* routeReducer */],
    operators: __WEBPACK_IMPORTED_MODULE_7__reducers_data_operators_reducer__["a" /* operatorsReducer */],
    operator: __WEBPACK_IMPORTED_MODULE_8_statemanagement_reducers_data_operator_reducer__["a" /* operatorReducer */]
});
var containerReducers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ngrx_store__["a" /* combineReducers */])({
    routeDetailPristine: __WEBPACK_IMPORTED_MODULE_5__reducers_containers_route_detail_reducer__["a" /* routeDetailPristineReducer */],
    operatorDetailPristine: __WEBPACK_IMPORTED_MODULE_6__reducers_containers_operator_detail_reducer__["a" /* operatorDetailPristineReducer */]
});
var rootReducer = {
    data: dataReducers,
    containers: containerReducers,
    router: __WEBPACK_IMPORTED_MODULE_3__ngrx_router_store__["c" /* routerReducer */]
};
//# sourceMappingURL=rootReducer.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/entities/Coordinates.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Coordinates; });
var Coordinates = (function () {
    function Coordinates(latitude, longitude) {
        if (latitude === void 0) { latitude = 0; }
        if (longitude === void 0) { longitude = 0; }
        this.latitude = latitude;
        this.longitude = longitude;
    }
    return Coordinates;
}());

//# sourceMappingURL=Coordinates.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/entities/Operator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Operator; });
var Operator = (function () {
    function Operator(id, name, url, comments) {
        if (id === void 0) { id = null; }
        if (name === void 0) { name = null; }
        if (url === void 0) { url = null; }
        if (comments === void 0) { comments = null; }
        this.id = id;
        this.name = name;
        this.url = url;
        this.comments = comments;
    }
    return Operator;
}());

//# sourceMappingURL=Operator.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/entities/Route.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Terminal__ = __webpack_require__("../../../../../src/trainnetwork/entities/Terminal.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Route; });

var Route = (function () {
    function Route(id, viaIds, terminal, type, timings) {
        if (id === void 0) { id = null; }
        if (viaIds === void 0) { viaIds = null; }
        if (terminal === void 0) { terminal = new __WEBPACK_IMPORTED_MODULE_0__Terminal__["a" /* Terminal */](); }
        if (type === void 0) { type = null; }
        if (timings === void 0) { timings = null; }
        this.id = id;
        this.viaIds = viaIds;
        this.terminal = terminal;
        this.type = type;
        this.timings = timings;
    }
    return Route;
}());

//# sourceMappingURL=Route.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/entities/Terminal.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Coordinates__ = __webpack_require__("../../../../../src/trainnetwork/entities/Coordinates.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Terminal; });

var Terminal = (function () {
    function Terminal(name, coordinates) {
        if (name === void 0) { name = ''; }
        if (coordinates === void 0) { coordinates = new __WEBPACK_IMPORTED_MODULE_0__Coordinates__["a" /* Coordinates */](); }
        this.name = name;
        this.coordinates = coordinates;
    }
    return Terminal;
}());

//# sourceMappingURL=Terminal.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/entities/Timing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimingData__ = __webpack_require__("../../../../../src/trainnetwork/entities/TimingData.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timing; });

var Timing = (function () {
    function Timing(operatorId, routeId, timingDataTo, timingDataFrom) {
        if (operatorId === void 0) { operatorId = null; }
        if (routeId === void 0) { routeId = null; }
        if (timingDataTo === void 0) { timingDataTo = new __WEBPACK_IMPORTED_MODULE_0__TimingData__["a" /* TimingData */](); }
        if (timingDataFrom === void 0) { timingDataFrom = new __WEBPACK_IMPORTED_MODULE_0__TimingData__["a" /* TimingData */](); }
        this.operatorId = operatorId;
        this.routeId = routeId;
        this.timingDataTo = timingDataTo;
        this.timingDataFrom = timingDataFrom;
    }
    return Timing;
}());

//# sourceMappingURL=Timing.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/entities/TimingData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingData; });
var TimingData = (function () {
    function TimingData(departure, closing, pickup, profile) {
        if (departure === void 0) { departure = null; }
        if (closing === void 0) { closing = null; }
        if (pickup === void 0) { pickup = null; }
        if (profile === void 0) { profile = null; }
        this.departure = departure;
        this.closing = closing;
        this.pickup = pickup;
        this.profile = profile;
    }
    return TimingData;
}());

//# sourceMappingURL=TimingData.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/entities/TokenData.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenData; });
var TokenData = (function () {
    function TokenData(token) {
        if (token === void 0) { token = null; }
        this.token = token;
    }
    return TokenData;
}());

//# sourceMappingURL=TokenData.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/model/CoordinatesModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoordinatesModel; });
var CoordinatesModel = (function () {
    function CoordinatesModel(coordinates) {
        if (coordinates) {
            this.longitude = coordinates.longitude;
            this.latitude = coordinates.latitude;
        }
    }
    return CoordinatesModel;
}());

//# sourceMappingURL=CoordinatesModel.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/model/OperatorModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_Operator__ = __webpack_require__("../../../../../src/trainnetwork/entities/Operator.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorModel; });

var OperatorModel = (function () {
    function OperatorModel(operator) {
        if (operator) {
            this.id = operator.id;
            this.name = operator.name;
            this.url = operator.url;
            this.comments = operator.comments;
        }
    }
    OperatorModel.prototype.toOperator = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__entities_Operator__["a" /* Operator */](this.id, this.name, this.url, this.comments);
    };
    return OperatorModel;
}());

//# sourceMappingURL=OperatorModel.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/model/RouteModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entities_Route__ = __webpack_require__("../../../../../src/trainnetwork/entities/Route.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TerminalModel__ = __webpack_require__("../../../../../src/trainnetwork/model/TerminalModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__entities_Terminal__ = __webpack_require__("../../../../../src/trainnetwork/entities/Terminal.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__entities_Coordinates__ = __webpack_require__("../../../../../src/trainnetwork/entities/Coordinates.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TimingModel__ = __webpack_require__("../../../../../src/trainnetwork/model/TimingModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__entities_Timing__ = __webpack_require__("../../../../../src/trainnetwork/entities/Timing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entities_TimingData__ = __webpack_require__("../../../../../src/trainnetwork/entities/TimingData.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouteModel; });







var RouteModel = (function () {
    function RouteModel(route) {
        if (route) {
            this.id = route.id;
            this.viaIds = route.viaIds === null ? [] : route.viaIds;
            this.terminal = new __WEBPACK_IMPORTED_MODULE_1__TerminalModel__["a" /* TerminalModel */](route.terminal);
            this.timings = route.timings === null ? [] : route.timings.map(function (t) { return new __WEBPACK_IMPORTED_MODULE_4__TimingModel__["a" /* TimingModel */](t); });
        }
    }
    Object.defineProperty(RouteModel.prototype, "viaIds", {
        get: function () {
            return this._viaIds;
        },
        set: function (value) {
            this._viaIds = value;
            if (this._viaIds !== null && this._viaIds.length > 0) {
                this.type = 'Indirect';
            }
            else {
                this.type = 'Direct';
            }
        },
        enumerable: true,
        configurable: true
    });
    RouteModel.prototype.toRoute = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__entities_Route__["a" /* Route */](this.id, this.viaIds, new __WEBPACK_IMPORTED_MODULE_2__entities_Terminal__["a" /* Terminal */](this.terminal.name, new __WEBPACK_IMPORTED_MODULE_3__entities_Coordinates__["a" /* Coordinates */](this.terminal.coordinates.latitude, this.terminal.coordinates.longitude)), this.type, this.timings.map(function (t) { return new __WEBPACK_IMPORTED_MODULE_5__entities_Timing__["a" /* Timing */](t.operatorId, t.routeId, new __WEBPACK_IMPORTED_MODULE_6__entities_TimingData__["a" /* TimingData */](t.timingDataTo.departure, t.timingDataTo.closing, t.timingDataTo.pickup, t.timingDataTo.profile), new __WEBPACK_IMPORTED_MODULE_6__entities_TimingData__["a" /* TimingData */](t.timingDataFrom.departure, t.timingDataFrom.closing, t.timingDataFrom.pickup, t.timingDataFrom.profile)); }));
    };
    return RouteModel;
}());

//# sourceMappingURL=RouteModel.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/model/TerminalModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__CoordinatesModel__ = __webpack_require__("../../../../../src/trainnetwork/model/CoordinatesModel.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminalModel; });

var TerminalModel = (function () {
    function TerminalModel(terminal) {
        if (terminal) {
            this.name = terminal.name;
            this.coordinates = new __WEBPACK_IMPORTED_MODULE_0__CoordinatesModel__["a" /* CoordinatesModel */](terminal.coordinates);
        }
    }
    return TerminalModel;
}());

//# sourceMappingURL=TerminalModel.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/model/TimingDataModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingDataModel; });
var TimingDataModel = (function () {
    function TimingDataModel(timingData) {
        this.departure = null;
        this.closing = null;
        this.pickup = null;
        this.profile = null;
        if (timingData) {
            this.departure = timingData.departure;
            this.closing = timingData.closing;
            this.pickup = timingData.pickup;
            this.profile = timingData.profile;
        }
    }
    return TimingDataModel;
}());

//# sourceMappingURL=TimingDataModel.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/model/TimingModel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TimingDataModel__ = __webpack_require__("../../../../../src/trainnetwork/model/TimingDataModel.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimingModel; });

var TimingModel = (function () {
    function TimingModel(timing) {
        this.timingDataTo = new __WEBPACK_IMPORTED_MODULE_0__TimingDataModel__["a" /* TimingDataModel */]();
        this.timingDataFrom = new __WEBPACK_IMPORTED_MODULE_0__TimingDataModel__["a" /* TimingDataModel */]();
        if (timing) {
            this.operatorId = timing.operatorId;
            this.routeId = timing.routeId;
            this.timingDataTo = new __WEBPACK_IMPORTED_MODULE_0__TimingDataModel__["a" /* TimingDataModel */](timing.timingDataTo);
            this.timingDataFrom = new __WEBPACK_IMPORTED_MODULE_0__TimingDataModel__["a" /* TimingDataModel */](timing.timingDataFrom);
        }
    }
    return TimingModel;
}());

//# sourceMappingURL=TimingModel.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_trainnetwork_services_authorizedHttpOptions_service__ = __webpack_require__("../../../../../src/trainnetwork/services/authorizedHttpOptions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AUTHENTICATION_API_SUFFIX = '/authentication';
var AuthenticationService = (function () {
    function AuthenticationService(http, authorizedHttpOptionsService) {
        this.http = http;
        this.authorizedHttpOptionsService = authorizedHttpOptionsService;
        this.authenticationApiUrl = "" + __WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].apiUrl + AUTHENTICATION_API_SUFFIX;
    }
    AuthenticationService.prototype.login = function (tokenData) {
        this.authorizedHttpOptionsService.setToken(tokenData.token);
        return this.http.post(this.authenticationApiUrl, tokenData, this.authorizedHttpOptionsService.options)
            .map(function (res) { return res.json(); });
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_trainnetwork_services_authorizedHttpOptions_service__["a" /* AuthorizedHttpOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_trainnetwork_services_authorizedHttpOptions_service__["a" /* AuthorizedHttpOptionsService */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/services/authorizedHttpOptions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_services_localStorage_service__ = __webpack_require__("../../../../../src/app/services/localStorage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthorizedHttpOptionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthorizedHttpOptionsService = (function () {
    function AuthorizedHttpOptionsService(localStorageService) {
        this.localStorageService = localStorageService;
    }
    Object.defineProperty(AuthorizedHttpOptionsService.prototype, "options", {
        get: function () {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({
                authorization: "Bearer " + this.localStorageService.token
            });
            return new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        },
        enumerable: true,
        configurable: true
    });
    AuthorizedHttpOptionsService.prototype.setToken = function (token) {
        this.localStorageService.token = token;
    };
    return AuthorizedHttpOptionsService;
}());
AuthorizedHttpOptionsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_services_localStorage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_services_localStorage_service__["a" /* LocalStorageService */]) === "function" && _a || Object])
], AuthorizedHttpOptionsService);

var _a;
//# sourceMappingURL=authorizedHttpOptions.service.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/services/base.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_trainnetwork_services_authorizedHttpOptions_service__ = __webpack_require__("../../../../../src/trainnetwork/services/authorizedHttpOptions.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BaseService = (function () {
    function BaseService(http, authorizedHttpOptionsService) {
        this.http = http;
        this.authorizedHttpOptionsService = authorizedHttpOptionsService;
        this.apiUrl = "" + __WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].apiUrl + this.apiSuffix;
    }
    BaseService.prototype.add = function (item) {
        return this.http.post(this.apiUrl, item, this.authorizedHttpOptionsService.options);
    };
    BaseService.prototype.update = function (item) {
        return this.http.put(this.apiUrl, item, this.authorizedHttpOptionsService.options);
    };
    BaseService.prototype.remove = function (id) {
        return this.http.delete(this.apiUrl + "/" + id, this.authorizedHttpOptionsService.options);
    };
    BaseService.prototype.fetchAll = function () {
        return this.http.get(this.apiUrl, this.authorizedHttpOptionsService.options)
            .map(function (res) { return res.json(); });
    };
    BaseService.prototype.fetch = function (id) {
        return this.http.get(this.apiUrl + "/" + id, this.authorizedHttpOptionsService.options)
            .map(function (res) { return res.json(); });
    };
    return BaseService;
}());
BaseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_trainnetwork_services_authorizedHttpOptions_service__["a" /* AuthorizedHttpOptionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_trainnetwork_services_authorizedHttpOptions_service__["a" /* AuthorizedHttpOptionsService */]) === "function" && _b || Object])
], BaseService);

var _a, _b;
//# sourceMappingURL=base.service.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/services/operators.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_service__ = __webpack_require__("../../../../../src/trainnetwork/services/base.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OperatorsService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OperatorsService = (function (_super) {
    __extends(OperatorsService, _super);
    function OperatorsService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(OperatorsService.prototype, "apiSuffix", {
        get: function () {
            return '/operators';
        },
        enumerable: true,
        configurable: true
    });
    ;
    return OperatorsService;
}(__WEBPACK_IMPORTED_MODULE_1__base_service__["a" /* BaseService */]));
OperatorsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], OperatorsService);

//# sourceMappingURL=operators.service.js.map

/***/ }),

/***/ "../../../../../src/trainnetwork/services/routes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_service__ = __webpack_require__("../../../../../src/trainnetwork/services/base.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutesService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RoutesService = (function (_super) {
    __extends(RoutesService, _super);
    function RoutesService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(RoutesService.prototype, "apiSuffix", {
        get: function () {
            return '/routes';
        },
        enumerable: true,
        configurable: true
    });
    ;
    return RoutesService;
}(__WEBPACK_IMPORTED_MODULE_1__base_service__["a" /* BaseService */]));
RoutesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], RoutesService);

//# sourceMappingURL=routes.service.js.map

/***/ }),

/***/ "../../../../../src/util/util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = type;
// snippet from: https://github.com/ngrx/example-app/blob/master/src/app/util.ts
var typeCache = {};
function type(label) {
    if (typeCache[label]) {
        throw new Error("Action type \"" + label + "\" is not unqiue\"");
    }
    typeCache[label] = true;
    return label;
}
//# sourceMappingURL=util.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map