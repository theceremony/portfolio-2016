import { Injectable, Output } from "@angular/core";
import { Headers, Http } from '@angular/http';
import { Project } from '../projects/project';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProjectDataService{
  private headers = new Headers({'Content-Type': 'application/json'});
  private projectsUrl = '/assets/projects.json';
  constructor(private http:Http) { }
    
  getProjects():Promise<Project[]>{
    return this.http.get(this.projectsUrl)
               .toPromise()
               .then(response =>response.json() as Project[])
               .catch(this.handleError);
   }

   private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
