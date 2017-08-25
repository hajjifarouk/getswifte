import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user'
import {Rides} from '../../models/rides'
import {RidesService} from '../../services/rides.service'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:User;
  rides : Rides[];
  
  constructor(private _ridesService : RidesService) {  
    this.user=JSON.parse( localStorage.getItem("currentUser"));

  console.log(this.user);

  this._ridesService.GetAllData(this.user.id,this.user['X-API-KEY']).subscribe(
    value=>{
      this.rides=value.user_info.created_trip;
      
      //this.ride=this.rides[0];
      
      console.log(this.rides);
      },
    error=>console.log(error)
  );
}

  ngOnInit() {
  }

}
