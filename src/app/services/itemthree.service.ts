import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemthreeService {

  constructor(private http: HttpClient) { }

  url: string = "http://localhost:3000/inventoryThree"

  items: Item[] = []

  getAllItemsThree(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url)
  }

}
