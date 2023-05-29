import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateOrgGuard implements CanActivate {
  constructor(private router :Router, private authService : AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    
      if(this.authService.canUpdateOrg())
        return true;

      alert("This user is not entitled to update any organization, please contact admin");
      this.router.navigate(['/homepage']);
      return false;
  }
  
}
