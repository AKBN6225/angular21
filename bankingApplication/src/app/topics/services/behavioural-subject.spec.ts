import { TestBed } from '@angular/core/testing';

import { BehaviouralSubject } from './behavioural-subject';

describe('BehaviouralSubject', () => {
  let service: BehaviouralSubject;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviouralSubject);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
