import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/_Services/auth.service';
// import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  @Input () valuesFromHome:any;
  @Output() cancelRegister = new EventEmitter();
  model: any = {};
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register(){
    // console.log(this.model);
    this.authService.register(this.model).subscribe(() => {
      console.log('Reistration successful');
    }, error => {
      console.log(error)
    });
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }

}
