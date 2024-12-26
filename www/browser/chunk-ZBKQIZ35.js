import {
  MachineService,
  SignlarService
} from "./chunk-KZDGHPJW.js";
import {
  IonButton,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonItem,
  IonLabel,
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
  Router,
  formatDate,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
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

// src/app/pages/machines/live/live.page.ts
function LivePage_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 22);
    \u0275\u0275twoWayListener("ngModelChange", function LivePage_ng_template_14_Template_ion_datetime_ngModelChange_0_listener($event) {
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
function LivePage_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 23);
    \u0275\u0275twoWayListener("ngModelChange", function LivePage_ng_template_21_Template_ion_datetime_ngModelChange_0_listener($event) {
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
function LivePage_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "ion-row", 25)(2, "ion-col", 26);
    \u0275\u0275text(3, " From ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-col", 26);
    \u0275\u0275text(5, " To ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-col", 26);
    \u0275\u0275text(7, " Status ");
    \u0275\u0275elementEnd()()();
  }
}
function LivePage_ion_row_28_Conditional_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275listener("click", function LivePage_ion_row_28_Conditional_8_Conditional_0_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const row_r5 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.DownloadLiveReport(row_r5.id));
    });
    \u0275\u0275text(1, " Download ");
    \u0275\u0275elementEnd();
  }
}
function LivePage_ion_row_28_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Preparing ");
  }
}
function LivePage_ion_row_28_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LivePage_ion_row_28_Conditional_8_Conditional_0_Template, 2, 0, "span", 28)(1, LivePage_ion_row_28_Conditional_8_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(0, row_r5.received ? 0 : 1);
  }
}
function LivePage_ion_row_28_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Waiting ");
  }
}
function LivePage_ion_row_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 27)(1, "ion-col", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-col", 26);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "ion-col", 26);
    \u0275\u0275template(8, LivePage_ion_row_28_Conditional_8_Template, 2, 1)(9, LivePage_ion_row_28_Conditional_9_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, row_r5.from, "MMM dd, yyyy hh:mm a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, row_r5.to, "MMM dd, yyyy hh:mm a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(8, row_r5.sent ? 8 : 9);
  }
}
function LivePage_ng_template_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 30);
    \u0275\u0275twoWayListener("ngModelChange", function LivePage_ng_template_42_Template_ion_datetime_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.logDate, $event) || (ctx_r1.logDate = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("showDefaultTitle", true)("showDefaultButtons", true);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.logDate);
  }
}
function LivePage_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "ion-row", 25)(2, "ion-col", 31);
    \u0275\u0275text(3, " Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-col", 31);
    \u0275\u0275text(5, " Status ");
    \u0275\u0275elementEnd()()();
  }
}
function LivePage_ion_row_51_Conditional_5_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 29);
    \u0275\u0275listener("click", function LivePage_ion_row_51_Conditional_5_Conditional_0_Conditional_0_Template_span_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const row_r8 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.DownloadLogFile(row_r8.id, row_r8.logDate));
    });
    \u0275\u0275text(1, " Download ");
    \u0275\u0275elementEnd();
  }
}
function LivePage_ion_row_51_Conditional_5_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275textInterpolate1(" ", row_r8.message, " ");
  }
}
function LivePage_ion_row_51_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LivePage_ion_row_51_Conditional_5_Conditional_0_Conditional_0_Template, 2, 0, "span", 28)(1, LivePage_ion_row_51_Conditional_5_Conditional_0_Conditional_1_Template, 1, 1);
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275conditional(0, row_r8.success ? 0 : 1);
  }
}
function LivePage_ion_row_51_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Preparing ");
  }
}
function LivePage_ion_row_51_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, LivePage_ion_row_51_Conditional_5_Conditional_0_Template, 2, 1)(1, LivePage_ion_row_51_Conditional_5_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    const row_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(0, row_r8.received ? 0 : 1);
  }
}
function LivePage_ion_row_51_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Waiting ");
  }
}
function LivePage_ion_row_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 27)(1, "ion-col", 31);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-col", 31);
    \u0275\u0275template(5, LivePage_ion_row_51_Conditional_5_Template, 2, 1)(6, LivePage_ion_row_51_Conditional_6_Template, 1, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, row_r8.logDate, "MMM dd, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(5, row_r8.sent ? 5 : 6);
  }
}
var _LivePage = class _LivePage {
  constructor() {
    this.api = inject(ApiService);
    this.signalR = inject(SignlarService);
    this.altService = inject(AlertService);
    this.machineService = inject(MachineService);
    this.router = inject(Router);
    this.machineId = "";
    this.reportRequest = [];
    this.logRequests = [];
    const dd = /* @__PURE__ */ new Date();
    this.fromDate = formatDate(new Date(dd.getFullYear(), dd.getMonth(), 1), "yyyy-MM-ddTHH:mm:ss", "en-US");
    this.toDate = formatDate(dd, "yyyy-MM-ddT23:59:59", "en-US");
    this.logDate = this.toDate;
    let URL = this.router.url;
    let URL_AS_LIST = URL.split("/");
    this.machineId = URL_AS_LIST[2];
    this.machineService.GetMachine(this.machineId).then((result) => {
      this.machine = result;
      this.GetLiveReportRequests();
      this.GetLogRecords();
    });
  }
  ngOnInit() {
    this.liveReportSub = this.signalR.liveReportReceivedStatus.subscribe((status) => {
      this.GetLiveReportRequests();
    });
    this.logStatusSub = this.signalR.logReceivedStatus.subscribe((status) => {
      this.GetLogRecords();
    });
  }
  GetLiveReportRequests() {
    this.api.GetLiveReportRequests(this.machineId, this.machine?.appType ?? "VM").subscribe((result) => {
      this.reportRequest = result;
    });
  }
  DownloadLiveReport(id) {
    this.api.DownloadLiveReport(id).subscribe((data) => {
      this.downloadFile(data, "LiveReport.xls");
    });
  }
  RequestLiveReport() {
    const body = {
      MachineId: this.machineId,
      From: this.fromDate,
      To: this.toDate
    };
    this.api.AddLiveReportRequest(body).subscribe((data) => {
      this.altService.successToast(data.message);
      this.GetLiveReportRequests();
    });
  }
  GetLogRecords() {
    this.api.GetLogRecords(this.machineId).subscribe((resp) => {
      this.logRequests = resp;
    });
  }
  RequestLogFile() {
    const logRequestDto = {
      MachineId: this.machineId,
      LogDate: this.logDate
    };
    this.api.AddLogRequest(logRequestDto).subscribe((data) => {
      this.altService.successToast(data.message);
      this.GetLogRecords();
    });
  }
  DownloadLogFile(id, logDate) {
    this.api.DownloadLogFile(id).subscribe((data) => {
      const filename = formatDate(logDate, "yyyy-MM-dd", "en-US") + ".txt";
      this.downloadFile(data, filename);
    });
  }
  ngOnDestroy() {
    if (this.liveReportSub)
      this.liveReportSub.unsubscribe();
    if (this.logStatusSub)
      this.logStatusSub.unsubscribe();
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
};
_LivePage.\u0275fac = function LivePage_Factory(t) {
  return new (t || _LivePage)();
};
_LivePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LivePage, selectors: [["app-live"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 52, vars: 9, consts: [[1, "ion-justify-content-center"], ["size", "12", "sizeSm", "10", "sizeXl", "8"], [1, "section-outer"], [1, "section-header"], [1, "section-body"], [1, "ion-justify-content-center", "ion-align-items-center"], ["size", "12", "sizeSm", "auto"], ["lines", "none"], ["slot", "start"], ["datetime", "fromdate"], [3, "keepContentsMounted"], ["datetime", "todate"], ["size", "12", "sizeSm", "2"], ["expand", "block", 3, "click"], [1, "table-outline"], ["class", "table-header", 4, "ngIf"], [1, "table-body", 2, "margin-bottom", "16px"], ["class", "ion-align-items-center", 4, "ngFor", "ngForOf"], ["id", "open-modal", "lines", "none"], ["slot", "end"], ["trigger", "open-modal"], ["size", "12", "sizeSm", "5"], ["id", "fromdate", 3, "ngModelChange", "ngModel", "showDefaultButtons"], ["id", "todate", 3, "ngModelChange", "ngModel", "showDefaultButtons"], [1, "table-header"], [1, "row-header"], ["sizeSm", "4", 1, "ion-text-center"], [1, "ion-align-items-center"], [1, "btn-download"], [1, "btn-download", 3, "click"], ["presentation", "date", "size", "cover", 3, "ngModelChange", "showDefaultTitle", "showDefaultButtons", "ngModel"], ["sizeSm", "6", 1, "ion-text-center"]], template: function LivePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-row", 0)(2, "ion-col", 1)(3, "div", 2)(4, "div", 3);
    \u0275\u0275text(5, " Live Report ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 4)(7, "ion-row", 5)(8, "ion-col", 6)(9, "ion-item", 7)(10, "div", 8);
    \u0275\u0275text(11, " From ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "ion-datetime-button", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-modal", 10);
    \u0275\u0275template(14, LivePage_ng_template_14_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "ion-col", 6)(16, "ion-item", 7)(17, "div", 8);
    \u0275\u0275text(18, " To ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "ion-datetime-button", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-modal", 10);
    \u0275\u0275template(21, LivePage_ng_template_21_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "ion-col", 12)(23, "ion-button", 13);
    \u0275\u0275listener("click", function LivePage_Template_ion_button_click_23_listener() {
      return ctx.RequestLiveReport();
    });
    \u0275\u0275text(24, " GET REPORT ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 14);
    \u0275\u0275template(26, LivePage_div_26_Template, 8, 0, "div", 15);
    \u0275\u0275elementStart(27, "div", 16);
    \u0275\u0275template(28, LivePage_ion_row_28_Template, 10, 9, "ion-row", 17);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "div", 2)(30, "div", 3);
    \u0275\u0275text(31, " Machine Logs ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 4)(33, "ion-row", 5)(34, "ion-col", 6)(35, "ion-item", 18)(36, "div", 8);
    \u0275\u0275text(37, " Date ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "ion-label", 19);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "ion-modal", 20);
    \u0275\u0275template(42, LivePage_ng_template_42_Template, 1, 3, "ng-template");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "ion-col", 12)(44, "ion-button", 13);
    \u0275\u0275listener("click", function LivePage_Template_ion_button_click_44_listener() {
      return ctx.RequestLogFile();
    });
    \u0275\u0275text(45, " GET LOG ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(46, "div", 14)(47, "ion-row", 5)(48, "ion-col", 21);
    \u0275\u0275template(49, LivePage_div_49_Template, 6, 0, "div", 15);
    \u0275\u0275elementStart(50, "div", 16);
    \u0275\u0275template(51, LivePage_ion_row_51_Template, 7, 5, "ion-row", 17);
    \u0275\u0275elementEnd()()()()()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(7);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.reportRequest.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.reportRequest);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 7, ctx.logDate));
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx.logRequests.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.logRequests);
  }
}, dependencies: [IonLabel, IonItem, IonButton, IonDatetime, IonModal, IonDatetimeButton, IonCol, IonRow, IonContent, CommonModule, NgForOf, NgIf, DatePipe, FormsModule, NgControlStatus, NgModel], styles: ["\n\n.section-outer[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  border: 2px solid var(--ion-color-primary);\n  border-radius: 5px;\n  min-height: 15vh;\n}\n.section-header[_ngcontent-%COMP%] {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n  padding: 5px;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n.btn-download[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  font-weight: 700;\n  cursor: pointer;\n}\n.table-outline[_ngcontent-%COMP%] {\n  margin: 8px;\n}"] });
var LivePage = _LivePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LivePage, { className: "LivePage", filePath: "src/app/pages/machines/live/live.page.ts", lineNumber: 20 });
})();
export {
  LivePage
};
