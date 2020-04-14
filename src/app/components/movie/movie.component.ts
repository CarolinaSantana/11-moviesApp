import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent implements OnInit {

  movie: any;
  getBackTo: string = '';
  search: string = '';

  constructor( private route: ActivatedRoute,
               private _ms: MoviesService ) { 
    this.route.params.subscribe( params => {
      this.getBackTo = params['page'];
      if( params['search'] ){
        this.search = params['search'];
      }
      this._ms.getMovie( params['id'] ).subscribe( movie => this.movie = movie);
    }); 
  }

  ngOnInit(): void {
  }

}
