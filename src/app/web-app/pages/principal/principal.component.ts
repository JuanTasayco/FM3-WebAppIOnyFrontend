import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  moviesTrendings: Movies[] = [];
  moviesRecommended: Movies[] = [];

  ngOnInit(): void {
    this.webService.getTrendings().subscribe((moviesT) => {
      this.moviesTrendings = moviesT;
    });

    this.webService.getRecommended().subscribe((moviesR) => {
      this.moviesRecommended = moviesR;
    });
  }

  aparecerImg(play: HTMLDivElement) {
    play.classList.add('activo');
  }

  desparecerImg(play: HTMLDivElement) {
    play.classList.remove('activo');
  }

  responsiveOptions;

  constructor(private webService: WebAppService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1,
      },
    ];
  }
}
