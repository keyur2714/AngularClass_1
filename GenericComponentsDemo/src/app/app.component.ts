import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  successMessage:string = "Success fully Done";

  messages: string[] = [
    "Hello",
    "Hi",
    "Welcome",
    "Good Morning",
    "Good Night"
  ];

  friendObjList = [
    {
      "name": "keyur"
    },
    {
      "name": "denish"
    },
    {
      "name": "vinit"
    }
  ];

  columnNames:string[] = ["name"];
  displayColumnNames:string[] = ["Friend Name"]; 
  
}
