import {
  AuthService
} from "./chunk-OEWCSYJ6.js";
import {
  Router,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-GXWPZK3Z.js";

// src/app/guards/auth.guard.ts
var _AuthGuard = class _AuthGuard {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
  }
  canActivate(route, state) {
    if (this.authService.isAuthenticated.value)
      return true;
    this.router.navigate(["login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
};
_AuthGuard.\u0275fac = function AuthGuard_Factory(t) {
  return new (t || _AuthGuard)(\u0275\u0275inject(Router), \u0275\u0275inject(AuthService));
};
_AuthGuard.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
var AuthGuard = _AuthGuard;

export {
  AuthGuard
};
