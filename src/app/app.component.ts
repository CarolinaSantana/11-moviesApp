import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'moviesApp';

  constructor ( public _ms: MoviesService ) {
    this._ms.getPopulars().subscribe();
    
  }
}
