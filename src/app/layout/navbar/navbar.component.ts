import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  value?: string;
  searchTerm!: string;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.currentSearchTerm
      .subscribe(message => this.searchTerm = message);
  }

  newSearchText(text: string){
    this.employeeService.changeMessage(text);
  }
}
