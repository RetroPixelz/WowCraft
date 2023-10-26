import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000"
  // url: string = "http://localhost:3000//user"

  userId = sessionStorage.getItem("userId");

  items: Item[] = []

  // getCraftedItems(userId: string) {
  //   return this.http.get<Item[]>(`${this.url}/user/${userId}/craftedItems`);
  // }

  // getCraftedItems(userId: string): Observable<Item[]> {
  //   return this.http.get<Item[]>(this.url)
  // }
 

  getCraftedItems(userId: string) {
    return this.http.get<Item[]>(`${this.url}/user/${userId}/craftedItems`);
  }
  
}
