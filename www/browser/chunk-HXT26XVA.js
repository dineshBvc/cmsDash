import {
  MachinelistComponent
} from "./chunk-LI2FELL7.js";
import "./chunk-KZDGHPJW.js";
import {
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
  ɵɵtextInterpolate3,
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

// src/app/pages/reports/sales/sales.page.ts
function SalesPage_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 19);
    \u0275\u0275twoWayListener("ngModelChange", function SalesPage_ng_template_15_Template_ion_datetime_ngModelChange_0_listener($event) {
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
function SalesPage_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 20);
    \u0275\u0275twoWayListener("ngModelChange", function SalesPage_ng_template_23_Template_ion_datetime_ngModelChange_0_listener($event) {
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
function SalesPage_ion_row_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 15)(2, "ion-toolbar", 0)(3, "ion-searchbar", 21);
    \u0275\u0275listener("ionInput", function SalesPage_ion_row_27_Template_ion_searchbar_ionInput_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.SearchData($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 22)(5, "ion-button", 23);
    \u0275\u0275listener("click", function SalesPage_ion_row_27_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.OnDownload());
    });
    \u0275\u0275element(6, "ion-icon", 24);
    \u0275\u0275elementEnd()()()()();
  }
}
function SalesPage_div_28_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 34);
  }
}
function SalesPage_div_28_ion_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 35);
  }
}
function SalesPage_div_28_ion_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 34);
  }
}
function SalesPage_div_28_ion_icon_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 35);
  }
}
function SalesPage_div_28_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 34);
  }
}
function SalesPage_div_28_ion_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 35);
  }
}
function SalesPage_div_28_ion_icon_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 34);
  }
}
function SalesPage_div_28_ion_icon_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 35);
  }
}
function SalesPage_div_28_ion_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 34);
  }
}
function SalesPage_div_28_ion_icon_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 35);
  }
}
function SalesPage_div_28_ion_icon_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 34);
  }
}
function SalesPage_div_28_ion_icon_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 35);
  }
}
function SalesPage_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "ion-row", 26)(2, "ion-col", 15)(3, "ion-row", 27)(4, "ion-col", 28);
    \u0275\u0275listener("click", function SalesPage_div_28_Template_ion_col_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("orderNumber"));
    });
    \u0275\u0275text(5, " Order ");
    \u0275\u0275template(6, SalesPage_div_28_ion_icon_6_Template, 1, 0, "ion-icon", 29)(7, SalesPage_div_28_ion_icon_7_Template, 1, 0, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-col", 31);
    \u0275\u0275listener("click", function SalesPage_div_28_Template_ion_col_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("orderDate"));
    });
    \u0275\u0275text(9, " Date ");
    \u0275\u0275template(10, SalesPage_div_28_ion_icon_10_Template, 1, 0, "ion-icon", 29)(11, SalesPage_div_28_ion_icon_11_Template, 1, 0, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-col", 31);
    \u0275\u0275listener("click", function SalesPage_div_28_Template_ion_col_click_12_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("paymentType"));
    });
    \u0275\u0275text(13, " Type ");
    \u0275\u0275template(14, SalesPage_div_28_ion_icon_14_Template, 1, 0, "ion-icon", 29)(15, SalesPage_div_28_ion_icon_15_Template, 1, 0, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ion-col", 32);
    \u0275\u0275listener("click", function SalesPage_div_28_Template_ion_col_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("amount"));
    });
    \u0275\u0275text(17, " Amount ");
    \u0275\u0275template(18, SalesPage_div_28_ion_icon_18_Template, 1, 0, "ion-icon", 29)(19, SalesPage_div_28_ion_icon_19_Template, 1, 0, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-col", 32);
    \u0275\u0275listener("click", function SalesPage_div_28_Template_ion_col_click_20_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("paid"));
    });
    \u0275\u0275text(21, " Paid ");
    \u0275\u0275template(22, SalesPage_div_28_ion_icon_22_Template, 1, 0, "ion-icon", 29)(23, SalesPage_div_28_ion_icon_23_Template, 1, 0, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-col", 32);
    \u0275\u0275listener("click", function SalesPage_div_28_Template_ion_col_click_24_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("refund"));
    });
    \u0275\u0275text(25, " Refund ");
    \u0275\u0275template(26, SalesPage_div_28_ion_icon_26_Template, 1, 0, "ion-icon", 29)(27, SalesPage_div_28_ion_icon_27_Template, 1, 0, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ion-col", 33);
    \u0275\u0275text(29, " Items ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "orderNumber");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "orderNumber");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "orderDate");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "orderDate");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "paymentType");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "paymentType");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "amount");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "amount");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "paid");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "paid");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "refund");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "refund");
  }
}
function SalesPage_ion_row_32_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6.userId, " ");
  }
}
function SalesPage_ion_row_32_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r7.productName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", item_r7.price, " x ", item_r7.quantity, " = ", item_r7.amount, "");
  }
}
function SalesPage_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 36)(1, "ion-col", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ion-col", 38);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "ion-col", 38);
    \u0275\u0275text(10);
    \u0275\u0275template(11, SalesPage_ion_row_32_div_11_Template, 2, 1, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-col", 40);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "ion-col", 40);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ion-col", 40);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-col", 33);
    \u0275\u0275template(19, SalesPage_ion_row_32_div_19_Template, 5, 4, "div", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.orderNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 9, row_r6.orderDate, "MMM dd, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 12, row_r6.orderDate, "hh:mm a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r6.paymentType, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r6.paymentType === "ACCOUNT");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.amount, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.paid, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.refund, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", row_r6.orderItems);
  }
}
function SalesPage_ion_row_33_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275element(2, "br");
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r8.productName, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", item_r8.price, " x ", item_r8.quantity, " = ", item_r8.amount, "");
  }
}
function SalesPage_ion_row_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 43)(1, "ion-col", 44);
    \u0275\u0275text(2);
    \u0275\u0275element(3, "br");
    \u0275\u0275elementStart(4, "div", 42);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275element(7, "br");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275element(10, "br");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-col", 45);
    \u0275\u0275text(12);
    \u0275\u0275element(13, "br");
    \u0275\u0275text(14);
    \u0275\u0275element(15, "br");
    \u0275\u0275text(16);
    \u0275\u0275element(17, "br");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "ion-col", 46);
    \u0275\u0275template(19, SalesPage_ion_row_33_div_19_Template, 5, 4, "div", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r9.orderNumber, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 8, row_r9.orderDate, "MMM dd, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 11, row_r9.orderDate, "hh:mm a"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", row_r9.paymentType, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" A - ", row_r9.amount, "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" P - ", row_r9.paid, " R - ", row_r9.refund, "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", row_r9.orderItems);
  }
}
function SalesPage_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "ion-row", 14)(2, "ion-col", 15)(3, "ion-row", 48)(4, "ion-col", 49);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-col", 50);
    \u0275\u0275text(7, " TOTAL ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-col", 51);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-row", 52)(11, "ion-col", 53);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-row", 14)(14, "ion-col", 54)(15, "ion-button", 55);
    \u0275\u0275listener("click", function SalesPage_div_34_Template_ion_button_click_15_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goFirst());
    });
    \u0275\u0275element(16, "ion-icon", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ion-col", 54)(18, "ion-button", 55);
    \u0275\u0275listener("click", function SalesPage_div_34_Template_ion_button_click_18_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prePage());
    });
    \u0275\u0275element(19, "ion-icon", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ion-col", 58)(21, "ion-select", 59);
    \u0275\u0275twoWayListener("ngModelChange", function SalesPage_div_34_Template_ion_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.recordPerPage, $event) || (ctx_r1.recordPerPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function SalesPage_div_34_Template_ion_select_ionChange_21_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.recordCountChanged());
    });
    \u0275\u0275elementStart(22, "ion-select-option", 60);
    \u0275\u0275text(23, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-select-option", 60);
    \u0275\u0275text(25, "15");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ion-select-option", 60);
    \u0275\u0275text(27, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ion-select-option", 60);
    \u0275\u0275text(29, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-select-option", 60);
    \u0275\u0275text(31, "ALL");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "ion-col", 58)(33, "ion-button", 55);
    \u0275\u0275listener("click", function SalesPage_div_34_Template_ion_button_click_33_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275element(34, "ion-icon", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "ion-col", 58)(36, "ion-button", 55);
    \u0275\u0275listener("click", function SalesPage_div_34_Template_ion_button_click_36_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goLast());
    });
    \u0275\u0275element(37, "ion-icon", 62);
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
    \u0275\u0275property("value", 15);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 20);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 50);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 0);
  }
}
var _SalesPage = class _SalesPage {
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
    this.recordPerPage = 15;
    this.totalNumberofPages = 0;
    const dd = /* @__PURE__ */ new Date();
    this.fromDate = dd.toISOString().substring(0, 10) + "T00:00:00";
    this.toDate = dd.toISOString().substring(0, 10) + "T23:59:59";
  }
  onShowClick() {
    if (this.machineList.selectedId === void 0) {
      this.altService.showAlert("Please select machine", "MISSING");
      return;
    }
    this.api.GetSalesReport(this.machineList.selectedId, this.fromDate, this.toDate).subscribe((data) => {
      this.rawData = data;
      this.filteredData = [...this.rawData];
      this.sortDirection = 0;
      this.sort([...this.filteredData]);
    });
  }
  GetTotalByKey(col) {
    return this.sortedData.reduce((acc, cur) => acc + cur[col], 0);
  }
  OnDownload() {
    if (this.machineList.selectedId === void 0) {
      this.altService.showAlert("Please select machine", "MISSING");
      return;
    }
    this.api.DownloadSalesReport(this.machineList.selectedId, this.fromDate, this.toDate).subscribe((data) => {
      this.downloadFile(data, "SalesReport.xlsx");
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
_SalesPage.\u0275fac = function SalesPage_Factory(t) {
  return new (t || _SalesPage)();
};
_SalesPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SalesPage, selectors: [["app-sales"]], viewQuery: function SalesPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MachinelistComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.machineList = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 35, vars: 7, consts: [["color", "light"], [1, "table-full"], [1, "ion-justify-content-center", "ion-align-items-center"], ["size", "12", "sizeSm", "2", 1, "ion-text-center"], ["size", "12", "sizeSm", "3", "sizeXl", "2", 1, "ion-text-center"], [1, "ion-align-items-center"], ["size", "3", 1, "ion-text-end"], ["datetime", "fromdate"], [3, "keepContentsMounted"], ["datetime", "todate"], ["expand", "block", 3, "click"], ["class", "ion-justify-content-center ion-align-items-center", 4, "ngIf"], ["class", "table-header", 4, "ngIf"], [1, "table-body"], [1, "ion-justify-content-center"], ["size", "12", "sizeLg", "10", "sizeXl", "8", 1, "ion-no-padding"], ["class", "row-data ion-align-items-center ion-hide-sm-down", 4, "ngFor", "ngForOf"], ["class", "row-data ion-align-items-center ion-hide-sm-up", 4, "ngFor", "ngForOf"], ["class", "table-footer", 4, "ngIf"], ["id", "fromdate", 3, "ngModelChange", "ngModel", "showDefaultButtons"], ["id", "todate", 3, "ngModelChange", "ngModel", "showDefaultButtons"], [3, "ionInput"], ["slot", "end"], [1, "download-icon-button", 3, "click"], ["slot", "icon-only", "name", "download-outline"], [1, "table-header"], [1, "ion-justify-content-center", "ion-hide-sm-down"], [1, "row-header"], ["sizeSm", "2", 3, "click"], ["name", "arrow-down", 4, "ngIf"], ["name", "arrow-up", 4, "ngIf"], ["sizeSm", "2", 1, "ion-text-center", 3, "click"], ["sizeSm", "1", 1, "ion-text-center", 3, "click"], ["sizeSm", "3"], ["name", "arrow-down"], ["name", "arrow-up"], [1, "row-data", "ion-align-items-center", "ion-hide-sm-down"], ["sizeSm", "2"], ["sizeSm", "2", 1, "ion-text-center"], ["style", "font-size: 0.8rem;", 4, "ngIf"], ["sizeSm", "1", 1, "ion-text-center"], [4, "ngFor", "ngForOf"], [2, "font-size", "0.8rem"], [1, "row-data", "ion-align-items-center", "ion-hide-sm-up"], ["size", "4"], ["size", "3", 1, "ion-text-center", 2, "font-size", "0.8rem"], ["size", "5", 1, "ion-text-center", 2, "font-size", "0.8rem"], [1, "table-footer"], [1, "row-total", "ion-justify-content-center"], ["size", "3", 1, "ion-text-center"], ["size", "6", 1, "ion-text-end"], ["size", "3", 1, "ion-text-start"], [1, "ion-no-padding"], ["size", "12", 1, "ion-text-center", "ion-no-padding"], ["size", "2", 1, "ion-no-padding", "ion-text-end"], ["fill", "clear", 3, "click"], ["name", "play-back", "slot", "icon-only"], ["name", "chevron-back", "slot", "icon-only"], ["size", "2", 1, "ion-no-padding"], ["interface", "popover", 3, "ngModelChange", "ionChange", "ngModel"], [3, "value"], ["name", "chevron-forward", "slot", "icon-only"], ["name", "play-forward", "slot", "icon-only"]], template: function SalesPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "h1");
    \u0275\u0275text(5, " Sales ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "ion-col", 3);
    \u0275\u0275element(7, "app-machinelist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-col", 4)(9, "ion-row", 5)(10, "ion-col", 6);
    \u0275\u0275text(11, " From ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "ion-col");
    \u0275\u0275element(13, "ion-datetime-button", 7);
    \u0275\u0275elementStart(14, "ion-modal", 8);
    \u0275\u0275template(15, SalesPage_ng_template_15_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "ion-col", 4)(17, "ion-row", 5)(18, "ion-col", 6);
    \u0275\u0275text(19, " To ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-col");
    \u0275\u0275element(21, "ion-datetime-button", 9);
    \u0275\u0275elementStart(22, "ion-modal", 8);
    \u0275\u0275template(23, SalesPage_ng_template_23_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "ion-col", 3)(25, "ion-button", 10);
    \u0275\u0275listener("click", function SalesPage_Template_ion_button_click_25_listener() {
      return ctx.onShowClick();
    });
    \u0275\u0275text(26, " SHOW ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, SalesPage_ion_row_27_Template, 7, 0, "ion-row", 11)(28, SalesPage_div_28_Template, 30, 12, "div", 12);
    \u0275\u0275elementStart(29, "div", 13)(30, "ion-row", 14)(31, "ion-col", 15);
    \u0275\u0275template(32, SalesPage_ion_row_32_Template, 20, 15, "ion-row", 16)(33, SalesPage_ion_row_33_Template, 20, 14, "ion-row", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(34, SalesPage_div_34_Template, 38, 10, "div", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(14);
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
}, dependencies: [IonDatetime, IonModal, IonDatetimeButton, CommonModule, NgForOf, NgIf, DatePipe, FormsModule, NgControlStatus, NgModel, IonContent, IonToolbar, IonRow, IonCol, IonButton, IonSearchbar, IonIcon, IonButtons, IonSelect, IonSelectOption, MachinelistComponent] });
var SalesPage = _SalesPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SalesPage, { className: "SalesPage", filePath: "src/app/pages/reports/sales/sales.page.ts", lineNumber: 16 });
})();
export {
  SalesPage
};
