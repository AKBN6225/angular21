import { TestBed } from '@angular/core/testing';

import { ReplaySubject } from './replay-subject';

describe('ReplaySubject', () => {
  let service: ReplaySubject;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReplaySubject);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
