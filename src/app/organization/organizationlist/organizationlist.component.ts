import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OrganizationService } from 'app/services/organization.service';
import { SharedService } from 'app/services/shared.service';
import { organization } from '../organization';


@Component({
  selector: 'app-organizationlist',
  templateUrl: './organizationlist.component.html',
  styleUrls: ['./organizationlist.component.css']
})
export class OrganizationlistComponent {
  organizations: organization[]=[];
  orgArray : any=[];
  employees : any=[];
  updateOrg! :string;
  disableOrg ! :string;

  constructor(private organizationService: OrganizationService,
    private router: Router,private sharedService : SharedService) { }



  ngOnInit(): void {
    this.sharedService.currentOrgUpdate.subscribe(x=>
      {this.updateOrg=x;
        console.log(this.updateOrg);
       });

    this.sharedService.currentOrgDisable.subscribe(x =>{
      this.disableOrg=x;
    })
    this.getOrganizations();
  }

  private getOrganizations(){
    this.organizationService.getOrganizationsList().subscribe(data => {
      this.orgArray = data;
      console.log(this.orgArray)
    });
  }

  organizationDetails(id: number){
    this.router.navigate(['view-organization', id]);
  }

  updateOrganization(id: number){
    this.router.navigate(['update-organization', id]);
  }



  organizationHierarchy(id :number)
  {
    this.router.navigate(['hierarchy', id]);
  }
  DisableOrganization(id:number){
    this.organizationService.DisableOrg(id);
  }
}
