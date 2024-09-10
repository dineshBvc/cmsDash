import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonImg, IonText, IonLabel, IonItem, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';
import { machinesStatus } from 'src/app/interfaces/machine-status';
import { ApiService } from 'src/app/services/api.service';
import { MachineService } from 'src/app/services/machine.service';
import { Router } from '@angular/router';
import { CabinRowDto, StockDisplayDto } from 'src/app/interfaces/stock';
import { CabinStockComponent } from 'src/app/components/cabin-stock/cabin-stock.component';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
  standalone: true,
  imports: [IonSegmentButton, IonSegment, CabinStockComponent, IonItem, IonLabel, IonText, IonImg, IonCard, IonCol, IonRow, IonGrid, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class StockPage {

  private api = inject(ApiService);
  private machineService = inject(MachineService);
  private router = inject(Router);

  machineId = '';
  machine: machinesStatus | undefined;
  stocks: StockDisplayDto = { cabin1: [], cabin2: [] };
  currentCabin: CabinRowDto[] = [];

  constructor() {
    let URL = this.router.url
    let URL_AS_LIST = URL.split('/');
    this.machineId = URL_AS_LIST[2];
    this.machineService.GetMachine(this.machineId).then((result) => {
      if (result.id != this.machineId) {
        this.router.navigate(['dashboard']);
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

  CabinChanged(event: any) {
    if (event.detail.value === 'cabin1') {
      this.currentCabin = this.stocks.cabin1;
    }

    if (event.detail.value === 'cabin2') {
      this.currentCabin = this.stocks.cabin2;
    }
  }

}
