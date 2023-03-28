import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { VerifyService } from '../services/verify.service';


@Component({
  selector: 'app-crafting',
  templateUrl: './crafting.component.html',
  styleUrls: ['./crafting.component.scss']
})
export class CraftingComponent {

  constructor (private verify: VerifyService) {}

  //is user verified
  isVerified = false;

  //Formcontrols
  username = new FormControl("");
  password = new FormControl("");

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

// ngoninit of jwt is verfied then set isverified to true in sessionStorage
}
