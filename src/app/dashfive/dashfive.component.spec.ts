import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashfiveComponent } from './dashfive.component';

describe('DashfiveComponent', () => {
  let component: DashfiveComponent;
  let fixture: ComponentFixture<DashfiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashfiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
