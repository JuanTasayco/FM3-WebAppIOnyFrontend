import { Component, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';
import { WebAppService } from '../../services/web-app.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  moviesTrendings : Movies [] = [];
  moviesRecommended : Movies [] = [];

  ngOnInit(): void {
    this.webService.getTrendings()
    .subscribe(movies=>{
     this.moviesTrendings = movies;
    })

    this.webService.getRecommended()
    .subscribe(movies=>{
     this.moviesRecommended= movies;
    })

  }

  constructor(private webService: WebAppService) { }

}
