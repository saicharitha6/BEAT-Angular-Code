import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Profile} from './profile';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http:HttpClient) { }

  getEmpDetailsById(id:number){
    return this.http.get<Profile>("http://localhost:9090/beat/api/v1/employee/get/"+id);
  }

  DisableEmployee(id:number){
    return this.http.get<any>('http://localhost:9090/beat/api/v1/employee/disable/'+id);
  }
}
