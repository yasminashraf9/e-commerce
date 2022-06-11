import { TestBed } from '@angular/core/testing';

import { OpenStoreService } from './open-store.service';

describe('OpenStoreService', () => {
  let service: OpenStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
