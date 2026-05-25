import { TestBed } from '@angular/core/testing';

import { AsyncSubject } from './async-subject';

describe('AsyncSubject', () => {
  let service: AsyncSubject;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AsyncSubject);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
