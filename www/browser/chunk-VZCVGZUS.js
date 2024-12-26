import {
  ChartComponent,
  ChartGenerator,
  NgApexchartsModule
} from "./chunk-27XSWAYT.js";
import {
  MachineService
} from "./chunk-KZDGHPJW.js";
import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonRow,
  IonThumbnail
} from "./chunk-WHRTMT5V.js";
import {
  ApiService
} from "./chunk-ZI2R32SU.js";
import "./chunk-7FRACAAN.js";
import {
  CommonModule,
  DatePipe,
  FormsModule,
  Router,
  inject,
  ɵsetClassDebugInfo,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
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

// src/app/pages/machines/home/home.page.ts
function HomePage_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Last seen : ", \u0275\u0275pipeBind2(2, 1, ctx_r0.machine == null ? null : ctx_r0.machine.updatedOn, "MMM d, y, h:mm a"), " ");
  }
}
function HomePage_Conditional_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 26, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("series", ctx_r0.DailyChartInput.series)("chart", ctx_r0.DailyChartInput.chart)("colors", ctx_r0.DailyChartInput.colors)("dataLabels", ctx_r0.DailyChartInput.dataLabels)("grid", ctx_r0.DailyChartInput.grid)("legend", ctx_r0.DailyChartInput.legend)("plotOptions", ctx_r0.DailyChartInput.plotOptions)("title", ctx_r0.DailyChartInput.title)("xaxis", ctx_r0.DailyChartInput.xaxis);
  }
}
function HomePage_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 27, 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("series", ctx_r0.MonthlyChartInput.series)("chart", ctx_r0.MonthlyChartInput.chart)("colors", ctx_r0.MonthlyChartInput.colors)("dataLabels", ctx_r0.MonthlyChartInput.dataLabels)("grid", ctx_r0.MonthlyChartInput.grid)("legend", ctx_r0.MonthlyChartInput.legend)("title", ctx_r0.MonthlyChartInput.title)("xaxis", ctx_r0.MonthlyChartInput.xaxis);
  }
}
function HomePage_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "apx-chart", 28);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("series", ctx_r0.ProductChart.series)("chart", ctx_r0.ProductChart.chart)("labels", ctx_r0.ProductChart.labels)("title", ctx_r0.ProductChart.title)("legend", ctx_r0.ProductChart.legend)("responsive", ctx_r0.ProductChart.responsive);
  }
}
var _HomePage = class _HomePage {
  constructor() {
    this.router = inject(Router);
    this.api = inject(ApiService);
    this.machineService = inject(MachineService);
    this.sales = { month: { total: 0, account: 0, card: 0, cash: 0, upi: 0 }, today: { account: 0, card: 0, cash: 0, total: 0, upi: 0 } };
    this.machineId = "";
    this.chartGen = new ChartGenerator();
    this.date = /* @__PURE__ */ new Date();
    let URL = this.router.url;
    let URL_AS_LIST = URL.split("/");
    this.machineId = URL_AS_LIST[2];
    this.machineService.GetMachine(this.machineId).then((result) => {
      if (result.id != this.machineId) {
        this.router.navigate(["dashboard"]);
      }
      this.machine = result;
      this.GetSalesLegends(this.machineId);
      this.GetWeeklySales(this.machineId);
      this.GetMonthlyWiseSales(this.machineId);
      this.GetProductSales(this.machineId);
    });
  }
  GetSalesLegends(machineId) {
    this.api.GetSalesLegends(machineId).subscribe((result) => this.sales = result);
  }
  GetWeeklySales(machineId) {
    this.api.GetWeeklySales(machineId).subscribe((result) => {
      var data = result.map((x) => x.total);
      var labels = result.map((x) => x.day);
      this.DailyChartInput = this.chartGen.GetDailySalesChartOptions(data, labels);
    });
  }
  GetMonthlyWiseSales(machineId) {
    this.api.GetMonthWiseSales(machineId).subscribe((result) => {
      var data = result.map((x) => x.total);
      var labels = result.map((x) => x.month);
      this.MonthlyChartInput = this.chartGen.GetMonthlySalesChartOptions(data, labels);
    });
  }
  GetProductSales(machineId) {
    this.api.GetProductSalesForChart(machineId).subscribe((result) => {
      var data = result.map((x) => x.quantity);
      var labels = result.map((x) => x.name);
      this.ProductChart = this.chartGen.GetProductSalesChart(data, labels);
    });
  }
};
_HomePage.\u0275fac = function HomePage_Factory(t) {
  return new (t || _HomePage)();
};
_HomePage.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomePage, selectors: [["app-home"]], standalone: true, features: [\u0275\u0275StandaloneFeature], decls: 95, vars: 19, consts: [["DailyChart", ""], ["monthlyChart", ""], ["size", "12", 1, "machine"], ["lines", "none"], ["slot", "start"], ["src", "/assets/images/VM.jpg"], [1, "status"], [3, "color"], [1, "location"], [1, "salesCard"], ["sizeXl", "1", "sizeMd", "1", "sizeXs", "3"], ["color", "danger"], ["name", "calendar-outline"], [1, "saledata"], ["color", "warning"], ["name", "qr-code-outline"], ["color", "success"], ["name", "wallet-outline"], ["color", "tertiary"], ["name", "cash-outline"], ["color", "primary"], ["name", "card-outline"], ["color", "secondary"], ["name", "today-outline"], [1, "saleschart"], ["size", "12", "sizeLg", "4"], [3, "series", "chart", "colors", "dataLabels", "grid", "legend", "plotOptions", "title", "xaxis"], [3, "series", "chart", "colors", "dataLabels", "grid", "legend", "title", "xaxis"], [3, "series", "chart", "labels", "title", "legend", "responsive"]], template: function HomePage_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ion-content")(1, "ion-row")(2, "ion-col", 2)(3, "ion-card")(4, "ion-card-header")(5, "ion-item", 3)(6, "ion-thumbnail", 4);
    \u0275\u0275element(7, "img", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ion-label")(9, "ion-card-title");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 6)(12, "ion-badge", 7);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, HomePage_Conditional_14_Template, 3, 4, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 8);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(17, "ion-grid", 9)(18, "ion-row")(19, "ion-col", 10)(20, "ion-card", 11);
    \u0275\u0275element(21, "ion-icon", 12);
    \u0275\u0275elementStart(22, "div", 13)(23, "ion-label")(24, "span");
    \u0275\u0275text(25, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementStart(27, "p")(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " TOTAL ");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(32, "ion-col", 10)(33, "ion-card", 14);
    \u0275\u0275element(34, "ion-icon", 15);
    \u0275\u0275elementStart(35, "div", 13)(36, "ion-label")(37, "span");
    \u0275\u0275text(38, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(39);
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275text(41, "UPI");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(42, "ion-col", 10)(43, "ion-card", 16);
    \u0275\u0275element(44, "ion-icon", 17);
    \u0275\u0275elementStart(45, "div", 13)(46, "ion-label")(47, "span");
    \u0275\u0275text(48, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(49);
    \u0275\u0275elementStart(50, "p");
    \u0275\u0275text(51, "ACCOUNT");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(52, "ion-col", 10)(53, "ion-card", 18);
    \u0275\u0275element(54, "ion-icon", 19);
    \u0275\u0275elementStart(55, "div", 13)(56, "ion-label")(57, "span");
    \u0275\u0275text(58, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(59);
    \u0275\u0275elementStart(60, "p");
    \u0275\u0275text(61, "CASH");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(62, "ion-col", 10)(63, "ion-card", 20);
    \u0275\u0275element(64, "ion-icon", 21);
    \u0275\u0275elementStart(65, "div", 13)(66, "ion-label")(67, "span");
    \u0275\u0275text(68, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69);
    \u0275\u0275elementStart(70, "p");
    \u0275\u0275text(71, "CARD");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(72, "ion-col", 10)(73, "ion-card", 22);
    \u0275\u0275element(74, "ion-icon", 23);
    \u0275\u0275elementStart(75, "div", 13)(76, "ion-label")(77, "span");
    \u0275\u0275text(78, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79);
    \u0275\u0275elementStart(80, "p");
    \u0275\u0275text(81, "TODAY");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(82, "ion-row", 24)(83, "ion-col", 25)(84, "ion-card")(85, "ion-card-content");
    \u0275\u0275template(86, HomePage_Conditional_86_Template, 2, 9, "apx-chart", 26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "ion-col", 25)(88, "ion-card")(89, "ion-card-content");
    \u0275\u0275template(90, HomePage_Conditional_90_Template, 2, 8, "apx-chart", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(91, "ion-col", 25)(92, "ion-card")(93, "ion-card-content");
    \u0275\u0275template(94, HomePage_Conditional_94_Template, 1, 6, "apx-chart", 28);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate2(" ", ctx.machine == null ? null : ctx.machine.number, ".", ctx.machine == null ? null : ctx.machine.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", (ctx.machine == null ? null : ctx.machine.status == null ? null : ctx.machine.status.toLowerCase()) == "online" ? "success" : "warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx.machine == null ? null : ctx.machine.status, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(14, (ctx.machine == null ? null : ctx.machine.status == null ? null : ctx.machine.status.toLowerCase()) == "offline" ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.machine == null ? null : ctx.machine.location, " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx.sales.month.total, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind2(30, 16, ctx.date, "MMM-yy"), ")");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx.sales.month.upi, " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx.sales.month.account, " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx.sales.month.cash, " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx.sales.month.card, " ");
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", ctx.sales.today.total, " ");
    \u0275\u0275advance(7);
    \u0275\u0275conditional(86, ctx.DailyChartInput != void 0 ? 86 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(90, ctx.MonthlyChartInput != void 0 ? 90 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(94, ctx.ProductChart != void 0 ? 94 : -1);
  }
}, dependencies: [NgApexchartsModule, ChartComponent, IonCardContent, IonCardTitle, IonBadge, IonItem, IonCardHeader, IonLabel, IonIcon, IonCard, IonCol, IonRow, IonGrid, IonContent, IonThumbnail, CommonModule, DatePipe, FormsModule], styles: ["\n\n.machine[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  background-image: url(/assets/images/bgRed.jpg);\n  background-size: cover;\n}\n.machine[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --background: transparent;\n}\n.machine[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  max-width: 300px;\n  text-wrap: wrap;\n}\n.machine[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%] {\n  --border-radius: 3rem;\n  --size: 6rem;\n}\n.machine[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  text-wrap: wrap;\n}\n.machine[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%] {\n  margin: 5px;\n  margin-top: 10px;\n  font-size: 0.75rem;\n  font-weight: normal;\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  margin: auto;\n  margin-top: 16px;\n  margin-bottom: 16px;\n  width: 80%;\n  max-width: 350px;\n  text-align: center;\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 0.8rem;\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  text-align: left;\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .txtUPI[_ngcontent-%COMP%] {\n  color: var(--ion-color-tertiary);\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .txtCash[_ngcontent-%COMP%] {\n  color: var(--ion-color-success);\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .txtAccount[_ngcontent-%COMP%] {\n  color: var(--ion-color-warning);\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .txtCard[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .txtTotal[_ngcontent-%COMP%] {\n  color: var(--ion-color-danger);\n  font-weight: bold;\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .salesCard[_ngcontent-%COMP%] {\n  height: 100%;\n  --ion-grid-columns: 10;\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .salesCard[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  margin: 0px;\n  height: auto;\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .salesCard[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  height: 4rem;\n  width: 4rem;\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.machine[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]   .salesCard[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%] {\n  width: 6rem;\n  text-align: center;\n  display: block;\n}\n.machine[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.machine[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.7;\n  padding-top: 5px;\n}\n.salesCard[_ngcontent-%COMP%] {\n  --ion-grid-columns: 6;\n}\n.salesCard[_ngcontent-%COMP%]   ion-col[_ngcontent-%COMP%] {\n  padding: 0px;\n}\n.salesCard[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  height: 5rem;\n}\n.salesCard[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  margin: 1rem;\n  height: 3rem;\n  width: 3rem;\n}\n.salesCard[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   .saledata[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  float: right;\n  height: 100%;\n  display: flex;\n  align-items: center;\n}\n.salesCard[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  margin-top: 8px;\n  text-align: end;\n  text-wrap: wrap;\n}\n.salesCard[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 3px;\n  font-size: 0.7rem;\n  text-align: end;\n  opacity: 0.8;\n  font-weight: 400;\n  color: var(--ion-text-color);\n  text-wrap: wrap;\n}\n.saleschart[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%] {\n  height: 350px;\n}"] });
var HomePage = _HomePage;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomePage, { className: "HomePage", filePath: "src/app/pages/machines/home/home.page.ts", lineNumber: 20 });
})();
export {
  HomePage
};
