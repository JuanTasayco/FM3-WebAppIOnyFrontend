import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebAppRoutingModule } from './web-app-routing.module';
import { BookmarkedMoviesComponent } from './pages/bookmarked-movies/bookmarked-movies.component';
import { SharedModule } from '../shared/shared.module';



import { SearchComponent } from './components/search/search.component';
import { ResultsComponent } from './components/results/results.component';
import { ImagenesPipe } from './pipes/imagenes.pipe';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';
import { PrincipalComponent } from './pages/principal/principal.component';


import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';

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
    CarouselModule,
    ButtonModule,
    ToastModule

  ],
})
export class WebAppModule { }
