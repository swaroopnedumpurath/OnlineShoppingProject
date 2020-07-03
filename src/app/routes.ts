import {Routes} from '@angular/router';
import { HomeComponent } from './_Components/home/home.component';
import { CustomerRegistrationComponent } from './_Components/customer-registration/customer-registration.component';
import { BookSearchComponent } from './_Components/book-search/book-search.component';
import { CreateBooksComponent } from './_Components/create-books/create-books.component';

export const appRoutes:Routes=[
    
    {path:'home',component:HomeComponent},    
    {path:'search',component:BookSearchComponent},
    {path:'create',component:CreateBooksComponent},
    {path:'**',redirectTo:'home',pathMatch:'full'}
    
];

// import { NgModule, Component } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';
// import { HomeComponent } from './_Components/home/home.component';
// import { CustomerRegistrationComponent } from './_Components/customer-registration/customer-registration.component';
// import { BookSearchComponent } from './_Components/book-search/book-search.component';
// import { CreateBooksComponent } from './_Components/create-books/create-books.component';



// export const routingComponents=[CustomerRegistrationComponent,BookSearchComponent,CreateBooksComponent,HomeComponent]

// const routes: Routes = [
//     {path:'home',component:HomeComponent},    
//     {path:'search',component:BookSearchComponent},
//     {path:'create',component:CreateBooksComponent},
//     {path:'**',redirectTo:'home',pathMatch:'full'}    
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }