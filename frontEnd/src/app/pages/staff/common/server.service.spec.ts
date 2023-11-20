import { TestBed } from '@angular/core/testing';

import { ServerService } from './server.service';
import { GetService } from '../../../providers/serverFacade/get/get.service';
import { ErrorService } from '../../../providers/serverFacade/error/error.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ServerService', () => {
  let service: ServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GetService, ErrorService, HttpClient],
    });
    service = TestBed.inject(ServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
