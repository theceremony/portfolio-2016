import { Component, HostListener, Input } from '@angular/core';
import { AppState } from '../app.service';


@Component({
  selector: 'home',
  styleUrls: [ './home.style.css' ],
  templateUrl: './home.template.html'
})
export class Home {
  @Input() backgroundColor:string;

  localState = { value: '' };
  windowHeight:number;
  
  constructor(public appState: AppState) { }

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
