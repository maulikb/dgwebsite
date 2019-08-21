import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-conatct-us',
  templateUrl: './conatct-us.component.html',
  styleUrls: ['./conatct-us.component.css']
})
export class ConatctUsComponent implements OnInit {
 

  formData ={
    name : '',
    email : '',
    mobileNo : '',
    companyName : '',
    messege :''
  }

  
  constructor(private http:HttpClient) { 
    
  }
  ngOnInit() 
  {
  }
  
  handleSubmit(e,data){
    e.preventDefault();


    this.formData={
      name : data.value.FName,
      email : data.value.Email,
      mobileNo : data.value.MNo,
      companyName : data.value.CName,
      messege : data.Query
    }
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');
    
this.http.post("http://localhost:3000/query", JSON.stringify(this.formData), {
  headers: headers
  })
  .subscribe(data => {
  console.log(data);

  });
  data.resetForm();
  }
}
