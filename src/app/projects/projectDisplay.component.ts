import { Component, HostListener } from '@angular/core';
import { AppState } from '../app.service';
import { ProjectDataService } from "../common/projectData.service";
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import * as Player from '@vimeo/player'

// declare var Vimeo: any;

@Component({
  selector: 'project-display',
  styleUrls: [ './projectDisplay.style.css' ],
  templateUrl: './projectDisplay.template.html',
  providers: [ProjectDataService]
})

export class ProjectDisplay{
  private sub: Subscription;
  private projectedData : Object;
  private windowHeight : Number;
  private videoOptions : Object;
  private videPlayer : any;
  currentProject:any;

  constructor(public projectDataService:ProjectDataService,private route: ActivatedRoute){

  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = event.target.innerHeight;
  }

  ngOnInit() {
    
    this.route.params.forEach((params: Params) => {
      
      let id = params['projectId'];
      console.log('id',id);
      
    });

    this.videoOptions = {
      id: 69990780,
      width: 100,
      loop: false,
      title: false,
      byline: false,
      portrait: false,
      badge: false,
      fullscreen: true
    }
    this.videPlayer = new Player('fullscreen-player', this.videoOptions);
    this.videPlayer.on('play', function() {
        console.log('played the video!');
    });
    this.windowHeight = window.innerHeight;
    console.log(this.videPlayer);
  }

  playVideo(){
    this.videPlayer.play();
    this.videPlayer.element.parentNode.parentNode.classList += ' show';
    console.log('this.videPlayer.element.classList',this.videPlayer.element.className);
  }

}
