import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlactivityComponent } from './adminlactivity.component';

describe('AdminlactivityComponent', () => {
  let component: AdminlactivityComponent;
  let fixture: ComponentFixture<AdminlactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlactivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
