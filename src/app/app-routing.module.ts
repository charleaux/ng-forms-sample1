import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeComponent } from './employee/employee.component';
import { PositionComponent } from './position/position.component';
import { ReactiveDynamicComponent } from './reactive-dynamic/reactive-dynamic.component';
import { ReactiveTableComponent } from './reactive-table/reactive-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'position', component: PositionComponent },
  { path: 'dynamic', component: ReactiveDynamicComponent },
  { path: 'table', component: ReactiveTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
