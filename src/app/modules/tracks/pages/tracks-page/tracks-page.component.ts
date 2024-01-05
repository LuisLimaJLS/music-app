import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';

import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import { response } from 'express';

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
    //this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
    const observer1$ = this.trackService.dataTracksTrending$
    .subscribe(response=>{
      this.tracksTrending = response
      this.tracksRandom = response
    })
    this.listObservers$.push(observer1$)
  }

  loadDataRandom(): void {
    const observer2$ = this.trackService.dataTracksRandom$
    .subscribe(response=>{
      this.tracksRandom = [...this.tracksRandom, ...response]
    })
    this.listObservers$.push(observer2$)

    //this.trackService.getAllRandom$()
    //  .subscribe((response: TrackModel[]) => {
    //    this.tracksRandom = response
    //  })

  }

  ngOnDestroy(): void {

  }

}
