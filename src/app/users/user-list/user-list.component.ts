import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {UserService} from '../../_services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { User } from '../../_models/user';
import {first} from 'rxjs/operators';
import {MatSort} from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import {UserCreateComponent} from '../user-create/user-create.component';
import {UserFormServiceService} from '../service/user-form-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: any;
  currentUser: null;
  currentIndex = -1;
  displayedColumns: string[] = ['numero', 'avatar', 'prenom', 'nom', 'email', 'Action'];
  dataSource: MatTableDataSource<User>;


  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService,
              private dialog: MatDialog,
              public userServiceForm: UserFormServiceService) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.readUsers();
  }
  readUsers(): void {
    this.userService.getUserAll().pipe(first()).subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(this.users['hydra:member']);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  // tslint:disable-next-line:typedef
  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  // tslint:disable-next-line:typedef
  onCreate() {
      this.userServiceForm.initializeFormGroup();
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "60%";
      this.dialog.open(UserCreateComponent, dialogConfig);
  }

}



