import {
  MachineService
} from "./chunk-KZDGHPJW.js";
import {
  IonCard,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonLabel,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar
} from "./chunk-WHRTMT5V.js";
import {
  ApiService
} from "./chunk-ZI2R32SU.js";
import "./chunk-7FRACAAN.js";
import {
  CommonModule,
  FormsModule,
  NgClass,
  NgIf,
  Router,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
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

// src/app/components/cabin-stock/cabin-stock.component.ts
var _c0 = (a0) => ({ "soldout": a0 });
function CabinStockComponent_For_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-col", 2)(1, "ion-card");
    \u0275\u0275element(2, "ion-img", 3);
    \u0275\u0275elementStart(3, "div", 4)(4, "div", 5)(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 6)(8, "div", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 8)(11, "div", 9)(12, "div");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "div", 10);
    \u0275\u0275elementStart(15, "div");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", item_r1.imgPath);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(8, _c0, item_r1.soldOut));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", item_r1.motorNumber, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("hidden", item_r1.product.length == 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", item_r1.product, " - \u20B9", item_r1.price, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r1.stock, "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1.capacity);
  }
}
function CabinStockComponent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-grid", 1)(1, "ion-row");
    \u0275\u0275repeaterCreate(2, CabinStockComponent_For_1_For_3_Template, 17, 10, "ion-col", 2, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275styleMap("--ion-grid-columns: " + row_r2.items.length);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(row_r2.items);
  }
}
var _CabinStockComponent = class _CabinStockComponent {
  constructor() {
    this.stocks = { cabin1: [], cabin2: [] };
    this.cabin = [];
  }
};
_CabinStockComponent.\u0275fac = function CabinStockComponent_Factory(t) {
  return new (t || _CabinStockComponent)();
};
_CabinStockComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CabinStockComponent, selectors: [["app-cabin-stock"]], inputs: { stocks: "stocks", cabin: "cabin" }, standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 2, vars: 0, consts: [[1, "item-rows", 3, "style"], [1, "item-rows"], ["size", "1"], [3, "src"], [1, "item-container", 3, "ngClass"], [1, "item-number"], [1, "item-name"], [3, "hidden"], [1, "item-stock"], [1, "stock-c"], [1, "barline"]], template: function CabinStockComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, CabinStockComponent_For_1_Template, 4, 2, "ion-grid", 0, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    \u0275\u0275repeater(ctx.cabin);
  }
}, dependencies: [IonImg, IonCard, IonCol, IonRow, IonGrid, CommonModule, NgClass], styles: ["\n\n.item-rows[_ngcontent-%COMP%] {\n  padding: 0px;\n  --ion-grid-width: 1200px;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%] {\n  height: 150px;\n  margin: 5px;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]   ion-progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  display: block;\n  margin: 10px 10px 5px 5px;\n  text-align: center;\n  height: 40px;\n  overflow: hidden;\n  font-size: 0.8rem;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  height: 60px;\n  margin: 5px;\n  overflow: hidden;\n  color: var(--ion-text-color);\n  border-radius: 5px;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-number[_ngcontent-%COMP%] {\n  min-width: 40px;\n  text-align: center;\n  align-items: center;\n  font-size: 1.2rem;\n  color: #ffffff;\n  background-color: black;\n  border: 1px solid black;\n  display: flex;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-number[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  align-items: center;\n  text-align: center;\n  border: 1px solid black;\n  height: 100%;\n  vertical-align: middle;\n  display: flex;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-name[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-stock[_ngcontent-%COMP%] {\n  min-width: 40px;\n  text-align: center;\n  align-items: center;\n  font-size: 1.2rem;\n  font-weight: bold;\n  background-color: green;\n  color: #ffffff;\n  display: flex;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-stock[_ngcontent-%COMP%]   .stock-c[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.item-rows[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .item-stock[_ngcontent-%COMP%]   .barline[_ngcontent-%COMP%] {\n  height: 2px;\n  margin-left: 8px;\n  margin-right: 8px;\n  background-color: white;\n}\n.normal[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: var(--ion-text-color);\n}\n.soldout[_ngcontent-%COMP%] {\n  background-color: red;\n  color: #ffffff !important;\n}"] });
var CabinStockComponent = _CabinStockComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CabinStockComponent, { className: "CabinStockComponent", filePath: "src/app/components/cabin-stock/cabin-stock.component.ts", lineNumber: 14 });
})();

// src/app/pages/machines/stock/stock.page.ts
function StockPage_ion_segment_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-segment", 5);
    \u0275\u0275listener("ionChange", function StockPage_ion_segment_4_Template_ion_segment_ionChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.CabinChanged($event));
    });
    \u0275\u0275elementStart(1, "ion-segment-button", 6)(2, "ion-label");
    \u0275\u0275text(3, "Cabin 1");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "ion-segment-button", 7)(5, "ion-label");
    \u0275\u0275text(6, "Cabin 2");
    \u0275\u0275elementEnd()()();
  }
}
var _StockPage = class _StockPage {
  constructor() {
    this.api = inject(ApiService);
    this.machineService = inject(MachineService);
    this.router = inject(Router);
    this.machineId = "";
    this.stocks = { cabin1: [], cabin2: [] };
    this.currentCabin = [];
    let URL = this.router.url;
    let URL_AS_LIST = URL.split("/");
    this.machineId = URL_AS_LIST[2];
    this.machineService.GetMachine(this.machineId).then((result) => {
      if (result.id != this.machineId) {
        this.router.navigate(["dashboard"]);
      }
      this.machine = result;
      this.GetCurrentStocks();
    });
  }
  GetCurrentStocks() {
    this.api.GetVMStocks(this.machineId).subscribe((result) => {
      this.stocks = result;
      this.currentCabin = this.stocks.cabin1;
    });
  }
  CabinChanged(event) {
    if (event.detail.value === "cabin1") {
      this.currentCabin = this.stocks.cabin1;
    }
    if (event.detail.value === "cabin2") {
      this.currentCabin = this.stocks.cabin2;
    }
  }
};
_StockPage.\u0275fac = function StockPage_Factory(t) {
  return new (t || _StockPage)();
};
_StockPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StockPage, selectors: [["app-stock"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 9, vars: 4, consts: [["value", "cabin1", "mode", "ios", "slot", "end", 3, "ionChange", 4, "ngIf"], ["color", "medium"], [1, "scrollContainer"], [1, "gridContainer"], [3, "cabin"], ["value", "cabin1", "mode", "ios", "slot", "end", 3, "ionChange"], ["value", "cabin1"], ["value", "cabin2"]], template: function StockPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-header")(1, "ion-toolbar")(2, "ion-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, StockPage_ion_segment_4_Template, 7, 0, "ion-segment", 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "ion-content", 1)(6, "div", 2)(7, "div", 3);
    \u0275\u0275element(8, "app-cabin-stock", 4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx.machine == null ? null : ctx.machine.number, ".", ctx.machine == null ? null : ctx.machine.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.stocks.cabin2.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("cabin", ctx.currentCabin);
  }
}, dependencies: [IonSegmentButton, IonSegment, CabinStockComponent, IonLabel, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, NgIf, FormsModule], styles: ["\n\n.scrollContainer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto !important;\n}\n.gridContainer[_ngcontent-%COMP%] {\n  min-width: 1200px;\n}\nion-segment[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}"] });
var StockPage = _StockPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StockPage, { className: "StockPage", filePath: "src/app/pages/machines/stock/stock.page.ts", lineNumber: 19 });
})();
export {
  StockPage
};
