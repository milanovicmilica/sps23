import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaselistadComponent } from './caselistad.component';

describe('CaselistadComponent', () => {
  let component: CaselistadComponent;
  let fixture: ComponentFixture<CaselistadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaselistadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaselistadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
