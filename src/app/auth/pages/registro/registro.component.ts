import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(private fb : FormBuilder, private router : Router, private auth : AuthService){}

  

  miFormulario : FormGroup = this.fb.group({
    name: ['test', Validators.required],
    email: ['test@test.com', [Validators.required, Validators.email]],
    password: ['123456', [Validators.required]]
  })

  

  registro(){
    const {name, email, password} = this.miFormulario.value
    console.log(this.miFormulario.value)
    this.auth.register(name, email, password).subscribe(
      res => {if(res.uid){
        this.router.navigateByUrl('/protected/dashboard')
      }else{
        Swal.fire('Error', res.error.msg, 'error')
      }
    }
    )
  }
}
