import { Injectable } from '@angular/core';
import { PostService } from '../../../providers/serverFacade/post/post.service';
import { first, Observable, throwError, catchError } from 'rxjs';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpResponse,
} from '@angular/common/http';
import { ErrorService } from '../../../providers/serverFacade/error/error.service';
import { LoginData, LoginSuccessData } from '../../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  url: string = 'http://localhost:3100/api/login';
  constructor(
    public postService: PostService,
    public errorService: ErrorService
  ) {}

  getLogin(params: LoginData): Observable<LoginSuccessData> {
    return this.postService.post<LoginSuccessData>(this.url, params).pipe(
      first(),
      catchError((err: HttpErrorResponse) => {
        this.errorService.error(err);
        return throwError(() => err);
      })
    );
  }
}
