import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Movies } from '../interface/info.interface';

@Injectable({
  providedIn: 'root'
})
export class WebAppLocalService {

  baseUrlJson: string = "https://angularproject1-5c150-default-rtdb.firebaseio.com"


  getAllMovies(): Observable<Movies[]> {
    return this.webServiceLocal.get<Movies[]>(`${this.baseUrlJson}/movies.json`);
  }

  getMovies(): Observable<Movies[]> {
    return this.webServiceLocal.get<Movies[]>(`${this.baseUrlJson}/movies.json`)
      .pipe(
        map(movies => movies.filter(movie => movie.category == "Movie"))
      );
  }

  getTvSeries(): Observable<Movies[]> {
    return this.webServiceLocal.get<Movies[]>(`${this.baseUrlJson}/movies.json`)
      .pipe(
        map(movies => movies.filter(movie => movie.category == "TV Series"))
      )
  }

  getMoviesByBookmark(): Observable<Movies[]> {
    return this.webServiceLocal.get<Movies[]>(`${this.baseUrlJson}/movies.json`)
      .pipe(
        map(movies => movies.filter((movie) => movie.category == "Movie" && movie.isBookmarked))
      );
  }

  getTvSeriesByBookmark(): Observable<Movies[]> {
    return this.webServiceLocal.get<Movies[]>(`${this.baseUrlJson}/movies.json`)
      .pipe(
        map(movies => movies.filter((movie) => movie.category == "TV Series" && movie.isBookmarked))
      );
  }

  getTrendings(): Observable<Movies[]> {
    return this.webServiceLocal.get<Movies[]>(`${this.baseUrlJson}/movies.json`)
      .pipe(
        map(movies => movies.filter((movie) => movie.isTrending))
      );
  }

  getRecommended(): Observable<Movies[]> {
    return this.webServiceLocal.get<Movies[]>(`${this.baseUrlJson}/movies.json`)
      .pipe(
        map(movies => movies.filter((movie) => !movie.isTrending))
      );
  }

  getMovieByTitle(movie: string): Observable<Movies[]> {
    return this.webServiceLocal.get<Movies[]>(`${this.baseUrlJson}/${movie}`)
  }

  updateBookmarlByMovie(movie: Movies, pos: number) {
    return this.webServiceLocal.put<Movies>(`${this.baseUrlJson}/movies/${pos}/.json`, movie)

  }
  constructor(private webServiceLocal: HttpClient) { }
}
/* 
 */