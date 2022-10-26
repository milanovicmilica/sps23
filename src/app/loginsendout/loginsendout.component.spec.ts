import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsendoutComponent } from './loginsendout.component';

describe('LoginsendoutComponent', () => {
  let component: LoginsendoutComponent;
  let fixture: ComponentFixture<LoginsendoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsendoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsendoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
