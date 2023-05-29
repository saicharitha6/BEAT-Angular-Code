import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { organization } from 'app/organization/organization';
@Injectable({
  providedIn: 'root'
})
export class OrganizationService {
  constructor(private httpClient: HttpClient) {
  }
  postURL = "";
  saveOrganizationData(data:any)
  {
    console.log(data);
    return this.httpClient.post('http://localhost:9090/beat/api/v1/organization/create',data);
  }
  getOrganizationsList(): Observable<organization[]>{
    return this.httpClient.get<organization[]>('http://localhost:9090/beat/api/v1/organization/get');
  }
  createOrganization(org: organization): Observable<Object>{
    return this.httpClient.post('http://localhost:9090/beat/api/v1/organization/create', org);
  }
  getOrganizationById(id: number): Observable<organization>{
    return this.httpClient.get<organization>('http://localhost:9090/beat/api/v1/organization/get/'+id);
  }
  updateOrganization(id: number, org: organization): Observable<Object>{
    return this.httpClient.put('http://localhost:9090/beat/api/v1/organization/update', org);
  }
  DisableOrg(id:number): Observable<Object>{
    return this.httpClient.get<Object>('http://localhost:9090/beat/api/v1/organization/disable/'+id);
  }

  getSlabDetails(id: number):Observable<object>{
    return this.httpClient.get<object>('http://localhost:9090/beat/api/v1/organization/slabDetails/'+id);
  }
}