import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view/view.component';
import { ViewHeirarchyComponent } from './view-heirarchy/view-heirarchy.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateOrganizationComponent } from './create-organization/create-organization.component';
import { SlabChargesComponent } from './slab-charges/slab-charges.component';
import { UpdateOrganizationComponent } from './update-organization/update-organization.component';
import { RouterModule } from '@angular/router';
import { OrganizationlistComponent } from './organizationlist/organizationlist.component';



@NgModule({
  declarations: [
    ViewComponent,
    CreateOrganizationComponent,
    ViewHeirarchyComponent,
    SlabChargesComponent,
    UpdateOrganizationComponent,
    OrganizationlistComponent
  ],
  bootstrap: [ViewHeirarchyComponent],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    NgModule
  ],
  providers:[],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrganizationModule { }
