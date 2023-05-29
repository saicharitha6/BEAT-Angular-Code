import { TestBed } from '@angular/core/testing';

import { CreateProjectGuard } from './create-project.guard';

describe('CreateProjectGuard', () => {
  let guard: CreateProjectGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CreateProjectGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
