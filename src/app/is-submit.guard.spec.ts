import { TestBed } from '@angular/core/testing';

import { IsSubmitGuard } from './is-submit.guard';

describe('IsSubmitGuard', () => {
  let guard: IsSubmitGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsSubmitGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
