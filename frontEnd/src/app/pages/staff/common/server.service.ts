import { Injectable } from '@angular/core';
import { PostService } from '../../../providers/serverFacade/post/post.service';
import { ErrorService } from '../../../providers/serverFacade/error/error.service';
import { first, Observable, from } from 'rxjs';
import {
  HttpErrorResponse,
} from '@angular/common/http';

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
    return new Observable((obs)=>{
      this.postService
      .post(this.vaccineSearchUrl, params)
      .pipe(first())
      .subscribe({
        next: (data: any) => {
          console.log(data);
          obs.next(data);
        },
        error: (err: HttpErrorResponse) => {
          this.errorService.error(err);
        },
      });
    })
  }
}
