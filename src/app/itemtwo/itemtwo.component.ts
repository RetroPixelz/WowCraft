import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemtwoService } from '../services/itemtwo.service';


@Component({
  selector: 'app-itemtwo',
  templateUrl: './itemtwo.component.html',
  styleUrls: ['./itemtwo.component.scss'],
  providers: [ItemtwoService]

})
export class ItemtwoComponent {

  constructor(private ItemServiceTwo: ItemtwoService) {}

  itemstwo: Item[] = []

  ngOnInit() {
    this.ItemServiceTwo.getAllItemsTwo().subscribe((data) => {
      this.itemstwo = data;
    })
  }

}
