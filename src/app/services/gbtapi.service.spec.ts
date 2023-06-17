import { TestBed } from '@angular/core/testing';

import { GbtapiService } from './gbtapi.service';

describe('GbtapiService', () => {
  let service: GbtapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GbtapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
