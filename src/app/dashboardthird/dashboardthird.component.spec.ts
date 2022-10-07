import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardthirdComponent } from './dashboardthird.component';

describe('DashboardthirdComponent', () => {
  let component: DashboardthirdComponent;
  let fixture: ComponentFixture<DashboardthirdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardthirdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
