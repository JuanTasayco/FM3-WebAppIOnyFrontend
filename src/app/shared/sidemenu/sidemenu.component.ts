import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }


  toPrincipalPage(){
    this.router.navigate(['/web-app/principal'])
  }
  toMoviesPage(){
    this.router.navigate(['/web-app/movies'])
  }
  toTvSeriesPage(){
    this.router.navigate(['/web-app/tvSeries'])
  }
  toBookmarkedMoviesPage(){
    this.router.navigate(['/web-app/bookmarked'])
  }
}
