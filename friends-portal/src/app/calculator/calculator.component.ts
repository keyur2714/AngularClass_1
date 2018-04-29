import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  result : number = 0;

  constructor() { }

  ngOnInit() {
  }

  add(num1,num2):void{
    this.result = parseInt(num1) + parseInt(num2);
  }
}
