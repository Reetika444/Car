import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'app/Services/data.service';
import { Reg } from './reg.modal';
import { Register } from './register.model';
import {NgxSpinnerService} from "ngx-spinner";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register = new Register();
  reg = new Reg();
  data:any;
  message:any;
  status:any;
  token:any;
  login_status:any;
  login_message:any;
  confirmpassword:any="";
  visible:boolean=false;
  namevalidation:boolean=false;
  passwordvalidation:boolean=false;
  emailvalidation:boolean=false;
  confirmpasswordvalidation:boolean=false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"; 

  allfieldsvalidation:boolean=false;

  constructor(
    private spinner:NgxSpinnerService,
    private dataService:DataService,
    private route:Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.route.navigate(['/login']);
  }

  submit(){
    this.spinner.show();
    this.namevalidation=false;
    this.emailvalidation=false;
    this.passwordvalidation=false;
    this.confirmpasswordvalidation=false;
    this.visible=false;
    if(this.register.password == "" || this.register.email == ""  || this.register.name == "" || this.confirmpassword == ""){
      this.allfieldsvalidation=true;
      this.spinner.hide();
      return;
    }

    // if(this.register.email == ""){
    //   this.emailvalidation = true;
    //   // this.register.password = "";
    //   // this.register.name = "";
    //   // this.confirmpassword = "";
    //    return;
    // }

    // if(this.register.password == ""){
    //   this.passwordvalidation = true;
    //   // this.register.password = "";
    //   // this.register.name = "";
    //   // this.confirmpassword = "";
    //    return;
    // }
    // if(this.register.name == ""){
    //   this.namevalidation = true;
    //   // this.register.password = "";
    //   // this.register.name = "";
    //   // this.confirmpassword = "";
    //    return;
    // }
    // if(this.confirmpassword == ""){
    //   this.confirmpasswordvalidation = true;
    //   // this.register.password = "";
    //   // this.register.name = "";
    //   // this.confirmpassword = "";
    //    return;
    // }

    if(this.confirmpassword != this.register.password){
    this.allfieldsvalidation=false;
    // this.register = new Register();
    // this.confirmpassword="";
    this.visible = true;
    this.spinner.hide();
    return;
    }
    this.reg.token = btoa(this.register.password);
    var token2=this.reg.token;
    // console.log(atob(token2));
    
    // console.log(atob("this.reg.token")); 
    this.reg.email = this.register.email;
    this.reg.name = this.register.name;
    console.log(this.reg);
    this.dataService.registerUser(this.reg).subscribe(res=>{
      this.spinner.hide();
     this.data = JSON.parse(res);
     this.message=this.data.status_message;
     this.status=this.data.status;
     this.register = new Register();
     this.confirmpassword="";
    })
  }


  // login(){
  //   this.reg.token = btoa("this.register.name:this.register.password");
  //   this.reg.email = this.register.email;
  //   this.reg.name = this.register.name;
  //   // console.log(this.register);
  //   this.dataService.loginUser(this.reg).subscribe(res=>{
  //    this.data = JSON.parse(res);
  //   //  this.login_message=this.data.status_message;
  //    this.login_status=this.data.status;
  //    if(this.login_status == 1){
  //      console.log("inside navigate");
  //      this.route.navigate[('/movies')];

  //    }else{
  //     this.login_message=this.data.status_message;
  //    }
  //    this.register = new Register();
  //   })
  // }

}
