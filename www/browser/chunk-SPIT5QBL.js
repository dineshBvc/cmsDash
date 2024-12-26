import {
  IonBadge,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonDatetime,
  IonDatetimeButton,
  IonIcon,
  IonModal,
  IonRow,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonToolbar
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
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
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

// src/app/pages/reports/cash-refund-request/cash-refund-request.page.ts
function CashRefundRequestPage_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 19);
    \u0275\u0275twoWayListener("ngModelChange", function CashRefundRequestPage_ng_template_13_Template_ion_datetime_ngModelChange_0_listener($event) {
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
function CashRefundRequestPage_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 20);
    \u0275\u0275twoWayListener("ngModelChange", function CashRefundRequestPage_ng_template_21_Template_ion_datetime_ngModelChange_0_listener($event) {
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
function CashRefundRequestPage_ion_row_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 21)(2, "ion-toolbar", 0)(3, "ion-searchbar", 22);
    \u0275\u0275listener("ionInput", function CashRefundRequestPage_ion_row_25_Template_ion_searchbar_ionInput_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.SearchData($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 23)(5, "ion-button", 24);
    \u0275\u0275listener("click", function CashRefundRequestPage_ion_row_25_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.OnDownload());
    });
    \u0275\u0275element(6, "ion-icon", 25);
    \u0275\u0275elementEnd()()()()();
  }
}
function CashRefundRequestPage_div_26_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 36);
  }
}
function CashRefundRequestPage_div_26_ion_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 37);
  }
}
function CashRefundRequestPage_div_26_ion_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 36);
  }
}
function CashRefundRequestPage_div_26_ion_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 37);
  }
}
function CashRefundRequestPage_div_26_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 36);
  }
}
function CashRefundRequestPage_div_26_ion_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 37);
  }
}
function CashRefundRequestPage_div_26_ion_icon_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 36);
  }
}
function CashRefundRequestPage_div_26_ion_icon_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 37);
  }
}
function CashRefundRequestPage_div_26_ion_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 36);
  }
}
function CashRefundRequestPage_div_26_ion_icon_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 37);
  }
}
function CashRefundRequestPage_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "ion-row", 27)(2, "ion-col", 15)(3, "ion-row", 28)(4, "ion-col", 29);
    \u0275\u0275listener("click", function CashRefundRequestPage_div_26_Template_ion_col_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("orderNumber"));
    });
    \u0275\u0275text(5, " Order ");
    \u0275\u0275template(6, CashRefundRequestPage_div_26_ion_icon_6_Template, 1, 0, "ion-icon", 30)(7, CashRefundRequestPage_div_26_ion_icon_7_Template, 1, 0, "ion-icon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-col", 32);
    \u0275\u0275listener("click", function CashRefundRequestPage_div_26_Template_ion_col_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("date"));
    });
    \u0275\u0275text(9, " Date ");
    \u0275\u0275template(10, CashRefundRequestPage_div_26_ion_icon_10_Template, 1, 0, "ion-icon", 30)(11, CashRefundRequestPage_div_26_ion_icon_11_Template, 1, 0, "ion-icon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-col", 32);
    \u0275\u0275listener("click", function CashRefundRequestPage_div_26_Template_ion_col_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("mobileNumber"));
    });
    \u0275\u0275text(13, " Mobile ");
    \u0275\u0275template(14, CashRefundRequestPage_div_26_ion_icon_14_Template, 1, 0, "ion-icon", 30)(15, CashRefundRequestPage_div_26_ion_icon_15_Template, 1, 0, "ion-icon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ion-col", 33);
    \u0275\u0275listener("click", function CashRefundRequestPage_div_26_Template_ion_col_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("amount"));
    });
    \u0275\u0275text(17, " Amount ");
    \u0275\u0275template(18, CashRefundRequestPage_div_26_ion_icon_18_Template, 1, 0, "ion-icon", 30)(19, CashRefundRequestPage_div_26_ion_icon_19_Template, 1, 0, "ion-icon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-col", 32);
    \u0275\u0275listener("click", function CashRefundRequestPage_div_26_Template_ion_col_click_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("isPaid"));
    });
    \u0275\u0275text(21, " Paid ");
    \u0275\u0275template(22, CashRefundRequestPage_div_26_ion_icon_22_Template, 1, 0, "ion-icon", 30)(23, CashRefundRequestPage_div_26_ion_icon_23_Template, 1, 0, "ion-icon", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-col", 34);
    \u0275\u0275text(25, " Denomination ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "ion-col", 35);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "orderNumber");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "orderNumber");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "date");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "mobileNumber");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "mobileNumber");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "amount");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "amount");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "isPaid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "isPaid");
  }
}
function CashRefundRequestPage_ion_row_30_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 41);
    \u0275\u0275text(1, " Paid ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("color", "success");
  }
}
function CashRefundRequestPage_ion_row_30_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 41);
    \u0275\u0275text(1, " Unpaid ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("color", "warning");
  }
}
function CashRefundRequestPage_ion_row_30_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 42);
    \u0275\u0275listener("click", function CashRefundRequestPage_ion_row_30_Conditional_19_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.OnMarkAsPaid(row_r7.orderNumber, row_r7.mobileNumber));
    });
    \u0275\u0275element(1, "ion-icon", 43);
    \u0275\u0275elementEnd();
  }
}
function CashRefundRequestPage_ion_row_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 38)(1, "ion-col", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-col", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-col", 39);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "ion-col", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-col", 39);
    \u0275\u0275template(14, CashRefundRequestPage_ion_row_30_Conditional_14_Template, 2, 1, "ion-badge", 41)(15, CashRefundRequestPage_ion_row_30_Conditional_15_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ion-col", 34);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-col", 40);
    \u0275\u0275template(19, CashRefundRequestPage_ion_row_30_Conditional_19_Template, 2, 0, "ion-button");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r7.orderNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 8, row_r7.date, "MMM dd, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 11, row_r7.date, "hh:mm a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r7.mobileNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r7.amount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(14, row_r7.isPaid ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r7.denomination, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(19, row_r7.isPaid == false ? 19 : -1);
  }
}
function CashRefundRequestPage_ion_row_31_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 41);
    \u0275\u0275text(1, " Paid ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("color", "success");
  }
}
function CashRefundRequestPage_ion_row_31_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-badge", 41);
    \u0275\u0275text(1, " Unpaid ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("color", "warning");
  }
}
function CashRefundRequestPage_ion_row_31_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-button", 42);
    \u0275\u0275listener("click", function CashRefundRequestPage_ion_row_31_Conditional_21_Template_ion_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const row_r9 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.OnMarkAsPaid(row_r9.orderNumber, row_r9.mobileNumber));
    });
    \u0275\u0275element(1, "ion-icon", 43);
    \u0275\u0275elementEnd();
  }
}
function CashRefundRequestPage_ion_row_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 44)(1, "ion-col", 45);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "div", 46);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275element(10, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-col", 47);
    \u0275\u0275text(12);
    \u0275\u0275element(13, "br");
    \u0275\u0275text(14);
    \u0275\u0275element(15, "br");
    \u0275\u0275template(16, CashRefundRequestPage_ion_row_31_Conditional_16_Template, 2, 1, "ion-badge", 41)(17, CashRefundRequestPage_ion_row_31_Conditional_17_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-col", 48);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-col", 49);
    \u0275\u0275template(21, CashRefundRequestPage_ion_row_31_Conditional_21_Template, 2, 0, "ion-button");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r9.orderNumber, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 8, row_r9.date, "MMM dd, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 11, row_r9.date, "hh:mm a"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", row_r9.mobileNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Rs.", row_r9.amount, "");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(16, row_r9.isPaid ? 16 : 17);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r9.denomination, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(21, row_r9.isPaid == false ? 21 : -1);
  }
}
function CashRefundRequestPage_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "ion-row", 14)(2, "ion-col", 15)(3, "ion-row", 51)(4, "ion-col", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-col", 53);
    \u0275\u0275text(7, " TOTAL ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-col", 52);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-row", 54)(11, "ion-col", 55);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-row", 14)(14, "ion-col", 56)(15, "ion-button", 57);
    \u0275\u0275listener("click", function CashRefundRequestPage_div_32_Template_ion_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goFirst());
    });
    \u0275\u0275element(16, "ion-icon", 58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ion-col", 56)(18, "ion-button", 57);
    \u0275\u0275listener("click", function CashRefundRequestPage_div_32_Template_ion_button_click_18_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prePage());
    });
    \u0275\u0275element(19, "ion-icon", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ion-col", 60)(21, "ion-select", 61);
    \u0275\u0275twoWayListener("ngModelChange", function CashRefundRequestPage_div_32_Template_ion_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.recordPerPage, $event) || (ctx_r1.recordPerPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function CashRefundRequestPage_div_32_Template_ion_select_ionChange_21_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.recordCountChanged());
    });
    \u0275\u0275elementStart(22, "ion-select-option", 62);
    \u0275\u0275text(23, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-select-option", 62);
    \u0275\u0275text(25, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ion-select-option", 62);
    \u0275\u0275text(27, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ion-select-option", 62);
    \u0275\u0275text(29, "ALL");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "ion-col", 60)(31, "ion-button", 57);
    \u0275\u0275listener("click", function CashRefundRequestPage_div_32_Template_ion_button_click_31_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275element(32, "ion-icon", 63);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "ion-col", 60)(34, "ion-button", 57);
    \u0275\u0275listener("click", function CashRefundRequestPage_div_32_Template_ion_button_click_34_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goLast());
    });
    \u0275\u0275element(35, "ion-icon", 64);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Records : ", ctx_r1.result.length, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Rs. ", ctx_r1.GetTotalByKey("amount"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.page + 1, " of ", ctx_r1.totalNumberofPages, " ");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.recordPerPage);
    \u0275\u0275advance();
    \u0275\u0275property("value", 10);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 0);
  }
}
var _CashRefundRequestPage = class _CashRefundRequestPage {
  constructor() {
    this.api = inject(ApiService);
    this.altService = inject(AlertService);
    this.rawData = [];
    this.filteredData = [];
    this.sortedData = [];
    this.result = [];
    this.showSearchbar = false;
    this.sortDirection = 0;
    this.sortKey = "";
    this.page = 0;
    this.recordPerPage = 20;
    this.totalNumberofPages = 0;
    const dd = /* @__PURE__ */ new Date();
    this.fromDate = dd.toISOString().substring(0, 10) + "T00:00:00";
    this.toDate = dd.toISOString().substring(0, 10) + "T23:59:59";
  }
  onShowClick() {
    this.api.GetCashRefundReport(this.fromDate, this.toDate).subscribe((data) => {
      this.rawData = data;
      this.filteredData = [...this.rawData];
      this.sortDirection = 0;
      this.sort([...this.filteredData]);
    });
  }
  OnMarkAsPaid(orderNumber, mobileNumber) {
    this.api.UpdateCashRefund(orderNumber, mobileNumber).subscribe((data) => {
      this.altService.successToast(data.toString());
      this.onShowClick();
    });
  }
  OnDownload() {
    this.api.DownloadCashRefundReport(this.fromDate, this.toDate).subscribe((data) => {
      this.downloadFile(data, "CashRefundRequest.xlsx");
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
    return this.sortedData.reduce((acc, cur) => acc + cur[col], 0);
  }
  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
    if (!this.showSearchbar) {
      this.GetSearchResult("");
    }
  }
  SearchData(event) {
    const val = event.target.value.toLowerCase();
    this.GetSearchResult(val);
  }
  GetSearchResult(query) {
    if (this.rawData.length > 0) {
      const cols = Object.keys(this.rawData[0]);
      this.filteredData = [...this.rawData].filter((row) => {
        let rowHasRecord = false;
        for (var col of cols) {
          if (row[col].toString().toLowerCase().indexOf(query) !== -1) {
            rowHasRecord = true;
          }
        }
        return rowHasRecord;
      });
      this.sort([...this.filteredData]);
    }
  }
  sortBy(sortBy) {
    this.sortKey = sortBy;
    this.sortDirection++;
    this.sort([...this.filteredData]);
  }
  sort(temp) {
    if (this.sortDirection == 1) {
      this.sortedData = temp.sort((a, b) => {
        const valA = a[this.sortKey];
        const valB = b[this.sortKey];
        if (typeof valA == "number") {
          return valA - valB;
        } else {
          return valA.localeCompare(valB);
        }
      });
    } else if (this.sortDirection == 2) {
      this.sortedData = temp.sort((a, b) => {
        const valA = a[this.sortKey];
        const valB = b[this.sortKey];
        if (typeof valA == "number") {
          return valB - valA;
        } else {
          return valB.localeCompare(valA);
        }
      });
    } else {
      this.sortDirection = 0;
      this.sortKey = "";
      this.sortedData = [...temp];
    }
    this.GetTotalPages();
    this.goFirst();
  }
  nextPage() {
    if (this.page < this.totalNumberofPages - 1) {
      this.page++;
      this.setPageData();
    }
  }
  prePage() {
    if (this.page > 0) {
      this.page--;
      this.setPageData();
    }
  }
  goFirst() {
    this.page = 0;
    this.setPageData();
  }
  goLast() {
    this.page = this.totalNumberofPages - 1;
    this.setPageData();
  }
  setPageData() {
    if (this.recordPerPage == 0) {
      this.result = [...this.sortedData];
    } else {
      const startIndex = this.page * this.recordPerPage;
      this.result = [...this.sortedData].splice(startIndex, this.recordPerPage);
    }
  }
  recordCountChanged() {
    this.page = 0;
    this.GetTotalPages();
    this.setPageData();
  }
  GetTotalPages() {
    if (this.recordPerPage == 0) {
      this.totalNumberofPages = 1;
    } else {
      this.totalNumberofPages = Math.ceil(this.sortedData.length / this.recordPerPage);
    }
  }
};
_CashRefundRequestPage.\u0275fac = function CashRefundRequestPage_Factory(t) {
  return new (t || _CashRefundRequestPage)();
};
_CashRefundRequestPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CashRefundRequestPage, selectors: [["app-cash-refund-request"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 33, vars: 7, consts: [["color", "light"], [1, "table-full"], [1, "ion-justify-content-center", "ion-align-items-center"], ["size", "12", "sizeSm", "2", 1, "ion-text-center"], ["size", "12", "sizeSm", "3", "sizeXl", "2", 1, "ion-text-center"], [1, "ion-align-items-center"], ["size", "3", 1, "ion-text-end"], ["datetime", "fromdate"], [3, "keepContentsMounted"], ["datetime", "todate"], ["expand", "block", 3, "click"], ["class", "ion-justify-content-center ion-align-items-center", 4, "ngIf"], ["class", "table-header", 4, "ngIf"], [1, "table-body"], [1, "ion-justify-content-center"], ["size", "12", "sizeMd", "10", "sizeLg", "8", 1, "ion-no-padding"], ["class", "row-data ion-align-items-center ion-hide-sm-down", 4, "ngFor", "ngForOf"], ["class", "row-data ion-align-items-center ion-hide-sm-up", 4, "ngFor", "ngForOf"], ["class", "table-footer", 4, "ngIf"], ["id", "fromdate", 3, "ngModelChange", "ngModel", "showDefaultButtons"], ["id", "todate", 3, "ngModelChange", "ngModel", "showDefaultButtons"], ["size", "12", "sizeLg", "10", "sizeXl", "8", 1, "ion-no-padding"], [3, "ionInput"], ["slot", "end"], [1, "download-icon-button", 3, "click"], ["slot", "icon-only", "name", "download-outline"], [1, "table-header"], [1, "ion-justify-content-center", "ion-hide-sm-down"], [1, "row-header"], ["sizeSm", "2", 3, "click"], ["name", "arrow-down", 4, "ngIf"], ["name", "arrow-up", 4, "ngIf"], ["sizeSm", "2", 1, "ion-text-center", 3, "click"], ["sizeSm", "1", 1, "ion-text-center", 3, "click"], ["sizeSm", "2"], ["sizeSm", "1"], ["name", "arrow-down"], ["name", "arrow-up"], [1, "row-data", "ion-align-items-center", "ion-hide-sm-down"], ["sizeSm", "2", 1, "ion-text-center"], ["sizeSm", "1", 1, "ion-text-center"], [3, "color"], [3, "click"], ["slot", "icon-only", "name", "checkmark-outline"], [1, "row-data", "ion-align-items-center", "ion-hide-sm-up"], ["size", "4"], [2, "font-size", "0.8rem"], ["size", "4", 1, "ion-text-center", 2, "font-size", "0.8rem"], ["size", "2", 1, "ion-text-center", 2, "font-size", "0.8rem"], ["size", "2", 1, "ion-text-center"], [1, "table-footer"], [1, "row-total"], ["size", "3", 1, "ion-text-center"], ["size", "6", 1, "ion-text-end"], [1, "ion-no-padding"], ["size", "12", 1, "ion-text-center", "ion-no-padding"], ["size", "2", 1, "ion-no-padding", "ion-text-end"], ["fill", "clear", 3, "click"], ["name", "play-back", "slot", "icon-only"], ["name", "chevron-back", "slot", "icon-only"], ["size", "2", 1, "ion-no-padding"], ["interface", "popover", 3, "ngModelChange", "ionChange", "ngModel"], [3, "value"], ["name", "chevron-forward", "slot", "icon-only"], ["name", "play-forward", "slot", "icon-only"]], template: function CashRefundRequestPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "h1");
    \u0275\u0275text(5, " Cash Refund Request ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-col", 4)(7, "ion-row", 5)(8, "ion-col", 6);
    \u0275\u0275text(9, " From ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ion-col");
    \u0275\u0275element(11, "ion-datetime-button", 7);
    \u0275\u0275elementStart(12, "ion-modal", 8);
    \u0275\u0275template(13, CashRefundRequestPage_ng_template_13_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(14, "ion-col", 4)(15, "ion-row", 5)(16, "ion-col", 6);
    \u0275\u0275text(17, " To ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-col");
    \u0275\u0275element(19, "ion-datetime-button", 9);
    \u0275\u0275elementStart(20, "ion-modal", 8);
    \u0275\u0275template(21, CashRefundRequestPage_ng_template_21_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "ion-col", 3)(23, "ion-button", 10);
    \u0275\u0275listener("click", function CashRefundRequestPage_Template_ion_button_click_23_listener() {
      return ctx.onShowClick();
    });
    \u0275\u0275text(24, " SHOW ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(25, CashRefundRequestPage_ion_row_25_Template, 7, 0, "ion-row", 11)(26, CashRefundRequestPage_div_26_Template, 27, 10, "div", 12);
    \u0275\u0275elementStart(27, "div", 13)(28, "ion-row", 14)(29, "ion-col", 15);
    \u0275\u0275template(30, CashRefundRequestPage_ion_row_30_Template, 20, 14, "ion-row", 16)(31, CashRefundRequestPage_ion_row_31_Template, 22, 14, "ion-row", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(32, CashRefundRequestPage_div_32_Template, 36, 9, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(8);
    \u0275\u0275property("keepContentsMounted", true);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.rawData.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.rawData.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.result);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.result);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.rawData.length > 0);
  }
}, dependencies: [IonBadge, IonDatetime, IonModal, IonDatetimeButton, IonButtons, IonIcon, IonSearchbar, IonButton, IonCol, IonRow, IonContent, IonToolbar, CommonModule, NgForOf, NgIf, DatePipe, FormsModule, NgControlStatus, NgModel, IonSelect, IonSelectOption] });
var CashRefundRequestPage = _CashRefundRequestPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CashRefundRequestPage, { className: "CashRefundRequestPage", filePath: "src/app/pages/reports/cash-refund-request/cash-refund-request.page.ts", lineNumber: 15 });
})();
export {
  CashRefundRequestPage
};
