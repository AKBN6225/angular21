import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Polyfills } from './polyfills';

describe('Polyfills', () => {
  let component: Polyfills;
  let fixture: ComponentFixture<Polyfills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Polyfills],
    }).compileComponents();

    fixture = TestBed.createComponent(Polyfills);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
