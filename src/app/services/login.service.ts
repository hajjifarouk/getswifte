import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import 'rxjs/add/observable/throw';

import { User } from '../models/user';


@Injectable()
export class LoginService {
    private baseApi = 'http://getswifte.com/api';
    constructor(private _http: Http) { }

    Login(email: string, password: string):Observable<any> {
        let headers = new Headers();
        headers.delete('Content-Type');
        headers.delete('User-Agent');
        let formData: FormData = new FormData();
        formData.append('uni_email',email);
        formData.append('password',password);
        
        
        
        headers.append('X-API-KEY', '3d9296bb1c1e4e6a46624933d2c90356');



        return this._http.post(this.baseApi+"/login", formData, new RequestOptions({ "headers": headers }))
            .map((res: Response) => res.json()).catch(error=>error.json());
    }

    SignUp(user : User):Observable<any>{
        let headers = new Headers();
        headers.delete('Content-Type');
        headers.delete('User-Agent');
        let formData: FormData = new FormData();
        formData.append('uni_email',user.uni_email);
        formData.append('password',user.password);
        formData.append('gender',user.gender);
        formData.append('device_type',user.device_type);
        formData.append('city_or_university',user.city_or_university);
        formData.append('facebook_id',user.id);
        formData.append('favorite_music',user.favorite_music);
        formData.append('first_name',user.first_name);
        formData.append('last_name',user.last_name);
        formData.append('phone',user.phone);
        
        
        
        
        
        headers.append('X-API-KEY', '3d9296bb1c1e4e6a46624933d2c90356');



        return this._http.post(this.baseApi+"/userRegistration", formData, new RequestOptions({ "headers": headers }))
            .map((res: Response) => res.json()).catch(error=>error.json());

        

    }
    

}