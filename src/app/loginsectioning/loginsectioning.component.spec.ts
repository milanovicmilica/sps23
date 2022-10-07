import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsectioningComponent } from './loginsectioning.component';

describe('LoginsectioningComponent', () => {
  let component: LoginsectioningComponent;
  let fixture: ComponentFixture<LoginsectioningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsectioningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsectioningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
