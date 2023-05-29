import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateRoleGuard implements CanActivate {
 
  constructor(public authService : AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authService.canUpdateEmployee())
              return true;

      alert("This user is not entitled to update any employee")
      this.router.navigate(['/homepage']);
      
      
      return false;
      
    
   
  }
  
}
