import { Component, OnInit } from '@angular/core';


declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit()  : void{
    $(document).ready(()=>{
      $('#myCarousel').bind('mousewheel', function(e) {
        if(e.originalEvent.wheelDelta /120 > 0) {
            $(this).carousel('next');
        } else {
            $(this).carousel('prev');
        }
    });
 
      $("#myCarousel").swiperight(function() {
         $(this).carousel('prev');
       });
      $("#myCarousel").swipeleft(function() {
         $(this).carousel('next');
      });

});
  }

}
