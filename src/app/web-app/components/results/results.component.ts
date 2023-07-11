import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppService } from '../../services/web-app.service';
import { ActivatedRoute, Router } from '@angular/router';
import { combineLatest, elementAt, firstValueFrom, lastValueFrom } from 'rxjs';

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
    let resultado = await lastValueFrom(
      this.webService.updateBookmarlByMovie(movie._id || '')
    );

    if (resultado.isBookmarked) {
      console.log("hola")
      this.cdr.detectChanges();
    }
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
