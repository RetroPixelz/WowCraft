import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemthreeService } from '../services/itemthree.service';

@Component({
  selector: 'app-itemthree',
  templateUrl: './itemthree.component.html',
  styleUrls: ['./itemthree.component.scss'],
  providers: [ItemthreeService]

})

export class ItemthreeComponent {

  constructor(private ItemServiceThree: ItemthreeService) {}

  itemsthree: Item[] = []

  ngOnInit() {
    this.ItemServiceThree.getAllItemsThree().subscribe((data) => {
      this.itemsthree = data;
    })
  }
}
