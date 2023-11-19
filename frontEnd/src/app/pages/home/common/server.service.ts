import { Injectable } from '@angular/core';
import { GetService } from '../../../providers/serverFacade/get/get.service';
import { ErrorService } from '../../../providers/serverFacade/error/error.service';
import { first, Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Notifications } from '../../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  url: string = 'http://localhost:3100/api/notifications';
  constructor(
    public getService: GetService,
    public errorService: ErrorService
  ) {}

  getNotification<T>(): Observable<T> {
    return new Observable((obs) => {
      this.getService
        .getService<T>(this.url)
        .pipe(first())
        .subscribe({
          next: (returnData: T) => {
            obs.next(returnData);
          },
          error: (err: HttpErrorResponse) => {
            this.errorService.error(err);
          },
        });
    });
  }
}
