import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing._module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BookEntryComponent } from './book-entry/book-entry.component';
import { LoggingService } from './services/logging.service';
import { AuthenticationService } from './services/authentication.service';
import { AuthGuard } from './services/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookEntryComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],  
  providers: [LoggingService,AuthenticationService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
