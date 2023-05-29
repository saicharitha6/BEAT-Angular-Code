import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDetails } from 'app/helpers/employee-details';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient :HttpClient){}


  getSearchedData(name :string):Observable<EmployeeDetails>{
        return this.httpClient.get<EmployeeDetails>('http://localhost:9090/beat/api/v1/employee/search/'+name);
  }



}
