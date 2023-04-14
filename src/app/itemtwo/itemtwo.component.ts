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

  newAmountHolder: number = 0

  updated = false

  detectChange(e: any) {
    this.newAmountHolder = +e.target.value
  }

  updateAmount(id: string) {
    this.ItemServiceTwo.updateAmount(id, this.newAmountHolder).subscribe((item) => {
      console.log(item.amount)
      this.updated = true
      

    })
  }

  ngOnInit() {
    this.ItemServiceTwo.getAllItemsTwo().subscribe((data) => {
      this.itemstwo = data;
    })
  }

}
