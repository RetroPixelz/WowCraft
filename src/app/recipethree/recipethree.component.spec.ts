import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipethreeComponent } from './recipethree.component';

describe('RecipethreeComponent', () => {
  let component: RecipethreeComponent;
  let fixture: ComponentFixture<RecipethreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipethreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipethreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
