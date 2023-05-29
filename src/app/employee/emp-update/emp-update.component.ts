import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profile } from 'app/profile';
import { EmployeeService } from 'app/services/employee.service';

@Component({
  selector: 'app-emp-update',
  templateUrl: './emp-update.component.html',
  styleUrls: ['./emp-update.component.css']
})
export class EmpUpdateComponent {
  eid: any;
  data: any;
  emp: Profile = new Profile();
  constructor(private empService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }
  empForm = new FormGroup({
    id: new FormControl('', []),
    name: new FormControl('', []),
    gender: new FormControl('', []),
    location: new FormControl('', []),
    designation: new FormControl('', []),
    category: new FormControl('', []),
    projectId: new FormControl('', []),
    organizationId: new FormControl('', []),
    leadId: new FormControl('', []),
    clientCounterpartId: new FormControl('', []),
    band: new FormControl('', []),
    dateOfLeaving: new FormControl('', [])
  });

  ngOnInit(): void {
    this.eid = this.route.snapshot.params['id'];
    this.empService.getEmployeeById(this.eid).subscribe(data => {
      this.emp = data;
    }, error => console.log(error));
  }
  onSubmit() {
    this.data = this.empForm.value;
    if (this.data.id == 0) {
      this.data.id = this.emp.id;
    }
    if (this.data.name == 0) {
      this.data.name = this.emp.name;
    }
    if (this.data.location == 0) {
      this.data.location = this.emp.location;
    }

    if (this.data.gender == 0) {
      this.data.gender = this.emp.gender;
    }
    if (this.data.designation == 0) {
      this.data.designation = this.emp.designation;
    }
    if (this.data.category == 0) {
      this.data.category = this.emp.category;
    }
    if (this.data.projectId == 0) {
      this.data.projectId = this.emp.projectId;
    }
    if (this.data.organizationId == 0) {
      this.data.organizationId = this.emp.organizationId;
    }
    if (this.data.leadId == 0) {
      this.data.leadId = this.emp.leadId;
    }
    if (this.data.clientCounterpartId == 0) {
      this.data.clientCounterpartId = this.emp.clientCounterpartId;
    }
    if (this.data.band == 0) {
      this.data.band = this.emp.band;
    }
    // if (this.data.dateOfJoining == 0) {
    //   this.data.dateOfJoining = this.emp.dateOfJoining;
    // }
    if (this.data.dateOfLeaving == 0) {
      this.data.dateOfLeaving = this.emp.dateOfLeaving;
    }

    console.log(this.data);
    alert("Employee is updated")
    this.empService.updateEmployee(this.eid, this.data).subscribe(data => {
      console.log(data);
      // this.router.navigate(['profile']);
    }
      , error => console.log(error));

  }



}
