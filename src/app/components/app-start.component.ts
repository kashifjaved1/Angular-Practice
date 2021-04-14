import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-start',
  template: `
    <div fxLayout="row" fxLayoutGap="90px" >
      <img src="../assets/startImage.jpg" alt="Start Image">
      <div class="topMargin">
        <mat-card fxLayout="row" fxLayoutGap="10px">
          <button routerLink="login" mat-button>Login</button>
          <button routerLink="signup" mat-button>signup</button>
        </mat-card>
        <router-outlet></router-outlet>
      </div>
    </div>

  `,
  styles: [`

    img {
      height: 100vh;
    }

    button {
      padding: 1em 10em;
      color: white;
      background-color: #0d2440;
    }

    mat-card {
      background-color: white;
    }

    .topMargin {
      margin-top: 20px;
    }

  `]
})
export class AppStartComponent {

  constructor(private httpClient: HttpClient) {
  }

}
