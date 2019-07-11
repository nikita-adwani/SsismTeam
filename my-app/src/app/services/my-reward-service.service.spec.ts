import { TestBed } from '@angular/core/testing';

import { MyRewardServiceService } from './my-reward-service.service';

describe('MyRewardServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyRewardServiceService = TestBed.get(MyRewardServiceService);
    expect(service).toBeTruthy();
  });
});
