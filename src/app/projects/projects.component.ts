import { Component, HostListener, Input } from '@angular/core';
import { AppState } from '../app.service';
import { Router } from '@angular/router';



@Component({
  selector: 'projects',
  styleUrls: [ './projects.style.css' ],
  templateUrl: './projects.template.html'
})
export class Projects {
  // ------------------------------------------
  @Input('projects') localProjects:Array<any>;
  @Input() backgroundColor:string;
  windowHeight:number;
  currentProject:any;
  // ------------------------------------------
  constructor(public appState: AppState, private router: Router) {

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = event.target.innerHeight;
  }

  ngOnInit() {
    this.windowHeight = window.innerHeight;
  }

  showProject(project:any){
    this.currentProject = project;
    this.router.navigate(['/projects',project.projectId]);
  }

}
