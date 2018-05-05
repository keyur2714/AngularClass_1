import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ManageFriendsComponent } from './manage-friends/manage-friends.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ManageProducsComponent } from './manage-producs/manage-producs.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageFriendsComponent,
    CalculatorComponent,
    ManageProducsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
