import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';

import * as dataRaw from '../../../../data/tracks.json'

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  constructor() { }

  ngOnInit(): void {
    const {data}:any = (dataRaw as any).default
    this.tracksTrending=data
    this.tracksRandom=data
  }



}
