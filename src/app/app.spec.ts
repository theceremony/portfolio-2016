import {
  addProviders,
  inject,
} from '@angular/core/testing';

// Load the implementations that should be tested
import { App } from './app.component';
import { ProjectDataService } from "./common/projectData.service";

describe('App', () => {

let service;

  // beforeEachProviders(() => [
  //   ProjectDataService
  // ]);

  // beforeEach(inject([ProjectDataService], s => {
  //   service = s;
  // }));
  //
  // it('should return pro', done => {
  //   service.get().subscribe(x => {
  //     expect(x).toContain('en');
  //     expect(x).toContain('es');
  //     expect(x).toContain('fr');
  //     expect(x.length).toEqual(3);
  //     done();
  //   });
  // });

});
