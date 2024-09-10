import { Injectable, OnDestroy, inject } from '@angular/core';
import { machinesStatus } from '../interfaces/machine-status';
import { ApiService } from './api.service';
import { SignlarService } from './signlar.service';
import { BehaviorSubject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineService implements OnDestroy {

  private api = inject(ApiService);
  private signalrService = inject(SignlarService);

  private machines: machinesStatus[] = [];
  private machineStatusSub!: Subscription;
  private loaded = false;

  machineStatus: BehaviorSubject<machinesStatus[]> = new BehaviorSubject<machinesStatus[]>([]);

  constructor() {

    this.LoadAllMachines();

    this.machineStatusSub = this.signalrService.machineStatus.subscribe({
      next: (status) => {
        var machine = this.machines.find(x => x.id == status.id);
        if (machine) {
          machine.status = status.status;
          machine.updatedOn = status.updatedon;
          this.sortMachines(this.machines);
          this.machineStatus.next(this.machines);
        }
      }
    });
  }

  LoadAllMachines() {
    this.loaded = false;
    this.api.GetMachinesStatus().subscribe(
      (result) => {
        this.machines = this.sortMachines(result);
        this.loaded = true;
        this.machineStatus.next(this.machines);
      },
      () => {
        this.loaded = true;
      }

    );
  }

  async GetAllMachines() {

    while (this.loaded == false) {
      await this.delay(10);
      console.log('waiting');
    }
    return this.machines;
  }

  async GetMachine(id: string) {

    while (this.loaded == false) {
      await this.delay(10);
      console.log('waiting');
    }

    var machine = this.machines.find(x => x.id == id);
    if (machine == undefined)
      return {} as machinesStatus;
    return machine;
  }


  sortMachines(collection: machinesStatus[]): machinesStatus[] {
    return collection.sort((a, b) => {
      // Sort by status (Online machines come first)
      if (a.status !== b.status) {
        return a.status === "Online" ? -1 : 1;
      }

      // Then sort by appType
      if (a.appType < b.appType) {
        return -1;
      }
      if (a.appType > b.appType) {
        return 1;
      }

      // Finally, sort by number
      return a.number - b.number;
    });
  }

  ngOnDestroy() {
    if (this.machineStatusSub) this.machineStatusSub.unsubscribe();
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

}
