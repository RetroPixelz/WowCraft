import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemdbService } from '../services/itemdb.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  providers: [ItemdbService]
})

export class MapComponent {
  

//   constructor (private itemService: ItemdbService) {}

//   items: Item[] = []

  

//   // ListOfItems = [{value:"bleh", }, {value:"blah", }, {value:"bluh", }]
  

// ngOnInit() {
//   this.itemService.getAllItems().subscribe((data) => {
//     this.items = data;
//   })
// }

}
