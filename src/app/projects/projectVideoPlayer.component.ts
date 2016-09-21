import { Component, HostListener } from '@angular/core';
import { Project } from '../projects/project';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as Player from '@vimeo/player'

@Component({
  selector: 'project-display',
  styleUrls: [ './projectVideoPlayer.style.css' ],
  templateUrl: './projectVideoPlayer.template.html'
})

export class ProjectVideoPlayer{
	private videoOptions : any;
	private videPlayer : any;
	constructor(private route: ActivatedRoute, private router: Router){}
	 ngOnInit() {
		this.route.params.forEach((params: Params) => {      
      let id = params['videoId'];
	    this.videoOptions = {
	      id: id, width: 100, loop: false, title: false,
	      byline: false, portrait: false, badge: false, fullscreen: true
	    }
	    this.videPlayer = new Player('fullscreen-player', this.videoOptions);
	    this.videPlayer.on('play', function() { console.log('played the video!'); });
	    this.videPlayer.play();
		});
	}
}