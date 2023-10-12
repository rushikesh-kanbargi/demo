import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataListComponent } from './data-list/data-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/data', pathMatch: 'full' }, // Redirect the root URL to the Data List
  { path: 'data', component: DataListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
