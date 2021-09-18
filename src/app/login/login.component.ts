import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'app/Services/data.service';
import { Login } from './login.modal';
import {NgxSpinnerService} from "ngx-spinner";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new Login();
  emailvalidation:boolean=false;
  passwordvalidation:boolean=false;
  password:any="";
  data:any;
  login_status:any;
  login_message:any;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 
  constructor(
    private dataService:DataService,
    private route:Router,
    private spinner:NgxSpinnerService,
  ) { }

  ngOnInit() {
  }

  Register(){
    this.route.navigate(['/register']);
  }

   Login(){
     
    this.spinner.show();
    this.login_message = "";
    this.emailvalidation = false;
    this.passwordvalidation = false;
    //  console.log(this.password);
      if(this.login.email == "" && this.password == ""){
        this.emailvalidation = true;
        this.passwordvalidation = true;
        this.spinner.hide();
        return;
      }
       
      if(this.login.email == ""){
        this.emailvalidation = true;
        this.password == "";
        this.spinner.hide();
         return;
      }
      // else{
      // this.emailvalidation = false;
      // }
      if(this.password == ""){
        this.login.email == "";
        console.log("password is empty");
        this.passwordvalidation = true;
        this.spinner.hide();
        return;
      }
      // else
      // {     
      // this.passwordvalidation = false;
      // }

     
      this.login.token = btoa(this.password);
      var token1= this.login.token;
      var ans = atob(token1);
      this.dataService.loginUser(this.login).subscribe(res=>{
        this.spinner.hide();
       this.data = JSON.parse(res);
       this.login_status=this.data.status;
       console.log( this.login_status);
       if(this.login_status == 1){
        
         localStorage.setItem('email',this.login.email);
         console.log("inside navigate");
         this.route.navigate(['/movies']);
  
       }else{
        this.login_message=this.data.status_message;
       }
       
      },err=>{
        console.log("This user is not registered");
      })
    }
  

}
