import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signFormulario: FormGroup = this.fb.group({
    email: ["",Validators.required],
    password: ["",Validators.required]
  })

  constructor(private  fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
