(self["webpackChunkmaterial"] = self["webpackChunkmaterial"] || []).push([["main"],{

/***/ 1989:
/*!***********************************************************************!*\
  !*** ./src/app/Components/Admin/edit-dialog/edit-dialog.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditDialogComponent": () => (/* binding */ EditDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 6298);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/admin.service */ 2168);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8669);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ 8662);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 6752);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 4731);















function EditDialogComponent_mat_icon_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditDialogComponent_mat_icon_7_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditDialogComponent_mat_icon_8_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditDialogComponent_mat_icon_8_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditDialogComponent_mat_error_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditDialogComponent_mat_icon_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditDialogComponent_mat_icon_13_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.showbtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditDialogComponent_mat_icon_14_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditDialogComponent_mat_icon_14_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.showbtn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditDialogComponent_mat_error_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class EditDialogComponent {
    constructor(router, formBuilder, _adminsService, dialogRef, data) {
        this.router = router;
        this.formBuilder = formBuilder;
        this._adminsService = _adminsService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.passType = "password";
        this.passTypeBool = false;
        this.passType2 = "password";
        this.passTypeBool2 = false;
    }
    ngOnInit() {
        if (!localStorage.getItem('_context')) {
            return this.router.navigate(['/login']);
        }
        this.form = this.formBuilder.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            Updatepassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
    }
    onNoClick() {
        this.dialogRef.close();
    }
    onSubmit(value) {
        if (!localStorage.getItem('_context')) {
            return this.router.navigate(['/login']);
        }
        if (value.password != value.Updatepassword) {
            alert("Password doesn't match");
        }
        else {
            let a = localStorage.getItem('currentId');
            if (this.form.get('password').valid && this.form.get('Updatepassword')) {
                let obj = {
                    id: a,
                    password: value.password,
                    role: "ROLE_SUPERADMIN"
                };
                this.dialogRef.close();
                this._adminsService.editUser(obj).subscribe(x => {
                    alert('Password Updated');
                    this.router.navigate(['/login']);
                });
            }
        }
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
    showbtn() {
        if (this.passType2 == "password") {
            this.passTypeBool2 = true;
            this.passType2 = "text";
        }
        else {
            this.passTypeBool2 = false;
            this.passType2 = "password";
        }
    }
}
EditDialogComponent.ɵfac = function EditDialogComponent_Factory(t) { return new (t || EditDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
EditDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditDialogComponent, selectors: [["app-edit-dialog"]], decls: 21, vars: 9, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 3, "formGroup", "ngSubmit"], ["fxFlex.gt-xs", "90", "fxFlex.sm", "20"], [1, "text-center"], [1, "left"], ["matTooltip", "show hide password", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["matInput", "", "placeholder", "Password", "formControlName", "password", 3, "type"], [4, "ngIf"], ["matInput", "", "placeholder", "Re-enter Password", "formControlName", "Updatepassword", 3, "type"], ["fxLayoutAlign", "center center", 1, "button"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["matTooltip", "show hide password", 3, "click"], [3, "click"]], template: function EditDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function EditDialogComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(ctx.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Update Pasword");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, EditDialogComponent_mat_icon_7_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, EditDialogComponent_mat_icon_8_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, EditDialogComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, EditDialogComponent_mat_icon_13_Template, 2, 0, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, EditDialogComponent_mat_icon_14_Template, 2, 0, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, EditDialogComponent_mat_error_17_Template, 2, 0, "mat-error", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Submit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_4_0;
        let tmp_8_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passTypeBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.passTypeBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", ctx.passType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.form.get("password")) == null ? null : tmp_4_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passTypeBool2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.passTypeBool2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", ctx.passType2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_8_0 = ctx.form.get("Updatepassword")) == null ? null : tmp_8_0.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_6__.MatCardContent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatError], styles: [".height-100[_ngcontent-%COMP%]{\n    height: 100vh;\n}\n.left[_ngcontent-%COMP%]{display: flex;\n    flex-direction: row-reverse;\n    align-items: center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCO0FBQ0EsTUFBTSxhQUFhO0lBQ2YsMkJBQTJCO0lBQzNCLG1CQUFtQixDQUFDIiwiZmlsZSI6ImVkaXQtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVpZ2h0LTEwMHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuLmxlZnR7ZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjt9XG4gICAgIl19 */"] });


/***/ }),

/***/ 2328:
/*!*****************************************************************************************!*\
  !*** ./src/app/Components/Admin/update-app-passwords/update-app-passwords.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateAppPasswordsComponent": () => (/* binding */ UpdateAppPasswordsComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/admin.service */ 2168);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8669);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 8662);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 6752);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ 1036);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ 4357);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ 4731);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 7752);















