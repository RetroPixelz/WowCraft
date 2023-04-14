import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CraftService } from '../services/craft.service';
import { VerifyService } from '../services/verify.service';
import { Router } from '@angular/router';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor (private signup: SignupService, private router: Router) {}


  isVerified = false;

  username = new FormControl("");
  password = new FormControl("");
  profession = new FormControl("");

  notVerified = false


  SignUpUser() {
    this.signup.signUp(this.username.value!, this.password.value!, this.profession.value!).subscribe((Response) => {
      if(Response.success) {
       
        console.log("Verified Successfully")
        this.isVerified = true;
      

      } else {
        console.log("Verified Unsuccessfull")
        this.isVerified = false;
        this.notVerified = true
   
      }
    })
  }
}
