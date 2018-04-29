import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ManageFriendsComponent } from './manage-friends/manage-friends.component';


@NgModule({
  declarations: [
    AppComponent,
    ManageFriendsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
