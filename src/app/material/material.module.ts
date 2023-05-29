import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select'; 
import { MatFormFieldModule } from '@angular/material/form-field';

const materialComponents = [MatButtonModule,MatInputModule,
                            MatIconModule,MatCardModule,
                            MatSelectModule,
                            MatFormFieldModule];

@NgModule({
  imports: [materialComponents],
  exports:[materialComponents]
})
export class MaterialModule { }
