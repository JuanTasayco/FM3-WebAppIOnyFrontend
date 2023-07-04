import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
/* 
import Swal from 'sweetalert2/dist/sweetalert2.js' */
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { ValidatorService } from '../../validator/validator.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginFormulario: FormGroup = this.fb.group({
    email: ["juantasayco266@gmail.com", [Validators.required, Validators.pattern(this.validatorService.emailPattern)],],
    password: ["123456", [Validators.required, Validators.minLength(6)]]
  })


  get emailErrorMsg(): string {
    const errors = this.loginFormulario.get("email")?.errors;
    if (errors?.["required"]) {
      return "Can't be empty";
    } else if (errors?.["pattern"]) {
      return "Incorrect mail format";
    } else {
      return "";
    }
  }

  get passwordErrorMsg(): string {
    const errors = this.loginFormulario.get("password")?.errors;
    if (errors?.["required"]) {
      return "Can't be empty";
    } else if (errors?.["minlength"]) {
      return "Minimum of 6 characters is required";
    } else {
      return "";
    }
  }

  validarCampoFormularioVacio(campo: string): boolean {
    return this.loginFormulario.get(`${campo}`)?.invalid! && this.loginFormulario.get(`${campo}`)?.touched!
  }

  login() {

    if (this.loginFormulario.invalid) {
      this.loginFormulario.markAllAsTouched();
    } else {
      console.log('formulario resultado', this.loginFormulario.value)
      const { email, password } = this.loginFormulario.value;
      this.authService.login(email, password)
        .subscribe(resp => {
          if (resp === true) {
            this.route.navigateByUrl("/web-app/principal")
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: resp,
            })
          }
        })
    }

  }



  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private validatorService: ValidatorService) { }
}
