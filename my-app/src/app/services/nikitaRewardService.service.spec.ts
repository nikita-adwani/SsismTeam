import { TestBed } from '@angular/core/testing';

import { NikitaRewardserviceService } from './nikitaRewardService.service';

describe('NikitaRewardserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NikitaRewardserviceService = TestBed.get(NikitaRewardserviceService);
    expect(service).toBeTruthy();
  });
});
