import { TestBed } from '@angular/core/testing';

import { ProfileSService } from './profile-s.service';

describe('ProfileSService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfileSService = TestBed.get(ProfileSService);
    expect(service).toBeTruthy();
  });
});
