import { TestBed } from '@angular/core/testing';

import { TheInterceptorService } from './the-interceptor.service';

describe('TheInterceptorService', () => {
  let service: TheInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
