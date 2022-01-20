import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginForm } from '../interfaces/login.interface';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

constructor(private http: HttpClient) { }

login ( formData: LoginForm){
  return this.http.post(`${base_url}/login`, formData)
  .pipe(
    tap( (res:any) => localStorage.setItem('token', res.token))
  )
}

logout(){
      localStorage.removeItem('token');
}

validateToken(): Observable<boolean>{
  const token = localStorage.getItem('token') || '';

  return this.http.get(`${base_url}/login/renew`, {
    headers: {
      'x-token': token
    }
  }).pipe(
    tap( (resp:any) => {
      console.log("validateToken");
      resp.token
    }),
    map( resp => true),
    catchError( error => of(false))
  )
}


}
