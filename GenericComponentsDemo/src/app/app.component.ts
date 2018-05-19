import { Component, ViewChild } from '@angular/core';
import { Department } from './dept-list/dept.model';
import { Server } from './server/server.model';
import { NumberutilComponent } from './numberutil/numberutil.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  result : number = 0;
  successMessage:string = "Success fully Done";

  @ViewChild(NumberutilComponent)
  numberUtilComponent : NumberutilComponent; 

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
  selectedDepartment : Department = new Department();
  columnNames:string[] = ["name"];
  displayColumnNames:string[] = ["Friend Name"]; 
  getDepartment(selectedDept){
    console.log(2);
    this.selectedDepartment = selectedDept;
  }

  serverList: Server[] = [
    {
      "serverName":"Windows",
      "serverOs":"Windows 7"
    },
    {
      "serverName":"Linux",
      "serverOs":"Fedora"
    }
  ]

  getServer(server){
    this.serverList.push(server);
  }

  add(num1,num2){
    this.result = this.numberUtilComponent.add(parseInt(num1),parseInt(num2));
    console.log(this.result);
  }
}
