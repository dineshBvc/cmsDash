import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr"
import { environment } from 'src/environments/environment';
import { connectionStatus } from '../interfaces/connection-status';
import { BehaviorSubject } from 'rxjs';
import { AlertService } from './alert.service';
import { liveReportReceived } from '../interfaces/livereport-received-status';
import { logReceived } from '../interfaces/logReceived';


@Injectable({
  providedIn: 'root'
})

export class SignlarService {

  private hubConnection!: signalR.HubConnection;

  machineStatus = new BehaviorSubject<connectionStatus>({ id: '', connected: false, status: '', updatedon: new Date() });
  liveReportReceivedStatus = new BehaviorSubject<liveReportReceived>({ requestId: '', message: '' });
  logReceivedStatus = new BehaviorSubject<logReceived>({ requestId: '', message: '' });

  constructor(private alertService: AlertService) {

  }

  public Connect() {

    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(`${environment.apiURL}/hubs/notification`, {
        withCredentials: true,
        accessTokenFactory: () => {
          const token = localStorage.getItem("jwtToken");
          return token ?? '';
        },
        transport: signalR.HttpTransportType.WebSockets,
        skipNegotiation: true
      })
      .withAutomaticReconnect()
      .configureLogging(signalR.LogLevel.Warning)
      .build();

    this.hubConnection.on('VendingMachineStatus', (status: connectionStatus) => {
      this.machineStatus.next(status);
    });

    this.hubConnection.on('ReportResponse', (status: liveReportReceived) => {
      this.alertService.successToast(status.message);
      this.liveReportReceivedStatus.next(status);
    });

    this.hubConnection.on('LogResponse', (status: logReceived) => {
      this.alertService.successToast(status.message);
      this.logReceivedStatus.next(status);
    });

    if (this.hubConnection.state == 'Disconnected') {
      this.hubConnection
        .start()
        .then(() => {
          console.log('Connection started');
        })
        .catch(err => console.log('Error while starting connection: ' + err));
    }
  }

  public Disconnect() {
    this.hubConnection.stop().then(() => {
      console.log('Connection Closed')
    });
  }

}
