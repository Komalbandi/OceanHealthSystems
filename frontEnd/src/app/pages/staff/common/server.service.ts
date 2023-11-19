import { Injectable } from '@angular/core';
import { PostService } from '../../../providers/serverFacade/post/post.service';
import { ErrorService } from '../../../providers/serverFacade/error/error.service';
import { first, Observable, from, catchError, map } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { SearchVaccineInterface } from '../../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  vaccineSearchUrl: string = 'http://localhost:3100/api/vaccination';
  constructor(
    public postService: PostService,
    public errorService: ErrorService
  ) {}

  getVaccine(params: any): Observable<any> {
    return this.postService
      .post<SearchVaccineInterface[]>(this.vaccineSearchUrl, params)
      .pipe(
        first(),
        map((data) => data)
      );
  }
}
