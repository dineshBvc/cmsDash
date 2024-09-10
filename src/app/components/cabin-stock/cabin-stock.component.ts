import { Component, Input } from '@angular/core';
import { CabinRowDto, StockDisplayDto } from 'src/app/interfaces/stock';
import { IonContent, IonGrid, IonRow, IonCol, IonCard, IonImg } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cabin-stock',
  templateUrl: './cabin-stock.component.html',
  styleUrls: ['./cabin-stock.component.scss'],
  standalone: true,
  imports: [IonImg, IonCard, IonCol, IonRow, IonGrid, IonContent, CommonModule]

})
export class CabinStockComponent {

  @Input() stocks: StockDisplayDto = { cabin1: [], cabin2: [] };

  @Input() cabin: CabinRowDto[] = [];

  constructor() { }



}
