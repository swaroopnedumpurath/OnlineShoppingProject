import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';


@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {

  @Input () valuesFromHome:any;
  @Output() cancelRegister=new EventEmitter();
  model:any={};
  constructor() { }

  ngOnInit() {
  }

  register(){
    console.log(this.model);
  }

  cancel(){
    this.cancelRegister.emit(false);
    console.log('Cancelled');
  }

}
