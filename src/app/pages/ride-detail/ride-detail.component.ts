import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Rides} from '../../models/rides'

@Component({
  selector: 'app-ride-detail',
  templateUrl: './ride-detail.component.html',
  styleUrls: ['./ride-detail.component.css']
})
export class RideDetailComponent implements OnInit {
  private ride: Rides;
  private sub: any;
  constructor(private route: ActivatedRoute) { 
    this.ride=JSON.parse( localStorage.getItem("ride"));
    console.log(this.ride);
  }

  ngOnInit() {
    
  }

}
