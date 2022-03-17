"use strict";
(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["src_app_login_login_module_ts"],{

/***/ 9549:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loginRoutes": () => (/* binding */ loginRoutes),
/* harmony export */   "LoginModule": () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngrx/effects */ 2251);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ 8001);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var src_app_demo_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/demo-material-module */ 1779);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/shared.module */ 1382);
/* harmony import */ var _loginPage_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginPage/login.component */ 8953);
/* harmony import */ var _loginStore_login_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginStore/login.reducer */ 275);
/* harmony import */ var _loginStore_login_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginStore/login.effects */ 3831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);















const loginRoutes = [{
        path: '',
        component: _loginPage_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
    }
];
class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            src_app_demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(loginRoutes),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreModule.forFeature('login', _loginStore_login_reducer__WEBPACK_IMPORTED_MODULE_3__.LoginReducer),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsModule.forFeature([_loginStore_login_effects__WEBPACK_IMPORTED_MODULE_4__.AuthEffects]),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_loginPage_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        src_app_demo_material_module__WEBPACK_IMPORTED_MODULE_0__.DemoMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__.FlexLayoutModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_10__.StoreFeatureModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_11__.EffectsFeatureModule] }); })();


/***/ }),

/***/ 8953:
/*!****************************************************!*\
  !*** ./src/app/login/loginPage/login.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _loginStore_login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../loginStore/login.actions */ 3656);
/* harmony import */ var _loginStore_login_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../loginStore/login.state */ 9557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var src_app_Components_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Components/services/admin.service */ 2168);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8669);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 8662);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 6752);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/tooltip */ 4731);

















function LoginComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Username / Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_mat_icon_11_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_icon_12_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginComponent_mat_icon_12_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function LoginComponent_mat_error_16_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const error_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](error_r10.message);
} }
function LoginComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, LoginComponent_mat_error_16_span_1_Template, 2, 1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.errorMessageList);
} }
class LoginComponent {
    constructor(formBuilder, service, router, store) {
        this.formBuilder = formBuilder;
        this.service = service;
        this.router = router;
        this.store = store;
        this.passType = "password";
        this.passTypeBool = false;
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
        });
        this.errorMessage$ = this.store.pipe((0,_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.select)(_loginStore_login_state__WEBPACK_IMPORTED_MODULE_1__.loginError));
    }
    ngOnInit() {
        this.errorMessage$.subscribe((state) => {
            this.errorMessageList = state.errorMessage;
        });
    }
    submit() {
        if (!this.loginForm.valid) {
            return;
        }
        this.store.dispatch(new _loginStore_login_actions__WEBPACK_IMPORTED_MODULE_0__.LogIn(this.loginForm.value));
        // this.router.navigate(['/admin-list'])
    }
    show() {
        if (this.passType == "password") {
            this.passTypeBool = true;
            this.passType = "text";
        }
        else {
            this.passTypeBool = false;
            this.passType = "password";
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_Components_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminsService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__.Store)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 20, vars: 7, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "height-100"], ["fxFlex.gt-xs", "40", "fxFlex.sm", "70"], [1, "text-center"], [3, "formGroup", "ngSubmit"], ["type", "text", "matInput", "", "placeholder", "Username / Email", "formControlName", "username"], [4, "ngIf"], [1, "left"], ["matTooltip", "Show / Hide password", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["matInput", "", "placeholder", "Password", "formControlName", "password", 3, "type"], ["fxLayoutAlign", "center center", 1, "button"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["matTooltip", "Show / Hide password", 3, "click"], [3, "click"], [4, "ngFor", "ngForOf"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_5_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, LoginComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, LoginComponent_mat_icon_11_Template, 2, 0, "mat-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, LoginComponent_mat_icon_12_Template, 2, 0, "mat-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, LoginComponent_mat_error_15_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, LoginComponent_mat_error_16_Template, 2, 1, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.loginForm.get("username")) == null ? null : tmp_1_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.passTypeBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.passTypeBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("type", ctx.passType);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.loginForm.get("password")) == null ? null : tmp_5_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessageList.length);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultLayoutAlignDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatError, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_14__.MatTooltip, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf], styles: [".height-100[_ngcontent-%COMP%]{\n    height: 100vh;\n}\n.left[_ngcontent-%COMP%]{display: flex;\n    flex-direction: row-reverse;\n    align-items: center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0EsTUFBTSxhQUFhO0lBQ2YsMkJBQTJCO0lBQzNCLG1CQUFtQixDQUFDIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVpZ2h0LTEwMHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuLmxlZnR7ZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjt9XG4gICAgIl19 */"] });


