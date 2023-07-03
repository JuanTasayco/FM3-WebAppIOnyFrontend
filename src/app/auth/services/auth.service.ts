import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { UserClass, User } from '../interface/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _usuario!: UserClass;

  get usuario() {
    return { ...this._usuario };
  }

  registrarUsuario(email: string, password: string) {
    return this.http
      .post<User>(`${this.baseUrl}/auth/create`, { email, password })
      .pipe(
        tap(),
        map((resp) => {
          localStorage.setItem('key', resp.token!);
          return true;
        }),
        catchError((err) => of(err.error.message))
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<User>(`${this.baseUrl}/auth/login`, { email, password })
      .pipe(
        tap(),
        map((resp) => {
          localStorage.setItem('key', resp.token!);
          return true;
        }),
        catchError((err) => of(err.error.message))
      );
  }

  revalidarToken(): Observable<boolean> {
    const token = localStorage.getItem('key');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
    return this.http
      .get<UserClass>(`${this.baseUrl}/auth/validate`, { headers })
      .pipe(
        map((response) => true),
        catchError((error) => of(false))
      );
  }

  constructor(private http: HttpClient) {}
}
