import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Department } from './dept.model';
@Component({
  selector: 'app-dept-list',
  templateUrl: './dept-list.component.html',
  styleUrls: ['./dept-list.component.css']
})
export class DeptListComponent implements OnInit {

  selectedDepartment:Department = {
    "deptId":20,
    "name":"SALES"
  };

  name:string = "keyur";  

  @Output()
  getSelectedDeptEvent = new EventEmitter<Department>();

  deptList:Department[] = [
    {
      "deptId":10,
      "name":"IT"
    },
    {
      "deptId":20,
      "name":"SALES"
    },
    {
      "deptId":30,
      "name":"PURCHASE"
    }
  ];

  constructor() { }

  ngOnInit() {    
  }

  getSelectedValue(){
    console.log(1);
    console.log(this.selectedDepartment.deptId);
    console.log(this.selectedDepartment.name);
    this.getSelectedDeptEvent.emit(this.selectedDepartment);
  }

}
