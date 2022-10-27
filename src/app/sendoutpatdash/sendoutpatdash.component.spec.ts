import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendoutpatdashComponent } from './sendoutpatdash.component';

describe('SendoutpatdashComponent', () => {
  let component: SendoutpatdashComponent;
  let fixture: ComponentFixture<SendoutpatdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendoutpatdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendoutpatdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
