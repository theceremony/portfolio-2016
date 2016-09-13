import { Component, HostListener } from '@angular/core';
import { AppState } from '../app.service';
import {ProjectDataService} from '../common/projectData.service';


@Component({
  selector: 'projects',
  styleUrls: [ './projects.style.css' ],
  templateUrl: './projects.template.html',
  providers: [ProjectDataService]
})
export class Projects {
  localState = { value: '' };

  windowHeight:number;
  backgroundColor:string;
  backgroundColors:Array<any>;

  constructor(public appState: AppState, public projectDataService:ProjectDataService) {

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
