import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossnextComponent } from './grossnext.component';

describe('GrossnextComponent', () => {
  let component: GrossnextComponent;
  let fixture: ComponentFixture<GrossnextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrossnextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrossnextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
