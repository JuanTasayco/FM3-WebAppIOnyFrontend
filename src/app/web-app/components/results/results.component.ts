import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { Movies } from '../../interface/info.interface';
import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input("moviesComponent") movies: Movies[] = [];



  ngOnInit(): void {
  }


  mostrar(movie: Movies) {

    movie.isBookmarked = !movie.isBookmarked
   
    this.webService.updateBookmarlByMovie(movie)
      .subscribe(movie => {
      })

  }


  constructor(private webService: WebAppService) { }
}
