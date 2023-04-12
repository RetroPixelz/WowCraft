import { TestBed } from '@angular/core/testing';

import { ItemthreeService } from './itemthree.service';

describe('ItemthreeService', () => {
  let service: ItemthreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemthreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
