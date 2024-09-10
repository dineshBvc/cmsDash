import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonButton, IonSearchbar, IonIcon, IonButtons, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api.service';
import { MachinelistComponent } from 'src/app/components/machinelist/machinelist.component';

@Component({
  selector: 'app-stock-required',
  templateUrl: './stock-required.page.html',
  styleUrls: ['./stock-required.page.scss'],
  standalone: true,
  imports: [IonButtons, IonIcon, IonSearchbar, IonButton, IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelect, IonSelectOption, MachinelistComponent]
})
export class StockRequiredPage {


  private api = inject(ApiService);
  @ViewChild(MachinelistComponent) machineList: any;

  rawData: any[] = [];
  filteredData: any[] = [];
  sortedData: any[] = [];
  result: any[] = [];

  showSearchbar: boolean = false;
  sortDirection = 0;
  sortKey = '';
  page = 0;
  recordPerPage = 20;
  totalNumberofPages = 0;

  constructor() { }




  onShowClick() {
    this.api.GetStockRequired(this.machineList.selectedId).subscribe((data) => {
      this.rawData = data;
      this.filteredData = [...this.rawData];
      this.sortDirection = 0;
      this.sort([...this.filteredData]);
    });
  }


  GetTotalByKey(col: string) {
    return this.sortedData.reduce((acc: any, cur: any) => acc + cur[col], 0);
  }

  OnDownload() {
    this.api.DownloadStockRequired(this.machineList.selectedId).subscribe(
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


  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
    if (!this.showSearchbar) {
      this.GetSearchResult('');
    }
  }

  SearchData(event: any) {
    const val = event.target.value.toLowerCase();
    this.GetSearchResult(val);
  }

  GetSearchResult(query: string) {
    if (this.rawData.length > 0) {

      const cols = Object.keys(this.rawData[0]);

      // filter our data
      this.filteredData = [...this.rawData].filter((row: any) => {
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


  sortBy(sortBy: string) {
    this.sortKey = sortBy;
    this.sortDirection++;
    this.sort([...this.filteredData]);
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



}
