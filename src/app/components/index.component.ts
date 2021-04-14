import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../services/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {User} from "../models/user";

@Component({
  selector: 'app-index',
  template: `
    <div fxLayout="column">
      <div fxLayout="row" fxLayoutAlign="end" style="margin-top: 5px">
        <button class="btn" (click)="logout()" mat-button>Logout</button>
      </div>
      <div fxLayout="row" fxLayoutAlign="center center">
        <button mat-button *ngFor="let user of users" (click)="edit(user.id)">
          <mat-card>
            <mat-card-title>
              {{user.first_name + ' ' + user.last_name}}
            </mat-card-title>
            <mat-card-content>
              {{user.email}}
            </mat-card-content>
          </mat-card>
        </button>
      </div>
    </div>

    <router-outlet></router-outlet>
  `,
  styles: [`

    mat-card {
      background-color: white;
      color: #0d2440;
      margin-top: 10%;
    }

    .btn {
      color: white;
    }

  `]
})
export class IndexComponent implements OnInit {

  id: any;
  users: User[] = [];
  userId: any;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiService,
              private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.id = params.id;
    });

    this.apiService.getUserList(1).subscribe((res) => {
      this.users = res.data;
    });
  }

  edit(userId: number) {
    this.router.navigate(['index/edit'], {queryParams: {id: userId}});
  }

  logout(): void {
    localStorage.removeItem('auth_token');
    this.router.navigateByUrl('');
  }

}
