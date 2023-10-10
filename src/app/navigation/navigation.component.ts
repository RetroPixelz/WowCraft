import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})


export class NavigationComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }
  isVerified = false

  clear() {
    sessionStorage.clear()
  }

  checkValidLogin() {
    if(!sessionStorage.getItem('Verified')) {
      this.isVerified = false;
    } else {
      this.isVerified = true;

    }
  
  }

 


  ngOnInit() {

  this.checkValidLogin();

  }

}
