import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss'],
})
export class CompOneComponent {
  constructor(private _employeeService: EmployeeService) {}

  buttonClicked() {
    this._employeeService.clickedAbutton.emit(true);
  }
}
