import { Routes, RouterModule } from '@angular/router';
import { Home } from './home';
import { About } from './about';
import { Projects, ProjectDisplay } from './projects';

export const ROUTES: Routes = [
  { path: 'projects/:projectId', component: ProjectDisplay },
  { path: '**', component: ProjectDisplay }
];
