import { TestBed } from '@angular/core/testing';

import { ServerService } from './server.service';
import { GetService } from '../../../providers/serverFacade/get/get.service';
import { ErrorService } from '../../../providers/serverFacade/error/error.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('Home page ServerService', () => {
  let service: ServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetService, ErrorService, HttpClient],
      imports: [HttpClientModule],
    });
    service = TestBed.inject(ServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
