import { TestBed } from '@angular/core/testing';

import { MarqueGuard } from './marque.guard';

describe('MarqueGuard', () => {
  let guard: MarqueGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MarqueGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
