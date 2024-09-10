import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../interfaces/product';
import { Observable, delay, map } from 'rxjs';
import { category } from '../interfaces/category';
import { CategoryWiseStock, StockDisplayDto } from '../interfaces/stock';
import { OrderReport } from '../interfaces/order-report';
import { formatDate } from '@angular/common';
import { DailySales, MonthWiseSales, ProdcutSalesSumDto, SalesLegendsDto } from '../interfaces/dashboard';
import { machinesStatus } from '../interfaces/machine-status';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient) {

  }
  GetPlaceholderImage(url: string = '') {
    if (url === '') {
      url = '../assets/images/product-placeholder.webp';
    }
    return this.http.get(url, { responseType: 'blob' });
  }

  GetCategories(appType: string): Observable<category[]> {
    return this.http.get<category[]>(`${environment.apiURL}/api/categories`, { headers: { 'X-APP-TYPE': appType } })
      .pipe(
        map((categories: category[]) => {
          categories.forEach(x => x.imgPath = `${environment.apiURL}/${x.imgPath}`);
          return categories;
        })
      );
  }

  AddCategory(category: FormData, appType: string) {
    return this.http.post(`${environment.apiURL}/api/categories`, category, { headers: { responseType: 'json', 'X-APP-TYPE': appType } });
  }

  EditCategory(categoryId: string, category: FormData, appType: string) {
    return this.http.put(`${environment.apiURL}/api/categories/${categoryId}`, category, { headers: { responseType: 'json', 'X-APP-TYPE': appType } });
  }

  DeleteCategory(Id: string, appType: string) {
    return this.http.delete(`${environment.apiURL}/api/categories/${Id}`, { headers: { 'X-APP-TYPE': appType } });
  }


  GetProducts(appType: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiURL}/api/products`, { headers: { 'X-APP-TYPE': appType } })
      .pipe(
        map((products: Product[]) => {
          products.forEach(x => x.imgPath = `${environment.apiURL}/${x.imgPath}`);
          return products;
        })
      );
  }

  AddProduct(product: FormData, appType: string) {
    return this.http.post(`${environment.apiURL}/api/products`, product, { headers: { responseType: 'json', 'X-APP-TYPE': appType } });
  }

  EditProduct(productId: string, product: FormData, appType: string) {
    return this.http.put(`${environment.apiURL}/api/products/${productId}`, product, { headers: { responseType: 'json', 'X-APP-TYPE': appType } });
  }

  DeleteProduct(Id: string, appType: string) {
    return this.http.delete(`${environment.apiURL}/api/products/${Id}`, { headers: { 'X-APP-TYPE': appType } });
  }


  GetCategoryWiseStocksAsync(): Observable<CategoryWiseStock[]> {
    return this.http.get<CategoryWiseStock[]>(`${environment.apiURL}/api/kiosk/stocks`);
  }

  UpdateStock(stock: any) {
    return this.http.post(`${environment.apiURL}/api/kiosk/stocks`, stock, { responseType: 'json' });
  }

  GetUserAppTypes() {
    return this.http.get<string[]>(`${environment.apiURL}/api/apptypes`);
  }

  GetMachinesStatus() {
    return this.http.get<machinesStatus[]>(`${environment.apiURL}/api/machines/status`);
  }

  GetSalesLegends(machineId: string) {
    return this.http.get<SalesLegendsDto>(`${environment.apiURL}/api/dashboard/saleslegends/${machineId}`);
  }

  GetMonthWiseSales(machineId: string) {
    return this.http.get<MonthWiseSales[]>(`${environment.apiURL}/api/dashboard/monthlysales/${machineId}`);
  }

  GetWeeklySales(machineId: string) {
    return this.http.get<DailySales[]>(`${environment.apiURL}/api/dashboard/dailysales/${machineId}`);
  }


  GetProductSalesForChart(machineId: string) {
    return this.http.get<ProdcutSalesSumDto[]>(`${environment.apiURL}/api/dashboard/productsales/${machineId}`);
  }

  GetVMStocks(machineId: string) {
    return this.http.get<StockDisplayDto>(`${environment.apiURL}/api/vm/stock/${machineId}`).pipe(
      map((st: StockDisplayDto) => {
        st.cabin1.forEach(r =>
          r.items.forEach(x =>
            x.imgPath = x.imgPath.length > 0 ?
              `${environment.apiURL}/${x.imgPath}` :
              `${environment.apiURL}/assets/images/product-placeholder.webp`));

        st.cabin2.forEach(r =>
          r.items.forEach(x =>
            x.imgPath = x.imgPath.length > 0 ?
              `${environment.apiURL}/${x.imgPath}` :
              `${environment.apiURL}/assets/images/product-placeholder.webp`));
        return st;
      })
    );
  }


  GetVmStockByProduct(machineId: string) {
    return this.http.get<any[]>(`${environment.apiURL}/api/vm/stock/product?machineId=${machineId}`);
  }

  GetVmStockByProductForDownload(machineId: string) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/product/download?machineId=${machineId}`, { responseType: 'blob' });
  }

  GetStockRequired(machineId: string) {
    return this.http.get<any[]>(`${environment.apiURL}/api/vm/stock/required?machineId=${machineId}`);
  }

  DownloadStockRequired(machineId: string) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/required/download?machineId=${machineId}`, { responseType: 'blob' });
  }

  GetSalesReport(machineId: string, fromDate: string, toDate: string) {
    return this.http.get<any[]>(`${environment.apiURL}/api/order/sales?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`);
  }

  DownloadSalesReport(machineId: string, fromDate: string, toDate: string) {
    return this.http.get(`${environment.apiURL}/api/order/sales/download?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`, { responseType: 'blob' });
  }


  GetSalesProductReport(machineId: string, fromDate: string, toDate: string) {
    return this.http.get<any[]>(`${environment.apiURL}/api/order/sales/product?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`);
  }

  DownloadSalesProductReport(machineId: string, fromDate: string, toDate: string) {
    return this.http.get(`${environment.apiURL}/api/order/sales/product/download?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`, { responseType: 'blob' });
  }

  GetSalesUserReport(machineId: string, fromDate: string, toDate: string) {
    return this.http.get<any[]>(`${environment.apiURL}/api/order/sales/user?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`);
  }

  DownloadSalesUserReport(machineId: string, fromDate: string, toDate: string) {
    return this.http.get(`${environment.apiURL}/api/order/sales/user/download?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`, { responseType: 'blob' });
  }

  GetRefillReport(machineId: string, fromDate: string, toDate: string) {
    return this.http.get<any[]>(`${environment.apiURL}/api/vm/stock/refill?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`);
  }

  DownloadRefillReport(machineId: string, fromDate: string, toDate: string) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/refill/download?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`, { responseType: 'blob' });
  }


  GetClearedReport(machineId: string, fromDate: string, toDate: string) {
    return this.http.get<any[]>(`${environment.apiURL}/api/vm/stock/cleared?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`);
  }

  DownloadClearedReport(machineId: string, fromDate: string, toDate: string) {
    return this.http.get(`${environment.apiURL}/api/vm/stock/cleared/download?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`, { responseType: 'blob' });
  }

  GetRefillSummaryReport(machineId: string, fromDate: string, toDate: string) {
    return this.http.get<any[]>(`${environment.apiURL}/api/vm/stock/refillsummary?fromDate=${fromDate}&toDate=${toDate}&machineId=${machineId}`);
  }


  GetCashRefundReport(fromDate: string, toDate: string) {
    return this.http.get<any[]>(`${environment.apiURL}/api/cashrefund?fromDate=${fromDate}&toDate=${toDate}`);
  }

  DownloadCashRefundReport(fromDate: string, toDate: string) {
    return this.http.get(`${environment.apiURL}/api/cashrefund/download?fromDate=${fromDate}&toDate=${toDate}`, { responseType: 'blob' });
  }

  UpdateCashRefund(orderNumber: string, mobileNumber: string) {
    const dto = { orderNumber: orderNumber, mobileNumber: mobileNumber };
    return this.http.post(`${environment.apiURL}/api/cashrefund/paid`, dto, { headers: { responseType: 'json' } });
  }

  GetLiveReportRequests(machineId: string, appType: string) {
    return this.http.get<any[]>(`${environment.apiURL}/api/reports/live/machine/request/${machineId}`, { headers: { 'X-APP-TYPE': appType } })
  }

  DownloadLiveReport(id: string) {
    return this.http.get(`${environment.apiURL}/api/reports/live/machine/reports/download/${id}`, { responseType: 'blob' });
  }

  AddLiveReportRequest(request: any) {
    return this.http.post(`${environment.apiURL}/api/reports/live/machine/request`, request, { responseType: 'json' });
  }

  AddLogRequest(body: any) {
    return this.http.post(`${environment.apiURL}/api/machinelogs/request`, body, { responseType: 'json' });
  }

  GetLogRecords(machineId: string) {
    return this.http.get<any[]>(`${environment.apiURL}/api/machinelogs/${machineId}`)
  }

  DownloadLogFile(id: string) {
    return this.http.get(`${environment.apiURL}/api/machinelogs/download/${id}`, { responseType: 'blob' });
  }
}
