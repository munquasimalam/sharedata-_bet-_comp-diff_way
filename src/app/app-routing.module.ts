import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component'
import {ListEmployeesComponent} from './employees/list-employees/list-employees.component';
import {CreateEmployeeComponent} from './employees/create-employee/create-employee.component';
import {EmployeeDetailsComponent} from './employees/employee-details/employee-details.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/list',pathMatch:'full'
  },
  {
    path:'list',
    component:ListEmployeesComponent
  },
  {
    path:'create',
    component:CreateEmployeeComponent
  },
  {
    path:'employee/:id',
    component:EmployeeDetailsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
