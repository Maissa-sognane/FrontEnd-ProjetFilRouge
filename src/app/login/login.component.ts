import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../_services/authentication.service';
import jwtDecode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  pathImg: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.pathImg = '';
    // redirect to home if already logged in
    if (this.authenticationService.userValue) {
      this.router.navigate(['/login']);
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
 //  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.loginForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          const user = this.authenticationService.userValue.token;
          const tokenDeco = jwtDecode(user);
          // @ts-ignore
          const role = tokenDeco.roles[0];
         // console.log(tokenDeco.roles[0]);
          if (role === 'ROLE_ADMIN'){
            this.router.navigate(['/home']);
          }
          if (role === 'ROLE_FORMATEUR'){
            this.router.navigate(['/formateurs']);
          }
          if (role === 'ROLE_APPRENANT'){
            this.router.navigate(['/apprenants']);
          }
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
