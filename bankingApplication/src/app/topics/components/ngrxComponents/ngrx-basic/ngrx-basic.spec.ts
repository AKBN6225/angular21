import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxBasic } from './ngrx-basic';

describe('NgrxBasic', () => {
  let component: NgrxBasic;
  let fixture: ComponentFixture<NgrxBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxBasic],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxBasic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
