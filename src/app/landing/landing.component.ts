import { Component } from '@angular/core';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor (private verify: VerifyService) {}

  userId = sessionStorage.getItem("userId");

  //PARSE 
  // Verified = JSON.parse(sessionStorage.getItem("details"))
  // VerifiedObject = JSON.parse("this.Verified")

  // Verified = sessionStorage.getItem('details')

ngOnInit() {
  console.log(this.userId)
}

}
