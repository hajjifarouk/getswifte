import { Component, OnInit } from '@angular/core';
import {Router, NavigationExtras} from "@angular/router";
import {RidesService} from  '../../services/rides.service'
import {Rides} from '../../models/rides'
import {Groups} from '../../models/groups'

import {Location} from '../../models/location'
import {User} from '../../models/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  lat: number;
  lng: number;
  locations:Location[];
  rides:Rides[];
  myride:Rides;
  groups:Groups[];
  l:Location=new Location();
  user:User;
  imgPath:string ="http://getswifte.com/";
 // ride:Rides;
  done:boolean;
  constructor(private _ridesService:RidesService,private _router: Router) {
    this.user=JSON.parse( localStorage.getItem("currentUser"));
    this._ridesService.GetAllRides(this.user.id,this.user['X-API-KEY']).subscribe(
      value=>{
        this.rides=value.trips;
        
        //this.ride=this.rides[0];
        this.done=true;
        this.show();
        console.log(this.rides);
        },
      error=>console.log(error)
    );
    this._ridesService.GetAllGroups(this.user.id,this.user['X-API-KEY']).subscribe(
      value=>{
        this.groups=value.groups;
        
        //this.ride=this.rides[0];
        this.done=true;
        this.show();
        console.log(this.groups);
        },
      error=>console.log(error)
    );

    
    
 }
 

  ngOnInit() {
      }

  show(){

  this.locations=this.rides.map(function(r){
    return{
      lat:parseFloat(r.latitude_for_from_location),
      lng:parseFloat(r.lognitude_for_from_location)
    };
  });
   /* this.rides.forEach(r=>{
      this.l.lat=parseFloat( r.latitude_for_from_location);
      this.l.lng=parseFloat(r.lognitude_for_from_location);
      this.locations.push(this.l)
    })*/
    console.log(this.locations);
  }
  thisRide(ride:Rides){
    console.log(ride);
  }
  public onTap(ride:Rides) {
    localStorage.setItem("ride",JSON.stringify(ride));
    this._router.navigate(['./ridedetail']);
}

}
