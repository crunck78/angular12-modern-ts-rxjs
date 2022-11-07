import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Item} from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    public httpClient: HttpClient

  ) { }

  run() {
    return this.httpClient.get<Item[]>('http://127.0.0.1:3000/items');
  }
}
