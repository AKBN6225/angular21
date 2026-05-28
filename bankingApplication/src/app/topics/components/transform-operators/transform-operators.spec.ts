import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransformOperators } from './transform-operators';

describe('TransformOperators', () => {
  let component: TransformOperators;
  let fixture: ComponentFixture<TransformOperators>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransformOperators],
    }).compileComponents();

    fixture = TestBed.createComponent(TransformOperators);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
