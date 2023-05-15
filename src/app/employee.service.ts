import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
export interface employee {
  id: number;
  name: string;
  age: number;
}
export interface user {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const employees: employee[] = [
  { id: 1, name: 'anu', age: 50 },
  { id: 2, name: 'ashu', age: 40 },
  { id: 3, name: 'asha', age: 40 },
  { id: 4, name: 'leena', age: 40 },
];
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  @Output() clickedAbutton = new EventEmitter();
  constructor(public _http: HttpClient) {}
  public getEmployees():Observable<employee[]> {
    return of(employees);
  }
  public getUsers():Observable<user[]> {
    return this._http.get<user[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
