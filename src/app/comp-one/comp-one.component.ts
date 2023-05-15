import { Component, OnInit } from '@angular/core';
import { EmployeeService, post} from '../employee.service';
 
@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrls: ['./comp-one.component.scss'],
})
export class CompOneComponent implements OnInit {
  constructor(private _employeeService: EmployeeService) {}
  posts: any = [];

  buttonClicked() {
    this._employeeService.clickedAbutton.emit(true);
  }
  ngOnInit(): void {
    this._employeeService.getUsers().subscribe((posts:post[]) => {
      console.log(posts);
    });
  }
}
