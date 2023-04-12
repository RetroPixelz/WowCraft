import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemtwoComponent } from './itemtwo.component';

describe('ItemtwoComponent', () => {
  let component: ItemtwoComponent;
  let fixture: ComponentFixture<ItemtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemtwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
