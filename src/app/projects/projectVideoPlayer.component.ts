import { 
  Component, 
  HostListener,
  trigger,
  state,
  style,
  transition,
  animate 
} from '@angular/core';
import { Project } from '../projects/project';
import { Router, ActivatedRoute, Params } from '@angular/router';
import * as Player from '@vimeo/player'

@Component({
  selector: 'project-display',
  styleUrls: [ './projectVideoPlayer.style.css' ],
  templateUrl: './projectVideoPlayer.template.html',
  animations:[
    trigger('flyInOut', [
      state('in', style({transform: 'scale(1)'})),
      
      transition('void => *', [
        style({transform: 'scale(0)'}),
        animate(200)
      ]),
      
      transition('* => void', [
        style({transform: 'scale(0)'}),
        animate(200)
      ])
    ])
  ]
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