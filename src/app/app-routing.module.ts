import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidAuthGuard } from './auth/guards/valid-auth.guard';

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "web-app",
    loadChildren: () => import("./web-app/web-app.module").then(m => m.WebAppModule),
    canActivate: [ValidAuthGuard],
    canLoad: [ValidAuthGuard]
  },

  {
    path: "**",
    redirectTo: "auth"
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
