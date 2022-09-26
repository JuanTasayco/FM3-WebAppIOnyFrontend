import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppLocalService } from '../../services/web-app-local.service';
import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  moviesTrendings: Movies[] = [];
  moviesRecommended: Movies[] = [];

  ngOnInit(): void {

    this.webServiceLocal.getTrendings()
      .subscribe(movies => {
        this.moviesTrendings = movies
      })

    this.webServiceLocal.getRecommended()
      .subscribe(movies => {
        this.moviesRecommended = movies;
      })

    //jsonServer
    /*    this.webService.getTrendings()
         .subscribe(movies => {
           this.moviesTrendings = movies;
         })
   
       this.webService.getRecommended()
         .subscribe(movies => {
           this.moviesRecommended = movies;
         }) */

  }

  aparecerImg(play: HTMLDivElement) {
    play.classList.add("activo");
  }

  desparecerImg(play: HTMLDivElement) {
    play.classList.remove("activo");
  }






  responsiveOptions;

  constructor(private webService: WebAppService, private webServiceLocal: WebAppLocalService) {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 2,
        numScroll: 1
      }
    ];

  }

}
