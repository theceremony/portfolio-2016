import {Injectable} from "@angular/core";
import {Http} from '@angular/http';

@Injectable()
export class ProjectDataService{
  public jsonData : Object;

  constructor(private http:Http) { }

  getData(){
     return this.http.get('/assets/projects.json').map(res => res.json());
   }
}
