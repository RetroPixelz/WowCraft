import { Component } from '@angular/core';
import { Item } from '../models/item';
import { ItemdbService } from '../services/itemdb.service';
import {MatTooltipModule} from '@angular/material/tooltip';


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

  show = false
  show2 = false

  activeLocation: string | null = null;



  constructor() { }

  ShowOne() {
    this.show = true
    this.show2 = false

  }

  ShowTwo() {
    this.show = false
    this.show2 = true
  }

  off() {
    this.show = false
  }

  LocationOne() {
    this.Ogrimmar = true;
    this.Stormwind = false;
    this.ThunderBluff = false;
    this.activeLocation = 'Ogrimmar';
  }

  LocationTwo() {
    this.Ogrimmar = false;
    this.Stormwind = true;
    this.ThunderBluff = false;
    this.activeLocation = 'Stormwind'; 
  }

  LocationThree() {
    this.Ogrimmar = false;
    this.Stormwind = false;
    this.ThunderBluff = true;
   
    this.activeLocation = 'Thunder Bluff';
  }

  ngOnInit() {
      
      this.LocationThree(),
      this.LocationTwo(),
      this.LocationOne()
  }


}
