import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppLocalService } from '../../services/web-app-local.service';
import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: []
})
export class MoviesComponent implements OnInit {

  movies: Movies[] = [];

  ngOnInit(): void {
    //local
    this.webServiceLocal.getMovies()
      .subscribe(movies => {
        this.movies = movies;
      })

    //jsonServer
    /*  this.webService.getMovies()
       .subscribe(movies => {
         this.movies = movies;
       }) */
  }


  constructor(private webService: WebAppService,
    private webServiceLocal: WebAppLocalService) { }




}
