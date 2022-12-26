import { TestBed } from '@angular/core/testing';

import { ReqtypeService } from './reqtype.service';

describe('ReqtypeService', () => {
  let service: ReqtypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqtypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
