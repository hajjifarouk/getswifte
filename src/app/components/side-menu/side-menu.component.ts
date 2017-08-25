import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user'
import {Router} from '@angular/router'

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  user:User;
  constructor(private _router :Router) {     this.user=JSON.parse( localStorage.getItem("currentUser"));
  console.log(this.user.first_name);
}

  ngOnInit() {
  }
  
goTo(page:string){
  switch(page){
    case "home":
    this._router.navigate(['./home']);
    break;
    case "profile" :
    this._router.navigate(['./profile']);
  }
}
}
