import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicScorebord } from './topic-scorebord';

describe('TopicScorebord', () => {
  let component: TopicScorebord;
  let fixture: ComponentFixture<TopicScorebord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicScorebord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicScorebord);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
