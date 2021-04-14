import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../services/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-index',
  template: `
    <div fxLayout="column" fxLayoutAlign="end center">
      <mat-card fxLayout="row" fxLayoutGap="10em">
        <div fxLayout="column" class="card-width">
          <mat-card-title>
            Dashboard
          </mat-card-title>
          <mat-card-content>
            <h3>Displaying "User ID: {{this.id}}" as Example, but purpose is that we can show any kind of data
              here.</h3>
          </mat-card-content>
        </div>
        <div fxLayoutGap="5px">
          <button mat-button (click)="setIdUrl()">Edit Profile</button>
          <button class="delBtn" mat-button (click)="delete()">Delete</button>
        </div>
      </mat-card>
    </div>

  `,
  styles: [`

    mat-card {
      background-color: white;
      color: #0d2440;
      margin-top: 10%;
    }

    card-width {
      max-width: 500px;
    }

    button {
      padding: 1em 2em;
      background-color: #139d18;
      color: white;
    }

    .delBtn {
      background-color: red;
    }

  `]
})
export class IndexComponent implements OnInit {

  id: any;

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
  }


  setIdUrl(): void {
    this.route.queryParams.subscribe((params) => {

      this.router.navigate(['edit'], {queryParams: {id: params.id}});
    });
  }

  delete(): void {
    this.apiService.delUser('/delete/', this.id).subscribe((res) => {
        this.snackBar.open(res.message, 'X');
      },
      (error) => {
        console.log(error);
        this.snackBar.open(error.message);
      });
  }

}
