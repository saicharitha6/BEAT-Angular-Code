import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrganizationService } from 'app/services/organization.service';

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent {

  data: any;
  id: any;
  constructor(private organizationService: OrganizationService, private route: ActivatedRoute, private route1:Router) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  orgForm = new FormGroup({
    orgName: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    owner: new FormControl('', [Validators.required]),
    parentOrg: new FormControl('', [Validators.required]),
    ownerEmpId: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    this.data = this.orgForm.value;
    alert("organization is added")
    this.organizationService.saveOrganizationData(this.data).subscribe((data) =>{
      console.log(data)
      this.goToOrganizationList()
    }
    );
  }
  goToOrganizationList(){
    this.route1.navigate(['/organizations']);
  }
 get orgName() {
    return this.orgForm.get('orgName')
  }
  get owner() {
    return this.orgForm.get('owner')
  }
  get parentOrg() {
    return this.orgForm.get('parentOrg')
  }
  get location() {
    return this.orgForm.get('location')
  }
  get ownerEmpId() {
    return this.orgForm.get('ownerEmpId')
  }
}