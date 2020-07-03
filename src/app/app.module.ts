import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './_Components/nav/nav.component';
import { CreateBooksComponent } from './_Components/create-books/create-books.component';
import { CustomerRegistrationComponent } from './_Components/customer-registration/customer-registration.component';
import { AuthService } from './_Services/auth.service';
import { HomeComponent } from './_Components/home/home.component';
import { BookSearchComponent } from './_Components/book-search/book-search.component';
import { ValueComponent } from './value/value.component';




@NgModule({
   declarations: [
      AppComponent,
      NavComponent,
      CreateBooksComponent,
      CustomerRegistrationComponent,
      HomeComponent,
      BookSearchComponent,
      ValueComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
