import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ApiService} from "../services/api.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-edit',
  template: `
    <form (ngSubmit)="this.editForm.valid && edit()" [formGroup]="this.editForm">
      <div fxLayout="column" fxLayoutAlign="center center">
        <mat-card>
          <mat-card-title>
            Profile Edit
          </mat-card-title>
          <div fxLayout="column" fxLayoutGap="10px">
            <mat-form-field appearance="fill">
              <mat-label>First Name</mat-label>
              <input type="text" matInput formControlName="firstname" required>
              <mat-error>First Name is required</mat-error>
            </mat-form-field>
            <mat-form-field appearance="fill">
              <mat-label>Last Name</mat-label>
              <input type="text" matInput formControlName="lastname" required>
              <mat-error>Last Name is required</mat-error>
            </mat-form-field>
            <div fxLayoutAlign="center center" fxLayout="row">
              <button mat-button>Update</button>
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
export class EditComponent implements OnInit {

  editForm: FormGroup;
  id: any;

  constructor(private route: ActivatedRoute,
              private apiService: ApiService,
              private snackBar: MatSnackBar,
              private router: Router
  ) {}

  ngOnInit(): void {

    this.route.queryParams.subscribe((params) => {
      this.apiService.getUser('/users/' + params.id).subscribe((res) => {
          this.editForm = new FormGroup({
            firstname: new FormControl(String(res.data.first_name), [Validators.required]),
            lastname: new FormControl(String(res.data.last_name), [Validators.required])
          });
        },
        (error) => {
          console.log(error);
        });
    });

  }

  edit(): void {
    this.apiService.updateUser('/users/', this.editForm.value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['index']);
    }, error => {
       console.log(error);
       this.snackBar.open(error.message, 'X');
    });
  }


}
