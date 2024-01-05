import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/tracks.json'

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  dataTracksTrending$:Observable<TrackModel[]> = of([])
  dataTracksRandom$:Observable<TrackModel[]> = of([])
  constructor() {
    const {data}:any = (dataRaw as any).default
    this.dataTracksTrending$ = of(data)
    this.dataTracksRandom$ = new Observable((observer) =>{
      const tackExample: TrackModel ={
        "_id": 1,
        "name": "Getting Over",
        "album": "One Love",
        "cover": "https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg",
        "artist": {
            "name": "David Guetta",
            "nickname": "David Guetta",
            "nationality": "FR"
        },
        "url": "http://localhost:3000/track.mp3"
      }
      //setTimeout(()=>{
        observer.next([tackExample])
      //},6500)

    })
  }

  /**
   * //TODO {data:[..1,...2,..2]}
   *
   * @returns
   */
  getAllTracks$(): Observable<any> {
     return this.dataTracksTrending$
  }


  /**
   *
   * @returns Devolver canciones random
   */
  getAllRandom$(): Observable<any> {
    return this.dataTracksRandom$
  }
}
