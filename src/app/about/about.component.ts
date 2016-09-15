import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'about',
  styleUrls: [ './about.style.css' ],
  templateUrl: './about.template.html',
})
export class About {
  windowHeight:number;
  constructor() {}
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowHeight = event.target.innerHeight;
  }
  ngOnInit() {
    this.windowHeight = window.innerHeight;
  }
}
