import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleSubject } from './simple-subject';

describe('SimpleSubject', () => {
  let component: SimpleSubject;
  let fixture: ComponentFixture<SimpleSubject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleSubject],
    }).compileComponents();

    fixture = TestBed.createComponent(SimpleSubject);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
