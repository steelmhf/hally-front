export class User{
    id: String;
    fname: String;
    lname: String;
    username: String;
    email: String;
    phone: String;
    address: String;
    status: String;
    password: String;

    constructor(
        id: String,
        fname: String,
        lname: String,
        username: String,
        email: String,
        phone: String,
        address: String,
        status: String,
        password: String, 
    ){
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.username = username;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.status = status;
        this.password = password;
    }
}