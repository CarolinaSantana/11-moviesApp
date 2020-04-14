import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesService } from './services/movies.service';
import { SearchComponent } from './components/search/search.component';
import { ImageMoviePipe } from './pipes/image-movie.pipe';
import { GalleryComponent } from './components/home/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MovieComponent,
    SearchComponent,
    ImageMoviePipe,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
