import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Movies } from '../interface/info.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WebAppService {
  baseUrl: string = environment.baseUrl; //con JsonServer

  getMovies(): Observable<Movies[]> {
    return this.webService
      .get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(
        map((movies) => movies.filter((movie) => movie.category == 'Movie'))
      );
  }

  getTvSeries(): Observable<Movies[]> {
    return this.webService
      .get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(
        map((movies) => movies.filter((movie) => movie.category == 'TV Series'))
      );
  }

  getMoviesByBookmark(): Observable<Movies[]> {
    return this.webService
      .get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(
        map((movies) =>
          movies.filter(
            (movie) => movie.category == 'Movie' && movie.isBookmarked
          )
        )
      );
  }

  getTvSeriesByBookmark(): Observable<Movies[]> {
    return this.webService
      .get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(
        map((movies) =>
          movies.filter(
            (movie) => movie.category == 'TV Series' && movie.isBookmarked
          )
        )
      );
  }

  getTrendings(): Observable<Movies[]> {
    return this.webService
      .get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(map((movies) => movies.filter((movie) => movie.isTrending)));
  }

  getRecommended(): Observable<Movies[]> {
    return this.webService
      .get<Movies[]>(`${this.baseUrl}/movies`)
      .pipe(map((movies) => movies.filter((movie) => !movie.isTrending)));
  }

  getMovieByTitle(movie: string): Observable<Movies[]> {
    return this.webService.get<Movies[]>(`${this.baseUrl}/movies/${movie}`);
  }

  updateBookmarlByMovie(id: string): Observable<Movies> {
    return this.webService.patch<Movies>(
      `${this.baseUrl}/movies/favorite/${id}`,
      {}
    );
  }

  constructor(private webService: HttpClient) {}
}
