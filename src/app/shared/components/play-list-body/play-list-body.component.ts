import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import * as dataRaw from '../../../data/tracks.json'
import { CommonModule } from '@angular/common';
import { OrderListPipe } from "../../pipes/order-list.pipe";

@Component({
    selector: 'app-play-list-body',
    standalone: true,
    templateUrl: './play-list-body.component.html',
    styleUrl: './play-list-body.component.css',
    imports: [CommonModule, OrderListPipe]
})
export class PlayListBodyComponent {
  tracks: TrackModel[] = []
  optionSort: { property: string | null, order: string } = { property: null, order: 'asc' }
  constructor() { }

  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default
    this.tracks=data
  }

  changeSort(property: string): void {
    const { order } = this.optionSort
    this.optionSort = {
      property,
      order: order === 'asc' ? 'desc' : 'asc'
    }
    console.log(this.optionSort);
  }
}
