import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonCol, IonCard } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
  standalone: true,
  imports: [IonCard, IonCol, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ReportPage {


  private router = inject(Router);
  private route = inject(ActivatedRoute);
  machineId = '';

  constructor() {

    let URL = this.router.url
    let URL_AS_LIST = URL.split('/');
    this.machineId = URL_AS_LIST[2];
  }

  NavigateReport(reportpage: string) {
    this.router.navigate([reportpage], { relativeTo: this.route, state: { machineId: this.machineId } });
  }


}
