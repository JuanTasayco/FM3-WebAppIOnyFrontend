import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable, tap } from 'rxjs';
import { Movies } from '../interface/info.interface';

@Injectable({
  providedIn: 'root'
})
export class WebAppService {

  baseUrl: string = "http://localhost:3000"

  getMovies(): Observable<Movies[]> {
    return this.webService.get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(
        map(movies => movies.filter(movie => movie.category == "Movie"))
      );
  }

  getTvSeries(): Observable<Movies[]> {
    return this.webService.get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(
        map(movies => movies.filter(movie => movie.category == "TV Series"))
      );
  }

  getMoviesByBookmark(): Observable<Movies[]> {
    return this.webService.get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(
        map(movies => movies.filter(movie => movie.category == "Movie" && movie.isBookmarked))
      );
  }

  getTvSeriesByBookmark(): Observable<Movies[]> {
    return this.webService.get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(
        map(movies => movies.filter(movie => movie.category == "TV Series" && movie.isBookmarked))
      );
  }

  getTrendings(): Observable<Movies[]> {
    return this.webService.get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(
        map(movies => movies.filter(movie => movie.isTrending))
      );
  }

  getRecommended(): Observable<Movies[]> {
    return this.webService.get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(
        map(movies => movies.filter(movie => !movie.isTrending))
      );
  }

  updateBookmarlByMovie(movie: Movies): Observable<Movies> {
    return this.webService.put<Movies>(`${this.baseUrl}/movies/${movie.title}`, movie)
  } 

  constructor(private webService: HttpClient) { }
}
