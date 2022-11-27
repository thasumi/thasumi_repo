import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGridComponent } from './data-grid/data-grid.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: DataGridComponent },
    ],
}]


@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DataGridRoutingModule { }
