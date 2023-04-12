import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

//inj makes it a service
@Injectable({
  providedIn: 'root'
})
export class ItemtwoService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/inventoryTwo"

  items: Item[] = []

  getAllItemsTwo(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
  }

  

}