function UpdateAppPasswordsComponent_mat_error_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Portal Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateAppPasswordsComponent_mat_error_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateAppPasswordsComponent_mat_icon_23_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateAppPasswordsComponent_mat_icon_23_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateAppPasswordsComponent_mat_icon_24_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateAppPasswordsComponent_mat_icon_24_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.show(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "visibility_off");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateAppPasswordsComponent_mat_error_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateAppPasswordsComponent_button_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UpdateAppPasswordsComponent_button_30_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UpdateAppPasswordsComponent_button_30_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.testAPI(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Test Connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class UpdateAppPasswordsComponent {
    constructor(_adminsService, formBuilder, router) {
        this._adminsService = _adminsService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.role = [];
        this.data = null;
        this.dataFlag = null;
        this.idp = true;
        this.flag = false;
        this.test = false;
        this.passType = "password";
        this.passTypeBool = false;
    }
    ngOnInit() {
        if (!localStorage.getItem('_context')) {
            return this.router.navigate(['/login']);
        }
        this.form = this.formBuilder.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
            portal: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]
        });
        this.savePassCodes();
        this.rolesAPI();
        this.sleep(180);
    }
    onDropdown(event) {
        let codes = this.data.data[0];
        let val = event.value;
        if (val == "c4cpass") {
            this.idp = true;
            this.form.patchValue({
                username: codes.c4cuser,
                password: codes.c4cpass
            });
        }
        else if (val == "eccpass") {
            this.idp = true;
            this.form.patchValue({
                username: codes.eccuser,
                password: codes.eccpass
            });
        }
        else if (val == "idppass") {
            this.idp = false;
            this.form.patchValue({
                username: codes.idpuser,
                password: codes.idppass
            });
        }
        else {
            this.form.patchValue({
                username: "",
                password: ""
            });
        }
    }
    savePassCodes() {
        this._adminsService.getAllPasswords().subscribe(x => {
            this.data = x;
        });
    }
    testAPI() {
        let portal = this.form.get("portal").value;
        let obj = {
            key: this.form.get("portal").value,
            username: this.form.get("username").value,
            password: this.form.get("password").value
        };
        this._adminsService.testConnection(obj).subscribe(x => {
            this.dataFlag = x;
            if (this.dataFlag.message == "Failed") {
                alert("API is not working");
                this.test = false;
            }
            else {
                alert("Test API is working");
                this.test = true;
            }
        });
    }
    addAdmin(value) {
        if (this.form.get("username").valid &&
            this.form.get("portal").valid &&
            this.form.get("password").valid) {
            let obj = {
                key: value.portal,
                username: value.username,
                password: value.password
            };
            if (!localStorage.getItem("_context")) {
                return this.router.navigate(["/login"]);
            }
            else {
                if (value.portal != "idppass") {
                    this.testAPI();
                }
                setTimeout(() => { this.ifBlock(value, obj); }, 2000);
            }
        }
    }
    ifBlock(value, obj) {
        if (this.test == true || value.portal == "idppass") {
            this._adminsService.updatePasswordPortal(obj).subscribe(x => {
                alert("Password Updated");
                this.router.navigate(["/admin-list"]).then(() => {
                    this.router.navigate(["/admin-list/update-pass"]);
                });
            });
        }
    }
    rolesAPI() {
        this._adminsService.getRolesAPI().subscribe(x => {
            this.data1 = x;
            setTimeout(() => { this.ifBlocks(); }, 200);
        });
    }
    ifBlocks() {
        let role = this.data1.data[0].role;
        if (role == 'ROLE_SUPERADMIN') {
            this.roles = true;
        }
        else {
            this.roles = false;
        }
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
    sleep(miliseconds) {
        var currentTime = new Date().getTime();
        while (currentTime + miliseconds >= new Date().getTime()) {
        }
    }
}
UpdateAppPasswordsComponent.ɵfac = function UpdateAppPasswordsComponent_Factory(t) { return new (t || UpdateAppPasswordsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_admin_service__WEBPACK_IMPORTED_MODULE_0__.AdminsService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
UpdateAppPasswordsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UpdateAppPasswordsComponent, selectors: [["app-update-app-passwords"]], decls: 31, vars: 9, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 3, "formGroup", "ngSubmit"], ["fxFlex.gt-xs", "40", "fxFlex.sm", "70"], [1, "text-center"], ["appearance", "fill"], ["matNativeControl", "", "formControlName", "portal", 3, "selectionChange"], ["value", "c4cpass"], ["value", "eccpass"], ["value", "idppass"], [4, "ngIf"], [1, "leftp"], ["matInput", "", "formControlName", "username"], [1, "left"], ["matTooltip", "show hide password", 3, "click", 4, "ngIf"], [3, "click", 4, "ngIf"], ["matInput", "", "placeholder", "Password", "formControlName", "password", 3, "type"], ["fxLayoutAlign", "center center", 1, "button"], ["type", "submit", "mat-raised-button", "", "color", "primary", 4, "ngIf"], ["style", "margin-left:2%", "type", "button", "mat-raised-button", "", "color", "primary", 3, "click", 4, "ngIf"], ["matTooltip", "show hide password", 3, "click"], [3, "click"], ["type", "submit", "mat-raised-button", "", "color", "primary"], ["type", "button", "mat-raised-button", "", "color", "primary", 2, "margin-left", "2%", 3, "click"]], template: function UpdateAppPasswordsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function UpdateAppPasswordsComponent_Template_form_ngSubmit_1_listener() { return ctx.addAdmin(ctx.form.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Password Panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Portal Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function UpdateAppPasswordsComponent_Template_mat_select_selectionChange_9_listener($event) { return ctx.onDropdown($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "C4C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "ECC ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "IDP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, UpdateAppPasswordsComponent_mat_error_16_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-form-field", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, UpdateAppPasswordsComponent_mat_error_21_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, UpdateAppPasswordsComponent_mat_icon_23_Template, 2, 0, "mat-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, UpdateAppPasswordsComponent_mat_icon_24_Template, 2, 0, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, UpdateAppPasswordsComponent_mat_error_27_Template, 2, 0, "mat-error", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, UpdateAppPasswordsComponent_button_29_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, UpdateAppPasswordsComponent_button_30_Template, 2, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_6_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx.form.get("portal")) == null ? null : tmp_1_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx.form.get("username")) == null ? null : tmp_2_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passTypeBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.passTypeBool);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", ctx.passType);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (tmp_6_0 = ctx.form.get("password")) == null ? null : tmp_6_0.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.idp);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutDirective, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultLayoutAlignDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCard, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__.DefaultFlexDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatLabel, _angular_material_select__WEBPACK_IMPORTED_MODULE_7__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_material_core__WEBPACK_IMPORTED_MODULE_8__.MatOption, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatError, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__.MatTooltip, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton], styles: [".height-100[_ngcontent-%COMP%]{\n    height: 100vh;\n}\n.left[_ngcontent-%COMP%]{display: flex;\n    flex-direction: row-reverse;\n    align-items: center;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwZGF0ZS1hcHAtcGFzc3dvcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBLE1BQU0sYUFBYTtJQUNmLDJCQUEyQjtJQUMzQixtQkFBbUIsQ0FBQyIsImZpbGUiOiJ1cGRhdGUtYXBwLXBhc3N3b3Jkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaGVpZ2h0LTEwMHtcbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuLmxlZnR7ZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjt9XG4iXX0= */"] });


/***/ }),

/***/ 2168:
/*!******************************************************!*\
  !*** ./src/app/Components/services/admin.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminsService": () => (/* binding */ AdminsService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var src_app_Services_api_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Services/api-data.service */ 8502);








