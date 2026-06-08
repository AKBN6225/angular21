import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxDataBind } from './ngrx-data-bind';

describe('NgrxDataBind', () => {
  let component: NgrxDataBind;
  let fixture: ComponentFixture<NgrxDataBind>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxDataBind],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxDataBind);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
