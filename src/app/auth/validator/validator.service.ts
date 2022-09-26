import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {

  emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";


  contraseñasIguales(password: string, passwordRepeat: string) {
    return (grupoFormulario: AbstractControl) => {
      const password1 = grupoFormulario.get(password)?.value;
      const password2 = grupoFormulario.get(passwordRepeat)?.value;

      if (password1 !== password2) {
        grupoFormulario.get(passwordRepeat)?.setErrors({ noIguales: true })
        return { noIguales: true }     // SI LAS CONTRAS NO SON IGUALES RETORNAN UN ERROR
      }
      grupoFormulario.get(passwordRepeat)?.setErrors(null)
      return null;
    }
  }


  constructor() { }
}
