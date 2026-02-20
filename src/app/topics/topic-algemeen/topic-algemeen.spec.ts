import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicAlgemeen } from './topic-algemeen';

describe('TopicAlgemeen', () => {
  let component: TopicAlgemeen;
  let fixture: ComponentFixture<TopicAlgemeen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicAlgemeen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicAlgemeen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
