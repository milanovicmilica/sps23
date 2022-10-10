import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogingrossingComponent } from './logingrossing.component';

describe('LogingrossingComponent', () => {
  let component: LogingrossingComponent;
  let fixture: ComponentFixture<LogingrossingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogingrossingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogingrossingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
