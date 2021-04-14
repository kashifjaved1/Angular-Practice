import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../services/api.service';
import {AuthUtils} from '../utils/auth-utils';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit)="this.logInForm.valid && logIn()" [formGroup]="this.logInForm">
      <div fxLayout="column" fxLayoutAlign="center center">
        <mat-card>
          <mat-card-title>
            Login
          </mat-card-title>
          <div fxLayout="column" fxLayoutGap="10px">
            <mat-form-field appearance="fill">
              <mat-label>Email</mat-label>
              <input type="email" matInput formControlName="email" required>
              <mat-error>Valid email is required</mat-error>
            </mat-form-field>
            <mat-form-field appearance="fill">
              <mat-label>Password</mat-label>
              <input type="password" matInput formControlName="password" required>
              <mat-error>At least 6 character valid password is required</mat-error>
            </mat-form-field>
            <div fxLayoutAlign="center center" fxLayout="row">
              <button mat-button>Login</button>
            </div>
          </div>
        </mat-card>
      </div>
    </form>
  `,
  styles: [`

    mat-card {
      background-color: white;
      width: 40em;
      margin-top: 10%;
    }

    mat-form-field {
      background-color: #0d2440;
      border-radius: 5px;
    }

    mat-card-title {
      color: #0d2440;
    }

    button {
      width: 100px;
      background-color: #0d2440;
      color: white;
    }

  `]
})
export class LoginComponent implements OnInit {

  logInForm: FormGroup;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.logInForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  logIn(): void {
    this.apiService.login('/login', this.logInForm.value).subscribe((res) => {
      if (res) {
        console.log(res);
        AuthUtils.setAuth(res.token);
        this.router.navigate(['index'], {queryParams: {id: res.id}});
      }
    }, error => {
      console.log(error);
      this.snackBar.open(error.message, 'X');
    });
  }

}
