import { Employees } from "./../Models/employees";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EmployeeService {
  constructor(private http: HttpClient) {}

  getAllEmployees(url: string): Observable<Employees[]> {
    return this.http.get<Employees[]>(url);
  }
}