class AdminsService {
    constructor(router, http, https) {
        this.router = router;
        this.http = http;
        this.https = https;
        this._url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIUrl;
        this.role = null;
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Authorization: "Bearer " + localStorage.getItem("_context"),
            "Content-Type": "application/json"
        });
    }
    findAdminById(AdminId) {
        return this.http.httpGet("", "", AdminId);
    }
    deleteAdmin(id) {
        return this.http.httpDelete("portalauth", "deleteuser", { id: id });
    }
    LoadRoleList() {
        return this.http.httpGet("portalauth", "getroles");
    }
    findAllAdmins() {
        return this.http.httpGet("portalauth", "getusers");
    }
    saveAdmin(adminModel) {
        return this.http.httpPost("portalauth", "createuser", adminModel).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            alert("User Not Added"); // add toast
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
    editUser(value) {
        let options = { headers: this.headers };
        return this.https
            .post(this._url + "portalauth/updateuser", value, options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            alert("User Not Edited"); // add toast
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
    updatePassword(value) {
        let options = { headers: this.headers };
        return this.https
            .post(this._url + "portalauth/changepassword", value, options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            alert("Error occured while updating password !");
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
    updatePasswordPortal(value) {
        let options = { headers: this.headers };
        return this.https
            .post(this._url + "portalauth/updatesappass", value, options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            alert("Error occured while updating password !");
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
    getAllPasswords() {
        let options = { headers: this.headers };
        return this.https
            .get(this._url + "portalauth/getsapcredentials", options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            alert("Unable to fetch username and password");
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
    testConnection(obj) {
        let options = { headers: this.headers };
        return this.https
            .post(this._url + "portalauth/testconnection", obj, options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            alert("Update Password Test Failed : API currenlty not working " +
                err.messege);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
    getFeatureList() {
        let options = { headers: this.headers };
        return this.https
            .get(this._url + "portalauth/getfeaturelist", options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            alert("Error while fetching Data");
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
    updateFeatureList(value) {
        let options = { headers: this.headers };
        return this.https
            .post(this._url + "portalauth/updatefeaturelist", value, options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            alert("Error occured while updating !");
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
    getHardCode() {
        let options = { headers: this.headers };
        return this.https
            .get(this._url + "portalauth/gethardcodevalues", options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            alert("Error while fetching Data");
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
    updateHardCode(value) {
        let options = { headers: this.headers };
        return this.https
            .post(this._url + "portalauth/updatehardcodevalues", value, options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            alert("Error occured while updating !");
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
    getRolesAPI() {
        let options = { headers: this.headers };
        let obj = {
            id: localStorage.getItem("currentId")
        };
        return this.https
            .post(this._url + "/portalauth/getrolepermissions", obj, options)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err);
        }));
    }
    roleLogic() {
        this.getRolesAPI().subscribe(x => {
            this.data = x;
            let role = this.data.data[0].role;
            if (role == 'ROLE_SUPERADMIN') {
                this.role = null;
                this.role = true;
            }
            else {
                this.role = null;
                this.role = false;
            }
        });
    }
    roleReturn() {
        return this.role;
    }
}
AdminsService.ɵfac = function AdminsService_Factory(t) { return new (t || AdminsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_Services_api_data_service__WEBPACK_IMPORTED_MODULE_1__.ApiDataService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
AdminsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: AdminsService, factory: AdminsService.ɵfac });


/***/ }),

/***/ 8502:
/*!**********************************************!*\
  !*** ./src/app/Services/api-data.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiDataService": () => (/* binding */ ApiDataService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 9500);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8377);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 592);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 3252);






class ApiDataService {
    constructor(_http, router) {
        this._http = _http;
        this.router = router;
        this._url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.APIUrl;
    }
    httpPost(controllerName, actionName, t) {
        let url = this._url;
        url = url + controllerName + '/' + actionName;
        if (localStorage.getItem('_context') == null || localStorage.getItem('_context') === undefined) {
            return this._http.post(url, t, { observe: 'response' })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
                return resp.body;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
                // this.router.navigate(['/login'])
                throw (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
            }));
        }
        else {
            return this._http.post(url, t, {
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Authorization': 'Bearer ' + localStorage.getItem('_context')
                },
                observe: 'response'
            })
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
                return resp.body;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
                // this.router.navigate(['/login'])
                throw (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
            }));
        }
    }
    httpGet(controllerName, actionName, requestobj) {
        let url = this._url;
        url = url + controllerName + '/' + actionName;
        if (requestobj !== '' && (requestobj !== undefined && requestobj !== null) && localStorage.getItem('_context') !== '' && (localStorage.getItem('_context') !== undefined && localStorage.getItem('_context') !== null)) {
            return this._http.get(url, {
                params: requestobj,
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Authorization': 'Bearer ' + localStorage.getItem('_context')
                }
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
                return resp;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
                // this.router.navigate(['/login'])
                throw (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
            }));
        }
        else if (requestobj !== '' && (requestobj !== undefined && requestobj !== null)) {
            return this._http.get(url, {
                params: requestobj,
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Authorization': 'Bearer ' + localStorage.getItem('_context')
                }
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
                return resp;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
                // this.router.navigate(['/login'])
                throw (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
            }));
            // tslint:disable-next-line: max-line-length
        }
        else if (localStorage.getItem('_context') !== '' && (localStorage.getItem('_context') !== undefined && localStorage.getItem('_context') !== null)) {
            return this._http.get(url, {
                headers: {
                    'Cache-Control': 'no-cache, no-store, must-revalidate',
                    'Authorization': 'Bearer ' + localStorage.getItem('_context')
                }
            }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
                return resp;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
                // this.router.navigate(['/login'])
                throw (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
            }));
        }
        else {
            return this._http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
                return resp;
            }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
                // this.router.navigate(['/login'])
                throw (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
            }));
        }
    }
    httpDelete(controllerName, actionName, t) {
        let url = this._url;
        url = url + controllerName + '/' + actionName;
        return this._http.delete(url, { body: t,
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Authorization': 'Bearer ' + localStorage.getItem('_context')
            },
            observe: 'response'
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(resp => {
            return resp.body;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            // this.router.navigate(['/login'])
            throw (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
}
ApiDataService.ɵfac = function ApiDataService_Factory(t) { return new (t || ApiDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
ApiDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ApiDataService, factory: ApiDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4783:
/*!*************************************************!*\
  !*** ./src/app/Services/interceptor.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderInterceptor": () => (/* binding */ LoaderInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.service */ 9665);



class LoaderInterceptor {
    constructor(loaderService) {
        this.loaderService = loaderService;
    }
    intercept(req, next) {
        this.loaderService.show();
        return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.finalize)(() => this.loaderService.hide()));
    }
}
LoaderInterceptor.ɵfac = function LoaderInterceptor_Factory(t) { return new (t || LoaderInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService)); };
LoaderInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: LoaderInterceptor, factory: LoaderInterceptor.ɵfac });


