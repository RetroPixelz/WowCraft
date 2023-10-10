import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000//user/:userId/craftedItems"

  items: Item[] = []

  getCraftedItems(userId: string) {
    return this.http.get<Item[]>(`${this.url}/user/${userId}/craftedItems`);
  }

 
  
}
