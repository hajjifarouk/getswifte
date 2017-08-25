import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {LoginService} from '../../services/login.service'
import {User} from '../../models/user'
import {DriverInfo} from '../../models/driver_info'
import {DriverCarInfo} from '../../models/driver_car_info'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uni:string;
  email : string;
  password : string;
  status : boolean;
  response :String;
  user : User=new User();
  msg:String;
  unis=["Abilene Christian University",
  "Academy Of Art University",
  "Adams State College",
  "Adelphi University",
  "Adler Graduate School",
  "Adler School of Professional Psychology"
  ];

  constructor(private _loginservice:LoginService,private _router :Router) { }

  ngOnInit() {
  }

  login(){
    
    
    this._loginservice.Login(this.email,this.password).subscribe(
      value=>{
        this.msg=value.message;
        this.status=value.status;
        this.user=value.user_info;
      this.Done(this.status,this.msg);},
      error=>console.log("****"+error)
    );
   
  }

  Done(ok:boolean,msg:String){
    if(ok){
      localStorage.setItem("currentUser",JSON.stringify (this.user));
      this._router.navigate(['./home']);
      console.log("connected");
      
    }else{
      
      console.log(msg);
    }
    
  }

  SignUp(){
    this.user.city_or_university="esprit";
    this.user.gender="male";
    this.user.favorite_music="pop";
    this.user.device_type="web";
    this._loginservice.SignUp(this.user).subscribe(
      value=>{
        this.msg=value.message;
        this.status=value.status;
        this.user=value.user_info;
      this.Done(this.status,this.msg);},
      error=>console.log("****"+error)
    );
  }

  

}


