import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRideComponent } from './add-ride.component';

describe('AddRideComponent', () => {
  let component: AddRideComponent;
  let fixture: ComponentFixture<AddRideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
