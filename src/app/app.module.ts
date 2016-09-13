// -----------------------------------------------------------------------------
import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { ENV_PROVIDERS } from './environment';
import { ROUTES } from './app.routes';
// -----------------------------------------------------------------------------
// App is our top level component
import { App } from './app.component';
import { APP_RESOLVER_PROVIDERS } from './app.resolver';
import { AppState } from './app.service';
import { Hamburger} from './common/hamburger.component'
import { ProjectDataService} from './common/projectData.service';
import { Home } from './home';
import { Projects } from './projects';
import { About } from './about';
import { NoContent } from './no-content';
// -----------------------------------------------------------------------------

// Application wide providers
const APP_PROVIDERS = [ ...APP_RESOLVER_PROVIDERS, AppState ];

@NgModule({
  bootstrap   : [ App ],
  declarations: [ App, About, Home, NoContent, Hamburger,Projects],
  imports     : [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(ROUTES, { useHash: true }) ],
  providers   : [ ENV_PROVIDERS, APP_PROVIDERS, ProjectDataService ]
})

export class AppModule {
  constructor(public appRef: ApplicationRef, public appState: AppState) {}
  hmrOnInit(store) {
    if (!store || !store.state) return;
    console.log('HMR store', store);
    this.appState._state = store.state;
    this.appRef.tick();
    delete store.state;
  }
  hmrOnDestroy(store) {
    var cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    var state = this.appState._state;
    store.state = state;
    store.disposeOldHosts = createNewHosts(cmpLocation)
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts()
    delete store.disposeOldHosts;
  }
}
