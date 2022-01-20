import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private router: Router,
    private usuarioService: UsuarioService){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
      console.log("paso por el canActivate");

      return this.usuarioService.validateToken().pipe(
        tap( isAuth => {
          if (!isAuth){
            this.router.navigateByUrl('/login');
          }
        })
      )

  }

}
