import {  NO_ERRORS_SCHEMA,NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisplayTimesheetComponent } from './employee/display-timesheet/display-timesheet.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FilterPipe } from './pipes/filter.pipe';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { EmployeeModule } from './employee/employee.module';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { UpdateprojectComponent } from './project/updateproject/updateproject.component';
import { ViewprojectComponent } from './project/viewproject/viewproject.component';
import { ProjectlistComponent } from './project/projectlist/projectlist.component';
import { CreateOrganizationComponent } from './organization/create-organization/create-organization.component';
import { UpdateOrganizationComponent } from './organization/update-organization/update-organization.component';
import { OrganizationlistComponent } from './organization/organizationlist/organizationlist.component';
import { HierarchyOrganizationComponent } from './hierarchy-organization/hierarchy-organization.component';
import { ViewComponent } from './organization/view/view.component';
import { CreateUpdateComponent } from './employee/create-update/create-update.component';
import { DatePipe } from '@angular/common';
import { EmpUpdateComponent } from './employee/emp-update/emp-update.component';
import { ViewHeirarchyComponent } from './organization/view-heirarchy/view-heirarchy.component';
import { ProfileComponent } from './employee/profile/profile.component';
@NgModule({
  declarations: [
    AppComponent,
    DisplayTimesheetComponent,
    FilterPipe,
    routingComponents,
    HeaderComponent,
    FooterComponent,
    HierarchyComponent,
    CreateprojectComponent,
    UpdateprojectComponent,
    ViewprojectComponent,
    ProjectlistComponent,
    CreateOrganizationComponent,
    UpdateOrganizationComponent,
    OrganizationlistComponent,
    HierarchyOrganizationComponent,
    ViewComponent,
    CreateUpdateComponent,
    EmpUpdateComponent,
    ViewHeirarchyComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    EmployeeModule,
  ],
  providers: [ DatePipe ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  exports: []

})
export class AppModule { }
