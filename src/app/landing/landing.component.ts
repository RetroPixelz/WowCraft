import { Component } from '@angular/core';
import { VerifyService } from '../services/verify.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor (private verify: VerifyService) {}

  

ngOnInit() {

}

}
