import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {AuthService} from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  // authservice -> where we find if the user is authenticated or not
  constructor(private authService: AuthService, private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
  {
    // whether the user is authenticated needs the Injectable decorator
    if (this.authService.isAuth()) {
      return true;
    //   if it fails redirect the user
    }else{
      this.router.navigate(['/login']);
    }

  }
}
