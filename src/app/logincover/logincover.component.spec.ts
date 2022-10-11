import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogincoverComponent } from './logincover.component';

describe('LogincoverComponent', () => {
  let component: LogincoverComponent;
  let fixture: ComponentFixture<LogincoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogincoverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogincoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
