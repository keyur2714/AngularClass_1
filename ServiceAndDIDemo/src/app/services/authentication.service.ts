import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user.model';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class AuthenticationService{

    constructor(http: HttpClient){}


    redirectUrl: string = '/home';
    isValid:boolean = false;
    loggedInUser: User = null;

    public getToken(): string {
        return localStorage.getItem('token');
    }
    public isAuthenticated(): boolean {
        // get the token
        const token = this.getToken();
        // return a boolean reflecting 
        // whether or not the token is expired
        return tokenNotExpired(null, token);
    }

    authenticate(userName:string,password:String):boolean{
        if(userName === 'keyur' && password === 'India@1'){
            this.isValid = true;
            let user = new User();   
            user.userName = userName;
            user.role = 'ADMIN';
            user.token = 'ABC';
            this.loggedInUser = user;
            localStorage.setItem('token','abc');
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