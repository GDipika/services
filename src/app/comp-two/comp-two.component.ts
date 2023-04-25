import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-comp-two',
  templateUrl: './comp-two.component.html',
  styleUrls: ['./comp-two.component.scss'],
})
export class CompTwoComponent implements OnInit {
  public hasClicked: boolean = false;
  constructor(private _employeeService: EmployeeService) {}

  ngOnInit() {
    this._employeeService.clickedAbutton.subscribe(() => {
      this.hasClicked = !this.hasClicked;
    });
  }
}
