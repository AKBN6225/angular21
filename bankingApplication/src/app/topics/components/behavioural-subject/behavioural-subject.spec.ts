import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviouralSubject } from './behavioural-subject';

describe('BehaviouralSubject', () => {
  let component: BehaviouralSubject;
  let fixture: ComponentFixture<BehaviouralSubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviouralSubject],
    }).compileComponents();

    fixture = TestBed.createComponent(BehaviouralSubject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
