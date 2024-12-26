import {
  environment
} from "./chunk-7FRACAAN.js";
import {
  HttpClient,
  map,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-GXWPZK3Z.js";

// src/app/services/api.service.ts
var _ApiService = class _ApiService {
  constructor(http) {
    this.http = http;
  }
  GetPlaceholderImage(url = "") {
    if (url === "") {
      url = "../assets/images/product-placeholder.webp";
    }
    return this.http.get(url, { responseType: "blob" });
  }
  GetCategories(appType) {
    return this.http.get(`${environment.apiURL}/api/categories`, { headers: { "X-APP-TYPE": appType } }).pipe(map((categories) => {
      categories.forEach((x) => x.imgPath = `${environment.apiURL}/${x.imgPath}`);
      return categories;
    }));
  }
  AddCategory(category, appType) {
    return this.http.post(`${environment.apiURL}/api/categories`, category, { headers: { responseType: "json", "X-APP-TYPE": appType } });
  }
  EditCategory(categoryId, category, appType) {
    return this.http.put(`${environment.apiURL}/api/categories/${categoryId}`, category, { headers: { responseType: "json", "X-APP-TYPE": appType } });
  }
  DeleteCategory(Id, appType) {
    return this.http.delete(`${environment.apiURL}/api/categories/${Id}`, { headers: { "X-APP-TYPE": appType } });
  }
  GetProducts(appType) {
    return this.http.get(`${environment.apiURL}/api/products`, { headers: { "X-APP-TYPE": appType } }).pipe(map((products) => {
      products.forEach((x) => x.imgPath = `${environment.apiURL}/${x.imgPath}`);
      return products;
    }));
  }
  AddProduct(product, appType) {
    return this.http.post(`${environment.apiURL}/api/products`, product, { headers: { responseType: "json", "X-APP-TYPE": appType } });
  }
  EditProduct(productId, product, appType) {
    return this.http.put(`${environment.apiURL}/api/products/${productId}`, product, { headers: { responseType: "json", "X-APP-TYPE": appType } });
  }
  DeleteProduct(Id, appType) {
    return this.http.delete(`${environment.apiURL}/api/products/${Id}`, { headers: { "X-APP-TYPE": appType } });
  }
  GetCategoryWiseStocksAsync() {
    return this.http.get(`${environment.apiURL}/api/kiosk/stocks`);
  }
  UpdateStock(stock) {
    return this.http.post(`${environment.apiURL}/api/kiosk/stocks`, stock, { responseType: "json" });
  }
  GetUserAppTypes() {
    return this.http.get(`${environment.apiURL}/api/apptypes`);
  }
  GetMachinesStatus() {
    return this.http.get(`${environment.apiURL}/api/machines/status`);
  }
  GetSalesLegends(machineId) {
    return this.http.get(`${environment.apiURL}/api/dashboard/saleslegends/${machineId}`);
  }
  GetMonthWiseSales(machineId) {
    return this.http.get(`${environment.apiURL}/api/dashboard/monthlysales/${machineId}`);
  }
  GetWeeklySales(machineId) {
    return this.http.get(`${environment.apiURL}/api/dashboard/dailysales/${machineId}`);
  }
  GetProductSalesForChart(machineId) {
    return this.http.get(`${environment.apiURL}/api/dashboard/productsales/${machineId}`);
  }
  GetVMStocks(machineId) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/${machineId}`).pipe(map((st) => {
      st.cabin1.forEach((r) => r.items.forEach((x) => x.imgPath = x.imgPath.length > 0 ? `${environment.apiURL}/${x.imgPath}` : `${environment.apiURL}/assets/images/product-placeholder.webp`));
      st.cabin2.forEach((r) => r.items.forEach((x) => x.imgPath = x.imgPath.length > 0 ? `${environment.apiURL}/${x.imgPath}` : `${environment.apiURL}/assets/images/product-placeholder.webp`));
      return st;
    }));
  }
  GetVmStockByProduct(machineId) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/product?machineId=${machineId}`);
  }
  GetVmStockByProductForDownload(machineId) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/product/download?machineId=${machineId}`, { responseType: "blob" });
  }
  GetStockRequired(machineId) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/required?machineId=${machineId}`);
  }
  DownloadStockRequired(machineId) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/required/download?machineId=${machineId}`, { responseType: "blob" });
  }
  GetSalesReport(machineId, fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/order/sales?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`);
  }
  DownloadSalesReport(machineId, fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/order/sales/download?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`, { responseType: "blob" });
  }
  GetSalesProductReport(machineId, fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/order/sales/product?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`);
  }
  DownloadSalesProductReport(machineId, fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/order/sales/product/download?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`, { responseType: "blob" });
  }
  GetSalesUserReport(machineId, fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/order/sales/user?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`);
  }
  DownloadSalesUserReport(machineId, fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/order/sales/user/download?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`, { responseType: "blob" });
  }
  GetRefillReport(machineId, fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/refill?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`);
  }
  DownloadRefillReport(machineId, fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/refill/download?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`, { responseType: "blob" });
  }
  GetClearedReport(machineId, fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/cleared?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`);
  }
  DownloadClearedReport(machineId, fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/cleared/download?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`, { responseType: "blob" });
  }
  GetRefillSummaryReport(machineId, fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/refillsummary?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`);
  }
  GetCashRefundReport(fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/cashrefund?fromDate=${fromDate}&toDate=${toDate}`);
  }
  DownloadCashRefundReport(fromDate, toDate) {
    return this.http.get(`${environment.apiURL}/api/cashrefund/download?fromDate=${fromDate}&toDate=${toDate}`, { responseType: "blob" });
  }
  UpdateCashRefund(orderNumber, mobileNumber) {
    const dto = { orderNumber, mobileNumber };
    return this.http.post(`${environment.apiURL}/api/cashrefund/paid`, dto, { headers: { responseType: "json" } });
  }
  GetLiveReportRequests(machineId, appType) {
    return this.http.get(`${environment.apiURL}/api/reports/live/machine/request/${machineId}`, { headers: { "X-APP-TYPE": appType } });
  }
  DownloadLiveReport(id) {
    return this.http.get(`${environment.apiURL}/api/reports/live/machine/reports/download/${id}`, { responseType: "blob" });
  }
  AddLiveReportRequest(request) {
    return this.http.post(`${environment.apiURL}/api/reports/live/machine/request`, request, { responseType: "json" });
  }
  AddLogRequest(body) {
    return this.http.post(`${environment.apiURL}/api/machinelogs/request`, body, { responseType: "json" });
  }
  GetLogRecords(machineId) {
    return this.http.get(`${environment.apiURL}/api/machinelogs/${machineId}`);
  }
  DownloadLogFile(id) {
    return this.http.get(`${environment.apiURL}/api/machinelogs/download/${id}`, { responseType: "blob" });
  }
};
_ApiService.\u0275fac = function ApiService_Factory(t) {
  return new (t || _ApiService)(\u0275\u0275inject(HttpClient));
};
_ApiService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
var ApiService = _ApiService;

export {
  ApiService
};
