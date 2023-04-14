import { TestBed } from '@angular/core/testing';

import { CraftthreeService } from './craftthree.service';

describe('CraftthreeService', () => {
  let service: CraftthreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CraftthreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
