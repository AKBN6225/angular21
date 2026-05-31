import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutrParamsList } from './routr-params-list';

describe('RoutrParamsList', () => {
  let component: RoutrParamsList;
  let fixture: ComponentFixture<RoutrParamsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutrParamsList],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutrParamsList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
