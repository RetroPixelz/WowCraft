import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemthreeService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/inventoryThree"

  items: Item[] = []

  updateAmount(id: string, newAmount: number): Observable<Item> {
    return this.http.put<Item>(`${this.url}/${id}`, {amount: newAmount})
  }
  

  getAllItemsThree(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
  }

}
