import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';
import { tap } from 'rxjs';

export const validarTokenGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)
  console.log('Can Activate',route, state)
  return auth.validarToken()
    .pipe(
      tap(valid => {
        if(!valid){
          router.navigateByUrl('/auth')
        }
      })
    )
};
