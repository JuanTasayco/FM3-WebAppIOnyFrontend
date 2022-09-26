import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppLocalService } from '../../services/web-app-local.service';
import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css']
})
export class TvSeriesComponent implements OnInit {

  movies: Movies[] = [];


  ngOnInit(): void {

    this.webServiceLocal.getTvSeries()
      .subscribe(movies => {
        this.movies = movies;
      })


    //JsonServer
    /*    this.webService.getTvSeries()
         .subscribe(movies=> {
           this.movies = movies;
         }) */


  }

  constructor(private webService: WebAppService,
    private webServiceLocal: WebAppLocalService) { }
}
