import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Hierarchy } from 'app/hierarchy/hierarchy';

@Injectable({
  providedIn: 'root'
})
export class HierarchyService {

  constructor(private http:HttpClient) { }

  getHierarchy(id:number){
    return this.http.get<Hierarchy>("http://localhost:9090/beat/api/v1/employee/getHierarchy/"+id);
  }


 
}
