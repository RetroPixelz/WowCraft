import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CraftService } from '../services/craft.service';
import { VerifyService } from '../services/verify.service';
import { Router } from '@angular/router';
import { LandingComponent } from '../landing/landing.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(private verify: VerifyService, private router: Router) { }

  //is user verified
  isVerified = false;

  //Formcontrols
  username = new FormControl("");
  password = new FormControl("");
  proffession = new FormControl("");


  notVerified = false

  details = ""

  CheckVerification() {
    try {
      this.verify.CheckVerifications(this.username.value!, this.password.value!).subscribe((Response) => {
        if (Response.success) {
          console.log(this.username)
          console.log("Verified Successfully")
          this.isVerified = true;

          sessionStorage.setItem(
            "Verified",
            JSON.stringify(this.isVerified = true)
          );

          this.router.navigateByUrl('/Landing')
        } else {
          console.log("Verified Unsuccessfull")
          this.isVerified = false;
          this.notVerified = true;
        }
      })
    } catch (error) {
      this.notVerified = true

      console.log("there was a problem, please try again later")
    }

  }

  ngOnInit() {

    sessionStorage.setItem("details", JSON.stringify(this.details))

  }

}


