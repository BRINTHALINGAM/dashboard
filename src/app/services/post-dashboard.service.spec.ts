import { TestBed } from '@angular/core/testing';

import { PostDashboardService } from './post-dashboard.service';

describe('PostDashboardService', () => {
  let service: PostDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
