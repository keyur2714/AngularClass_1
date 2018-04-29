import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-friends',
  templateUrl: './manage-friends.component.html',
  styleUrls: ['./manage-friends.component.css']
})
export class ManageFriendsComponent implements OnInit {

  friendNames : string[]=["keyur","denish","vinit"];

  constructor() { 
    console.log("Loaded...");
  }

  ngOnInit() {
    console.log("Initialize...");
  }

  addFiend(name):void{
    console.log("Inside add friend method...");
    this.friendNames.push(name);
  }
}
