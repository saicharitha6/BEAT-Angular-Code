import { DatePipe } from '@angular/common';
import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { EmployeeService } from 'app/services/employee.service';
import { History } from './history';
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  historyList : any=[];
  id: any;
  startDate ! :any;
  endDate ! :any;
  constructor(private datePipe: DatePipe,private employeeService: EmployeeService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployeeHistoryById(this.id).subscribe(data => {
      this.historyList = data;
      this.startDate =this.datePipe.transform(this.historyList.startDate,'yyyy-MM-dd');
      this.endDate =this.datePipe.transform(this.historyList.endDate,'yyyy-MM-dd');
  
    });
  }
}