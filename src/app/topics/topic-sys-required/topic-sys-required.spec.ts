import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSysRequired } from './topic-sys-required';

describe('TopicSysRequired', () => {
  let component: TopicSysRequired;
  let fixture: ComponentFixture<TopicSysRequired>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicSysRequired]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicSysRequired);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
