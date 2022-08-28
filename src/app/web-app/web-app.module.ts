import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAppRoutingModule } from './web-app-routing.module';
import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';
import { BookmarkedMoviesComponent } from './pages/bookmarked-movies/bookmarked-movies.component';
import { SharedModule } from '../shared/shared.module';
import { PrincipalComponent } from './pages/principal/principal.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SearchComponent,
    ResultsComponent,
    ImagenesPipe,
    HomeComponent,
    PrincipalComponent,
    MoviesComponent,
    TvSeriesComponent,
    BookmarkedMoviesComponent,
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule,
    SharedModule,
  ],
})
export class WebAppModule { }
