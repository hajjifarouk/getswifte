import {DriverInfo} from "./driver_info"
import {DriverCarInfo} from "./driver_car_info"

export class User {
    id: string
    first_name: string
    last_name: string
    gender: string
    mobile: string
    phone: string
    email: string
    uni_email: string
    city_or_university: string
    favorite_music: string
    password: string
    type: string
    card_number: string
    card_year: string
    card_month: string
    card_cvv: string
    facebook_id: string
    quickblox_id: string
    image: string
    device_token: string
    device_type: string
    status: string
    last_login: string
    created_at: string
    created_by: string
    updated_at: string
    updated_by: string
    "X-API-KEY" : string
    driver_info: DriverInfo
    driver_car_info : DriverCarInfo
}