/***/ }),

/***/ 9665:
/*!********************************************!*\
  !*** ./src/app/Services/loader.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderService": () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class LoaderService {
    constructor() {
        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    }
    show() {
        this.isLoading.next(true);
    }
    hide() {
        this.isLoading.next(false);
    }
}
LoaderService.ɵfac = function LoaderService_Factory(t) { return new (t || LoaderService)(); };
LoaderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoaderService, factory: LoaderService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 5973:
/*!*******************************************!*\
  !*** ./src/app/Services/login.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4008);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class LoginService {
    constructor() {
        this.userLoggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        this.userLoggedIn.next(false);
    }
    setUserLoggedIn(userLoggedIn) {
        this.userLoggedIn.next(userLoggedIn);
    }
    getUserLoggedIn() {
        return this.userLoggedIn.asObservable();
    }
}
LoginService.ɵfac = function LoginService_Factory(t) { return new (t || LoginService)(); };
LoginService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoginService, factory: LoginService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-idle/core */ 6440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _Services_login_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Services/login.service */ 5973);
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-idle/keepalive */ 4295);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/spinner.component */ 8538);







const _c0 = ["myDiv"];
class AppComponent {
    constructor(_service, idle, keepalive, router) {
        this._service = _service;
        this.idle = idle;
        this.keepalive = keepalive;
        this.router = router;
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null;
        this.title = 'angular-idle-timeout';
        // sets an idle timeout of 5 seconds, for testing purposes.
        idle.setIdle(120);
        // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
        idle.setTimeout(120);
        // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
        idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_2__.DEFAULT_INTERRUPTSOURCES);
        idle.onIdleEnd.subscribe(() => {
            this.idleState = 'No longer idle.';
            console.log(this.idleState);
            this.reset();
        });
        idle.onTimeout.subscribe(() => {
            this.idleState = 'Timed out!';
            this.timedOut = true;
            console.log(this.idleState);
            this.router.navigate(['/']);
        });
        idle.onIdleStart.subscribe(() => {
            this.idleState = 'You\'ve gone idle!';
            console.log(this.idleState);
            this.logout();
        });
        idle.onTimeoutWarning.subscribe((countdown) => {
            this.idleState = 'You will time out in ' + countdown + ' seconds!';
            console.log(this.idleState);
        });
        // sets the ping interval to 15 seconds
        keepalive.interval(15);
        keepalive.onPing.subscribe(() => this.lastPing = new Date());
        this._service.getUserLoggedIn().subscribe(userLoggedIn => {
            if (userLoggedIn) {
                idle.watch();
                this.timedOut = false;
            }
            else {
                idle.stop();
            }
        });
        this.reset();
    }
    reset() {
        this.idle.watch();
        this.idleState = 'Started.';
        this.timedOut = false;
    }
    hideChildModal() {
        this.logout();
    }
    stay() {
        alert("hide");
        this.reset();
    }
    logout() {
        //this.childModal.hide();
        this._service.setUserLoggedIn(false);
        localStorage.removeItem("_context");
        localStorage.removeItem("currentId");
        this.router.navigate(['/login']).then(() => {
            localStorage.clear();
        });
    }
    triggerFalseClick() {
        let el = this.myDiv.nativeElement;
        el.click();
    }
    passCharge() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_Services_login_service__WEBPACK_IMPORTED_MODULE_0__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_idle_core__WEBPACK_IMPORTED_MODULE_2__.Idle), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_4__.Keepalive), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.myDiv = _t.first);
    } }, decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_1__.SpinnerComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 3981);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing */ 2882);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout */ 8001);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/full/full.component */ 6888);
/* harmony import */ var _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/full/header/header.component */ 2531);
/* harmony import */ var _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/full/sidebar/sidebar.component */ 5461);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _demo_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./demo-material-module */ 1779);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/shared.module */ 1382);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/spinner.component */ 8538);
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngrx/effects */ 2251);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngrx/store */ 9407);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ 8260);
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-idle/keepalive */ 4295);
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-moment */ 8523);
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ngrx/store-devtools */ 5960);
/* harmony import */ var _Services_interceptor_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Services/interceptor.service */ 4783);
/* harmony import */ var _Components_services_admin_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Components/services/admin.service */ 2168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 4001);


















 // this includes the core NgIdleModule but includes keepalive providers for easy wireup
 // optional, provides moment-style pipes for date formatting









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [
        _Components_services_admin_service__WEBPACK_IMPORTED_MODULE_11__.AdminsService,
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_13__.PathLocationStrategy
        },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HTTP_INTERCEPTORS, useClass: _Services_interceptor_service__WEBPACK_IMPORTED_MODULE_10__.LoaderInterceptor, multi: true },
    ], imports: [[
            _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_15__.NgIdleKeepaliveModule.forRoot(),
            angular2_moment__WEBPACK_IMPORTED_MODULE_9__.MomentModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
            _demo_material_module__WEBPACK_IMPORTED_MODULE_5__.DemoMaterialModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__.FlexLayoutModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule,
            _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreModule.forRoot({}),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__.EffectsModule.forRoot([]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_22__.StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !src_environments_environment__WEBPACK_IMPORTED_MODULE_8__.environment.production }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule.forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_2__.FullComponent,
        _layouts_full_header_header_component__WEBPACK_IMPORTED_MODULE_3__.AppHeaderComponent,
        _shared_spinner_component__WEBPACK_IMPORTED_MODULE_7__.SpinnerComponent,
        _layouts_full_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.AppSidebarComponent], imports: [_ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_15__.NgIdleKeepaliveModule, angular2_moment__WEBPACK_IMPORTED_MODULE_9__.MomentModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule,
        _demo_material_module__WEBPACK_IMPORTED_MODULE_5__.DemoMaterialModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule,
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_19__.FlexLayoutModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _ngrx_store__WEBPACK_IMPORTED_MODULE_20__.StoreRootModule, _ngrx_effects__WEBPACK_IMPORTED_MODULE_21__.EffectsRootModule, _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_22__.StoreDevtoolsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__.SharedModule, _angular_router__WEBPACK_IMPORTED_MODULE_23__.RouterModule] }); })();


