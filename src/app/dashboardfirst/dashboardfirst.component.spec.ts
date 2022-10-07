import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardfirstComponent } from './dashboardfirst.component';

describe('DashboardfirstComponent', () => {
  let component: DashboardfirstComponent;
  let fixture: ComponentFixture<DashboardfirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardfirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardfirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
