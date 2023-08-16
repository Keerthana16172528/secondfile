import { TestBed } from '@angular/core/testing';

import { StringtransferService } from './stringtransfer.service';

describe('StringtransferService', () => {
  let service: StringtransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringtransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
