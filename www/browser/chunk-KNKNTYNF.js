import {
  AuthService
} from "./chunk-OEWCSYJ6.js";
import {
  AlertService,
  IonButton,
  IonCard,
  IonCol,
  IonInput,
  IonRow,
  IonText,
  IonicModule,
  TextValueAccessorDirective
} from "./chunk-7FRACAAN.js";
import {
  ActivatedRoute,
  CommonModule,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Router,
  Validators,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-GXWPZK3Z.js";
import "./chunk-F7B77NAZ.js";
import "./chunk-DGUGGTGJ.js";
import "./chunk-FIELU7AB.js";
import "./chunk-R4QHACMO.js";
import "./chunk-66NQU5P4.js";
import "./chunk-EZ7BZKXF.js";
import "./chunk-YFFHIQ2L.js";
import "./chunk-UCFYK5O2.js";
import "./chunk-3H2XENQN.js";
import "./chunk-2HSCIEP3.js";
import "./chunk-36T2BHYJ.js";
import "./chunk-YCY464VT.js";
import "./chunk-Q2LVCW5Y.js";
import "./chunk-K2HBFHW4.js";
import "./chunk-UNONYLPV.js";
import "./chunk-MIOLVGSM.js";
import "./chunk-5RZA5OD4.js";
import "./chunk-WTQ2A753.js";
import "./chunk-MP3VKTEY.js";
import "./chunk-22VAUMV7.js";
import "./chunk-F6IUCLRN.js";
import "./chunk-7LRYXUKF.js";
import "./chunk-RSZAZW36.js";
import "./chunk-2M4P3T54.js";
import "./chunk-VMW4IG5E.js";
import "./chunk-QZNYZEIB.js";
import "./chunk-GHFEINSK.js";
import "./chunk-OJO5RD3M.js";
import {
  __async
} from "./chunk-3JGBPQET.js";

// src/app/pages/login/login.page.ts
var _LoginPage = class _LoginPage {
  constructor(fb, alertServiec, authService, route, router) {
    this.fb = fb;
    this.alertServiec = alertServiec;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.validation_messages = {
      username: [
        { type: "required", message: "Username is required" },
        { type: "minlength", message: "Minimum 3 characters required" },
        { type: "maxlength", message: "Exceeded the max length 50" }
      ],
      password: [
        { type: "required", message: "Password is required" },
        { type: "minlength", message: "Minimum 8 characters required" },
        { type: "pattern", message: "Alphanumeric password with aleast one lower case letter and one upper case letter and one digit and one symbol required" }
      ]
    };
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      password: ["", [Validators.required, Validators.minLength(8), Validators.pattern("(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}")]]
    });
  }
  onSubmit() {
    return __async(this, null, function* () {
      if (!this.loginForm.valid)
        return;
      this.alertServiec.showLoader();
      this.authService.login(this.loginForm.value).then((success) => {
        if (success) {
          this.loginForm.reset();
          const returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
          this.router.navigate([returnUrl], { replaceUrl: true });
        }
        this.alertServiec.hideLoader();
      });
    });
  }
  getErrorText(control) {
    const validations = this.validation_messages[control];
    for (let validation of validations) {
      if (this.loginForm.get(control)?.hasError(validation.type))
        return validation.message;
    }
    return "";
  }
};
_LoginPage.\u0275fac = function LoginPage_Factory(t) {
  return new (t || _LoginPage)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(AlertService), \u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_LoginPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginPage, selectors: [["app-login"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 21, vars: 4, consts: [[1, "container"], [1, "logincard"], [1, "login-header", "ion-text-center"], ["autocomplete", "off", 3, "ngSubmit", "formGroup"], [1, "ion-margin"], ["size", "12"], ["type", "text", "label", "Username", "label-placement", "floating", "fill", "outline", "placeholder", "Enter Username", "formControlName", "username", 3, "errorText"], ["type", "password", "label", "Password", "label-placement", "floating", "fill", "outline", "clear-on-edit", "false", "placeholder", "Enter Password", "formControlName", "password", 3, "errorText"], ["expand", "block", "type", "submit", 3, "disabled"], [2, "flex-grow", "1"], [1, "ion-margin", "ion-text-end"], ["href", "forgetpassword"]], template: function LoginPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "ion-card", 1)(2, "div", 2);
    \u0275\u0275text(3, " Login ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 3);
    \u0275\u0275listener("ngSubmit", function LoginPage_Template_form_ngSubmit_4_listener() {
      return ctx.onSubmit();
    });
    \u0275\u0275elementStart(5, "ion-row", 4)(6, "ion-col", 5);
    \u0275\u0275element(7, "ion-input", 6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "ion-row", 4)(9, "ion-col", 5);
    \u0275\u0275element(10, "ion-input", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-row", 4)(12, "ion-col", 5)(13, "ion-button", 8);
    \u0275\u0275text(14, " Login ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(15, "div", 9);
    \u0275\u0275elementStart(16, "ion-row", 10)(17, "ion-col", 5)(18, "ion-text")(19, "a", 11);
    \u0275\u0275text(20, " Forget password? ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("formGroup", ctx.loginForm);
    \u0275\u0275advance(3);
    \u0275\u0275property("errorText", ctx.getErrorText("username"));
    \u0275\u0275advance(3);
    \u0275\u0275property("errorText", ctx.getErrorText("password"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.loginForm.valid);
  }
}, dependencies: [IonicModule, IonButton, IonCard, IonCol, IonInput, IonRow, IonText, TextValueAccessorDirective, CommonModule, FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName], styles: ['\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -moz-box;\n  display: -ms-flexbox;\n  justify-content: center;\n  align-items: center;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  background-image: url("./media/bg-01-VRBRMSIS.jpg");\n}\n.logincard[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 95%;\n  margin: 20px;\n  border-radius: 10px;\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n.login-header[_ngcontent-%COMP%] {\n  margin-top: 12%;\n  margin-bottom: 30px;\n  font-size: 3rem;\n  color: var(--ion-color-dark);\n  font-weight: 600;\n}'] });
var LoginPage = _LoginPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginPage, { className: "LoginPage", filePath: "src/app/pages/login/login.page.ts", lineNumber: 16 });
})();
export {
  LoginPage
};
