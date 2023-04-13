import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemdbService } from '../services/itemdb.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})

export class MapComponent {
  
Ogrimmar = false
Stormwind = false
ThunderBluff = false

loading = false

//maak 3 cick functions, een vir elke location en dan set die location var to true

constructor() {}
    


LocationOne() {
  this.Ogrimmar = true;
  this.Stormwind = false;
  this.ThunderBluff = false;
  console.log("clicked");
}

LocationTwo() {
  this.Ogrimmar = false;
  this.Stormwind = true;
  this.ThunderBluff = false;

  console.log("clicked 2");
}

LocationThree() {
  this.Ogrimmar = false;
  this.Stormwind = false;
  this.ThunderBluff = true;
  console.log("clicked 3");
}

ngOnInit() {
 this.LocationOne(),
 this.LocationTwo(),
 this.LocationThree()
}


}
