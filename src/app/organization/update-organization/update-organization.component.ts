import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from 'app/services/organization.service';
import { organization } from '../organization';

@Component({
  selector: 'app-update-organization',
  templateUrl: './update-organization.component.html',
  styleUrls: ['./update-organization.component.css']
})
export class UpdateOrganizationComponent {
  oid: any;
  data: any;
  org :organization=new organization();
  constructor(private orgService: OrganizationService,
    private route: ActivatedRoute,
    private router: Router) { }
    orgForm = new FormGroup({
      id: new FormControl(''),
      orgName: new FormControl('', []),
      location: new FormControl('', []),
      owner: new FormControl('', []),
      parentOrg: new FormControl('', []),
      ownerEmpId: new FormControl('', []),
    });
  ngOnInit(): void {
    this.oid = this.route.snapshot.params['id'];

    this.orgService.getOrganizationById(this.oid).subscribe(data => {
      this.org = data;
    }, error => console.log(error));
  }
  // orgForm.controls.id.setValue(org.id);
  // set orgName(orgName: any){
  //   orgName=this.org.orgName;
  // }
  
  // get owner() {
  //   return this.orgForm.get('owner')
  // }
  // get parentOrg() {
  //   return this.orgForm.get('parentOrg')
  // }
  // get location() {
  //   return this.orgForm.get('location')
  // }
  // get ownerEmpId() {
  //   return this.orgForm.get('ownerEmpId')
  // }
  onSubmit(){
    this.data = this.orgForm.value;
    if(this.data.id == 0){
      this.data.id = this.org.id;
    }
    if(this.data.orgName == 0){
      this.data.orgName = this.org.orgName;
    }
    if(this.data.location == 0){
      this.data.location = this.org.location;
    }
    if(this.data.owner == 0){
      this.data.owner = this.org.owner;
    }
    if(this.data.ownerEmpId == 0){
      this.data.ownerEmpId = this.org.ownerEmpId;
    }
    if(this.data.parentOrg == 0){
      this.data.parentOrg = this.org.parentOrg;
    }
    
    console.log(this.data);
    alert("Project is updated")
    this.orgService.updateOrganization(this.oid, this.data).subscribe( data =>{
      this.goToOrganizationList();
      console.log(data);
    }
    , error => console.log(error));
  
  }

  goToOrganizationList(){
    this.router.navigate(['/organizations']);
  }
}
