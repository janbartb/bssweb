import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicScorebordData } from './topic-scorebord-data';

describe('TopicScorebordData', () => {
  let component: TopicScorebordData;
  let fixture: ComponentFixture<TopicScorebordData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopicScorebordData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopicScorebordData);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
