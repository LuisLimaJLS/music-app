import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, catchError, map, mergeMap, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  private readonly URL = environment.api;

  dataTracksTrending$:Observable<TrackModel[]> = of([])
  dataTracksRandom$:Observable<TrackModel[]> = of([])

  constructor(private httpClient: HttpClient) {

  }



  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
    .pipe(
      map(({ data }: any) => {
        return data
      })
    )
  }


  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 2)),
         //map(({ data }: any) => { //TODO aplicar un filter comun de array
         //  return data.reverse()
         //})
        catchError((err) => {
          //captura el status en el err
          const { status, statusText } = err;
          return of([])
        })
      )
  }

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

}
