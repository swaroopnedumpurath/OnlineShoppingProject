import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login(this.model).subscribe(next => {
      console.log('Logged in succesfully');
    }, error => {
      console.log('Falied to login');    
    });
    // this.authService.login(this.model);  
    console.log('Logged in succesfully');
  }
  loggedIn(){
    const token=localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    console.log('Logged out Successfully');
  }

}
