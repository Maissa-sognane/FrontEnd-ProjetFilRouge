import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service';
import {first} from 'rxjs/operators';
import {User} from '../_models/user';

@Component({templateUrl: './board-apprenant.component.html'
})
export class BoardApprenantComponent implements OnInit {
  loading = false;
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
