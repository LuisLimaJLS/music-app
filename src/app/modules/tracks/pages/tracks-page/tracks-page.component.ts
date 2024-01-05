import { Component } from '@angular/core';
import { SectionGenericComponent } from '@shared/components/section-generic/section-generic.component';

@Component({
  selector: 'app-tracks-page',
  standalone: true,
  imports: [SectionGenericComponent],
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent {

}
