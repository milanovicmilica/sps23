import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminpathactivityComponent } from './adminpathactivity.component';

describe('AdminpathactivityComponent', () => {
  let component: AdminpathactivityComponent;
  let fixture: ComponentFixture<AdminpathactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminpathactivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminpathactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
