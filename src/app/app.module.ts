import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { EmployeeDetailsComponent } from './employees/employee-details/employee-details.component';

const routes: Routes = [
  {path:"list", component:ListEmployeesComponent},
  {path:"employee/:id/:name" , component:EmployeeDetailsComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