/***/ }),

/***/ 3656:
/*!***************************************************!*\
  !*** ./src/app/login/loginStore/login.actions.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthActionTypes": () => (/* binding */ AuthActionTypes),
/* harmony export */   "LogIn": () => (/* binding */ LogIn),
/* harmony export */   "LogInSuccess": () => (/* binding */ LogInSuccess),
/* harmony export */   "LogInFailure": () => (/* binding */ LogInFailure),
/* harmony export */   "SignUp": () => (/* binding */ SignUp),
/* harmony export */   "SignUpSuccess": () => (/* binding */ SignUpSuccess),
/* harmony export */   "SignUpFailure": () => (/* binding */ SignUpFailure),
/* harmony export */   "LogOut": () => (/* binding */ LogOut),
/* harmony export */   "GetStatus": () => (/* binding */ GetStatus)
/* harmony export */ });
var AuthActionTypes;
(function (AuthActionTypes) {
    AuthActionTypes["LOGIN"] = "[Auth] Login";
    AuthActionTypes["LOGIN_SUCCESS"] = "[Auth] Login Success";
    AuthActionTypes["LOGIN_FAILURE"] = "[Auth] Login Failure";
    AuthActionTypes["SIGNUP"] = "[Auth] Signup";
    AuthActionTypes["SIGNUP_SUCCESS"] = "[Auth] Signup Success";
    AuthActionTypes["SIGNUP_FAILURE"] = "[Auth] Signup Failure";
    AuthActionTypes["LOGOUT"] = "[Auth] Logout";
    AuthActionTypes["GET_STATUS"] = "[Auth] GetStatus";
})(AuthActionTypes || (AuthActionTypes = {}));
class LogIn {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN;
    }
}
class LogInSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_SUCCESS;
    }
}
class LogInFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.LOGIN_FAILURE;
    }
}
class SignUp {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SIGNUP;
    }
}
class SignUpSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SIGNUP_SUCCESS;
    }
}
class SignUpFailure {
    constructor(payload) {
        this.payload = payload;
        this.type = AuthActionTypes.SIGNUP_FAILURE;
    }
}
class LogOut {
    constructor() {
        this.type = AuthActionTypes.LOGOUT;
    }
}
class GetStatus {
    constructor() {
        this.type = AuthActionTypes.GET_STATUS;
    }
}


/***/ }),

/***/ 3831:
/*!***************************************************!*\
  !*** ./src/app/login/loginStore/login.effects.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthEffects": () => (/* binding */ AuthEffects)
/* harmony export */ });
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ 2251);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9026);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var _login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.actions */ 3656);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 8252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 4996);
/* harmony import */ var src_app_Services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/api-data.service */ 8502);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_Components_services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Components/services/admin.service */ 2168);
/* harmony import */ var src_app_Services_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Services/login.service */ 5973);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











