import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CraftService } from '../services/craft.service';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor (private verify: VerifyService) {}

  //is user verified
  isVerified = false;

  //Formcontrols
  username = new FormControl("");
  password = new FormControl("");
  proffession = new FormControl("");


  CheckVerification() {
    this.verify.CheckVerification(this.username.value!, this.password.value!).subscribe((Response) => {
      if(Response.success) {
        //store jwt in storage
        console.log("Verified Successfully")
        this.isVerified = true;
      } else {
        console.log("Verified Unsuccessfull")
        this.isVerified = false;
      }
    })
  }

}