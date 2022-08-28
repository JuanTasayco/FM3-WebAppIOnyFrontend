import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-bookmarked-movies',
  templateUrl: './bookmarked-movies.component.html',
  styleUrls: ['./bookmarked-movies.component.css']
})
export class BookmarkedMoviesComponent implements OnInit {
  moviesBookmarked : Movies [] = [];
  tvSeriesBookmarked : Movies [] = [];
  

  ngOnInit(): void {
    this.webService.getMoviesByBookmark()
    .subscribe(movies=>{
     this.moviesBookmarked = movies;
    })

    this.webService.getTvSeriesByBookmark()
    .subscribe(movies=>{
     this.tvSeriesBookmarked= movies;
    })
  }

  constructor(private webService: WebAppService) { }

}
