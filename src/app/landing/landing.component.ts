import { Component } from '@angular/core';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor (private verify: VerifyService) {}


  //PARSE 
  // Verified = JSON.parse(sessionStorage.getItem("details"))
  Verified = sessionStorage.getItem('details')
  // VerifiedObject = JSON.parse("this.Verified")

ngOnInit() {
  // console.log(this.VerifiedObject)
}

}
