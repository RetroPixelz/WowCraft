import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';

//inj makes it a service
@Injectable({
  providedIn: 'root'
})
export class ItemdbService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/inventory"

  items: Item[] = []

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
  }

  updateAmount(id: string, newAmount: number): Observable<Item> {
    return this.http.put<Item>(`${this.url}/${id}`, {amount: newAmount})
  }
  

}
