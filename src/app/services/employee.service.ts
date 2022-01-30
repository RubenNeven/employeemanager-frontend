import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Employee} from "../model/employee";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url: string;

  private messageSource = new BehaviorSubject<string>("");
  currentSearchTerm = this.messageSource.asObservable();

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/employee`
  }

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.url}/all`)
  }

  public addEmployee(employee: Employee): Observable<Employee>{
    return this.http.post<Employee>(`${this.url}/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee>{
    return this.http.put<Employee>(`${this.url}/update`, employee);
  }

  public deleteEmployee(id: string): Observable<void>{
    return this.http.delete<void>(`${this.url}/delete/${id}`);
  }

  public getEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/find/${id}`)
  }

  changeMessage(message: string){
    this.messageSource.next(message);
  }
}
