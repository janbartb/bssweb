import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpScore } from './help-score';

describe('HelpScore', () => {
  let component: HelpScore;
  let fixture: ComponentFixture<HelpScore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpScore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpScore);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
