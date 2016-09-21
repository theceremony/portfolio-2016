import { Component, HostListener } from '@angular/core';
import { AppState } from '../app.service';
import { ProjectDataService } from "../common/projectData.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Project } from '../projects/project';
import * as Player from '@vimeo/player'

// declare var Vimeo: any;

@Component({
  selector: 'project-display',
  styleUrls: [ './projectDisplay.style.css' ],
  templateUrl: './projectDisplay.template.html',
  providers: [ProjectDataService]
})

export class ProjectDisplay{
  private windowHeight : Number;
  private videoOptions : Object;
  private videPlayer : any;

  currentProject:Project;

  constructor(public projectDataService:ProjectDataService,private route: ActivatedRoute, private router: Router){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = event.target.innerHeight;
  }

  ngOnInit() {
    

    this.route.params.forEach((params: Params) => {
      
      let id = params['projectId'];
      this.projectDataService
          .getProject(id)
          .then(project =>this.currentProject = project);
    });



    this.windowHeight = window.innerHeight;
  }

  setupVideoPlayer(){
   
  }

  playVideo(videoId:number):void{
    // this.videPlayer.play();
    // this.videPlayer.element.parentNode.parentNode.classList += ' show';
    // console.log('this.videPlayer.element.classList',this.videPlayer.element.className);
    // event.preventDefault();
    this.router.navigate([
        '/projects',
        this.currentProject.projectId,
        'play-video',
        this.currentProject.vimeoId
      ]);
    console.log('hello',this.router);
  }

}
