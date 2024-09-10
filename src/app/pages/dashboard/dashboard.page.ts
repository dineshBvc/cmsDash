import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonRow, IonGrid, IonCol, IonCard, IonIcon, IonLabel, IonBadge } from '@ionic/angular/standalone';
import { NgApexchartsModule } from 'ng-apexcharts';
import { TableModule } from 'primeng/table';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChartOptions, ChartGenerator } from 'src/app/interfaces/chart-options';
import { machinesStatus } from 'src/app/interfaces/machine-status';
import { MachineService } from 'src/app/services/machine.service';
import { SalesLegendsDto } from 'src/app/interfaces/dashboard';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, FormsModule, CommonModule, IonBadge, IonLabel, IonIcon, IonCard, IonCol, IonGrid, IonRow, IonButtons, IonHeader, IonToolbar, IonTitle, IonContent, NgApexchartsModule, TableModule, DatePipe]
})
export class DashboardPage implements OnDestroy {

  private api = inject(ApiService);
  private router = inject(Router);
  private machineService = inject(MachineService);
  private authService = inject(AuthService);

  sales: SalesLegendsDto = { month: { total: 0, account: 0, card: 0, cash: 0, upi: 0 }, today: { account: 0, card: 0, cash: 0, total: 0, upi: 0 } }

  DailyChartInput: ChartOptions | undefined;
  MonthlyChartInput: ChartOptions | undefined;
  machines: machinesStatus[] = [];
  sortedData: machinesStatus[] = [];

  date = new Date();
  chartGen: ChartGenerator = new ChartGenerator();
  machineSub!: Subscription;

  sortDirection = 0;
  sortKey = '';

  constructor() {
    this.LoadAllRecords();
  }

  ngOnInit() {

    this.authService.isAuthenticated.subscribe((loggedIn) => {
      if (loggedIn) {
        this.LoadAllRecords();
      }
    });

    this.machineService.machineStatus.subscribe((status) => {
      this.machines = status;
      this.sortedData = [...status];
    });
  }

  LoadAllRecords() {
    this.GetSalesLegends('');
    this.GetWeeklySales();
    this.GetMonthlyWiseSales();
    this.machineService.LoadAllMachines();
  }

  GetSalesLegends(machineId: string) {
    this.api.GetSalesLegends(machineId).subscribe((result) => this.sales = result);
  }

  GetWeeklySales() {
    this.api.GetWeeklySales('').subscribe(
      (result) => {
        var data = result.map(x => x.total);
        var labels = result.map(x => x.day);
        this.DailyChartInput = this.chartGen.GetDailySalesChartOptions(data, labels);
      }
    );
  }

  GetMonthlyWiseSales() {
    this.api.GetMonthWiseSales('').subscribe((result) => {
      var data = result.map(x => x.total);
      var labels = result.map(x => x.month);
      this.MonthlyChartInput = this.chartGen.GetMonthlySalesChartOptions(data, labels);
    });
  }

  onMachineSelect(machineId: string) {
    this.router.navigate(['machines', machineId, 'home']);
  }

  ngOnDestroy() {
    if (this.machineSub) this.machineSub.unsubscribe();
  }


  sortBy(sortBy: string) {
    this.sortKey = sortBy;
    this.sortDirection++;
    this.sort([...this.machines]);
  }

  sort(temp: any[]) {
    if (this.sortDirection == 1) {
      this.sortedData = temp.sort((a: any, b: any) => {
        const valA = a[this.sortKey];
        const valB = b[this.sortKey];
        if (typeof (valA) == 'number') {
          return valA - valB;
        } else {
          return valA.localeCompare(valB);
        }
      });
    }
    else if (this.sortDirection == 2) {
      this.sortedData = temp.sort((a: any, b: any) => {
        const valA = a[this.sortKey];
        const valB = b[this.sortKey];
        if (typeof (valA) == 'number') {
          return valB - valA;
        }
        else {
          return valB.localeCompare(valA);
        }
      });
    }
    else {
      this.sortDirection = 0;
      this.sortKey = '';
      this.sortedData = [...temp];
    }

  }


}
