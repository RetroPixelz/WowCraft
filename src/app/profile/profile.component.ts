import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Item } from '../models/item';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor (private profile: ProfileService) {}

  userId = sessionStorage.getItem("userId");

  CraftedItems: Item[] = []

  getCraftedItems(userId: string) {
    this.profile.getCraftedItems(userId).subscribe((data) => {
      this.CraftedItems = data;
      console.log(data)
    })
  }

  ngOnInit() {
    if (this.userId) {
      this.getCraftedItems(this.userId); // Pass the userId to the function
    }
  }


}
