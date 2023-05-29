import { TestBed } from '@angular/core/testing';

import { ApiEj4Service } from './api-ej4.service';

describe('ApiEj4Service', () => {
  let service: ApiEj4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEj4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
