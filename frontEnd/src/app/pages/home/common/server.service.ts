import { Injectable } from '@angular/core';
import { GetService } from '../../../providers/serverFacade/get/get.service';
import { ErrorService } from '../../../providers/serverFacade/error/error.service';
import { catchError, first, Observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Notifications as NotificationInterface } from '../../../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  url: string = 'http://localhost:3100/api/notifications';
  constructor(
    public getService: GetService,
    public errorService: ErrorService
  ) {}

  getNotification(): Observable<NotificationInterface[]> {
    return this.getService.getService<NotificationInterface[]>(this.url).pipe(
      first(),
      catchError((err: HttpErrorResponse) => {
        this.errorService.error(err);
        return throwError(() => err);
      })
    );
  }
}
