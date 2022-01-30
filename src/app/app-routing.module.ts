import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {EmployeesComponent} from "./employees/employees.component";
import {HomeComponent} from "./layout/home/home.component";
import {PagenotfoundComponent} from "./layout/pagenotfound/pagenotfound.component";
import {CreateEmployeeComponent} from "./employees/create-employee/create-employee.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'employees/add', component: CreateEmployeeComponent},
  {path: '**', component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
