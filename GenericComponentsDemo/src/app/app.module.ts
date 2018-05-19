import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SuccessMessageComponent } from './success-message/success-message.component';
import { CustomGridComponent } from './custom-grid/custom-grid.component';
import { ItemComponent } from './item/item.component';
import { DeptListComponent } from './dept-list/dept-list.component';
import { ServerComponent } from './server/server.component';
import { NumberutilComponent } from './numberutil/numberutil.component';


@NgModule({
  declarations: [
    AppComponent,
    SuccessMessageComponent,
    CustomGridComponent,
    ItemComponent,
    DeptListComponent,
    ServerComponent,
    NumberutilComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
