import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-start',
  template: `
    <div fxLayout="row">
      <img src="../assets/startImage.jpg" alt="Start Image">
      <div class="center">
        <mat-card id="2" fxLayout="column" fxLayoutGap="10px">
          <button id="3" routerLink="login" mat-button>Login</button>
          <button id="4" routerLink="signup" mat-button>signup</button>
        </mat-card>
      </div>
      <div class="theme-btn">
        <button id="five" mat-button (click)="changeBG()"><strong>White Theme</strong></button>
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

    .center {
      margin: auto;
    }

    #five {
      background-color: #0fab1d;
      padding: 1em 2em;
    }

  `]
})
export class AppStartComponent {

  private inverted = false;

  changeBG(): void {
    if (this.inverted === false) {
      document.getElementById('1').style.backgroundColor = 'white';
      document.getElementById('2').style.backgroundColor = '#0d2440';
      document.getElementById('3').style.backgroundColor = 'white';
      document.getElementById('3').style.color = '#0d2440';
      document.getElementById('4').style.backgroundColor = 'white';
      document.getElementById('4').style.color = '#0d2440';
      document.querySelector('strong').innerText = 'Blue Theme';
      this.inverted = true;
    }
    else{
      document.getElementById('1').style.backgroundColor = '#0d2440';
      document.getElementById('2').style.backgroundColor = 'white';
      document.getElementById('3').style.backgroundColor = '#0d2440';
      document.getElementById('3').style.color = 'white';
      document.getElementById('4').style.backgroundColor = '#0d2440';
      document.getElementById('4').style.color = 'white';
      document.querySelector('strong').innerText = 'White Theme';
      this.inverted = false;
    }

  }

  constructor(private httpClient: HttpClient) {
  }

}
