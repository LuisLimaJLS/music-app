import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {

  //@ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state: string = 'paused'

  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {

    const observer1$ = this.multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('>>')
      }
    )
    this.listObservers$ = [observer1$]
  }


  ngOnDestroy(): void {
    //console.log('se cerro sesion!');
    this.listObservers$.forEach(u => u.unsubscribe())
  }


}