class AuthEffects {
    constructor(_snackBar, actions, authService, router, service, _service) {
        this._snackBar = _snackBar;
        this.actions = actions;
        this.authService = authService;
        this.router = router;
        this.service = service;
        this._service = _service;
        this.LogIn = this.actions.pipe((0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.ofType)(_login_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActionTypes.LOGIN), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((action) => action), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)((action) => {
            return this.authService.httpPost('portalauth', 'login', action.payload)
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)((user) => {
                this.router.navigate(['admin-list']);
                this._snackBar.open("Login Successful", "", { "duration": 2500 });
                localStorage.setItem('_context', user.data.token);
                localStorage.setItem('currentId', user.data.user._id);
                this._service.setUserLoggedIn(true);
                return new _login_actions__WEBPACK_IMPORTED_MODULE_0__.LogInSuccess({ token: user.data.token, email: user.data.user.email, id: user.data.user.id });
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)((error) => {
                this._snackBar.open("Invalid Username / Password Combination", "", { "duration": 1000 });
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(new _login_actions__WEBPACK_IMPORTED_MODULE_0__.LogInFailure(error.error.errors));
            }));
        }));
    }
}
AuthEffects.ɵfac = function AuthEffects_Factory(t) { return new (t || AuthEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Actions), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_Services_api_data_service__WEBPACK_IMPORTED_MODULE_1__.ApiDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_Components_services_admin_service__WEBPACK_IMPORTED_MODULE_2__.AdminsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](src_app_Services_login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService)); };
AuthEffects.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: AuthEffects, factory: AuthEffects.ɵfac });
__decorate([
    (0,_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__.Effect)()
], AuthEffects.prototype, "LogIn", void 0);


/***/ }),

/***/ 275:
/*!***************************************************!*\
  !*** ./src/app/login/loginStore/login.reducer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState),
/* harmony export */   "LoginReducer": () => (/* binding */ LoginReducer)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var _login_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.actions */ 3656);


const initialState = {
    login: {
        loginState: null,
        loginError: null
    }
};
const loginInitialState = {
    User: null
};
const loginErrorState = {
    errorMessage: []
};
// export function LoginReducer(state = initialState, action: All): AppState {
//   switch (action.type) {
//     case AuthActionTypes.LOGIN_SUCCESS: {
//       let LState: LoginState = {
//         User:
//         {
//           token:action.payload.token,
//           id:action.payload.id,
//           email:action.payload.email
//         }
//       };
//       return {
//         ...state,
//         login:{
//           loginState: LState,
//           loginError:null
//         }
//       };
//     }
//     case AuthActionTypes.LOGIN_FAILURE: {
//       return {
//         ...state,
//         login:{
//           loginError:null
//         }
//       };
//     }
//     case AuthActionTypes.LOGOUT: {
//       return initialState;
//     }
//     default: {
//       return state;
//     }
//   }
// }
const reducers = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
    loginState(state = loginInitialState, action) {
        switch (action.type) {
            case _login_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActionTypes.LOGIN_SUCCESS: {
                return Object.assign(Object.assign({}, state), { User: {
                        token: action.payload.token,
                        id: action.payload.id,
                        email: action.payload.email
                    } });
            }
            default:
                return state;
        }
    },
    loginError(state = loginErrorState, action) {
        switch (action.type) {
            case _login_actions__WEBPACK_IMPORTED_MODULE_0__.AuthActionTypes.LOGIN_FAILURE:
                return Object.assign(Object.assign({}, state), { errorMessage: action.payload });
            default:
                return state;
        }
    },
});
function LoginReducer(s, a) {
    return reducers(s, a);
}


/***/ }),

/***/ 9557:
/*!*************************************************!*\
  !*** ./src/app/login/loginStore/login.state.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TargetState": () => (/* binding */ TargetState),
/* harmony export */   "loginState": () => (/* binding */ loginState),
/* harmony export */   "loginError": () => (/* binding */ loginError)
/* harmony export */ });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ 9407);

//export const selectErrorState = createFeatureSelector<AppState>('loginError');
const TargetState = (state) => state.login;
const loginState = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(TargetState, state => state.loginState);
const loginError = (0,_ngrx_store__WEBPACK_IMPORTED_MODULE_0__.createSelector)(TargetState, state => state.loginError);


/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map