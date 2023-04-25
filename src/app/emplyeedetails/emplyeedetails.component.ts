import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-emplyeedetails',
  templateUrl: './emplyeedetails.component.html',
  styleUrls: ['./emplyeedetails.component.scss']
})
export class EmplyeedetailsComponent implements OnInit {

  public employees:any
 constructor( private _employeeService:EmployeeService){}
 ngOnInit(): void {
   this.employees=this._employeeService.getEmployees()
   console.log(this.employees)
 }
 
}
