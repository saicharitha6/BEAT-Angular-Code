import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'app/helpers/employee';
import { shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  access! : any;
  accessString !: string;
  accessArray:any[]=[];
  constructor(private http:HttpClient) {}

  isValidUser(){
    if(localStorage.getItem('jwt'))
        return true;
   return false;
  }

  canUpdateEmployee(){ 
    if(localStorage.getItem('accessID')!=null)
    {
    this.access=localStorage.getItem('accessID');
    if(this.access[2]==='1')
          return true;
    }

    return false;
  }

  canUpdateProject(){
    if(localStorage.getItem('accessID')!=null){
      this.access=localStorage.getItem('accessID');
      if(this.access[12]==='1')
           return true;
    }

    return false;
  }

  canUpdateOrg(){
    if(localStorage.getItem('accessID')!=null){
      this.access=localStorage.getItem('accessID');
      if(this.access[7]==='1')
           return true;
    }

    return false;
  }

  canCreateEmp(){
    if(localStorage.getItem('accessID')!=null){
      this.access=localStorage.getItem('accessID');
      if(this.access[0]==='1')
           return true;
    }

    return false;
  }

  canCreateOrg(){
    if(localStorage.getItem('accessID')!=null){
      this.access=localStorage.getItem('accessID');
      if(this.access[5]==='1')
           return true;
    }

    return false;
  }

  canCreateProject(){
    if(localStorage.getItem('accessID')!=null){
      this.access=localStorage.getItem('accessID');
      if(this.access[10]==='1')
           return true;
    }

    return false;
  }
   
 
  login(email:string, password:string ) {
    return this.http.post<Body>('http://localhost:9090/beat/api/v1/login/user', {email, password}).pipe(shareReplay())
  }





  getProfileDetails(){
    return this.http.get<Employee[]>("http://localhost:9090/beat/api/v1/employee/get").pipe(shareReplay());
  }
}