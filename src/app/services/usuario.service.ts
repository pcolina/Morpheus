import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login.interface';
import { tap, map, catchError, filter } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ActivationEnd, Router } from '@angular/router';
import { User } from '../models/user.model';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public user!:User;

constructor(private http: HttpClient, private router: Router) { }

login ( formData: LoginForm){
  console.log("login");
  return this.http.post(`${base_url}/login`, formData)
  .pipe(
    tap( (res:any) => localStorage.setItem('token', res.token)),

  )
}

logout(){
      localStorage.removeItem('token');
      this.router.navigateByUrl('/login')
}

validateToken(): Observable<boolean>{
  const token = localStorage.getItem('token') || '';

  return this.http.get(`${base_url}/login/renew`, {
    headers: {
      'x-token': token
    }
  }).pipe(

    tap( (resp:any) =>  {
      console.log("validateToken2 ", resp);
      const {nombre,
              email,
              password,
              role,
              status,
              createdAt,
              modifiedAt} = resp.user;


      this.user= new User(nombre,
        email,
        password,
        role,
        status,
        createdAt,
        modifiedAt);


    }),
    map( resp => true),
    catchError( error => of(false))
  )
}

getUserByUID(){
  const token = localStorage.getItem('token') || '';

  return this.http.get(`${base_url}/users/detail`, {
    headers: {
      'x-token': token
    }
  })
}

getRole():string{

  return this.user.role;
}


roleVisibility(): Observable<any>{
     return this.router.events
      .pipe(
        tap( data => {console.log('tapeando')}),
        filter( data => data instanceof ActivationEnd),
        filter( (data:any) => data.snapshot.data.role !== undefined),
        map( data => data.includes(this.user.role) ? of(true): of(false)),
      );



}

}