/***/ }),

/***/ 2882:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutes": () => (/* binding */ AppRoutes)
/* harmony export */ });
/* harmony import */ var _app_Components_Admin_update_app_passwords_update_app_passwords_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/Components/Admin/update-app-passwords/update-app-passwords.component */ 2328);
/* harmony import */ var _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/full/full.component */ 6888);


const AppRoutes = [
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 9549)).then(m => m.LoginModule)
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'admin-list',
        component: _layouts_full_full_component__WEBPACK_IMPORTED_MODULE_1__.FullComponent,
        children: [
            {
                path: '',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_Components_Admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./Components/Admin/admin.module */ 2723)).then(m => m.AdminModule)
            },
            {
                path: 'update-pass',
                component: _app_Components_Admin_update_app_passwords_update_app_passwords_component__WEBPACK_IMPORTED_MODULE_0__.UpdateAppPasswordsComponent,
            }
            // {
            //   path: '',
            //   loadChildren:
            //     () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
            // },
            // {
            //   path: 'dashboard',
            //   loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            // }
        ]
    },
];


/***/ }),

/***/ 1779:
/*!*****************************************!*\
  !*** ./src/app/demo-material-module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoMaterialModule": () => (/* binding */ DemoMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/autocomplete */ 686);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button-toggle */ 2077);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 8662);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ 9188);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/chips */ 1933);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 6506);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 6298);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/expansion */ 5082);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ 6752);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/grid-list */ 5409);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 8359);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ 9872);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 1211);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/progress-bar */ 3776);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/progress-spinner */ 9372);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ 7435);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 1036);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sidenav */ 1986);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/slider */ 5291);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/slide-toggle */ 1232);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/snack-bar */ 4996);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/sort */ 9696);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 3959);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/tabs */ 9391);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ 7727);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/tooltip */ 4731);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/stepper */ 1792);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/badge */ 9379);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/core */ 4357);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 2132);
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/cdk/table */ 3037);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/accordion */ 1965);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/a11y */ 2706);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/bidi */ 6093);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/overlay */ 6519);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/platform */ 573);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/observers */ 4095);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/portal */ 1455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);










































/**
 * NgModule that includes all Material modules that are required to serve the demo-app.
 */
class DemoMaterialModule {
}
DemoMaterialModule.ɵfac = function DemoMaterialModule_Factory(t) { return new (t || DemoMaterialModule)(); };
DemoMaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DemoMaterialModule });
DemoMaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__.CdkTableModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__.CdkAccordionModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, { exports: [_angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_1__.MatAutocompleteModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__.MatBottomSheetModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_4__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_7__.MatChipsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_11__.MatExpansionModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__.MatFormFieldModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_13__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_16__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_19__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_20__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_24__.MatBadgeModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__.MatSidenavModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_26__.MatSlideToggleModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_27__.MatSliderModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_28__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_29__.MatSortModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_30__.MatStepperModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_31__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_33__.MatTooltipModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_22__.MatNativeDateModule,
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_34__.CdkTableModule,
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_35__.A11yModule,
        _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_36__.BidiModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_37__.CdkAccordionModule,
        _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_38__.ObserversModule,
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_39__.OverlayModule,
        _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_40__.PlatformModule,
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_41__.PortalModule] }); })();


/***/ }),

/***/ 6888:
/*!************************************************!*\
  !*** ./src/app/layouts/full/full.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullComponent": () => (/* binding */ FullComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 9339);
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/menu-items/menu-items */ 3055);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 7727);
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ 3479);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8669);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 2531);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sidenav */ 1986);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ 5461);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/spinner.component */ 8538);













/** @title Responsive sidenav */
class FullComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
    ngAfterViewInit() { }
}
FullComponent.ɵfac = function FullComponent_Factory(t) { return new (t || FullComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems)); };
FullComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FullComponent, selectors: [["app-full-layout"]], decls: 21, vars: 5, consts: [[1, "main-container"], ["color", "primary", 1, "topbar", "telative"], [1, "navbar-header"], [1, "navbar-brand"], ["disabled", "", 1, "text-center"], ["fxShow", "false", "fxShow.gt-xs", ""], ["mat-icon-button", "", "value", "sidebarclosed", 3, "click"], ["fxFlex", ""], [1, "example-sidenav-container"], ["id", "snav", "fixedTopGap", "0", 1, "dark-sidebar", "pl-xs", 3, "mode", "opened", "disableClose"], ["snav", ""], [1, "page-wrapper"], [1, "page-content"]], template: function FullComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-toolbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "AAB");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FullComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-sidenav-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-sidenav", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-sidenav-content", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "app-spinner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("margin-top", ctx.mobileQuery.matches ? 0 : 0, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mode", ctx.mobileQuery.matches ? "side" : "over")("opened", ctx.mobileQuery.matches)("disableClose", ctx.mobileQuery.matches);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar, _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__.DefaultShowHideDirective, _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective, _header_header_component__WEBPACK_IMPORTED_MODULE_1__.AppHeaderComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContainer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenav, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.AppSidebarComponent, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__.MatSidenavContent, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterOutlet, _shared_spinner_component__WEBPACK_IMPORTED_MODULE_3__.SpinnerComponent], encapsulation: 2 });


/***/ }),

/***/ 2531:
/*!*********************************************************!*\
  !*** ./src/app/layouts/full/header/header.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppHeaderComponent": () => (/* binding */ AppHeaderComponent)
/* harmony export */ });
/* harmony import */ var src_app_Components_Admin_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/Components/Admin/edit-dialog/edit-dialog.component */ 1989);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 6298);
/* harmony import */ var src_app_Components_services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/Components/services/admin.service */ 2168);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 7752);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ 9872);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 8852);








