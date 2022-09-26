import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';
import { ValidatorService } from '../../validator/validator.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signFormulario: FormGroup = this.fb.group({
    email: ["test10@test.com", [Validators.required, Validators.pattern(this.validatorService.emailPattern)],],
    password: ["123456", [Validators.required, Validators.minLength(6)]],
    passwordRepeat: ["123456", [Validators.required]]
  }, {

    validators: [this.validatorService.contraseñasIguales('password', 'passwordRepeat')]               // OPCIONES QUE SE ENVÍAN AL FORM GROUP, TODAS LAS VALIDACIONES QUE QUIERO AGREGAR AL SIGNFORMULARIO DE ARRIBA
  })

  // falta agregar al html y falta hacer validacion comparacion de contraseñas
  validarCampoFormularioVacio(campo: string): boolean {
    return this.signFormulario.get(`${campo}`)?.invalid! && this.signFormulario.get(`${campo}`)?.touched!
  }

  get emailErrorMsg(): string {
    const errors = this.signFormulario.get("email")?.errors;
    if (errors?.["required"]) {
      return "Can't be empty";
    } else if (errors?.["pattern"]) {
      return "Incorrect mail format";
    } else {
      return "";
    }
  }

  get passwordErrorMsg(): string {
    const errors = this.signFormulario.get("password")?.errors;
    if (errors?.["required"]) {
      return "Can't be empty";
    } else if (errors?.["minlength"]) {
      return "Minimum of 6 characters is required";
    } else {
      return "";
    }
  }

  crearUsuario() {
    const { email, password } = this.signFormulario.value;

    if (this.signFormulario.invalid) {
      this.signFormulario.markAllAsTouched();
    } else {
      this.authService.registrarUsuario(email, password)
        .subscribe(resp => {
          if (resp === true) {
            Swal.fire(
              'Completado!',
              'Registrado Correctamente!',
              'success'
            )
            this.route.navigate(["/auth/login"])

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
    private validatorService: ValidatorService,
    private route: Router) { }

  ngOnInit(): void {
  }

}
