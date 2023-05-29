import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'app/services/project.service';
@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent {
  data: any;
  id: any;
  constructor(private projectService: ProjectService, private route: ActivatedRoute, private route1:Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    organization: new FormControl('', [Validators.required]),
    projectManager: new FormControl('', [Validators.required]),
    startDate: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    endDate: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    projectType: new FormControl('', [Validators.required]),
    editorId: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    this.data = this.profileForm.value;
    alert("Project is added")
    this.projectService.saveProjectData(this.data).subscribe((data) => 
    {
      console.log(data),
      this.goToProjectList()}
    );
  }
  goToProjectList(){
    this.route1.navigate(['/projects']);
  }
 get name() {
    return this.profileForm.get('name')
  }
  get organization() {
    return this.profileForm.get('organization')
  }
  get projectManager() {
    return this.profileForm.get('projectManager')
  }
  get location() {
    return this.profileForm.get('location')
  }
  get editorId() {
    return this.profileForm.get('editorId')
  }
  get startDate() {
    return this.profileForm.get('startDate')
  }
  get endDate() {
    return this.profileForm.get('endDate')
  }
  get description() {
    return this.profileForm.get('description')
  }
  get projectType() {
    return this.profileForm.get('projectType')
  }
}
