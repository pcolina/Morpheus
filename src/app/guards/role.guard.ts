import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, ActivationEnd, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, filter, map, tap } from 'rxjs/operators';
import { UsuarioService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor ( private router: Router, private usuarioService: UsuarioService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot)  {

      // The route is active if the user role is in the data from routing file
      const role = this.usuarioService.getRole();
      const resul =  route.data.role.includes(role) ? true : false;

return resul;



  }

}
