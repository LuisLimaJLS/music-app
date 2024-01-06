import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { SearchService } from '@modules/history/services/search.service';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  standalone: true,
  imports: [SearchComponent, PlayListBodyComponent, CommonModule],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {
  listResults$: Observable<any> = of([])
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event: string): void {
    //se usa el servicio para buscar la data
    this.listResults$ = this.searchService.searchTracks$(event)

  }
}
