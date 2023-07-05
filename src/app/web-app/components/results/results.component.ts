import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  Renderer2,
} from '@angular/core';
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
    this.webService.updateBookmarlByMovie(movie._id ?? '').subscribe((resp) => {
      this.cdr.detectChanges();
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
    private route: ActivatedRoute,
    private ngZone: NgZone,
    private renderer2: Renderer2,
    private cdr: ChangeDetectorRef
  ) {}
}
