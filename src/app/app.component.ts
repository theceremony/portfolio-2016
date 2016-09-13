import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';


@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./normalize.css','./app.style.css'],
  templateUrl: './app.template.html'
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {

  }

}
