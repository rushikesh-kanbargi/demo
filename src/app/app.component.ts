// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Parent Data</h1>
    <app-data-list></app-data-list>
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-pagination-app';
}
