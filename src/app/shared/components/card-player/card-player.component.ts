import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { ImgBrokenDirective } from '@shared/directives/img-broken.directive';

@Component({
  selector: 'app-card-player',
  standalone: true,
  imports: [
    CommonModule,
    ImgBrokenDirective
  ],
  templateUrl: './card-player.component.html',
  styleUrl: './card-player.component.css'
})
export class CardPlayerComponent {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = { _id: 0, name: '', album: '', url: '', cover: '' };
  constructor() { }
  //constructor(private multimediaService: MultimediaService) { }

  ngOnInit(): void {
  }

  sendPlay(track: TrackModel): void {
    //this.multimediaService.trackInfo$.next(track)
  }

}
