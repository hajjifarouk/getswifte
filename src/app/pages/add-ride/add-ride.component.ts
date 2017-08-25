import { Component, OnInit,ElementRef, NgZone,ViewChild } from '@angular/core';

import { FormControl } from '@angular/forms';
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';
import {Location} from '../../models/location'
import {Rides} from '../../models/rides'
import {RidesService} from  '../../services/rides.service'
import {User} from '../../models/user'



@Component({
  selector: 'app-add-ride',
  templateUrl: './add-ride.component.html',
  styleUrls: ['./add-ride.component.css']
})
export class AddRideComponent implements OnInit {

  public ride :Rides=new Rides();
  public location_to:Location={lat:0,lng:0};;
  public location_from:Location={lat:0,lng:0};
  public searchControl: FormControl;
  user:User;
  
  @ViewChild("search")
  public searchElementRef: ElementRef;
  @ViewChild("search1")
  public searchElementRefto: ElementRef;
  constructor( private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,private _ridesService:RidesService) {
      this.user=JSON.parse( localStorage.getItem("currentUser"));
      
      this.ride.is_round_trip='0';
      this.ride.luggage="Small"
     }

  ngOnInit() {
    this.searchControl = new FormControl();
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.ride.location_from=place.name;
          this.location_from.lat=place.geometry.location.lat();
          this.location_from.lng=place.geometry.location.lng();
          this.ride.latitude_for_from_location=this.location_from.lat.toString();
          this.ride.lognitude_for_from_location=this.location_from.lng.toString();
          console.log(this.ride);
        });
      });

      let autocompleteto = new google.maps.places.Autocomplete(this.searchElementRefto.nativeElement, {
        types: ["address"]
      });
      autocompleteto.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocompleteto.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.ride.location_to=place.name;
          
          this.location_to.lat=place.geometry.location.lat();
          this.location_to.lng=place.geometry.location.lng();
          this.ride.latitude_for_to_location=this.location_to.lat.toString();
          this.ride.lognitude_for_to_location=this.location_to.lng.toString();
          console.log(this.ride);
        });
      });
      

    });
  }

  send(){
    this._ridesService.AddRide(this.user.id,this.user['X-API-KEY'],this.ride).subscribe(
      value=>{
        console.log(value.status)
        },
      error=>console.log(error)
    );
    console.log(this.ride);
  }
 

  isOneWay(){
    this.ride.is_round_trip="0";
  }
  isRound(){
    this.ride.is_round_trip="1";
  }
  isWeekly(){
    this.ride.is_round_trip="2";
  }
  small(){
    this.ride.luggage="Small";
  }
  medium(){
    this.ride.luggage="Medium";
  }
  large(){
    this.ride.luggage="Large"
  }

}
