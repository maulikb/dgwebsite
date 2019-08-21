import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('stickyMenu' ,  {static: false}) menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll(){
      let windowScroll = window.pageYOffset;
        if(windowScroll >= this.elementPosition)
        { 
          this.sticky = true;
      } 
      else{
        this.sticky = false;
      }
    }

}
