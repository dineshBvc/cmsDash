import { Component, Input } from '@angular/core';
import { MachineService } from 'src/app/services/machine.service';
import { IonSelect, IonSelectOption } from "@ionic/angular/standalone";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-machinelist',
  templateUrl: './machinelist.component.html',
  styleUrls: ['./machinelist.component.scss'],
  standalone: true,
  imports: [IonSelect, IonSelectOption, CommonModule, FormsModule],
})
export class MachinelistComponent {
  @Input() type: string = 'all';

  machines: any[] = [];
  public selectedId: string | undefined;

  constructor(private machineService: MachineService) {
    this.machineService.GetAllMachines().then((values) => {
      if (this.type != 'all') {
        values = values.filter(x => x.appType == this.type.trim().toUpperCase());
      }
      this.machines = values.map((x) => { return { id: x.id, name: x.name }; }).sort((a: any, b: any) => { return a.name.localeCompare(b.name); });
    });
  }



}
