import { Component, ViewEncapsulation } from '@angular/core';
import { ProjectDataService } from "./common/projectData.service";
import { Project } from './projects/project';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./normalize.css','./app.style.css'],
  templateUrl: './app.template.html',
  providers: [ProjectDataService]
})

export class App {
  showBack:boolean;
  localProjects:Array<Project>;
  backgroundColor:string;
  backgroundColors:Array<string> = [
    '#ff3300',
    '#11C6F7',
    '#ff3300',
    '#68E381',
    '#ff3300',
    '#11C6F7',
    '#833'
  ];
  

  constructor( public projectDataService:ProjectDataService, private router:Router) {
    router.events.subscribe(
      routerVal =>{
        if(routerVal instanceof NavigationEnd){
          this.showBack = (routerVal.url.length > 1)?true:false;
        }
      }
     );
  }

   ngOnInit() {
    this.backgroundColor = this.backgroundColors[Math.round(Math.random() * (this.backgroundColors.length-1))];
    this.projectDataService
        .getProjects()
        .then( projects => this.localProjects = projects );
  }

  back(){
    window.history.back();
  }

}
