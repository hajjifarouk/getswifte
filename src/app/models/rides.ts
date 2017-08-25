import {User} from "./user"

export class Rides {
    id: string
    user_id: string
    location_from: string
    start_date: string
    start_time: string
    location_to: string
    is_round_trip: string
    return_date: string
    return_time: string
    price_per_passenger: string
    trip_type: string
    seats: string
    luggage: string
    category: string
    time_tolrance: string
    detour: string
    meeting_point: string
    description: string
    trip_status: string
    pay_to_driver_for_this_trip: string
    created_at: string
    updated_at: string
    latitude_for_to_location: string
    lognitude_for_to_location: string
    latitude_for_from_location: string
    lognitude_for_from_location: string
    need: string
    timepref: string
    user_info:User;
    

}