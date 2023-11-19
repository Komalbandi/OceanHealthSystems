import { PostService } from '../../../providers/serverFacade/post/post.service';
import { first, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ErrorService } from '../../../providers/serverFacade/error/error.service';

interface loginData {
  email: string;
  password: string;
}

interface loginSuccessResponse {
  message: string;
}
export class Server {
  url: string = 'http://localhost:3100/api/login';
  constructor(
    public postService: PostService,
    public errorService: ErrorService
  ) {}

  getLogin(params: loginData) {
    return new Observable((obs) => {
      this.postService
        .post(this.url, params)
        .pipe(first())
        .subscribe({
          next: (data: any) => {
            obs.next(data);
          },
          error: (err: HttpErrorResponse) => {
            this.errorService.error(err);
          },
        });
    });
  }
}
