import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderUserComponent } from '@shared/components/header-user/header-user.component';
import { MediaPlayerComponent } from '@shared/components/media-player/media-player.component';
import { SideBarComponent } from '@shared/components/side-bar/side-bar.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    RouterOutlet
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
