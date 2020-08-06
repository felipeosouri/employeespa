import { EmployeeService } from "src/app/Services/employee.service";
import { Employees } from "./../../Models/employees";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.scss"],
})
export class EmployeeComponent implements OnInit {
  allEmployees: Array<Employees> = new Array<Employees>();
  employeesFilter: Array<Employees> = new Array<Employees>();
  constructor(private employeeInject: EmployeeService) {}

  ngOnInit() {
    this.employeeInject
      .getAllEmployees("http://localhost:59363/api/Employees")
      .subscribe((employeesFromAPI) => {
        this.allEmployees = employeesFromAPI;
        this.employeesFilter = employeesFromAPI;
      });
  }

  getEmployeeByName(event) {
    this.allEmployees = this.employeesFilter.filter((x) =>
      x.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
  }
}
