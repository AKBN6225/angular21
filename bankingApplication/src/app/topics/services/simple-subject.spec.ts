import { TestBed } from '@angular/core/testing';

import { SimpleSubject } from './simple-subject';

describe('SimpleSubject', () => {
  let service: SimpleSubject;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SimpleSubject);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
