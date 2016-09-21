import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectDataService } from "./common/projectData.service";
import { Project } from './projects/project';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./normalize.css','./app.style.css'],
  templateUrl: './app.template.html',
  providers: [ProjectDataService]
})

export class App {

  localProjects:Array<Project>;
  backgroundColor:string;
  backgroundColors:Array<string> = [
    '#ff3300',
    '#11C6F7',
    '#ff3300',
    '#68E381',
    '#ff3300',
    '#11C6F7'
  ];
  

  constructor( public projectDataService:ProjectDataService) { }

   ngOnInit() {
    this.backgroundColor = this.backgroundColors[Math.round(Math.random() * (this.backgroundColors.length-1))];
    this.projectDataService
        .getProjects()
        .then( projects => this.localProjects = projects );
  }

}
