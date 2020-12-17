import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models/user';
import {JwtInterceptor} from '../_helpers/jwt.interceptor';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getUserAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/api/admin/users`);
  }
  // tslint:disable-next-line:typedef
  getById(id: number) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }

  // tslint:disable-next-line:typedef
  getToken() {
    return localStorage.getItem('user');
  }

  searchByName(email): Observable<any> {
    return this.http.get<User>(`${environment.apiUrl}?email=${email}`);
  }

  findUsers(
    userId: number, filter = '', sortOrder = 'asc',
    pageNumber = 0, pageSize = 3): Observable<User[]> {

    return this.http.get(`${environment.apiUrl}/api/admin/users`, {
      params: new HttpParams()
        .set('courseId', userId.toString())
        .set('filter', filter)
        .set('sortOrder', sortOrder)
        .set('pageNumber', pageNumber.toString())
        .set('pageSize', pageSize.toString())
    }).pipe(
      map(res =>  res["payload"])
    );
  }
}
