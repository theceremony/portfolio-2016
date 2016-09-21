import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { Projects, ProjectDisplay, ProjectVideoPlayer } from './projects';

export const ROUTES: Routes = [
	{ path: 'projects/:projectId', component: ProjectDisplay },
	{ path: 'projects/:projectId', component: ProjectDisplay,
		children: [
			{path: 'play-video/:videoId', component:ProjectVideoPlayer}
		]
	},
	{ path: '**', component: ProjectDisplay }
];
