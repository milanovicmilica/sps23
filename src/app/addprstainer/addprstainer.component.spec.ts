import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprstainerComponent } from './addprstainer.component';

describe('AddprstainerComponent', () => {
  let component: AddprstainerComponent;
  let fixture: ComponentFixture<AddprstainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprstainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprstainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
