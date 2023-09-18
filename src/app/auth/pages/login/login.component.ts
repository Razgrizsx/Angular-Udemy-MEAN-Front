import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private router : Router, private auth : AuthService){}

  miFormulario : FormGroup = this.fb.group({
    email: ['test2@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  }
  )

  login(){
    console.log(this.miFormulario.value.password)
    this.auth.login(this.miFormulario.value.email, this.miFormulario.value.password)
      .subscribe(res => {if(res.uid){
        this.router.navigateByUrl('/protected/dashboard')
      }else{
        Swal.fire("Error", res.error.msg, "error")
      }})
  }
}
