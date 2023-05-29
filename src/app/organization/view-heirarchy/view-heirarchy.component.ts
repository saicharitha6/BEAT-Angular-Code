import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HierarchyOrganizationService } from 'app/services/hierarchy-organization.service';
import { OrganizationService } from 'app/services/organization.service';
import { organization } from '../organization';
@Component({
  selector: 'app-view-heirarchy',
  templateUrl: './view-heirarchy.component.html',
  styleUrls: ['./view-heirarchy.component.css']
})
export class ViewHeirarchyComponent {
  id: any;
  oldId:any;
  organizations : any=[];
  OrganizationLead: any=[];
  currentOrganization: any=[];
  childrenOrganization: any=[];
  org: organization =new organization();
  slab_data :any;
  showSlabDetails(){
    this.id = this.route.snapshot.params['id'];
   }
  constructor(private route: ActivatedRoute, private router: Router, private orgService: OrganizationService, private hos: HierarchyOrganizationService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.oldId = this.id;
    this.org = new organization();
    this.orgService.getOrganizationById(this.id).subscribe( data => {
      this.org = data;
    });
    this.orgService.getSlabDetails(this.id).subscribe( data => {
      console.log(data)
      this.slab_data = data;
    });
    this.hos.getOrganizationHierarchy(this.id).subscribe((x)=>{
      this.organizations=x;
      console.log(this.organizations);
      this.OrganizationLead=this.organizations[0];
      this.currentOrganization=this.organizations[1];
      for(let i=2;i<this.organizations.length;i++)
        this.childrenOrganization.push(this.organizations[i]);
      });
  }
  ngDoCheck(){
    this.id = this.route.snapshot.params['id'];
    if(this.id !== this.oldId){
      this.oldId = this.id;
      this.org = new organization();
      this.orgService.getOrganizationById(this.id).subscribe( data => {
        this.org = data;
      });
      this.orgService.getSlabDetails(this.id).subscribe( data => {
        console.log(data)
        this.slab_data = data;
      });
      this.hos.getOrganizationHierarchy(this.id).subscribe((x)=>{
        this.organizations=[];
        this.OrganizationLead=[];
        this.currentOrganization=[];
        this.childrenOrganization=[];
        this.organizations=x;
        console.log(this.organizations);
        this.OrganizationLead=this.organizations[0];
        this.currentOrganization=this.organizations[1];
        for(let i=2;i<this.organizations.length;i++)
          this.childrenOrganization.push(this.organizations[i]);
        });
    }
  }
  getDetails(id:number){
    this.router.navigate(['view-organization/',id])
  }
}