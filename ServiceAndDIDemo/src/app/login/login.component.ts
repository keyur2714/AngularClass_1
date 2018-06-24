import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string = '';
  isValid: boolean = false;

  constructor(private router:Router,private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  login(){
    console.log(this.userName+" "+this.password);
    this.isValid = this.authenticationService.authenticate(this.userName,this.password);
    if(this.isValid){
      this.router.navigate([this.authenticationService.getReDirectUrl()]);
    }
  }

}
