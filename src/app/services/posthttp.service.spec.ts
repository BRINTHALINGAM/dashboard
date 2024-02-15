import { TestBed } from '@angular/core/testing';

import { PosthttpService } from './posthttp.service';

describe('PosthttpService', () => {
  let service: PosthttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosthttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
