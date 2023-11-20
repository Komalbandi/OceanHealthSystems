import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetService {
  httpWebHeader: any;

  constructor(public httpWeb: HttpClient) {}

  public getService<T>(url: string): Observable<T> {
    return this.httpWeb.get<T>(url);
  }
}
