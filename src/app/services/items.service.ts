import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Item } from '../models/item.model';

interface ImageService{
  imgUrl: string
}

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

  getItemById$(itemId: number) {
    return this.httpClient.get<Item>(`http://127.0.0.1:3000/items/${itemId}`);
  }

  uploadItemImage(file: File): Observable<string> {

    const formData = new FormData();
    if (file) {
      formData.append('coverPhoto', file, file.name);
    }
    return this.httpClient.post<ImageService>('/api', formData).pipe(
      map((result)=> result.imgUrl)
    )
  }

  addJsonItem(item: Item): Observable<Item> {
    const contentHeaders = new HttpHeaders();
    contentHeaders.set('Content-Type', 'application/json');
    return this.httpClient.post<Item>('http://127.0.0.1:3000/items/', item, { headers: contentHeaders });
  }

  addItem(item: Item, selectedFile: File) {
    this.uploadItemImage(selectedFile);
    this.addJsonItem(item).subscribe();
  }
}
