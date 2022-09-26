import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from '../../../environments/environment'
import { AuthResponse, User } from '../interface/auth.interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _usuario!: User;

  get usuario() {
    return { ...this._usuario };
  }


  login(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.baseUrl}/`, { email, password })
      .pipe(
        tap(),
        map(resp => {
          localStorage.setItem("key", resp.token!);
          return resp.ok
        }),
        catchError(err => of(err.error.msg))
      )
  }

  registrarUsuario(email: string, password: string) {
    return this.http.post<AuthResponse>(`${this.baseUrl}/new`, { email, password })
      .pipe(
        tap(),
        map(resp => {
          localStorage.setItem("key", resp.token!);
          resp.ok
        }),
        catchError(err => of(err.error.msg))
      )
  }


  revalidarToken(): Observable<boolean> {
    const headers = new HttpHeaders()
      .set("x-token", localStorage.getItem("key") || "");
    return this.http.get<AuthResponse>(`${this.baseUrl}`, { headers })
      .pipe(
        map(resp => {
          localStorage.setItem("key", resp.token!);
          this._usuario = {
            email: resp.email!,
            password: resp.uid!
          }
          return resp.ok;
        }),
        catchError(erro => of(false))
      )
  }



  constructor(private http: HttpClient) { }
}
