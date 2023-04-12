import { TestBed } from '@angular/core/testing';

import { ItemtwoService } from './itemtwo.service';

describe('ItemtwoService', () => {
  let service: ItemtwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemtwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
