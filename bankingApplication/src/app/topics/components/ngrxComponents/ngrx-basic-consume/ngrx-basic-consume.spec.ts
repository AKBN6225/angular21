import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxBasicConsume } from './ngrx-basic-consume';

describe('NgrxBasicConsume', () => {
  let component: NgrxBasicConsume;
  let fixture: ComponentFixture<NgrxBasicConsume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxBasicConsume],
    }).compileComponents();

    fixture = TestBed.createComponent(NgrxBasicConsume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
