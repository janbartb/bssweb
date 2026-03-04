import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicWorkingDemo } from './topic-working-demo';

describe('TopicWorkingDemo', () => {
  let component: TopicWorkingDemo;
  let fixture: ComponentFixture<TopicWorkingDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicWorkingDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicWorkingDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
