import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(
    public httpClient: HttpClient

  ) { }

  run() {
    return this.httpClient.get('http://127.0.0.1:3000/items');
  }
}