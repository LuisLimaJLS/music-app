import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';

import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

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
  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
  }

  async loadDataAll(): Promise<any> {
    this.trackService.getAllTracks$().subscribe(
      (response: TrackModel[])=>{
        this.tracksTrending = response
      }
    )
  }

  loadDataRandom(): void {
    this.trackService.getAllRandom$().subscribe(
      (response: TrackModel[])=>{
        this.tracksRandom = response
      }
    )
  }

  ngOnDestroy(): void {
  }

}
