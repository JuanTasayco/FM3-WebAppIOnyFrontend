import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppService } from '../../services/web-app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  active: boolean = false;

  @Input('moviesComponent') movies: Movies[] = [];
  allMovies: Movies[] = [];

  ngOnInit(): void {}

  putBookmark(movie: Movies) {
    console.log('movie',movie._id);
    this.webService
      .updateBookmarlByMovie(movie._id ?? '')
      .subscribe((resp) => {});
  }

  aparecerImg(element: HTMLElement) {
    element.classList.add('activo');
  }

  desparecerImg(element: HTMLElement) {
    element.classList.remove('activo');
  }

  constructor(
    private webService: WebAppService,
    private route: ActivatedRoute
  ) {}
}
