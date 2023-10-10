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


  notVerified: boolean = false
  errorMessage: string = '';

  details = ""

  CheckVerification() {
    try {
      // Replace this with your actual authentication logic
      const enteredUsername = this.username.value;
      const enteredPassword = this.password.value;
  
      if (enteredUsername && enteredPassword) {
        // Authentication logic here
        // For example, you can call your VerifyService here
  
        this.verify.CheckVerifications(enteredUsername!, enteredPassword!).subscribe((Response) => {
          if (Response.success) {
            console.log(this.username);
            console.log("Verified Successfully");
            this.isVerified = true;
  
            // Save userId and isVerified status in sessionStorage
            sessionStorage.setItem("userId", Response.userId); // Save userId
            sessionStorage.setItem(
              "Verified",
              JSON.stringify(this.isVerified)
            );
  
            this.router.navigateByUrl('/Landing');
          } else {
            console.log("Verification Unsuccessful");
            this.isVerified = false;
            this.notVerified = true;
            this.errorMessage = 'Invalid username or password';
          }
        });
      } else {
        this.notVerified = true;
        this.errorMessage = 'Username and password are required';
      }
    } catch (error) {
      this.notVerified = true;
      this.errorMessage = 'There was a problem, please try again later';
      console.error(error);
    }
  }
  


  // CheckVerification() {
  //   try {
  //     // Replace this with your actual authentication logic
  //     const enteredUsername = this.username.value;
  //     const enteredPassword = this.password.value;
  
  //     if (enteredUsername && enteredPassword) {
  //       // Authentication logic here
  //       // For example, you can call your VerifyService here
  
  //       this.verify.CheckVerifications(enteredUsername!, enteredPassword!).subscribe((Response) => {
  //         if (Response.success) {
  //           console.log(this.username);
  //           console.log("Verified Successfully");
  //           this.isVerified = true;
  
  //           sessionStorage.setItem(
  //             "Verified",
  //             JSON.stringify(this.isVerified)
  //           );
  
  //           this.router.navigateByUrl('/Landing');
  //         } else {
  //           console.log("Verification Unsuccessful");
  //           this.isVerified = false;
  //           this.notVerified = true;
  //           this.errorMessage = 'Invalid username or password';
  //         }
  //       });
  //     } else {
  //       this.notVerified = true;
  //       this.errorMessage = 'Username and password are required';
  //     }
  //   } catch (error) {
  //     this.notVerified = true;
  //     this.errorMessage = 'There was a problem, please try again later';
  //     console.error(error);
  //   }
  // }
  


  // CheckVerification() {
  //   try {
  //     this.verify.CheckVerifications(this.username.value!, this.password.value!).subscribe((Response) => {
  //       if (Response.success) {
  //         console.log(this.username)
  //         console.log("Verified Successfully")
  //         this.isVerified = true;

  //         sessionStorage.setItem(
  //           "Verified",
  //           JSON.stringify(this.isVerified = true)
  //         );

  //         this.router.navigateByUrl('/Landing')
  //       } else {
  //         console.log("Verified Unsuccessfull")
  //         this.isVerified = false;
  //         this.notVerified = true;
  //         this.errorMessage = "Invalid username or password"
  //       }
  //     })
  //   } catch (error) {
  //     this.notVerified = true
  //     this.errorMessage = "Username and password are required"

  //     console.log("there was a problem, please try again later")
  //   }

  // }

  ngOnInit() {

    sessionStorage.setItem("details", JSON.stringify(this.details))

  }

}


