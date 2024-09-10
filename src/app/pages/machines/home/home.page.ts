import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonIcon, IonLabel, IonCardHeader, IonThumbnail, IonItem, IonBadge, IonText, IonCardTitle, IonList, IonListHeader, IonCardContent, IonCardSubtitle, IonNote } from '@ionic/angular/standalone';
import { ChartGenerator, ChartOptions, PieChartOptions } from 'src/app/interfaces/chart-options';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ActivatedRoute, Router } from '@angular/router';
import { machinesStatus } from 'src/app/interfaces/machine-status';
import { MachineService } from 'src/app/services/machine.service';
import { ApiService } from 'src/app/services/api.service';
import { SalesLegendsDto } from 'src/app/interfaces/dashboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonNote, IonCardSubtitle, NgApexchartsModule, IonCardContent, IonListHeader, IonList, IonCardTitle, IonText, IonBadge, IonItem, IonCardHeader, IonLabel, IonIcon, IonCard, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, IonThumbnail, CommonModule, FormsModule]
})
export class HomePage {

  private router = inject(Router);
  private api = inject(ApiService);
  private machineService = inject(MachineService);

  DailyChartInput: ChartOptions | undefined;
  MonthlyChartInput: ChartOptions | undefined;
  ProductChart: PieChartOptions | undefined;
  sales: SalesLegendsDto = { month: { total: 0, account: 0, card: 0, cash: 0, upi: 0 }, today: { account: 0, card: 0, cash: 0, total: 0, upi: 0 } }

  machineId = '';
  machine: machinesStatus | undefined;
  chartGen: ChartGenerator = new ChartGenerator();
  date = new Date();

  constructor() {
    let URL = this.router.url
    let URL_AS_LIST = URL.split('/');
    this.machineId = URL_AS_LIST[2];
    this.machineService.GetMachine(this.machineId).then((result) => {
      if (result.id != this.machineId) {
        this.router.navigate(['dashboard']);
      }
      this.machine = result;
      this.GetSalesLegends(this.machineId);
      this.GetWeeklySales(this.machineId);
      this.GetMonthlyWiseSales(this.machineId);
      this.GetProductSales(this.machineId);
    });



  }


  GetSalesLegends(machineId: string) {
    this.api.GetSalesLegends(machineId).subscribe((result) => this.sales = result);
  }


  GetWeeklySales(machineId: string) {
    this.api.GetWeeklySales(machineId).subscribe(
      (result) => {
        var data = result.map(x => x.total);
        var labels = result.map(x => x.day);
        this.DailyChartInput = this.chartGen.GetDailySalesChartOptions(data, labels);
      }
    );
  }

  GetMonthlyWiseSales(machineId: string) {
    this.api.GetMonthWiseSales(machineId).subscribe((result) => {
      var data = result.map(x => x.total);
      var labels = result.map(x => x.month);
      this.MonthlyChartInput = this.chartGen.GetMonthlySalesChartOptions(data, labels);
    });
  }

  GetProductSales(machineId: string) {
    this.api.GetProductSalesForChart(machineId).subscribe((result) => {
      var data = result.map(x => x.quantity);
      var labels = result.map(x => x.name);
      this.ProductChart = this.chartGen.GetProductSalesChart(data, labels);
    });
  }

}
