import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppLocalService } from '../../services/web-app-local.service';
import { WebAppService } from '../../services/web-app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  active: boolean = false;

  @Input("moviesComponent") movies: Movies[] = [];
  allMovies: Movies[] = [];

  ngOnInit(): void {
    this.webServiceLocal.getAllMovies()
      .subscribe(resp => {
        this.allMovies = resp;
      })


  }

  putBookmark(movie: Movies) {
    movie.isBookmarked = !movie.isBookmarked
    let posPeli: number = 0;
    for (let [index, mov] of this.allMovies.entries()) {
      if (mov.title.includes(movie.title)) {
        posPeli = index
      }
    }

    this.webServiceLocal.updateBookmarlByMovie(movie, posPeli)
      .subscribe()
  }

  aparecerImg(element: HTMLElement) {
    element.classList.add("activo");
  }

  desparecerImg(element: HTMLElement) {
    element.classList.remove("activo");
  }

  constructor(private webService: WebAppService,
    private webServiceLocal: WebAppLocalService,
    private route: ActivatedRoute) { }
}
