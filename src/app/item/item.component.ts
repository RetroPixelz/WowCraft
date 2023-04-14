import { Component, Input } from '@angular/core';
import { Item } from '../models/item';
import { ItemdbService } from '../services/itemdb.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
  providers: [ItemdbService]

})
export class ItemComponent {

  constructor(private itemService: ItemdbService) { }

  items: Item[] = []

  loading = false

  newAmountHolder: number = 0

  updated = false

  getItems() {
    this.loading = true
    this.itemService.getAllItems().subscribe((data) => {
      this.items = data;
      this.loading = false
    })
  }


  
  detectChange(e: any) {
    this.newAmountHolder = +e.target.value
  }

  updateAmount(id: string) {
    this.itemService.updateAmount(id, this.newAmountHolder).subscribe((item) => {
      console.log(item.amount)
      this.updated = true


    })
  }

  ngOnInit() {
    this.getItems()
  }




}

