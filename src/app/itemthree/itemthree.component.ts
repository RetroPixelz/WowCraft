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

  newAmountHolder: number = 0

  updated = false

  detectChange(e: any) {
    this.newAmountHolder = +e.target.value
  }

  updateAmount(id: string) {
    this.ItemServiceThree.updateAmount(id, this.newAmountHolder).subscribe((item) => {
      console.log(item.amount)
      this.updated = true
      

    })
  }

  ngOnInit() {
    this.ItemServiceThree.getAllItemsThree().subscribe((data) => {
      this.itemsthree = data;
    })
  }
}
