import { TestBed } from '@angular/core/testing';

import { GetService } from './get.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('GetService', () => {
  let service: GetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(GetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
