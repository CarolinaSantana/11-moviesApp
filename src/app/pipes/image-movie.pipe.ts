import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageMovie'
})
export class ImageMoviePipe implements PipeTransform {

  transform( movie: any, poster:boolean = false ): any {
    let url = 'http://image.tmdb.org/t/p/w500';
    if ( !movie ) {
      return 'assets/img/no-image.jpg';
    }
    if ( movie.backdrop_path && !poster) {
      return  url + movie.backdrop_path;
    } else if ( movie.poster_path ) {
       return url + movie.poster_path;
    } else {
      return 'assets/img/no-image.jpg';
    }
  }

}
