import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(public httpWeb: HttpClient) {}

  public post<T>(url: string, params: any): Observable<T> {
    return this.httpWeb.post<T>(url, params);
  }
}
