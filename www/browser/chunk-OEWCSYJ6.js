import {
  AlertService,
  environment
} from "./chunk-7FRACAAN.js";
import {
  BehaviorSubject,
  HttpClient,
  HttpHeaders,
  Observable,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-GXWPZK3Z.js";
import {
  __async
} from "./chunk-3JGBPQET.js";

// src/app/services/auth.service.ts
var _AuthService = class _AuthService {
  constructor(http, alretService) {
    this.http = http;
    this.alretService = alretService;
    this.isAuthenticated = new BehaviorSubject(false);
    this.token = "";
    this.refreshToken = "";
    this.username = "";
    this.roles = [];
    this.loadToken();
  }
  loadToken() {
    const token = localStorage.getItem("jwtToken");
    if (token) {
      this.token = token;
      this.refreshToken = localStorage.getItem("refreshToken");
      const payload = token.split(".")[1];
      const decoded = window.atob(payload);
      const values = JSON.parse(decoded);
      this.roles = values.role;
      this.username = values.unique_name;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }
  login(credentials) {
    return new Promise((resolve) => __async(this, null, function* () {
      this.http.post(`${environment.apiURL}/api/accounts/login`, credentials).subscribe((data) => {
        if (data) {
          localStorage.setItem("jwtToken", data.jwtToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          localStorage.setItem("expired", JSON.stringify(data.expired));
          this.loadToken();
          resolve(true);
        } else {
          resolve(false);
        }
      }, (err) => {
        if (err.status > 0) {
          this.alretService.showAlert(err.error ?? "", "LOGIN FAILED");
        } else {
          this.alretService.showAlert("", "LOGIN FAILED");
        }
      });
    }));
  }
  GetToken() {
    const expStr = localStorage.getItem("expired");
    if (expStr) {
      var expireDate = JSON.parse(expStr);
      if (expireDate <= /* @__PURE__ */ new Date()) {
        this.RefreshTokens().subscribe(() => {
          return this.token;
        });
      }
    }
    return this.token;
  }
  RefreshTokens() {
    return new Observable((x) => {
      const requestbody = {
        jwtToken: this.token,
        refreshToken: this.refreshToken
      };
      this.http.post(`${environment.apiURL}/api/accounts/refresh`, requestbody).subscribe((data) => {
        if (data) {
          localStorage.setItem("jwtToken", data.jwtToken);
          localStorage.setItem("refreshToken", data.refreshToken);
          localStorage.setItem("expired", JSON.stringify(data.expired));
          this.loadToken();
        }
        x.next(data);
        x.complete();
      });
    });
  }
  logout() {
    if (this.token.length > 2) {
      const tmp_token = this.token;
      this.token = "";
      this.username = "";
      this.roles = [];
      localStorage.removeItem("jwtToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expired");
      localStorage.clear();
      this.isAuthenticated.next(false);
      const headers = new HttpHeaders({ "Content-Type": "application/json", Authorization: `bearer ${tmp_token}` });
      this.http.post(`${environment.apiURL}/api/accounts/logout`, "", { headers, responseType: "json" }).subscribe();
    }
  }
};
_AuthService.\u0275fac = function AuthService_Factory(t) {
  return new (t || _AuthService)(\u0275\u0275inject(HttpClient), \u0275\u0275inject(AlertService));
};
_AuthService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
var AuthService = _AuthService;

export {
  AuthService
};
