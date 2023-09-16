import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private fb : FormBuilder, private router : Router){}

  miFormulario : FormGroup = this.fb.group({
    name: ['test', Validators.required],
    email: ['test@test.com', Validators.required, Validators.email],
    password: ['123456', [Validators.required]]
  })

  registro(){
    console.log(this.miFormulario.value)
    this.router.navigateByUrl('/protected/dashboard')
  }
}
