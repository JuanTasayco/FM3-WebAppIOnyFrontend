import { Component, Input, OnInit } from '@angular/core';
import { Movies } from '../../interface/info.interface';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  @Input("moviesComponent") movies: Movies[] = [];

  constructor() { }

  ngOnInit(): void {
  }



}
