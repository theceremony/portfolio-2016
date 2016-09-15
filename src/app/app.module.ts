// -----------------------------------------------------------------------------
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { ENV_PROVIDERS } from './environment';

// -----------------------------------------------------------------------------
// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';
import { Hamburger} from './common/hamburger.component'
import { ProjectDataService} from './common/projectData.service';
import { Home } from './home';
import { Projects, ProjectDisplay } from './projects';
import { About } from './about';
import { NoContent } from './no-content';
// -----------------------------------------------------------------------------

// Application wide providers
const APP_PROVIDERS = [ ...APP_RESOLVER_PROVIDERS, AppState ];

@NgModule({
  bootstrap   : [ App ],
  declarations: [ App, About, Home, NoContent, Hamburger,Projects,ProjectDisplay],
  imports     : [ BrowserModule, FormsModule, HttpModule ],
  providers   : [ ENV_PROVIDERS, APP_PROVIDERS, ProjectDataService ]
})

export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}
}
