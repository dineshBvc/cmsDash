import {
  MachinelistComponent
} from "./chunk-LI2FELL7.js";
import "./chunk-KZDGHPJW.js";
import {
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonRow
} from "./chunk-WHRTMT5V.js";
import {
  ApiService
} from "./chunk-ZI2R32SU.js";
import {
  AlertService
} from "./chunk-7FRACAAN.js";
import {
  CommonModule,
  DatePipe,
  FormsModule,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-GXWPZK3Z.js";
import "./chunk-F7B77NAZ.js";
import "./chunk-DGUGGTGJ.js";
import "./chunk-FIELU7AB.js";
import "./chunk-R4QHACMO.js";
import "./chunk-66NQU5P4.js";
import "./chunk-EZ7BZKXF.js";
import "./chunk-ALOK74QR.js";
import "./chunk-W6SC2ZZR.js";
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
import "./chunk-KFBF5L4X.js";
import "./chunk-QZNYZEIB.js";
import "./chunk-GHFEINSK.js";
import "./chunk-HNY4SUTK.js";
import "./chunk-UR6VIRNL.js";
import "./chunk-OJO5RD3M.js";
import "./chunk-3JGBPQET.js";

// src/app/pages/reports/stock-refill-summary/stock-refill-summary.page.ts
function StockRefillSummaryPage_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 18);
    \u0275\u0275twoWayListener("ngModelChange", function StockRefillSummaryPage_ng_template_15_Template_ion_datetime_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.fromDate, $event) || (ctx_r1.fromDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.fromDate);
    \u0275\u0275property("showDefaultButtons", true);
  }
}
function StockRefillSummaryPage_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 19);
    \u0275\u0275twoWayListener("ngModelChange", function StockRefillSummaryPage_ng_template_23_Template_ion_datetime_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.toDate, $event) || (ctx_r1.toDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.toDate);
    \u0275\u0275property("showDefaultButtons", true);
  }
}
function StockRefillSummaryPage_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "ion-row", 14)(2, "ion-col", 15)(3, "ion-row", 21)(4, "ion-col", 22);
    \u0275\u0275text(5, " Product ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-col", 23);
    \u0275\u0275text(7, " Price ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-col", 23);
    \u0275\u0275text(9, " Filled ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-col", 23);
    \u0275\u0275text(11, " Cleared ");
    \u0275\u0275elementEnd()()()()();
  }
}
function StockRefillSummaryPage_div_31_ion_row_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 27)(1, "ion-col", 22);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-col", 23);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ion-col", 23);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-col", 23);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.productName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.price, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.filled, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.cleared, " ");
  }
}
function StockRefillSummaryPage_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "ion-row", 24)(2, "ion-col", 22);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-col", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, StockRefillSummaryPage_div_31_ion_row_11_Template, 9, 4, "ion-row", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r5 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Attempt - ", slot_r5.attempt, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, slot_r5.start, "MMM dd, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(9, 8, slot_r5.start, "hh:mm a"), " - ", \u0275\u0275pipeBind2(10, 11, slot_r5.end, "hh:mm a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", slot_r5.items);
  }
}
function StockRefillSummaryPage_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "ion-row", 29)(2, "ion-col", 15)(3, "ion-row", 30)(4, "ion-col", 31);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-col", 32);
    \u0275\u0275text(7, " TOTAL ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-col", 33);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-col", 33);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Records : ", ctx_r1.result.length, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Rs. ", ctx_r1.GetTotalByKey("filled"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Rs. ", ctx_r1.GetTotalByKey("cleared"), " ");
  }
}
var _StockRefillSummaryPage = class _StockRefillSummaryPage {
  constructor() {
    this.api = inject(ApiService);
    this.altService = inject(AlertService);
    this.rawData = [];
    this.result = [];
    this.refillItems = [];
    const dd = /* @__PURE__ */ new Date();
    this.fromDate = dd.toISOString().substring(0, 10) + "T00:00:00";
    this.toDate = dd.toISOString().substring(0, 10) + "T23:59:59";
  }
  onShowClick() {
    if (this.machineList.selectedId === void 0) {
      this.altService.showAlert("Please select machine", "MISSING");
      return;
    }
    this.api.GetRefillSummaryReport(this.machineList.selectedId, this.fromDate, this.toDate).subscribe((data) => {
      this.rawData = data;
      this.result = [...this.rawData];
      this.refillItems = [];
      data.forEach((x) => {
        this.refillItems.push(...x.items);
      });
    });
  }
  OnDownload() {
    if (this.machineList.selectedId === void 0) {
      this.altService.showAlert("Please select machine", "MISSING");
      return;
    }
    this.api.DownloadClearedReport(this.machineList.selectedId, this.fromDate, this.toDate).subscribe((data) => {
      this.downloadFile(data, "StockRequired.xlsx");
    });
  }
  downloadFile(data, fileName = "") {
    const blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    const url = window.URL.createObjectURL(blob);
    let downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.setAttribute("download", fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();
  }
  GetTotalByKey(col) {
    return this.refillItems.reduce((acc, cur) => acc + cur[col] * cur["price"], 0);
  }
};
_StockRefillSummaryPage.\u0275fac = function StockRefillSummaryPage_Factory(t) {
  return new (t || _StockRefillSummaryPage)();
};
_StockRefillSummaryPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockRefillSummaryPage, selectors: [["app-stock-refill-summary"]], viewQuery: function StockRefillSummaryPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MachinelistComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.machineList = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 5, consts: [["color", "light"], [1, "table-full"], [1, "ion-justify-content-center", "ion-align-items-center"], ["size", "12", "sizeSm", "2", 1, "ion-text-center"], ["type", "vm"], ["size", "12", "sizeSm", "3", "sizeXl", "2", 1, "ion-text-center"], [1, "ion-align-items-center"], ["size", "3", 1, "ion-text-end"], ["datetime", "fromdate"], [3, "keepContentsMounted"], ["datetime", "todate"], ["expand", "block", 3, "click"], ["class", "table-header", 4, "ngIf"], [1, "table-body"], [1, "ion-justify-content-center"], ["size", "12", "sizeMd", "10", "sizeLg", "8", 1, "ion-no-padding"], [4, "ngFor", "ngForOf"], ["class", "table-footer", 4, "ngIf"], ["id", "fromdate", 3, "ngModelChange", "ngModel", "showDefaultButtons"], ["id", "todate", 3, "ngModelChange", "ngModel", "showDefaultButtons"], [1, "table-header"], [1, "row-header"], ["size", "6"], ["size", "2", 1, "ion-text-center"], [1, "ion-align-items-center", "group-header"], ["size", "6", 1, "ion-text-end"], ["class", "row-data", 4, "ngFor", "ngForOf"], [1, "row-data"], [1, "table-footer"], [1, "ion-justify-content-center", "ion-margin-bottom"], [1, "row-total"], ["size", "3", 1, "ion-text-center"], ["size", "5", 1, "ion-text-end", "ion-margin-top"], ["size", "2", 1, "ion-text-center", "ion-margin-top"]], template: function StockRefillSummaryPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "h1");
    \u0275\u0275text(5, " Stock Refill Summary ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-col", 3);
    \u0275\u0275element(7, "app-machinelist", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-col", 5)(9, "ion-row", 6)(10, "ion-col", 7);
    \u0275\u0275text(11, " From ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-col");
    \u0275\u0275element(13, "ion-datetime-button", 8);
    \u0275\u0275elementStart(14, "ion-modal", 9);
    \u0275\u0275template(15, StockRefillSummaryPage_ng_template_15_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "ion-col", 5)(17, "ion-row", 6)(18, "ion-col", 7);
    \u0275\u0275text(19, " To ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-col");
    \u0275\u0275element(21, "ion-datetime-button", 10);
    \u0275\u0275elementStart(22, "ion-modal", 9);
    \u0275\u0275template(23, StockRefillSummaryPage_ng_template_23_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "ion-col", 3)(25, "ion-button", 11);
    \u0275\u0275listener("click", function StockRefillSummaryPage_Template_ion_button_click_25_listener() {
      return ctx.onShowClick();
    });
    \u0275\u0275text(26, " SHOW ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, StockRefillSummaryPage_div_27_Template, 12, 0, "div", 12);
    \u0275\u0275elementStart(28, "div", 13)(29, "ion-row", 14)(30, "ion-col", 15);
    \u0275\u0275template(31, StockRefillSummaryPage_div_31_Template, 12, 14, "div", 16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, StockRefillSummaryPage_div_32_Template, 12, 3, "div", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.rawData.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.result);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.rawData.length > 0);
  }
}, dependencies: [IonDatetime, IonModal, IonDatetimeButton, IonButton, IonCol, IonRow, IonContent, CommonModule, NgForOf, NgIf, DatePipe, FormsModule, NgControlStatus, NgModel, MachinelistComponent], styles: ["\n\n.group-header[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 16px;\n}"] });
var StockRefillSummaryPage = _StockRefillSummaryPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockRefillSummaryPage, { className: "StockRefillSummaryPage", filePath: "src/app/pages/reports/stock-refill-summary/stock-refill-summary.page.ts", lineNumber: 16 });
})();
export {
  StockRefillSummaryPage
};
