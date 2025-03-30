import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lit } from "litlyx-js"

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    Lit.init("67e9b868b9698244376e56a1");
  }
  title = 'TzTok-Bob';
}
