import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private apikey:string = '';
  private urlMoviedb:string = 'https://api.themoviedb.org/3';
  movies: any[] = [];

  constructor( private http: HttpClient ) { }

  getBillboard() {
    let from = new Date();
    let to = new Date();
    to.setDate( to.getDate() + 7);
    let fromStr = `${ from.getFullYear()}-${ from.getMonth()+1 }-${ from.getDate() }`;
    let toStr = `${ to.getFullYear()}-${ to.getMonth()+1 }-${ to.getDate() }`;
    let url = `${ this.urlMoviedb }/discover/movie?api_key=${ this.apikey }&language=es&primary_release_date.gte=${ fromStr }&primary_release_date.lte=${ toStr }`;
    return this.http.get( url ).pipe( map( (res: any )=> res.results ) );
  }

  getPopulars() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.get( url ).pipe( map( (res: any )=> res.results ) );
  }

  getKidsPopulars() {
    let url = `${ this.urlMoviedb }/discover/movie?sort_by=popularity.desc&certification_country=ES&certification.lte=G&api_key=${ this.apikey }&language=es`;
    return this.http.get( url ).pipe( map( (res: any )=> res.results ) );
  }

  findMovie( text:string ) {
    let url = `${ this.urlMoviedb }/search/movie?query=${ text }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es`;
    return this.http.get( url ).pipe(map( (res: any)  =>{
      this.movies = res.results;
      return res.results}));
  }

  getMovie( id: string ) {
    let url = `${ this.urlMoviedb }/movie/${ id }?api_key=${ this.apikey }&language=es`;
    return this.http.get( url ).pipe( map( (res: any )=> res ) );
  }

}
