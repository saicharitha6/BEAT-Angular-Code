import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'app/services/employee.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent {
  dropdownList :{ item_id: number, item_text: any }[] = [];
  selectedItems = [];
  dropdownSettings = {};
  categories = [
    {id: 1, name: 'Laravel'},
    {id: 2, name: 'Codeigniter'},
    {id: 3, name: 'React'},
    {id: 4, name: 'PHP'},
    {id: 5, name: 'Angular'},
    {id: 6, name: 'Vue'},
    {id: 7, name: 'JQuery', disabled: true},
    {id: 8, name: 'Javascript'},
  ];
  selected = [
    {id: 5, name: 'Angular'},
    {id: 6, name: 'Vue'}
  ];
  public countries: { value: string; text: string; }[] = [];
  data: any;
  id: any;
  constructor(private employeeService : EmployeeService, private route :ActivatedRoute, private route1 :Router, public httpClient: HttpClient){}
   ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
  }
  empForm = new FormGroup({
    name : new FormControl('',[Validators.required] ),
    location : new FormControl('',[Validators.required] ),
    gender : new FormControl('',[Validators.required] ),
    dateOfJoining : new FormControl('',[Validators.required]),
    designation : new FormControl('',[Validators.required] ),
    category : new FormControl('',[Validators.required] ),
    projectId : new FormControl('',[Validators.required] ),
    leadId : new FormControl('',[Validators.required] ),
    organizationId : new FormControl('',[Validators.required] ),
    clientCounterpartId : new FormControl('',[Validators.required] ),
    band :  new FormControl('',[Validators.required] ),
    dateOfLeaving: new FormControl('',[])
  });
  onSubmit() {
    this.data = this.empForm.value;
    alert("employee is added")
    this.employeeService.saveEmployeeData(this.data).subscribe((data) =>{
      console.log(data);
      this.goToProfile();
    }
    );
  }
  goToProfile(){
    this.route1.navigate(['/profile']);
  }
 get name() {
    return this.empForm.get('name')
  }
  get location() {
    return this.empForm.get('location')
  }
  get gender() {
    return this.empForm.get('gender')
  }
  get designation() {
    return this.empForm.get('designation')
  }
  get category() {
    return this.empForm.get('category')
  }
  get projectId() {
    return this.empForm.get('projectId')
  }
  get leadId() {
    return this.empForm.get('leadId')
  }
  get organizationId() {
    return this.empForm.get('organizationId')
  }
  get clientCounterpartId() {
    return this.empForm.get('clientCounterpartId')
  }
  get band() {
    return this.empForm.get('band')
  }
  get dateOfJoining(){
    return this.empForm.get('dateOfJoining')
  }
}