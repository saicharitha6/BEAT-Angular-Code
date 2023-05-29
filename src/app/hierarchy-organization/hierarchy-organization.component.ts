import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { HierarchyOrganizationService } from 'app/services/hierarchy-organization.service';
@Component({
  selector: 'app-hierarchy-organization',
  templateUrl: './hierarchy-organization.component.html',
  styleUrls: ['./hierarchy-organization.component.css']
})
export class HierarchyOrganizationComponent {
  organizations : any=[];
  OrganizationLead: any=[];
  currentOrganization: any=[];
  childrenOrganization: any=[];
  id: any;
  constructor(public router : ActivatedRoute, public route: Router,private hos: HierarchyOrganizationService){}
  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.hos.getOrganizationHierarchy(this.id).subscribe((x)=>{
      this.organizations=x;
      this.OrganizationLead=this.organizations[0];
      this.currentOrganization=this.organizations[1];
      for(let i=2;i<this.organizations.length;i++)
        this.childrenOrganization.push(this.organizations[i]);
      });
  }
  getDetails(id:number){
    this.route.navigate(['view-organization/',id])
  }
}