class AppHeaderComponent {
    constructor(router, dialog, _service) {
        this.router = router;
        this.dialog = dialog;
        this._service = _service;
    }
    exit() {
        localStorage.removeItem("_context");
        return this.router.navigate(['/login']);
    }
    ngOnInit() {
    }
    open() {
    }
    openDialog() {
        const dialogRef = this.dialog.open(src_app_Components_Admin_edit_dialog_edit_dialog_component__WEBPACK_IMPORTED_MODULE_0__.EditDialogComponent, {
            width: '40%',
            height: '45%',
            data: {}
        });
        this.router.events.subscribe(() => {
            dialogRef.close();
        });
    }
    sleep(miliseconds) {
        var currentTime = new Date().getTime();
        while (currentTime + miliseconds >= new Date().getTime()) {
        }
    }
}
AppHeaderComponent.ɵfac = function AppHeaderComponent_Factory(t) { return new (t || AppHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_Components_services_admin_service__WEBPACK_IMPORTED_MODULE_1__.AdminsService)); };
AppHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppHeaderComponent, selectors: [["app-header"]], decls: 13, vars: 1, consts: [["mat-icon-button", "", 1, "m-r-5", 3, "matMenuTriggerFor", "click"], [1, "material-icons"], [1, "mymegamenu"], ["profile", "matMenu"], ["mat-menu-item", "", 3, "click"], [3, "click"]], template: function AppHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_0_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-menu", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_5_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Change Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppHeaderComponent_Template_button_click_9_listener() { return ctx.exit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppHeaderComponent_Template_mat_icon_click_10_listener() { return ctx.exit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "exit_to_app");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Sign Out ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__.MatMenuItem, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], encapsulation: 2 });


/***/ }),

/***/ 5461:
/*!***********************************************************!*\
  !*** ./src/app/layouts/full/sidebar/sidebar.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppSidebarComponent": () => (/* binding */ AppSidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/layout */ 9339);
/* harmony import */ var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/menu-items/menu-items */ 3055);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ 4021);
/* harmony import */ var _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/accordion/accordion.directive */ 8043);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/accordion/accordionlink.directive */ 6499);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/accordion/accordionanchor.directive */ 5099);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 8852);
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ 8669);











function AppSidebarComponent_mat_list_item_1_a_1_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const badge_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("label label-", badge_r4.type, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](badge_r4.value);
} }
const _c0 = function (a0) { return [a0]; };
function AppSidebarComponent_mat_list_item_1_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AppSidebarComponent_mat_list_item_1_a_1_span_6_Template, 2, 4, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, menuitem_r1.state));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuitem_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuitem_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", menuitem_r1.badge);
} }
function AppSidebarComponent_mat_list_item_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-list-item", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_1_a_1_Template, 7, 6, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuitem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("group", menuitem_r1.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", menuitem_r1.type === "link");
} }
class AppSidebarComponent {
    constructor(changeDetectorRef, media, menuItems) {
        this.menuItems = menuItems;
        this.mobileQuery = media.matchMedia('(min-width: 768px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
}
AppSidebarComponent.ɵfac = function AppSidebarComponent_Factory(t) { return new (t || AppSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_5__.MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems)); };
AppSidebarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AppSidebarComponent, selectors: [["app-sidebar"]], decls: 2, vars: 1, consts: [["appAccordion", ""], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group", 4, "ngFor", "ngForOf"], ["appAccordionLink", "", "routerLinkActive", "selected", 3, "group"], ["class", "", "appAccordionToggle", "", 3, "routerLink", 4, "ngIf"], ["appAccordionToggle", "", 1, "", 3, "routerLink"], ["fxFlex", ""], [3, "class", 4, "ngFor", "ngForOf"]], template: function AppSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-nav-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AppSidebarComponent_mat_list_item_1_Template, 2, 2, "mat-list-item", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menuItems.getMenuitem());
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatNavList, _shared_accordion_accordion_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_material_list__WEBPACK_IMPORTED_MODULE_6__.MatListItem, _shared_accordion_accordionlink_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionLinkDirective, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkActive, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _shared_accordion_accordionanchor_directive__WEBPACK_IMPORTED_MODULE_3__.AccordionAnchorDirective, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__.DefaultFlexDirective], encapsulation: 2 });


/***/ }),

/***/ 8043:
/*!*********************************************************!*\
  !*** ./src/app/shared/accordion/accordion.directive.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionDirective": () => (/* binding */ AccordionDirective)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 8027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);




class AccordionDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
        setTimeout(() => this.checkOpenLinks());
    }
    closeOtherLinks(selectedLink) {
        this.navlinks.forEach((link) => {
            if (link !== selectedLink) {
                link.selected = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    checkOpenLinks() {
        this.navlinks.forEach((link) => {
            if (link.group) {
                const routeUrl = this.router.url;
                const currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.selected = true;
                    this.closeOtherLinks(link);
                }
            }
        });
    }
    ngAfterContentChecked() {
        this.router.events
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd))
            .subscribe(e => this.checkOpenLinks());
    }
}
AccordionDirective.ɵfac = function AccordionDirective_Factory(t) { return new (t || AccordionDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AccordionDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({ type: AccordionDirective, selectors: [["", "appAccordion", ""]] });


/***/ }),

/***/ 5099:
/*!***************************************************************!*\
  !*** ./src/app/shared/accordion/accordionanchor.directive.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": () => (/* binding */ AccordionAnchorDirective)
/* harmony export */ });
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionlink.directive */ 6499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);



class AccordionAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
}
AccordionAnchorDirective.ɵfac = function AccordionAnchorDirective_Factory(t) { return new (t || AccordionAnchorDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordionlink_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionLinkDirective)); };
AccordionAnchorDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionAnchorDirective, selectors: [["", "appAccordionToggle", ""]], hostBindings: function AccordionAnchorDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccordionAnchorDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });


/***/ }),

/***/ 6499:
/*!*************************************************************!*\
  !*** ./src/app/shared/accordion/accordionlink.directive.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionLinkDirective": () => (/* binding */ AccordionLinkDirective)
/* harmony export */ });
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordion.directive */ 8043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);



class AccordionLinkDirective {
    constructor(nav) {
        this._selected = false;
        this.nav = nav;
    }
    get selected() {
        return this._selected;
    }
    set selected(value) {
        this._selected = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.selected = !this.selected;
    }
}
AccordionLinkDirective.ɵfac = function AccordionLinkDirective_Factory(t) { return new (t || AccordionLinkDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_accordion_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionDirective)); };
AccordionLinkDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: AccordionLinkDirective, selectors: [["", "appAccordionLink", ""]], hostVars: 2, hostBindings: function AccordionLinkDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("selected", ctx.selected);
    } }, inputs: { group: "group", selected: "selected" } });


/***/ }),

/***/ 2714:
/*!*******************************************!*\
  !*** ./src/app/shared/accordion/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccordionAnchorDirective": () => (/* reexport safe */ _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__.AccordionAnchorDirective),
