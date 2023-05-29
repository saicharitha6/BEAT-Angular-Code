import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'app/services/project.service';
import { Project } from '../project';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-viewproject',
  templateUrl: './viewproject.component.html',
  styleUrls: ['./viewproject.component.css']
})
export class ViewprojectComponent {
  id!: number;
  project!: Project
  employee_data :any;
  startDate ! :any;
  endDate ! :any;
  constructor(private datePipe: DatePipe,private route: ActivatedRoute, private projectService: ProjectService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.project = new Project();
    this.projectService.getProjectById(this.id).subscribe( data => {
      this.project = data;
      this.startDate =this.datePipe.transform(this.project.startDate,'yyyy-MM-dd');
      this.endDate =this.datePipe.transform(this.project.endDate, 'yyyy-MM-dd');
    });
    this.projectService.getEmployeeList(this.id).subscribe( data => {
      this.employee_data = data;
    });
  }
}