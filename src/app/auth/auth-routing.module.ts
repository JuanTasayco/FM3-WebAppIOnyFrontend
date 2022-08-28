import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent
      },

      {
        path: "sign-up",
        component: SignUpComponent
      },

      {
        path: "**",
        redirectTo: "login"
      }

    ]

  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
