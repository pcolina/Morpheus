import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formSubmitted = false;

  public loginForm = this.fb.group({
    email: [localStorage.getItem('email') || '', Validators.required],
    password: ['', Validators.required],
    remember:[ false ]
  });

  constructor(private fb: FormBuilder, private usuarioService: UsuarioService, private router: Router  ) { }

  ngOnInit(): void {
    console.log("init");
  }

  login( ){
    this.usuarioService.login( this.loginForm.value )
    .subscribe( res=>{
      const remember = this.loginForm.get('remember')?.value;

      if (remember){
        localStorage.setItem('email',  this.loginForm.get('email')?.value)
      }else{
        localStorage.removeItem('email');
      }

      this.router.navigateByUrl('/');

    }, ( error ) => {
      console.log("error");
      Swal.fire({
        title: 'Error!',
        text: 'That user does not exist',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    })

  }
}
