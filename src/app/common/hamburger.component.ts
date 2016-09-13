import { Component, Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';




@Component({
  selector: 'hambuger-menu',
  styleUrls: [ './hamburger.style.css' ],
  templateUrl: './hamburger.template.html'
})

export class Hamburger {

  className = "closed";

  constructor() {

  }

  toggleOpen(event:any){
    this.className = (this.className == "closed")?"open":"closed";
  }

  close(event:any){
    this.className = "closed";
  }

}
