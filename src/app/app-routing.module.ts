import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './core/main-page/main-page.component';

const routes: Routes = [
{path: '',component: MainPageComponent},
{path: 'cadastro',loadChildren: () => import('./modules/data-grid/data-grid.module').then(m => m.DataGridModule)}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
