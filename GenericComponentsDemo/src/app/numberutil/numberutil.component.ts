import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numberutil',
  template: ``,
  styleUrls: ['./numberutil.component.css']
})
export class NumberutilComponent implements OnInit {

  constructor() { 
    console.log(111);
  }

  ngOnInit() {
  }

  add(number1:number,number2:number):number{
    console.log(number1+" ======= "+number2);
    return number1 + number2;
  }

  sub(number1:number,number2:number):number{
    return number1 - number2;
  }

  mul(number1:number,number2:number):number{
    return number1 * number2;
  }

  div(number1:number,number2:number):number{
    if(number2 == 0)
      return 0;
    return number1 / number2;
  }

}
