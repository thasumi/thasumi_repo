import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataGridComponent } from './data-grid/data-grid.component';
import { MatCardModule } from '@angular/material/card';
import { DataGridRoutingModule } from './data-grid.routing.module';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { NgxMaskModule } from 'ngx-mask';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort, MatSortModule} from '@angular/material/sort';


@NgModule({
  declarations: [
    DataGridComponent,
    
  ],
  imports: [
    CommonModule,
    MatCardModule,
    DataGridRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatTableModule,
    NgxMaskModule.forRoot(),
    FontAwesomeModule,
    MatSortModule  
  ]
})
export class DataGridModule { }
