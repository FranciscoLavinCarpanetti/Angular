import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  let router = inject(Router);
  if (localStorage.getItem('token')) {
    return true;
  } else {
    alert('No tienes permisos para entrar aqui')
    router.navigate(['/login']);
    return false
  }
};
