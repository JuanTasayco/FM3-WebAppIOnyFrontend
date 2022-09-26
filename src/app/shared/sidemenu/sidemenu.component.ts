import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';

export enum Routes {
  PRINCIPAL_PAGE = "principal",
  MOVIES_PAGE = "movies",
  TV_SERIES_PAGE = "tvSeries",
  BOOKMARKED = "bookmarked"
}

const BASE_ROUTE_URL = "/web-app/"

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  fillActive: boolean = false;

  ngOnInit(): void {
  }

  goToSpecificRoute(route: string) {
    return `${BASE_ROUTE_URL}${route}`
  }

  get routes(): typeof Routes {
    return Routes;
  }

  get usuario() {
    return this.authService.usuario;
  }

  logout(){
    localStorage.removeItem("key");
    this.router.navigateByUrl("/auth/login")
  }

  constructor(private authService: AuthService,
    private router : Router) { }
}
