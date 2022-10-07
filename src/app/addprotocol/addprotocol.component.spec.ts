import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprotocolComponent } from './addprotocol.component';

describe('AddprotocolComponent', () => {
  let component: AddprotocolComponent;
  let fixture: ComponentFixture<AddprotocolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprotocolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddprotocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
