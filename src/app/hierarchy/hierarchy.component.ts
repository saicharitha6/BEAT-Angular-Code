import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Hierarchy } from 'app/hierarchy/hierarchy';
import { HierarchyService } from 'app/services/hierarchy.service';
@Component({
  selector: 'app-hierarchy',
  templateUrl: './hierarchy.component.html',
  styleUrls: ['./hierarchy.component.css']
})
export class HierarchyComponent {
  id: any;
  x:any;
    empid: any;
  employees : any=[];
  employeeLead: any=[];
  currentEmployee: any=[];
  childrenEmployee: any=[];
  constructor(public router : ActivatedRoute, public route: Router,private hs: HierarchyService){}
  ngOnInit(): void {
    this.id=localStorage.getItem('empId');
    this.empid=Number(this.id);
    console.log(this.empid);
    this.hs.getHierarchy(this.empid).subscribe((x)=>{
      this.employees=x;
      this.employeeLead=this.employees[0];
      this.currentEmployee=this.employees[1];
      for(let i=2;i<this.employees.length;i++)
        this.childrenEmployee.push(this.employees[i]);
      });
  }
  getDetails(id :number)
  {
    this.route.navigate(['profile/',id]);
  }
}