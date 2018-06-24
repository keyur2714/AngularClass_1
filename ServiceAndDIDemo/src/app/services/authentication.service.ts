import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
@Injectable()
export class AuthenticationService{

    constructor(http: HttpClient){}


    redirectUrl: string = '/home';
    isValid:boolean = false;
    loggedInUser: User = null;

    authenticate(userName:string,password:String):boolean{
        if(userName === 'keyur' && password === 'India@1'){
            this.isValid = true;
            let user = new User();   
            user.userName = userName;
            user.role = 'ADMIN';
            user.token = 'ABC';
            this.loggedInUser = user;
        }
        return this.isValid;
    }

    getLoggedInUser(): User{
        return this.loggedInUser;
    }

    isValidUser(): boolean{
        return this.isValid;
    }

    getReDirectUrl(): string {
        return this.redirectUrl;
    }

    setReDirectUrl(url: string): void {
        this.redirectUrl = url;
    }
}