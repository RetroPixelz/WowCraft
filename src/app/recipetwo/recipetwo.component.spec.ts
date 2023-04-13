import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipetwoComponent } from './recipetwo.component';

describe('RecipetwoComponent', () => {
  let component: RecipetwoComponent;
  let fixture: ComponentFixture<RecipetwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipetwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecipetwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
