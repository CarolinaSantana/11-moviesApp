import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  billboard: any;
  populars: any;
  popularsKidMovies: any;

  constructor( public _ms: MoviesService ) { 
    this._ms.getBillboard().subscribe( data => this.billboard = data );
    this._ms.getPopulars().subscribe( data => this.populars = data );
    this._ms.getKidsPopulars().subscribe( data => this.popularsKidMovies = data );
  }

  ngOnInit(): void {
  }

}
