 import { NgModule } from '@angular/core'; 
 import { RouterModule,Routes } from '@angular/router';
 import { HomeComponent } from './home/home.component';
 import { BookListComponent } from './book-list/book-list.component';
 import { BookEntryComponent } from './book-entry/book-entry.component';

 export const routes: Routes = [
    {path:'home',component: HomeComponent},
    {path:'book-list',component: BookListComponent},
    {path:'book-entry',component: BookEntryComponent}
 ];

 @NgModule({
     imports: [RouterModule.forRoot(routes)],
     exports: [RouterModule]  
 })
 export class AppRoutingModule{

 }