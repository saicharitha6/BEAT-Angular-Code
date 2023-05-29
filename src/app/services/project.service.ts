import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from 'app/project/project';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  constructor(private httpClient: HttpClient) {
  }
  postURL = "http://localhost:9090/beat/api/v1/project";
  saveProjectData(data:any)
  {
    console.log(data);
    return this.httpClient.post(this.postURL+'/create',data);
  }
  getProjectsList(): Observable<Project[]>{
    return this.httpClient.get<Project[]>('http://localhost:9090/beat/api/v1/project/get');
  }
  createProject(project:Project):Observable<Object>{
      return this.httpClient.post('http://localhost:9090/beat/api/v1/project/create', project);
  }
  getProjectById(id: number): Observable<Project>{
    return this.httpClient.get<Project>('http://localhost:9090/beat/api/v1/project/get/'+id);
  }
  updateProject(id:number, project: Project): Observable<Object>{
    return this.httpClient.put('http://localhost:9090/beat/api/v1/project/update', project);
  }

  DisableProject(id:number): Observable<Object>{
    return this.httpClient.get<Object>('http://localhost:9090/beat/api/v1/project/disable/'+id);
  }

  getEmployeeList(id: number):Observable<object>{
    return this.httpClient.get<object>('http://localhost:9090/beat/api/v1/project/employees/'+id);
  }
  // deleteProject(id: number): Observable<Object>{
  //   return this.httpClient.delete(`${this.baseURL}/${id}`);
  // }
}




