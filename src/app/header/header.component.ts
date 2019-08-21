import {Component, OnInit, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

declare var $:any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectItem: boolean = false;
  focusOut : boolean = false;
  @ViewChild('stickyMenu' ,  {static: false}) menuElement: ElementRef;

  sticky: boolean = false;
  elementPosition: any;

  constructor() { }

  ngOnInit() {
    $(document).ready(()=>{
      
    $('.nav a').on('click', function(){
      if($(window).width() < 768){ 
      $('.navbar-toggle').click(); //bootstrap 3.x by Richard
      this.focusOut = false;
      }
    });


});
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