/* harmony export */   "AccordionLinkDirective": () => (/* reexport safe */ _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective),
/* harmony export */   "AccordionDirective": () => (/* reexport safe */ _accordion_directive__WEBPACK_IMPORTED_MODULE_2__.AccordionDirective)
/* harmony export */ });
/* harmony import */ var _accordionanchor_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accordionanchor.directive */ 5099);
/* harmony import */ var _accordionlink_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordionlink.directive */ 6499);
/* harmony import */ var _accordion_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accordion.directive */ 8043);





/***/ }),

/***/ 3055:
/*!*************************************************!*\
  !*** ./src/app/shared/menu-items/menu-items.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuItems": () => (/* binding */ MenuItems)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

const MENUITEMS = [
    { state: 'admin-list', name: 'Admin List', type: 'link', icon: 'admin_panel_settings' },
    { state: 'update-pass', name: 'Manage Portals', type: 'link', icon: 'password' },
    { state: 'feature-list', name: 'Feature List ', type: 'link', icon: 'web' },
    { state: 'hard-code', name: 'Hard Code', type: 'link', icon: 'vpn_key' },
    //{ state: 'update-pass', type: 'link', name: 'Update Passwords', icon: 'password' },
    // { state: 'grid', type: 'link', name: 'List Of Features',icon:'featured_play_list' },
    // { state: 'lists', type: 'link', name: 'Hard Coded Values', icon: 'vpn_key'},
    // { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' },
    // { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' },
    // { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web' },
    // {
    //   state: 'expansion',
    //   type: 'link',
    //   name: 'Expansion Panel',
    //   icon: 'vertical_align_center'
    // },
    // { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' },
    // { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' },
    // {
    //   state: 'progress-snipper',
    //   type: 'link',
    //   name: 'Progress snipper',
    //   icon: 'border_horizontal'
    // },
    // {
    //   state: 'progress',
    //   type: 'link',
    //   name: 'Progress Bar',
    //   icon: 'blur_circular'
    // },
    // {
    //   state: 'dialog',
    //   type: 'link',
    //   name: 'Dialog',
    //   icon: 'assignment_turned_in'
    // },
    // { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' },
    // { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' },
    // { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' },
    // {
    //   state: 'slide-toggle',
    //   type: 'link',
    //   name: 'Slide Toggle',
    //   icon: 'all_inclusive'
    // }
];
class MenuItems {
    getMenuitem() {
        return MENUITEMS;
    }
}
MenuItems.ɵfac = function MenuItems_Factory(t) { return new (t || MenuItems)(); };
MenuItems.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MenuItems, factory: MenuItems.ɵfac });


/***/ }),

/***/ 1382:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu-items/menu-items */ 3055);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accordion */ 2714);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);



class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_0__.MenuItems] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective], exports: [_accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionAnchorDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionLinkDirective,
        _accordion__WEBPACK_IMPORTED_MODULE_1__.AccordionDirective] }); })();


/***/ }),

/***/ 8538:
/*!*********************************************!*\
  !*** ./src/app/shared/spinner.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpinnerComponent": () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _Services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Services/loader.service */ 9665);






function SpinnerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Please wait ...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class SpinnerComponent {
    constructor(router, loaderService, document) {
        this.router = router;
        this.loaderService = loaderService;
        this.document = document;
        this.isSpinnerVisible = true;
        this.backgroundColor = 'rgba(0, 115, 170, 0.69)';
        this.isLoading = this.loaderService.isLoading;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationCancel ||
                event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationError) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
        this.isLoading.subscribe(loading => {
            this.isSpinnerVisible = loading;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
}
SpinnerComponent.ɵfac = function SpinnerComponent_Factory(t) { return new (t || SpinnerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DOCUMENT)); };
SpinnerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SpinnerComponent, selectors: [["app-spinner"]], inputs: { backgroundColor: "backgroundColor" }, decls: 1, vars: 1, consts: [["class", "preloader", 4, "ngIf"], [1, "preloader"], [1, "spinner"], [1, "double-bounce1"], [1, "double-bounce2"], [1, "please-wait"]], template: function SpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 6, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSpinnerVisible);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], encapsulation: 2 });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    APIUrl: "https://aab-test.herokuapp.com/api/v1/"
};


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 5336);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 8260);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 2139,
	"./af.js": 2139,
	"./ar": 2600,
	"./ar-dz": 1001,
	"./ar-dz.js": 1001,
	"./ar-kw": 9842,
	"./ar-kw.js": 9842,
	"./ar-ly": 9826,
	"./ar-ly.js": 9826,
	"./ar-ma": 5452,
	"./ar-ma.js": 5452,
	"./ar-sa": 1802,
	"./ar-sa.js": 1802,
	"./ar-tn": 4094,
	"./ar-tn.js": 4094,
	"./ar.js": 2600,
	"./az": 6375,
	"./az.js": 6375,
	"./be": 2086,
	"./be.js": 2086,
	"./bg": 5236,
	"./bg.js": 5236,
	"./bm": 1704,
	"./bm.js": 1704,
	"./bn": 4506,
	"./bn-bd": 4466,
	"./bn-bd.js": 4466,
	"./bn.js": 4506,
	"./bo": 7891,
	"./bo.js": 7891,
	"./br": 3348,
	"./br.js": 3348,
	"./bs": 4848,
	"./bs.js": 4848,
	"./ca": 5928,
	"./ca.js": 5928,
	"./cs": 1839,
	"./cs.js": 1839,
	"./cv": 9151,
	"./cv.js": 9151,
	"./cy": 5761,
	"./cy.js": 5761,
	"./da": 6686,
	"./da.js": 6686,
	"./de": 5177,
	"./de-at": 2311,
	"./de-at.js": 2311,
	"./de-ch": 4407,
	"./de-ch.js": 4407,
	"./de.js": 5177,
	"./dv": 9729,
	"./dv.js": 9729,
	"./el": 430,
	"./el.js": 430,
	"./en-au": 8430,
	"./en-au.js": 8430,
	"./en-ca": 1139,
	"./en-ca.js": 1139,
	"./en-gb": 6747,
	"./en-gb.js": 6747,
	"./en-ie": 9466,
	"./en-ie.js": 9466,
	"./en-il": 2121,
	"./en-il.js": 2121,
	"./en-in": 1167,
	"./en-in.js": 1167,
	"./en-nz": 2030,
	"./en-nz.js": 2030,
	"./en-sg": 3646,
	"./en-sg.js": 3646,
	"./eo": 3126,
	"./eo.js": 3126,
	"./es": 8819,
	"./es-do": 9293,
	"./es-do.js": 9293,
	"./es-mx": 5304,
	"./es-mx.js": 5304,
	"./es-us": 6068,
	"./es-us.js": 6068,
	"./es.js": 8819,
	"./et": 3291,
	"./et.js": 3291,
	"./eu": 1400,
	"./eu.js": 1400,
	"./fa": 43,
	"./fa.js": 43,
	"./fi": 6138,
	"./fi.js": 6138,
	"./fil": 1466,
	"./fil.js": 1466,
	"./fo": 6803,
	"./fo.js": 6803,
	"./fr": 5523,
	"./fr-ca": 697,
	"./fr-ca.js": 697,
	"./fr-ch": 9001,
	"./fr-ch.js": 9001,
	"./fr.js": 5523,
	"./fy": 1116,
	"./fy.js": 1116,
	"./ga": 6151,
	"./ga.js": 6151,
	"./gd": 2472,
	"./gd.js": 2472,
	"./gl": 1279,
	"./gl.js": 1279,
	"./gom-deva": 4458,
	"./gom-deva.js": 4458,
	"./gom-latn": 6320,
	"./gom-latn.js": 6320,
	"./gu": 8658,
	"./gu.js": 8658,
	"./he": 2153,
	"./he.js": 2153,
	"./hi": 8732,
	"./hi.js": 8732,
	"./hr": 4960,
	"./hr.js": 4960,
	"./hu": 6339,
	"./hu.js": 6339,
	"./hy-am": 1862,
	"./hy-am.js": 1862,
	"./id": 1068,
	"./id.js": 1068,
	"./is": 1260,
	"./is.js": 1260,
	"./it": 1007,
	"./it-ch": 8063,
	"./it-ch.js": 8063,
	"./it.js": 1007,
	"./ja": 6854,
	"./ja.js": 6854,
	"./jv": 2390,
	"./jv.js": 2390,
	"./ka": 5958,
	"./ka.js": 5958,
	"./kk": 7216,
	"./kk.js": 7216,
	"./km": 1061,
	"./km.js": 1061,
	"./kn": 4060,
	"./kn.js": 4060,
	"./ko": 5216,
	"./ko.js": 5216,
	"./ku": 894,
	"./ku.js": 894,
	"./ky": 609,
	"./ky.js": 609,
	"./lb": 3591,
	"./lb.js": 3591,
	"./lo": 8381,
	"./lo.js": 8381,
	"./lt": 6118,
	"./lt.js": 6118,
	"./lv": 7889,
	"./lv.js": 7889,
	"./me": 4274,
	"./me.js": 4274,
	"./mi": 9226,
	"./mi.js": 9226,
	"./mk": 528,
	"./mk.js": 528,
	"./ml": 7938,
	"./ml.js": 7938,
	"./mn": 5456,
	"./mn.js": 5456,
	"./mr": 4393,
	"./mr.js": 4393,
	"./ms": 3647,
	"./ms-my": 3049,
	"./ms-my.js": 3049,
	"./ms.js": 3647,
	"./mt": 6097,
	"./mt.js": 6097,
	"./my": 6277,
	"./my.js": 6277,
	"./nb": 7245,
	"./nb.js": 7245,
	"./ne": 3988,
	"./ne.js": 3988,
	"./nl": 2557,
	"./nl-be": 478,
	"./nl-be.js": 478,
	"./nl.js": 2557,
	"./nn": 7170,
	"./nn.js": 7170,
	"./oc-lnc": 3131,
	"./oc-lnc.js": 3131,
	"./pa-in": 1731,
	"./pa-in.js": 1731,
	"./pl": 8409,
	"./pl.js": 8409,
	"./pt": 1178,
	"./pt-br": 6558,
	"./pt-br.js": 6558,
	"./pt.js": 1178,
	"./ro": 4138,
	"./ro.js": 4138,
	"./ru": 3380,
	"./ru.js": 3380,
	"./sd": 2889,
	"./sd.js": 2889,
	"./se": 2774,
	"./se.js": 2774,
	"./si": 8755,
	"./si.js": 8755,
	"./sk": 9597,
	"./sk.js": 9597,
	"./sl": 3871,
	"./sl.js": 3871,
	"./sq": 4228,
	"./sq.js": 4228,
	"./sr": 774,
	"./sr-cyrl": 1928,
	"./sr-cyrl.js": 1928,
	"./sr.js": 774,
	"./ss": 3176,
	"./ss.js": 3176,
	"./sv": 2422,
	"./sv.js": 2422,
	"./sw": 1621,
	"./sw.js": 1621,
	"./ta": 5731,
	"./ta.js": 5731,
	"./te": 8025,
	"./te.js": 8025,
	"./tet": 3934,
	"./tet.js": 3934,
	"./tg": 9958,
	"./tg.js": 9958,
	"./th": 4251,
	"./th.js": 4251,
	"./tk": 5494,
	"./tk.js": 5494,
	"./tl-ph": 8568,
	"./tl-ph.js": 8568,
	"./tlh": 3158,
	"./tlh.js": 3158,
	"./tr": 9574,
	"./tr.js": 9574,
	"./tzl": 4311,
	"./tzl.js": 4311,
	"./tzm": 9686,
	"./tzm-latn": 2380,
	"./tzm-latn.js": 2380,
	"./tzm.js": 9686,
	"./ug-cn": 2356,
	"./ug-cn.js": 2356,
	"./uk": 4934,
	"./uk.js": 4934,
	"./ur": 4515,
	"./ur.js": 4515,
	"./uz": 58,
	"./uz-latn": 1875,
	"./uz-latn.js": 1875,
	"./uz.js": 58,
	"./vi": 3325,
	"./vi.js": 3325,
	"./x-pseudo": 9208,
	"./x-pseudo.js": 9208,
	"./yo": 8742,
	"./yo.js": 8742,
	"./zh-cn": 2378,
	"./zh-cn.js": 2378,
	"./zh-hk": 1074,
	"./zh-hk.js": 1074,
	"./zh-mo": 4671,
	"./zh-mo.js": 4671,
	"./zh-tw": 259,
	"./zh-tw.js": 259
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map