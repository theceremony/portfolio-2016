import {
  addProviders,
  inject
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { BaseRequestOptions, Http } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

// Load the implementations that should be tested
import { Home } from './home.component';

describe('Home', () => {
  // provide our implementations or mocks to the dependency injector
  // beforeEach(() => addProviders([
  //   BaseRequestOptions,
  //   MockBackend,
  //   {
  //     provide: Http,
  //     useFactory: function(backend, defaultOptions) {
  //       return new Http(backend, defaultOptions);
  //     },
  //     deps: [MockBackend, BaseRequestOptions]
  //   },
  //   Home
  // ]));


});
