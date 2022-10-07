import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardfourthComponent } from './dashboardfourth.component';

describe('DashboardfourthComponent', () => {
  let component: DashboardfourthComponent;
  let fixture: ComponentFixture<DashboardfourthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardfourthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardfourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
