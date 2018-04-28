import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { FailureMessageComponent } from './failure-message/failure-message.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    FailureMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
