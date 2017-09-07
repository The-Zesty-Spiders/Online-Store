import { TestBed, inject } from '@angular/core/testing';

import { ApiServices } from './api.services';

describe('ApiServices', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiServices]
    });
  });

  it('should be created', inject([ApiServices], (service: ApiServices) => {
    expect(service).toBeTruthy();
  }));
});
