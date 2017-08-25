import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {Rides} from '../models/rides'

import 'rxjs/add/observable/throw';



@Injectable()
export class RidesService {
    private baseApi = 'http://getswifte.com/api';
    constructor(private _http: Http) { }

    GetAllRides(user_id: string, xapikey: string):Observable<any> {
        let headers = new Headers();
        headers.delete('Content-Type');
        headers.delete('User-Agent');
        let formData: FormData = new FormData();
        formData.append('user_id',user_id);
        formData.append('X-API-KEY',xapikey);
        formData.append('latitude_for_from_location',"1");
        formData.append('lognitude_for_from_location',"2");
        formData.append('category',"all");
        formData.append('seats',"1");
        formData.append('start_date',"all");
        

        return this._http.post(this.baseApi+"/searchTrip", formData)
            .map((res: Response) => res.json()).catch(error=>error.json());
    }

    GetAllGroups(user_id: string, xapikey: string):Observable<any> {
        let headers = new Headers();
        headers.delete('Content-Type');
        headers.delete('User-Agent');
        let formData: FormData = new FormData();
        formData.append('user_id',user_id);
        formData.append('X-API-KEY',xapikey);
        formData.append('latitude_for_from_location',"1");
        formData.append('lognitude_for_from_location',"2");
        formData.append('category',"all");
        formData.append('seats',"1");
        formData.append('start_date',"all");
        

        return this._http.post(this.baseApi+"/searchGroup", formData)
            .map((res: Response) => res.json()).catch(error=>error.json());
    }
    GetAllData(user_id: string, xapikey: string):Observable<any> {
        let headers = new Headers();
        headers.delete('Content-Type');
        headers.delete('User-Agent');
        let formData: FormData = new FormData();
        formData.append('user_id',user_id);
        formData.append('X-API-KEY',xapikey);
        
        

        return this._http.post(this.baseApi+"/getAllData", formData)
            .map((res: Response) => res.json()).catch(error=>error.json());
    }

    AddRide(user_id: string, xapikey: string,ride:Rides):Observable<any> {
        let headers = new Headers();
        headers.delete('Content-Type');
        headers.delete('User-Agent');
        let formData: FormData = new FormData();
        formData.append('user_id',user_id);
        formData.append('X-API-KEY',xapikey);
        formData.append('return_date',ride.return_date);
        formData.append('return_time',ride.return_time);
        formData.append('is_round_trip',ride.is_round_trip);
        formData.append('seats',ride.seats);
        formData.append('price_per_passenger',ride.price_per_passenger);
        formData.append('location_from',ride.location_from);
        formData.append('latitude_for_from_location',ride.latitude_for_from_location);
        formData.append('lognitude_for_from_location',ride.lognitude_for_from_location);
        formData.append('latitude_for_to_location',ride.latitude_for_to_location);
        formData.append('lognitude_for_to_location',ride.lognitude_for_to_location);
        formData.append('location_to',ride.location_to);
        formData.append('luggage',ride.luggage);
        formData.append('start_date',ride.start_date);
        formData.append('start_time',ride.start_time);
        formData.append('category',"no");
        formData.append('need',"0");
        formData.append('timepref',"0");
        

        return this._http.post(this.baseApi+"/createTrip", formData)
            .map((res: Response) => res.json()).catch(error=>error.json());
    }


}