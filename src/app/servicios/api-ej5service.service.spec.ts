import { TestBed } from '@angular/core/testing';

import { ApiEJ5serviceService } from './api-ej5service.service';

describe('ApiEJ5serviceService', () => {
  let service: ApiEJ5serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiEJ5serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
