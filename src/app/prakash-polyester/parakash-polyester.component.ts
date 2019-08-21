import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-parakash-polyester',
  templateUrl: './parakash-polyester.component.html',
  styleUrls: ['./parakash-polyester.component.css']
})
export class ParakashPolyesterComponent implements OnInit {

   

  constructor() { }

  ngOnInit():void {
    $(document).ready(()=>{
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })
    }) 
  }
  
}
