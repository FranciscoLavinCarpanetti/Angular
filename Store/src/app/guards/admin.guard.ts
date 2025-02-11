import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import Swal from 'sweetalert2';
import { inject } from '@angular/core';

interface CustomPayload extends JwtPayload {
  userId: string;
  userRole: string;

}
export const adminGuard: CanActivateFn = () => {
  const router = inject(Router)

  const token = localStorage.getItem(environment.tokenName)!;

  const payload = jwtDecode<CustomPayload>(token);
  if (payload.userRole !== 'admin') {
    Swal.fire('Sin autorización', 'No tienes permisos para acceder a esta página', 'warning');
    router.navigateByUrl('/products');
    return false;
  }
  return true;
};
