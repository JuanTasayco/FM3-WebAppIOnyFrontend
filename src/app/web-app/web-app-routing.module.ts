import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarkedMoviesComponent } from './pages/bookmarked-movies/bookmarked-movies.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { HomeComponent } from './pages/home/home.component';
import { TvSeriesComponent } from './pages/tv-series/tv-series.component';
import { PrincipalComponent } from './pages/principal/principal.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    children: [
      {
        path:"principal",
        component: PrincipalComponent
      },
      {
        path: "movies",
        component: MoviesComponent
      },
      {
        path: "tvSeries",
        component: TvSeriesComponent

      },
      {
        path:"bookmarked",
        component: BookmarkedMoviesComponent

      },
      
      {
        path:"**",
        redirectTo:"principal"
      }

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebAppRoutingModule { }
