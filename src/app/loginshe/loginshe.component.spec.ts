import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginsheComponent } from './loginshe.component';

describe('LoginsheComponent', () => {
  let component: LoginsheComponent;
  let fixture: ComponentFixture<LoginsheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginsheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginsheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
