import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemthreeComponent } from './itemthree.component';

describe('ItemthreeComponent', () => {
  let component: ItemthreeComponent;
  let fixture: ComponentFixture<ItemthreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemthreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemthreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
