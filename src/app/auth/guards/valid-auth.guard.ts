import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidAuthGuard implements CanActivate, CanLoad {
  canActivate(): Observable<boolean> | boolean {
    return this.authService.revalidarToken();
  }

  canLoad(): Observable<boolean> | boolean {
    return this.authService.revalidarToken();
  }

  constructor(private authService: AuthService) { }
}


