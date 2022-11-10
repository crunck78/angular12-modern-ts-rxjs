import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  uploadItemImage(file:File){

  }

  addJsonItem(item:Item):Observable<Item>{
    const contentHeaders = new HttpHeaders();
    contentHeaders.set('Content-Type', 'application/json');
    return this.httpClient.post<Item>('http://127.0.0.1:3000/items/', item, {headers: contentHeaders});
  }

  addItem(item:Item){
    this.addJsonItem(item).subscribe();
  }
}
