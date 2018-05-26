import { Component,ElementRef,ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'If Else Demo';

  age: number  = 17;

  result : string = "";

  @ViewChild("percentage")
  percentage : ElementRef;

  calculateGrade(){
    let per = parseInt(this.percentage.nativeElement.value);
    if(per >= 70)
      this.result = "Distinction";
    else if(per >= 60)
      this.result = "First";
    else if(per >= 50)
      this.result = "Second"
    else if(per >= 40)
      this.result = "Pass";
    else
      this.result = "FAIL";    
  }
}
