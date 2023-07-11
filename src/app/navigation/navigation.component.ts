import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

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
