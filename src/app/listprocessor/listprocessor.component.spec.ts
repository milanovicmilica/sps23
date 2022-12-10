import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListprocessorComponent } from './listprocessor.component';

describe('ListprocessorComponent', () => {
  let component: ListprocessorComponent;
  let fixture: ComponentFixture<ListprocessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListprocessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListprocessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
