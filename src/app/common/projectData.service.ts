import {Injectable, Output} from "@angular/core";
import {Http} from '@angular/http';

@Injectable()
export class ProjectDataService{
  public idHash: Object = new Object();
  public jsonData: Array<any>;
  constructor(private http:Http) { }
  createHash(){
    for(let index in this.jsonData){ this.idHash[this.jsonData[index].projectId] = this.jsonData[index]; }
    return this.idHash;
  }

  getDataById(id:String){
    console.log('idHash',this.idHash);
  }

  getData(){
    let json = this.http.get('/assets/projects.json').map(res => res.json());
    json.subscribe(
      data=>{
        this.jsonData = data;
        this.createHash();
    })
    return json;
   }
}
