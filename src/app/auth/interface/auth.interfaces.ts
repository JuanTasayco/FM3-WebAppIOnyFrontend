export interface User {
    user:  UserClass;
    token: string;
}

export interface UserClass {    
    _id:      string;
    email:    string;
    password: string;
    __v:      number;
}
