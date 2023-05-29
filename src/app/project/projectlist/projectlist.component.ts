import { Component } from '@angular/core';
import { ProjectService } from 'app/services/project.service';
import { Router } from '@angular/router';
import { SharedService } from 'app/services/shared.service';
import { Project } from '../project';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.css']
})
export class ProjectlistComponent {
  projects: Project[]=[];
  updateValue! :string;
  disableProject! :string;

  constructor(private projectService: ProjectService,
    private router: Router, private sharedService: SharedService) { }

  ngOnInit(): void {

    this.sharedService.currentProjectDisable.subscribe(x=>
      this.disableProject=x)
    this.sharedService.currentProjectUpdate.subscribe(x=>
      this.updateValue=x);
    this.getProjects();
  }

  private getProjects(){
    this.projectService.getProjectsList().subscribe(data => {
      this.projects = data;
      console.log(this.projects)
    });
  }

  projectDetails(id: number){
    this.router.navigate(['view-project', id]);
  }

  updateProject(id: number){
    this.router.navigate(['update-project', id]);
  }

  projectDisable(id: number){
    this.projectService.DisableProject(id);
  }

  // deleteProject(id: number){
  //   this.projectService.deleteProject(id).subscribe( data => {
  //     console.log(data);
  //     this.getProjects();
  //   })
  //}
}
