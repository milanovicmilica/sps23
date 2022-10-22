import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrackComponent } from './addrack.component';

describe('AddrackComponent', () => {
  let component: AddrackComponent;
  let fixture: ComponentFixture<AddrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
