import {Pipe, PipeTransform} from '@angular/core';
import {Employee} from "./model/employee";

@Pipe({
  name: 'search'
})
export class FilterPipe implements PipeTransform {

  transform(employees: Employee[], searchString: string | undefined) {
    if (searchString === undefined) return employees;

    return employees.filter((employee) => {
      let searchFirstName: boolean = employee.name.toLowerCase().includes(searchString.toLowerCase());
      let searchEmail: boolean = employee.email.toLowerCase().includes(searchString.toLowerCase());
      return searchFirstName || searchEmail;
    });
  }
}
