import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUpdateComponent } from './create-update/create-update.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { HistoryComponent } from './history/history.component';
import { AddTimesheetComponent } from './add-timesheet/add-timesheet.component';
import { CUSTOM_ELEMENTS_SCHEMA , NO_ERRORS_SCHEMA} from '@angular/core';





@NgModule({
  declarations: [
    AddSkillsComponent,
    HistoryComponent,
   AddTimesheetComponent,
   
  ],
  imports: [
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class EmployeeModule { }
