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

// src/app/pages/reports/stock-cleared/stock-cleared.page.ts
function StockClearedPage_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 19);
    \u0275\u0275twoWayListener("ngModelChange", function StockClearedPage_ng_template_15_Template_ion_datetime_ngModelChange_0_listener($event) {
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
function StockClearedPage_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-datetime", 20);
    \u0275\u0275twoWayListener("ngModelChange", function StockClearedPage_ng_template_23_Template_ion_datetime_ngModelChange_0_listener($event) {
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
function StockClearedPage_ion_row_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-row", 2)(1, "ion-col", 21)(2, "ion-toolbar", 0)(3, "ion-searchbar", 22);
    \u0275\u0275listener("ionInput", function StockClearedPage_ion_row_27_Template_ion_searchbar_ionInput_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.SearchData($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "ion-buttons", 23)(5, "ion-button", 24);
    \u0275\u0275listener("click", function StockClearedPage_ion_row_27_Template_ion_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.OnDownload());
    });
    \u0275\u0275element(6, "ion-icon", 25);
    \u0275\u0275elementEnd()()()()();
  }
}
function StockClearedPage_div_28_ion_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 35);
  }
}
function StockClearedPage_div_28_ion_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 36);
  }
}
function StockClearedPage_div_28_ion_icon_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 35);
  }
}
function StockClearedPage_div_28_ion_icon_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 36);
  }
}
function StockClearedPage_div_28_ion_icon_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 35);
  }
}
function StockClearedPage_div_28_ion_icon_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 36);
  }
}
function StockClearedPage_div_28_ion_icon_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 35);
  }
}
function StockClearedPage_div_28_ion_icon_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 36);
  }
}
function StockClearedPage_div_28_ion_icon_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 35);
  }
}
function StockClearedPage_div_28_ion_icon_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 36);
  }
}
function StockClearedPage_div_28_ion_icon_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 35);
  }
}
function StockClearedPage_div_28_ion_icon_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "ion-icon", 36);
  }
}
function StockClearedPage_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "ion-row", 15)(2, "ion-col", 16)(3, "ion-row", 27)(4, "ion-col", 28);
    \u0275\u0275listener("click", function StockClearedPage_div_28_Template_ion_col_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("date"));
    });
    \u0275\u0275text(5, " Date ");
    \u0275\u0275template(6, StockClearedPage_div_28_ion_icon_6_Template, 1, 0, "ion-icon", 29)(7, StockClearedPage_div_28_ion_icon_7_Template, 1, 0, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-col", 31);
    \u0275\u0275listener("click", function StockClearedPage_div_28_Template_ion_col_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("motor"));
    });
    \u0275\u0275elementStart(9, "div", 32);
    \u0275\u0275text(10, " Motor ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 33);
    \u0275\u0275text(12, " M ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, StockClearedPage_div_28_ion_icon_13_Template, 1, 0, "ion-icon", 29)(14, StockClearedPage_div_28_ion_icon_14_Template, 1, 0, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-col", 34);
    \u0275\u0275listener("click", function StockClearedPage_div_28_Template_ion_col_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("product"));
    });
    \u0275\u0275text(16, " Product ");
    \u0275\u0275template(17, StockClearedPage_div_28_ion_icon_17_Template, 1, 0, "ion-icon", 29)(18, StockClearedPage_div_28_ion_icon_18_Template, 1, 0, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ion-col", 28);
    \u0275\u0275listener("click", function StockClearedPage_div_28_Template_ion_col_click_19_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("price"));
    });
    \u0275\u0275text(20, " Price ");
    \u0275\u0275template(21, StockClearedPage_div_28_ion_icon_21_Template, 1, 0, "ion-icon", 29)(22, StockClearedPage_div_28_ion_icon_22_Template, 1, 0, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "ion-col", 31);
    \u0275\u0275listener("click", function StockClearedPage_div_28_Template_ion_col_click_23_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("quantity"));
    });
    \u0275\u0275elementStart(24, "div", 32);
    \u0275\u0275text(25, " Quantity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 33);
    \u0275\u0275text(27, " Q ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, StockClearedPage_div_28_ion_icon_28_Template, 1, 0, "ion-icon", 29)(29, StockClearedPage_div_28_ion_icon_29_Template, 1, 0, "ion-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "ion-col", 28);
    \u0275\u0275listener("click", function StockClearedPage_div_28_Template_ion_col_click_30_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("amount"));
    });
    \u0275\u0275elementStart(31, "div", 32);
    \u0275\u0275text(32, " Amount ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 33);
    \u0275\u0275text(34, " Amt ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, StockClearedPage_div_28_ion_icon_35_Template, 1, 0, "ion-icon", 29)(36, StockClearedPage_div_28_ion_icon_36_Template, 1, 0, "ion-icon", 30);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "date");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "date");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "motor");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "motor");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "product");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "product");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "price");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "price");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "quantity");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "quantity");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 1 && ctx_r1.sortKey == "amount");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.sortDirection == 2 && ctx_r1.sortKey == "amount");
  }
}
function StockClearedPage_ion_row_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-row", 37)(1, "ion-col", 38)(2, "div", 32);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275element(8, "br");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "ion-col", 40);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "ion-col", 41);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ion-col", 42);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "ion-col", 40);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "ion-col", 42);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 8, row_r6.date, "MMM dd, yyyy hh:mm a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 11, row_r6.date, "MMM dd"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 14, row_r6.date, "hh:mm a"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r6.motor, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.product, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.price, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r6.amount, " ");
  }
}
function StockClearedPage_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "ion-row", 15)(2, "ion-col", 16)(3, "ion-row", 44)(4, "ion-col", 45);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "ion-col", 46);
    \u0275\u0275text(7, " TOTAL ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-col", 45);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "ion-row", 47)(11, "ion-col", 48);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "ion-row", 15)(14, "ion-col", 49)(15, "ion-button", 50);
    \u0275\u0275listener("click", function StockClearedPage_div_33_Template_ion_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goFirst());
    });
    \u0275\u0275element(16, "ion-icon", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ion-col", 49)(18, "ion-button", 50);
    \u0275\u0275listener("click", function StockClearedPage_div_33_Template_ion_button_click_18_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.prePage());
    });
    \u0275\u0275element(19, "ion-icon", 52);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "ion-col", 53)(21, "ion-select", 54);
    \u0275\u0275twoWayListener("ngModelChange", function StockClearedPage_div_33_Template_ion_select_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.recordPerPage, $event) || (ctx_r1.recordPerPage = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ionChange", function StockClearedPage_div_33_Template_ion_select_ionChange_21_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.recordCountChanged());
    });
    \u0275\u0275elementStart(22, "ion-select-option", 55);
    \u0275\u0275text(23, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "ion-select-option", 55);
    \u0275\u0275text(25, "20");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "ion-select-option", 55);
    \u0275\u0275text(27, "50");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "ion-select-option", 55);
    \u0275\u0275text(29, "ALL");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "ion-col", 53)(31, "ion-button", 50);
    \u0275\u0275listener("click", function StockClearedPage_div_33_Template_ion_button_click_31_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextPage());
    });
    \u0275\u0275element(32, "ion-icon", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "ion-col", 53)(34, "ion-button", 50);
    \u0275\u0275listener("click", function StockClearedPage_div_33_Template_ion_button_click_34_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goLast());
    });
    \u0275\u0275element(35, "ion-icon", 57);
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
var _StockClearedPage = class _StockClearedPage {
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
    if (this.machineList.selectedId === void 0) {
      this.altService.showAlert("Please select machine", "MISSING");
      return;
    }
    this.api.GetClearedReport(this.machineList.selectedId, this.fromDate, this.toDate).subscribe((data) => {
      this.rawData = data;
      this.filteredData = [...this.rawData];
      this.sortDirection = 0;
      this.sort([...this.filteredData]);
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
_StockClearedPage.\u0275fac = function StockClearedPage_Factory(t) {
  return new (t || _StockClearedPage)();
};
_StockClearedPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockClearedPage, selectors: [["app-stock-cleared"]], viewQuery: function StockClearedPage_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(MachinelistComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.machineList = _t.first);
  }
}, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 34, vars: 6, consts: [["color", "light"], [1, "table-full"], [1, "ion-justify-content-center", "ion-align-items-center"], ["size", "12", "sizeSm", "2", 1, "ion-text-center"], ["type", "vm"], ["size", "12", "sizeSm", "3", "sizeXl", "2", 1, "ion-text-center"], [1, "ion-align-items-center"], ["size", "3", 1, "ion-text-end"], ["datetime", "fromdate"], [3, "keepContentsMounted"], ["datetime", "todate"], ["expand", "block", 3, "click"], ["class", "ion-justify-content-center ion-align-items-center", 4, "ngIf"], ["class", "table-header", 4, "ngIf"], [1, "table-body"], [1, "ion-justify-content-center"], ["size", "12", "sizeMd", "10", "sizeLg", "8", 1, "ion-no-padding"], ["class", "row-data", 4, "ngFor", "ngForOf"], ["class", "table-footer", 4, "ngIf"], ["id", "fromdate", 3, "ngModelChange", "ngModel", "showDefaultButtons"], ["id", "todate", 3, "ngModelChange", "ngModel", "showDefaultButtons"], ["size", "12", "sizeLg", "10", "sizeXl", "8", 1, "ion-no-padding"], [3, "ionInput"], ["slot", "end"], [1, "download-icon-button", 3, "click"], ["slot", "icon-only", "name", "download-outline"], [1, "table-header"], [1, "row-header"], ["size", "2", 1, "ion-text-center", 3, "click"], ["name", "arrow-down", 4, "ngIf"], ["name", "arrow-up", 4, "ngIf"], ["size", "1", 1, "ion-text-center", 3, "click"], [1, "ion-hide-sm-down"], [1, "ion-hide-sm-up"], ["size", "4", 3, "click"], ["name", "arrow-down"], ["name", "arrow-up"], [1, "row-data"], ["size", "2", "sizeSm", "2", 1, "ion-text-center"], [1, "ion-hide-sm-up", 2, "font-size", "0.75rem"], ["size", "1", 1, "ion-text-center"], ["size", "4"], ["size", "2", 1, "ion-text-center"], [1, "table-footer"], [1, "row-total"], ["size", "3", 1, "ion-text-center"], ["size", "6", 1, "ion-text-end"], [1, "ion-no-padding"], ["size", "12", 1, "ion-text-center", "ion-no-padding"], ["size", "2", 1, "ion-no-padding", "ion-text-end"], ["fill", "clear", 3, "click"], ["name", "play-back", "slot", "icon-only"], ["name", "chevron-back", "slot", "icon-only"], ["size", "2", 1, "ion-no-padding"], ["interface", "popover", 3, "ngModelChange", "ionChange", "ngModel"], [3, "value"], ["name", "chevron-forward", "slot", "icon-only"], ["name", "play-forward", "slot", "icon-only"]], template: function StockClearedPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content", 0)(1, "div", 1)(2, "ion-row", 2)(3, "ion-col", 3)(4, "h1");
    \u0275\u0275text(5, " Stock Cleared ");
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
    \u0275\u0275template(15, StockClearedPage_ng_template_15_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "ion-col", 5)(17, "ion-row", 6)(18, "ion-col", 7);
    \u0275\u0275text(19, " To ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "ion-col");
    \u0275\u0275element(21, "ion-datetime-button", 10);
    \u0275\u0275elementStart(22, "ion-modal", 9);
    \u0275\u0275template(23, StockClearedPage_ng_template_23_Template, 1, 2, "ng-template");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "ion-col", 3)(25, "ion-button", 11);
    \u0275\u0275listener("click", function StockClearedPage_Template_ion_button_click_25_listener() {
      return ctx.onShowClick();
    });
    \u0275\u0275text(26, " SHOW ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(27, StockClearedPage_ion_row_27_Template, 7, 0, "ion-row", 12)(28, StockClearedPage_div_28_Template, 37, 12, "div", 13);
    \u0275\u0275elementStart(29, "div", 14)(30, "ion-row", 15)(31, "ion-col", 16);
    \u0275\u0275template(32, StockClearedPage_ion_row_32_Template, 21, 17, "ion-row", 17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(33, StockClearedPage_div_33_Template, 36, 9, "div", 18);
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
    \u0275\u0275property("ngIf", ctx.rawData.length > 0);
  }
}, dependencies: [IonDatetime, IonModal, IonDatetimeButton, IonButtons, IonIcon, IonSearchbar, IonButton, IonCol, IonRow, IonContent, IonToolbar, CommonModule, NgForOf, NgIf, DatePipe, FormsModule, NgControlStatus, NgModel, IonSelect, IonSelectOption, MachinelistComponent] });
var StockClearedPage = _StockClearedPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockClearedPage, { className: "StockClearedPage", filePath: "src/app/pages/reports/stock-cleared/stock-cleared.page.ts", lineNumber: 17 });
})();
export {
  StockClearedPage
};
