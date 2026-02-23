import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLijst } from './item-lijst';

describe('ItemLijst', () => {
  let component: ItemLijst;
  let fixture: ComponentFixture<ItemLijst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemLijst]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemLijst);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
