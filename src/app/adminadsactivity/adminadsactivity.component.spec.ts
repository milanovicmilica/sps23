import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminadsactivityComponent } from './adminadsactivity.component';

describe('AdminadsactivityComponent', () => {
  let component: AdminadsactivityComponent;
  let fixture: ComponentFixture<AdminadsactivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminadsactivityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminadsactivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
