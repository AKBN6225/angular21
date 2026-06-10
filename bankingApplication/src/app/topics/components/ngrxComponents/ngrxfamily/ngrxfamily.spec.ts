import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngrxfamily } from './ngrxfamily';

describe('Ngrxfamily', () => {
  let component: Ngrxfamily;
  let fixture: ComponentFixture<Ngrxfamily>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ngrxfamily],
    }).compileComponents();

    fixture = TestBed.createComponent(Ngrxfamily);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
