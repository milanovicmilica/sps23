import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginstartComponent } from './loginstart.component';

describe('LoginstartComponent', () => {
  let component: LoginstartComponent;
  let fixture: ComponentFixture<LoginstartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginstartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginstartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
