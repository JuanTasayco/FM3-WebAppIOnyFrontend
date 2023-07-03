import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';

import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  AllMovies: Movies[] = [];
  selectedMovies: any[] = [];
  movieNoExist: boolean = false;
  searchActive: boolean = false;

  ngOnInit(): void {
    this.webService.getMovies().subscribe((movies) => {
      this.AllMovies = movies;
    });
  }

  getSendMovie(movie: string) {
    if (!movie) {
      this.searchActive = false;
      this.selectedMovies = [];
      this.movieNoExist = false;
      return;
    }
    this.searchActive = true;
    this.AllMovies.forEach((element) => {
      if (element.title.includes(movie)) {
        this.movieNoExist = false;
        if (!this.selectedMovies.includes(element)) {
          this.selectedMovies.push(element);
        }
      }
      this.movieNoExist = true;
    });
  }

  constructor(private webService: WebAppService) {}
}
