import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('crm_token');
  if (token) {
    const reqTOKEN = req.clone({
      setHeaders: {
        'authorization': token
      }
    });
    return next(reqTOKEN);
  }
  return next(req);
};
