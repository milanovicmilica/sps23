import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendoutlabdashComponent } from './sendoutlabdash.component';

describe('SendoutlabdashComponent', () => {
  let component: SendoutlabdashComponent;
  let fixture: ComponentFixture<SendoutlabdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendoutlabdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendoutlabdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
