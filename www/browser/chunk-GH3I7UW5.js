import {
  IonCard,
  IonCol,
  IonContent,
  IonRow
} from "./chunk-WHRTMT5V.js";
import {
  ActivatedRoute,
  CommonModule,
  FormsModule,
  Router,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtext
} from "./chunk-GXWPZK3Z.js";
import "./chunk-ALOK74QR.js";
import "./chunk-W6SC2ZZR.js";
import "./chunk-MP3VKTEY.js";
import "./chunk-22VAUMV7.js";
import "./chunk-F6IUCLRN.js";
import "./chunk-7LRYXUKF.js";
import "./chunk-RSZAZW36.js";
import "./chunk-2M4P3T54.js";
import "./chunk-VMW4IG5E.js";
import "./chunk-KFBF5L4X.js";
import "./chunk-QZNYZEIB.js";
import "./chunk-GHFEINSK.js";
import "./chunk-HNY4SUTK.js";
import "./chunk-UR6VIRNL.js";
import "./chunk-OJO5RD3M.js";
import "./chunk-3JGBPQET.js";

// src/app/pages/machines/report/report.page.ts
var _ReportPage = class _ReportPage {
  constructor() {
    this.router = inject(Router);
    this.route = inject(ActivatedRoute);
    this.machineId = "";
    let URL = this.router.url;
    let URL_AS_LIST = URL.split("/");
    this.machineId = URL_AS_LIST[2];
  }
  NavigateReport(reportpage) {
    this.router.navigate([reportpage], { relativeTo: this.route, state: { machineId: this.machineId } });
  }
};
_ReportPage.\u0275fac = function ReportPage_Factory(t) {
  return new (t || _ReportPage)();
};
_ReportPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportPage, selectors: [["app-report"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [["color", "light"], ["size", "6", "sizeLg", "3"], [3, "click"]], template: function ReportPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "ion-row")(2, "ion-col", 1)(3, "ion-card", 2);
    \u0275\u0275listener("click", function ReportPage_Template_ion_card_click_3_listener() {
      return ctx.NavigateReport("stock");
    });
    \u0275\u0275text(4, " Stock Report ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-col", 1)(6, "ion-card", 2);
    \u0275\u0275listener("click", function ReportPage_Template_ion_card_click_6_listener() {
      return ctx.NavigateReport("required");
    });
    \u0275\u0275text(7, " Stock Required ");
    \u0275\u0275elementEnd()()()();
  }
}, dependencies: [IonCard, IonCol, IonRow, IonContent, CommonModule, FormsModule], styles: ["\n\nion-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  min-height: 10vh;\n  font-weight: bold;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-wrap: wrap;\n}"] });
var ReportPage = _ReportPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportPage, { className: "ReportPage", filePath: "src/app/pages/machines/report/report.page.ts", lineNumber: 15 });
})();
export {
  ReportPage
};
