import { TestBed } from '@angular/core/testing';

import { SalesPurchaseServiceService } from './sales-purchase.service.service';

describe('SalesPurchaseServiceService', () => {
  let service: SalesPurchaseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesPurchaseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
