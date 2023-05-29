import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'app/services/project.service';
import { Project } from '../project';

@Component({
  selector: 'app-updateproject',
  templateUrl: './updateproject.component.html',
  styleUrls: ['./updateproject.component.css']
})
export class UpdateprojectComponent {
  data: any;
   pid: any;
 
  project: Project = new Project();
  constructor(private projectService: ProjectService,private route: ActivatedRoute, private router: Router) { }
  profileForm = new FormGroup({
    id:new FormControl('',[]),
    name: new FormControl('', []),
    organization: new FormControl('', []),
    projectManager: new FormControl('', []),
    startDate: new FormControl('', []),
    location: new FormControl('', []),
    endDate: new FormControl('', []),
    description: new FormControl('', []),
    projectType: new FormControl('', []),
    editorId: new FormControl('', []),
  });
 
  ngOnInit(): void {
    this.pid = this.route.snapshot.params['id'];
    this.projectService.getProjectById(this.pid).subscribe(data => {
      this.project = data;
    }, error => console.log(error));
  }

  onSubmit() {
    this.data = this.profileForm.value;
    if(this.data.id == 0){
      this.data.id = this.project.id;
    }
    if(this.data.name == 0){
      this.data.name = this.project.name;
    }
    if(this.data.organization == 0){
      this.data.organization = this.project.organization;
    }
    if(this.data.location == 0){
      this.data.location = this.project.location;
    }
    if(this.data.projectManager == 0){
      this.data.projectManager = this.project.projectManager;
    }
    if(this.data.startDate == 0){
      this.data.startDate = this.project.startDate;
    }
    if(this.data.endDate == 0){
      this.data.endDate = this.project.endDate;
    }
    if(this.data.description == 0){
      this.data.description = this.project.description;
    }
    if(this.data.projectType == 0){
      this.data.projectType = this.project.projectType;
    }
    if(this.data.editorId == 0){
      this.data.editorId = this.project.editorId;
    }
    
    
    console.log(this.data);
    alert("Project is updated")
    this.projectService.updateProject(this.pid, this.data).subscribe( data =>{
      this.goToProjectList();
      console.log(data);
    }
    , error => console.log(error));
  }

  goToProjectList() {
    this.router.navigate(['/projects']);
  }
}
