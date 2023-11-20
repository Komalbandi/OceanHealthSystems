import { TestBed } from '@angular/core/testing';

import { PostService } from './post.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('PostServiceService', () => {
  let service: PostService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(PostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
