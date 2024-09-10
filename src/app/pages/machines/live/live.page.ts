import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule, DatePipe, formatDate } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonDatetime, IonDatetimeButton, IonModal, IonButton, IonItem, IonIcon, IonLabel, IonNote } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api.service';
import { AlertService } from 'src/app/services/alert.service';
import { MachineService } from 'src/app/services/machine.service';
import { Router } from '@angular/router';
import { machinesStatus } from 'src/app/interfaces/machine-status';
import { SignlarService } from 'src/app/services/signlar.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-live',
  templateUrl: './live.page.html',
  styleUrls: ['./live.page.scss'],
  standalone: true,
  imports: [IonNote, IonLabel, IonIcon, IonItem, IonButton, IonDatetime, IonModal, IonDatetimeButton, IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LivePage implements OnInit, OnDestroy {

  private api = inject(ApiService);
  private signalR = inject(SignlarService);
  private altService = inject(AlertService);
  private machineService = inject(MachineService);
  private router = inject(Router);

  private liveReportSub!: Subscription;
  private logStatusSub!: Subscription;

  machineId = '';
  machine: machinesStatus | undefined;

  fromDate: any;
  toDate: any;
  logDate: any;
  reportRequest: any[] = [];
  logRequests: any[] = [];

  constructor() {
    const dd = new Date();
    this.fromDate = formatDate(new Date(dd.getFullYear(), dd.getMonth(), 1), 'yyyy-MM-ddTHH:mm:ss', 'en-US');
    this.toDate = formatDate(dd, 'yyyy-MM-ddT23:59:59', 'en-US');
    this.logDate = this.toDate;

    let URL = this.router.url
    let URL_AS_LIST = URL.split('/');
    this.machineId = URL_AS_LIST[2];
    this.machineService.GetMachine(this.machineId).then((result) => {
      this.machine = result;
      this.GetLiveReportRequests();
      this.GetLogRecords();
    });
  }


  ngOnInit() {
    this.liveReportSub = this.signalR.liveReportReceivedStatus.subscribe((status) => {
      this.GetLiveReportRequests();
    });

    this.logStatusSub = this.signalR.logReceivedStatus.subscribe((status) => {
      this.GetLogRecords();
    });

  }

  GetLiveReportRequests() {
    this.api.GetLiveReportRequests(this.machineId, this.machine?.appType ?? 'VM').subscribe((result) => {
      this.reportRequest = result;
    });
  }

  DownloadLiveReport(id: string) {
    this.api.DownloadLiveReport(id).subscribe((data) => {
      this.downloadFile(data, 'LiveReport.xls')
    });
  }

  RequestLiveReport() {
    const body = {
      MachineId: this.machineId,
      From: this.fromDate,
      To: this.toDate
    }
    this.api.AddLiveReportRequest(body).subscribe((data: any) => {
      this.altService.successToast(data.message);
      this.GetLiveReportRequests();
    });
  }

  GetLogRecords() {
    this.api.GetLogRecords(this.machineId).subscribe((resp) => {
      this.logRequests = resp;
    });
  }

  RequestLogFile() {
    const logRequestDto = {
      MachineId: this.machineId,
      LogDate: this.logDate
    }

    this.api.AddLogRequest(logRequestDto).subscribe((data: any) => {
      this.altService.successToast(data.message);
      this.GetLogRecords();
    });

  }

  DownloadLogFile(id: string, logDate: Date) {
    this.api.DownloadLogFile(id).subscribe((data) => {
      const filename = formatDate(logDate, 'yyyy-MM-dd', 'en-US') + '.txt';
      this.downloadFile(data, filename);
    });
  }


  ngOnDestroy() {
    if (this.liveReportSub) this.liveReportSub.unsubscribe();
    if (this.logStatusSub) this.logStatusSub.unsubscribe();
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
}
