import { TestBed } from '@angular/core/testing';

import { RmihttpService } from './rmihttp.service';

describe('RmihttpService', () => {
  let service: RmihttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RmihttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
