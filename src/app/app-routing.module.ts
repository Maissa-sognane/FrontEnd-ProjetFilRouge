import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { Role } from './_models/role';
import {BoardApprenantComponent} from './board-apprenant/board-apprenant.component';
import {BoardFormateurComponent} from './board-formateur/board-formateur.component';
import {BoardCmComponent} from './board-cm/board-cm.component';
import {DefaultComponent} from './layouts/default/default.component';
import {DashboardComponent} from './modules/dashboard/dashboard.component';
import {PostsComponent} from './modules/posts/posts.component';
import {UserListComponent} from './users/user-list/user-list.component';


const routes: Routes = [
  {
    path: 'home',
    component: DefaultComponent,
    children: [
      {
      path: 'dashboard',
      component: DashboardComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'posts',
        component: PostsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'users',
        component: UserListComponent,
        canActivate: [AuthGuard]
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'apprenants',
    component: BoardApprenantComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'formateurs',
    component: BoardFormateurComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'cm',
    component: BoardCmComponent,
    canActivate: [AuthGuard]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
