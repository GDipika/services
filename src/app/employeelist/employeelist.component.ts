import { Component, OnInit } from '@angular/core';
import { EmployeeService, employee } from '../employee.service';
import { filter, take } from 'rxjs';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.scss'],
})
export class EmployeelistComponent implements OnInit {
  public employees: any[] = [];
  constructor(private _employeeService: EmployeeService) {}
  ngOnInit() {
    this._employeeService.getEmployees().pipe().subscribe((data: employee[]) => {
      this.employees = data;
    });
  }
}
