import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import {JwtInterceptor} from '../_helpers/jwt.interceptor';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
  loading = false;
  users: User[] = [];

  constructor(private userService: UserService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loading = true;
    this.userService.getUserAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
      console.log(users);
    });
  }
}
