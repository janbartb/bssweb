import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonComp } from './radio-button-comp';

describe('RadioButtonComp', () => {
  let component: RadioButtonComp;
  let fixture: ComponentFixture<RadioButtonComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RadioButtonComp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioButtonComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
