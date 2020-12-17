import { Component, OnInit } from '@angular/core';
import {UserFormServiceService} from '../service/user-form-service.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  constructor( public userServiceForm: UserFormServiceService) { }

  ngOnInit(): void {
  }

}
