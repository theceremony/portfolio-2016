import { Component, ViewEncapsulation } from '@angular/core';
import { AppState } from './app.service';
import { ProjectDataService } from "./common/projectData.service";


@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./normalize.css','./app.style.css'],
  templateUrl: './app.template.html',
  providers: [ProjectDataService]
})
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  name = '';
  localProjects = [];

  constructor(public appState: AppState, public projectDataService:ProjectDataService) {
    this.projectDataService.getData().subscribe(
      data=>{
        this.localProjects = data;
      }
    )
  }

}
