import { Component, HostListener } from '@angular/core';
import { AppState } from '../app.service';
import { ProjectDataService } from "../common/projectData.service";
import { Subscription } from 'rxjs';


@Component({
  selector: 'project-display',
  styleUrls: [ './projectDisplay.style.css' ],
  templateUrl: './projectDisplay.template.html',
  providers: [ProjectDataService]
})


export class ProjectDisplay{
  private sub: Subscription;
  private projectedData : Object;
  private windowHeight: Number;

  constructor(public projectDataService:ProjectDataService){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = event.target.innerHeight;
  }

  ngOnInit() {
    this.windowHeight = window.innerHeight;
  }

}
