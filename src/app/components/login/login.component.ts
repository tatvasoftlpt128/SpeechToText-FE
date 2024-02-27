import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from 'src/app/restapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  username: string;
  password: string;
  message: any;
  //correctText: string="";

  constructor(private service: RestapiService, private router:Router) { }
  ngOnInit(){
  }

  doLogin() {
    //debugger
    let resp= this.service.login(this.username, this.password);
    
    resp.subscribe((data)=>{
  
      this.message=data;
      this.router.navigate(["/home"])
      console.log( "momo"+data);
    })
}
}