import { TestBed } from '@angular/core/testing';

import { RewardserviceService } from './rewardservice.service';

describe('RewardserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RewardserviceService = TestBed.get(RewardserviceService);
    expect(service).toBeTruthy();
  });
});
