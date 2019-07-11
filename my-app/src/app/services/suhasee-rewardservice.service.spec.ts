import { TestBed } from '@angular/core/testing';

import { SuhaseeRewardserviceService } from './suhasee-rewardservice.service';

describe('SuhaseeRewardserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuhaseeRewardserviceService = TestBed.get(SuhaseeRewardserviceService);
    expect(service).toBeTruthy();
  });
});
