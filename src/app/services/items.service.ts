import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {Item} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private itemsSubject = new BehaviorSubject<Item[]>([]);
  public items$: Observable<Item[]> = this.itemsSubject.asObservable();

  constructor(
    public httpClient: HttpClient

  ) { }

  getItems$() {
    return this.httpClient.get<Item[]>('http://127.0.0.1:3000/items')
    .subscribe(items => this.itemsSubject.next(items));
  }

  getItemById$(itemId : number){
    return this.httpClient.get<Item>(`http://127.0.0.1:3000/items/${itemId}`);
  }
}
