import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendoutpatmainComponent } from './sendoutpatmain.component';

describe('SendoutpatmainComponent', () => {
  let component: SendoutpatmainComponent;
  let fixture: ComponentFixture<SendoutpatmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendoutpatmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendoutpatmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
