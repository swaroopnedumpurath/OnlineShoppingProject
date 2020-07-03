import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  login(model:any)
  {
    //httppost method needs to add to fetch the token from API
    return localStorage.setItem('token',"Swaroop")
  }

  register(model:any)
  {
    return "abc";
  }
}
