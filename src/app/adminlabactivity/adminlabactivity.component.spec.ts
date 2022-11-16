import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlabactivityComponent } from './adminlabactivity.component';

describe('AdminlabactivityComponent', () => {
  let component: AdminlabactivityComponent;
  let fixture: ComponentFixture<AdminlabactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlabactivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminlabactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
