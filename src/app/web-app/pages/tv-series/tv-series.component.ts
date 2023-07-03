import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-tv-series',
  templateUrl: './tv-series.component.html',
  styleUrls: ['./tv-series.component.css'],
})
export class TvSeriesComponent implements OnInit {
  movies: Movies[] = [];

  ngOnInit(): void {
    this.webService.getTvSeries().subscribe((tvSeries) => {
      this.movies = tvSeries;
    });
  }

  constructor(private webService: WebAppService) {}
}
