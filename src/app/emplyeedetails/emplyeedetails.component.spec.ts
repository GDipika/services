import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplyeedetailsComponent } from './emplyeedetails.component';

describe('EmplyeedetailsComponent', () => {
  let component: EmplyeedetailsComponent;
  let fixture: ComponentFixture<EmplyeedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplyeedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplyeedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
