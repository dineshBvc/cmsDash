import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { machinesStatus } from 'src/app/interfaces/machine-status';
import { MachineService } from 'src/app/services/machine.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.page.html',
  styleUrls: ['./machines.page.scss'],
  standalone: true,
  imports: [IonIcon, IonTabButton, IonTabBar, IonTabs, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class MachinesPage implements OnInit {

  machineId = '';
  machine: machinesStatus | undefined;
  stockVisible = false;

  constructor(private route: ActivatedRoute, private machineService: MachineService) {
    this.route.url.subscribe(url => {
      this.machineId = this.route.snapshot.paramMap.get('id')!;
      this.machineService.GetMachine(this.machineId).then((machine) => {
        this.stockVisible = machine.appType == 'VM';
      })

    });
  }

  ngOnInit() {
  }


}
