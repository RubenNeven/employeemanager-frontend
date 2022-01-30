import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {EmployeeService} from "../../services/employee.service";
import {Employee} from "../../model/employee";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employeeForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private employeeService: EmployeeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.employeeForm = this.formBuilder.group({
      name: '',
      email: '',
      jobTitle: '',
      phone: '',
      imageUrl: ''
    })
  }

  onSubmit() {
    this.employeeService.addEmployee(this.employeeForm.value)
      .subscribe(data => {
        this.employeeForm.reset(),
          this.router.navigate(['../employees'])});
  }
}
