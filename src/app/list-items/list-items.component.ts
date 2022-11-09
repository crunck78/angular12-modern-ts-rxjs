import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  items$!: Observable<Item[]>;
  constructor(
    private itemsSvc: ItemsService,
  ) {}

  ngOnInit(): void {
    this.items$ = this.itemsSvc.items$;
    this.itemsSvc.getItems$();
  }

}
