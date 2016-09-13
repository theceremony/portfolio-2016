import { Component, HostListener } from '@angular/core';
import { AppState } from '../app.service';


@Component({
  selector: 'home',
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})
export class Home {
  localState = { value: '' };

  windowHeight:number;
  backgroundColor:string;
  backgroundColors:Array<any>;

  constructor(public appState: AppState) {
    this.backgroundColors = [
      '#ff3300',
      '#11C6F7',
      '#68E381'
    ];
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = event.target.innerHeight;
  }

  ngOnInit() {
    this.windowHeight = window.innerHeight;
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

}
