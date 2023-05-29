import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HierarchyOrganization } from 'app/hierarchy-organization/hierarchy-organization';


@Injectable({
  providedIn: 'root'
})
export class HierarchyOrganizationService {
  constructor(private http:HttpClient) { }

  getOrganizationHierarchy(id:number){
    return this.http.get<HierarchyOrganization>("http://localhost:9090/beat/api/v1/organization/getHierarchy/"+id);
  }


}
