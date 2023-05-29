

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from 'app/employee/employee';
import { Profile } from 'app/profile';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private httpClient: HttpClient) {
  }
  postURL = "http://localhost:9090/beat/api/v1/employee";
  saveEmployeeData(data:any)
  {
    console.log(data);
    return this.httpClient.post(this.postURL+'/create',data);
  }
  getEmployeeList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>('http://localhost:9090/beat/api/v1/employee/get');
  }
  getEmployeeById(id: number): Observable<Profile>{
    return this.httpClient.get<Profile>('http://localhost:9090/beat/api/v1/employee/get/'+id);
  }
  updateEmployee(id: number, emp:Profile ): Observable<Object>{
    return this.httpClient.put('http://localhost:9090/beat/api/v1/employee/update', emp);
  }

  getEmployeeHistoryById(id: number): Observable<History>{
    return this.httpClient.get<History>('http://localhost:9090/beat/api/v1/employee/history/'+id);
  }

}