import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs/Rx';

import { UsuarioService } from './../usuario/usuario.service';

@Injectable()
export class AutenticacaoGuard implements CanActivate {

  constructor(private usuariosService: UsuarioService, private router: Router) { }

  teste: boolean = false;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {

    if (localStorage.getItem('token')) {
      return true;
    }

    this.router.navigate(['/usuario/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
