import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonSearchbar, IonIcon, IonButtons, IonSelect, IonSelectOption, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api.service';
import { MachinelistComponent } from 'src/app/components/machinelist/machinelist.component';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-stock-refill-summary',
  templateUrl: './stock-refill-summary.page.html',
  styleUrls: ['./stock-refill-summary.page.scss'],
  standalone: true,
  imports: [IonDatetime, IonModal, IonDatetimeButton, IonButtons, IonIcon, IonSearchbar, IonButton, IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelect, IonSelectOption, MachinelistComponent]
})
export class StockRefillSummaryPage {

  private api = inject(ApiService);
  private altService = inject(AlertService);
  @ViewChild(MachinelistComponent) machineList: any;

  rawData: any[] = [];
  result: any[] = [];
  fromDate: any;
  toDate: any;
  refillItems: any[] = [];


  constructor() {
    const dd = new Date();
    this.fromDate = dd.toISOString().substring(0, 10) + 'T00:00:00';
    this.toDate = dd.toISOString().substring(0, 10) + 'T23:59:59';
  }




  onShowClick() {
    if (this.machineList.selectedId === undefined) {
      this.altService.showAlert('Please select machine', 'MISSING')
      return;
    }

    this.api.GetRefillSummaryReport(this.machineList.selectedId, this.fromDate, this.toDate).subscribe((data) => {
      this.rawData = data;
      this.result = [...this.rawData];
      this.refillItems = [];

      data.forEach(x => {
        this.refillItems.push(...x.items);
      });
    });
  }

  OnDownload() {
    if (this.machineList.selectedId === undefined) {
      this.altService.showAlert('Please select machine', 'MISSING')
      return;
    }

    this.api.DownloadClearedReport(this.machineList.selectedId, this.fromDate, this.toDate).subscribe(
      (data) => {
        this.downloadFile(data, 'StockRequired.xlsx');
      });
  }

  downloadFile(data: any, fileName = '') {

    const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const url = window.URL.createObjectURL(blob);
    // window.open(url);

    let downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.setAttribute('download', fileName);
    document.body.appendChild(downloadLink);
    downloadLink.click();

  }


  GetTotalByKey(col: string) {
    return this.refillItems.reduce((acc: any, cur: any) => acc + cur[col] * cur['price'], 0);
  }




}
