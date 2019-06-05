import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs/operators';
import { SignupService } from '../../signup.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email:string='';
  pwd:string='';
  name:string='';

  constructor(public signup1:SignupService) { }

  ngOnInit() {
  }

  signup(){
    var user = {
      "Name":this.name,
      "Email":this.email,
      "Password":this.pwd
    };
    this.signup1.appMethod(user).subscribe(res=>{
      console.log(res);
    });
  }

}
