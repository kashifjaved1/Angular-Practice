import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <h1 fxLayout="column" fxLayoutAlign="center center" fxFill="10" class="error_display">
      Error: 404 - Not Found
    </h1>
  `,
  styles: [`

    .error_display{
      color: #139d18;
      font-size: 100px;
    }

  `]
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
