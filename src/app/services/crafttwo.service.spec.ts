import { TestBed } from '@angular/core/testing';

import { CrafttwoService } from './crafttwo.service';

describe('CrafttwoService', () => {
  let service: CrafttwoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrafttwoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
