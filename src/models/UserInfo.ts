export interface Address {
    "street": String,
    "suite": String,
    "city": String,
    "zipcode": String,
    "geo": {
        "lat": String,
        "lng": String
    }
};

export default interface UserInfo {
    "id": bigint,
    "name": String,
    "username": String,
    "email": String,
    "address": Address
};
