import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CraftService } from '../services/craft.service';
import { VerifyService } from '../services/verify.service';
import {  Router } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 

  constructor (private verify: VerifyService, private router: Router) {}

  //is user verified
  isVerified = false;

  //Formcontrols
  username = new FormControl("");
  password = new FormControl("");
  proffession = new FormControl("");

  // returnUrl = LandingComponent

  notVerified = false
  

  CheckVerification() {
    try {
      this.verify.CheckVerification(this.username.value!, this.password.value!).subscribe((Response) => {
        if(Response.success) {
          console.log("Verified Successfully")
          this.isVerified = true;
          
          this.router.navigateByUrl('/Landing')
        } else {
          console.log("Verified Unsuccessfull")
          this.isVerified = false;
          this.notVerified = true
          
          
  //Make an alert or ngif show something to say it failed
        }
      })    
    } catch (error) {
      this.notVerified = true

      console.log("there was a problem, please try again later")
    }
  
  }

  

}

// this.router.navigateByUrl(this.returnUrl).then(this.doSomething());
