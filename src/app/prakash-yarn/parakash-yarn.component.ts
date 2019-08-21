import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-parakash-yarn',
  templateUrl: './parakash-yarn.component.html',
  styleUrls: ['./parakash-yarn.component.css']
})
export class ParakashYarnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(()=>{
    $('#myList a').on('click', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
    $('#myList a[href="#profile"]').tab('show') // Select tab by name
$('#myList a:first-child').tab('show') // Select first tab
$('#myList a:last-child').tab('show') // Select last tab
$('#myList a:nth-child(3)').tab('show') // Select third tab
  })
  }

}
