import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  @Output() clickedAbutton = new EventEmitter();

  constructor() {}
  public getEmployees() {
    return [
      { id: 1, name: 'anu', age: 50 },
      { id: 2, name: 'ashu', age: 40 },
      { id: 3, name: 'asha', age: 40 },
      { id: 4, name: 'leena', age: 40 },
    ];
  }
}
