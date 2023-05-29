import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTimesheetComponent } from './employee/display-timesheet/display-timesheet.component';
import { HistoryComponent } from './employee/history/history.component';
import { ProfileComponent } from './employee/profile/profile.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { HeaderComponent } from './Layout/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AddTimesheetComponent } from './employee/add-timesheet/add-timesheet.component';
import { CreateUpdateComponent } from './employee/create-update/create-update.component';
import { CreateprojectComponent } from './project/createproject/createproject.component';
import { ViewprojectComponent } from './project/viewproject/viewproject.component';
import { UpdateprojectComponent } from './project/updateproject/updateproject.component';
import { ProjectlistComponent } from './project/projectlist/projectlist.component';
import { CreateOrganizationComponent } from './organization/create-organization/create-organization.component';
import { OrganizationlistComponent } from './organization/organizationlist/organizationlist.component';
import { SlabChargesComponent } from './organization/slab-charges/slab-charges.component';
import { UpdateOrganizationComponent } from './organization/update-organization/update-organization.component';
import { ViewHeirarchyComponent } from './organization/view-heirarchy/view-heirarchy.component';
import { ViewComponent } from './organization/view/view.component';
import { HierarchyOrganizationComponent } from './hierarchy-organization/hierarchy-organization.component';
import { EmpUpdateComponent } from './employee/emp-update/emp-update.component';
import { AuthguardGuard } from "../app/shared/authguard.guard"
import { UpdateRoleGuard } from './shared/update-role.guard';
import { UpdateProjectGuard } from './shared/update-project.guard';
import { UpdateOrgGuard } from './shared/update-org.guard';
import { CreateOrgGuard } from './shared/create-org.guard';
import { CreateEmpGuard } from './shared/create-emp.guard';
import { CreateProjectGuard } from './shared/create-project.guard'

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent, canActivate: [AuthguardGuard], },
  {
    path: 'profile/:id', component: ProfileComponent,
    canActivate: [AuthguardGuard],
  },
  { path: 'profile/history/:id', component: HistoryComponent, canActivate: [AuthguardGuard] },
  { path: 'profile/timesheets', component: DisplayTimesheetComponent },

  {
    path: 'addtimesheet',
    component: AddTimesheetComponent
  },


  {
    path: 'employee/create',
    component: CreateUpdateComponent, canActivate: [AuthguardGuard, CreateEmpGuard]
  },
  {
    path: 'employee/update/:id',
    component: EmpUpdateComponent, canActivate: [AuthguardGuard, UpdateRoleGuard]
  },

  {
    path: 'createProject',
    component: CreateprojectComponent, canActivate: [AuthguardGuard, CreateProjectGuard]
  },
  {
    path: 'update-project/:id',
    component: UpdateprojectComponent, canActivate: [AuthguardGuard, UpdateProjectGuard]
  },
  { path: 'view-project/:id', component: ViewprojectComponent },
  { path: 'projects', component: ProjectlistComponent },

  {
    path: 'slabcharges',
    component: SlabChargesComponent
  },
  {
    path: 'view',
    component: ViewComponent
  },
  {
    path: 'view-organization/:id',
    component: ViewHeirarchyComponent
  },
  {
    path: 'organizations',
    component: OrganizationlistComponent
  },
  {
    path: 'createOrganization',
    component: CreateOrganizationComponent, canActivate: [AuthguardGuard, CreateOrgGuard]
  },
  {
    path: 'update-organization/:id',
    component: UpdateOrganizationComponent, canActivate: [AuthguardGuard, UpdateOrgGuard]
  },
  {
    path: 'hierarchy/:id',
    component: HierarchyOrganizationComponent
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [LoginComponent, HomepageComponent, HeaderComponent, FooterComponent, DisplayTimesheetComponent, ProfileComponent];

