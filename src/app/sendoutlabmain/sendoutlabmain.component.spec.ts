import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendoutlabmainComponent } from './sendoutlabmain.component';

describe('SendoutlabmainComponent', () => {
  let component: SendoutlabmainComponent;
  let fixture: ComponentFixture<SendoutlabmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendoutlabmainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendoutlabmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
