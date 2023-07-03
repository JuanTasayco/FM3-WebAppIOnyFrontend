import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: [],
})
export class MoviesComponent implements OnInit {
  movies: Movies[] = [];

  ngOnInit(): void {
    //local
    this.webService.getMovies().subscribe((movies) => {
      this.movies = movies;
    });
  }

  constructor(private webService: WebAppService) {}
}
