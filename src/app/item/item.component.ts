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

  constructor (private itemService: ItemdbService) {}

  items: Item[] = []
  
  loading = false
  


  getItems() {
    this.loading = true
    this.itemService.getAllItems().subscribe((data) => {
      this.items = data;
      this.loading = false
    })
  }


  ngOnInit() {
  this.getItems()    
  }


  //define var that we get from parent (map Component)
  @Input() itemObject = {value: ""}

}

