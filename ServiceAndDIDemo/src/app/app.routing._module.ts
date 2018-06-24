 import { NgModule } from '@angular/core'; 
 import { RouterModule,Routes } from '@angular/router';
 import { HomeComponent } from './home/home.component';
 import { BookListComponent } from './book-list/book-list.component';
 import { BookEntryComponent } from './book-entry/book-entry.component';
 import { LoginComponent } from './login/login.component';
 import { AuthGuard } from './services/auth.guard';

 export const routes: Routes = [
    {path:'login',component: LoginComponent},
    {path:'home',component: HomeComponent},
    {path:'book-list',component: BookListComponent,canActivate: [AuthGuard]},
    {path:'book-entry',component: BookEntryComponent,canActivate: [AuthGuard]}
 ];
 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]  
 })
 export class AppRoutingModule{

 }