import { Component, HostListener, Input } from '@angular/core';
import { AppState } from '../app.service';



@Component({
  selector: 'projects',
  styleUrls: [ './projects.style.css' ],
  templateUrl: './projects.template.html'
})
export class Projects {
  // ------------------------------------------
  @Input('projects') localProjects:Array<any>;
  windowHeight:number;
  // ------------------------------------------
  constructor(public appState: AppState) {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = event.target.innerHeight;
  }

  ngOnInit() {
    this.windowHeight = window.innerHeight;
  }

  showProject(project:Object){
    console.log(project);
  }

}
