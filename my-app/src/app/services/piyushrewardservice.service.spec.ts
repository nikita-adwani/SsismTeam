import { TestBed } from '@angular/core/testing';

import { PiyushrewardserviceService } from './piyushRewardService.service';

describe('PiyushrewardserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PiyushrewardserviceService = TestBed.get(PiyushrewardserviceService);
    expect(service).toBeTruthy();
  });
});
