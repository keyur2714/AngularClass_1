import {Component} from '@angular/core';
@Component({
    selector : 'app-failure-message',
    template: `<app-message></app-message><h1>{{message}}</h1>`,
    styles: ['h1{color:red;}']   
})
export class FailureMessageComponent{

    message : string = "Sorry Fail Message.!";

}