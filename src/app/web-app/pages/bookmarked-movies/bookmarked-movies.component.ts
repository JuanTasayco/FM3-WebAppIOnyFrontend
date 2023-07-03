import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-bookmarked-movies',
  templateUrl: './bookmarked-movies.component.html',
  styleUrls: ['./bookmarked-movies.component.css'],
})
export class BookmarkedMoviesComponent implements OnInit {
  moviesBookmarked: Movies[] = [];
  tvSeriesBookmarked: Movies[] = [];

  ngOnInit(): void {
    this.webService.getMoviesByBookmark().subscribe((moviesMarked) => {
      this.moviesBookmarked = moviesMarked;
    });
    this.webService.getTvSeriesByBookmark().subscribe((seriesMarked) => {
      this.tvSeriesBookmarked = seriesMarked;
    });
  }

  constructor(private webService: WebAppService) {}
}
