import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateprojectComponent } from './createproject/createproject.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateprojectComponent } from './updateproject/updateproject.component';
import { ProjectlistComponent } from './projectlist/projectlist.component';
import { ViewprojectComponent } from './viewproject/viewproject.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'app/app-routing.module';
import { EmployeeModule } from 'app/employee/employee.module';


@NgModule({
  declarations: [
    CreateprojectComponent,
    UpdateprojectComponent,
    ProjectlistComponent,
    ViewprojectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    EmployeeModule
  ]
})
export class ProjectModule { }
