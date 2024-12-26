import {
  ApiService
} from "./chunk-ZI2R32SU.js";
import {
  AlertService,
  BooleanValueAccessorDirective,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonText,
  IonToggle,
  IonicModule,
  environment
} from "./chunk-7FRACAAN.js";
import {
  CommonModule,
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
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
import "./chunk-3JGBPQET.js";

// src/app/pages/stocks/stocks.page.ts
var _forTrack0 = ($index, $item) => $item.categoryId;
var _forTrack1 = ($index, $item) => $item.id;
function StocksPage_For_7_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "ion-col", 4)(1, "ion-card");
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275elementStart(3, "ion-card-header")(4, "ion-card-title");
    \u0275\u0275text(5);
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "ion-card-content")(9, "div")(10, "label");
    \u0275\u0275text(11, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function StocksPage_For_7_For_4_Template_input_ngModelChange_12_listener($event) {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(product_r2.stock, $event) || (product_r2.stock = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keypress", function StocksPage_For_7_For_4_Template_input_keypress_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.keyPressNumbers($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label");
    \u0275\u0275text(15, " Availability ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "ion-toggle", 7);
    \u0275\u0275twoWayListener("ngModelChange", function StocksPage_For_7_For_4_Template_ion_toggle_ngModelChange_16_listener($event) {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      \u0275\u0275twoWayBindingSet(product_r2.isAvailable, $event) || (product_r2.isAvailable = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "ion-button", 8);
    \u0275\u0275listener("click", function StocksPage_For_7_For_4_Template_ion_button_click_17_listener() {
      const product_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.UpdateStock(product_r2.id, product_r2.isAvailable, product_r2.stock));
    });
    \u0275\u0275text(18, "Update");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("alt", product_r2.name)("src", product_r2.imgPath, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", product_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" \u20B9", product_r2.price, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !product_r2.isAvailable);
    \u0275\u0275twoWayProperty("ngModel", product_r2.stock);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", product_r2.isAvailable);
  }
}
function StocksPage_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "ion-row");
    \u0275\u0275repeaterCreate(3, StocksPage_For_7_For_4_Template, 19, 7, "ion-col", 4, _forTrack1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r4.categoryName);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(category_r4.products);
  }
}
var _StocksPage = class _StocksPage {
  constructor(api, alertService) {
    this.api = api;
    this.alertService = alertService;
    this.categoryStocks = [];
    this.GetStocks();
  }
  GetStocks() {
    this.api.GetCategoryWiseStocksAsync().subscribe((data) => {
      data.forEach((c) => c.products.forEach((p) => p.imgPath = `${environment.apiURL}/${p.imgPath}`));
      this.categoryStocks = data;
    });
  }
  UpdateStock(ProductId, IsAvailable, Stock) {
    const stockDto = {
      ProductId,
      IsAvailable,
      Stock: Number.parseInt(Stock)
    };
    this.api.UpdateStock(stockDto).subscribe((data) => {
      this.alertService.successToast(data.message);
    });
  }
  AvaliableChange(isAvailable) {
    console.log(isAvailable);
  }
  keyPressNumbers(event) {
    var charCode = event.which ? event.which : event.keyCode;
    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }
};
_StocksPage.\u0275fac = function StocksPage_Factory(t) {
  return new (t || _StocksPage)(\u0275\u0275directiveInject(ApiService), \u0275\u0275directiveInject(AlertService));
};
_StocksPage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StocksPage, selectors: [["app-stocks"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 8, vars: 0, consts: [[1, "ion-margin-top"], ["size", "12", 1, "ion-text-center"], [1, "title"], [1, "stocks"], ["size", "12", "sizeMd", "3", "sizeLg", "2"], [3, "alt", "src"], ["type", "text", 3, "ngModelChange", "keypress", "disabled", "ngModel"], ["color", "primary", 3, "ngModelChange", "ngModel"], ["expand", "block", 3, "click"]], template: function StocksPage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-row", 0)(2, "ion-col", 1)(3, "ion-text", 2);
    \u0275\u0275text(4, " Product Stocks ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "ion-grid", 3);
    \u0275\u0275repeaterCreate(6, StocksPage_For_7_Template, 5, 1, null, null, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx.categoryStocks);
  }
}, dependencies: [IonicModule, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonRow, IonText, IonToggle, BooleanValueAccessorDirective, CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.stocks[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.stocks[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 12rem;\n  object-fit: fill;\n}\n.stocks[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 100;\n  opacity: 0.6;\n}\n.stocks[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 10px;\n}\n.stocks[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 80px;\n}\n.stocks[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  height: 35px;\n  width: calc(100% - 85px);\n  padding-left: 10px;\n}\n.stocks[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]:disabled {\n  border-color: red;\n}"] });
var StocksPage = _StocksPage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StocksPage, { className: "StocksPage", filePath: "src/app/pages/stocks/stocks.page.ts", lineNumber: 17 });
})();
export {
  StocksPage
};
