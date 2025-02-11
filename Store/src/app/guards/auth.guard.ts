import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem(environment.tokenName);
  if (!token) {
    router.navigateByUrl('/login');
    return false;
  }
  return true;
};
