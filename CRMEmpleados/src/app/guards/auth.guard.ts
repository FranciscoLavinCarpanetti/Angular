import { inject } from '@angular/core';
import { UsuariosService } from './../services/usuarios.service';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const usuariosService = inject(UsuariosService);

  // return usuariosService.isLogged() ? true : false;

  if (!usuariosService.isLogged()) {
    const router = inject(Router);
    router.navigateByUrl('/login');

    return false;
  }

  return true;

};
