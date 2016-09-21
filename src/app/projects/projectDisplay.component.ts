import { 
  Component, 
  HostListener,
  trigger,
  state,
  style,
  transition,
  animate 
} from '@angular/core';
import { AppState } from '../app.service';
import { ProjectDataService } from "../common/projectData.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Project } from '../projects/project';


// declare var Vimeo: any;

@Component({
  selector: 'project-display',
  styleUrls: [ './projectDisplay.style.css' ],
  templateUrl: './projectDisplay.template.html',
  providers: [ProjectDataService],
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

export class ProjectDisplay{
  private windowHeight : Number;
  
  currentProject:Project;

  constructor(
    public projectDataService:ProjectDataService,
    private route: ActivatedRoute, 
    private router: Router
    ){ }

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

  playVideo(videoId:number):void{
    this.router.navigate([
        '/projects',
        this.currentProject.projectId,
        'play-video',
        this.currentProject.vimeoId
      ]);
  }

}
