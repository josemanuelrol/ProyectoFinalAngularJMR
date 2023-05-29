import { TestBed } from '@angular/core/testing';

import { ApiEj3Service } from './api-ej3.service';

describe('ApiEj3Service', () => {
  let service: ApiEj3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEj3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
