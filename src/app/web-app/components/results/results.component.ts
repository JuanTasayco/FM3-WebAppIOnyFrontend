import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultsComponent implements OnInit {
  active: boolean = false;
  @Input('moviesComponent') movies: Movies[] = [];
  @ViewChild('svgIconBlockMovie') svgIconMovie!: ElementRef;
  allMovies: Movies[] = [];

  ngOnInit(): void {}

  async clickPutBookmark(movie: Movies) {
    this.webService
      .updateBookmarlByMovie(movie._id || '')
      .subscribe((movieResult) => {
        /* actualizar array para que angular pueda actualizar el modelo sin recargar la página */
        const posIndex = this.movies.findIndex((a) => a._id == movieResult._id);
        this.movies[posIndex] = movieResult;
      });
  }

  aparecerImg(element: HTMLElement) {
    element.classList.add('activo');
  }

  desparecerImg(element: HTMLElement) {
    element.classList.remove('activo');
  }

  constructor(
    private webService: WebAppService,
    private renderer2: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}
}
