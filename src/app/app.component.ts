import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectDataService } from "./common/projectData.service";


@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./normalize.css','./app.style.css'],
  templateUrl: './app.template.html',
  providers: [ProjectDataService]
})
export class App {
  localProjects = [];

  constructor( public projectDataService:ProjectDataService) {
    this.projectDataService.getData().subscribe(
      data=>{
        this.localProjects = data;
      }
    )
  }

}
