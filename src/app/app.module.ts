import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmplyeedetailsComponent } from './emplyeedetails/emplyeedetails.component';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from './employee.service';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    EmplyeedetailsComponent,
    CompOneComponent,
    CompTwoComponent,
  ],
  imports: [BrowserModule, CommonModule, HttpClientModule],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
