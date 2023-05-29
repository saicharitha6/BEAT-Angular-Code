import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from 'app/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateEmpGuard implements CanActivate {
  constructor(private authService : AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      
      if(this.authService.canCreateEmp())
            return true;
      
      alert("User cannot List a new Employee, Please contact admin")
      this.router.navigate(['/homepage']);
            return false;
  }
  
}
