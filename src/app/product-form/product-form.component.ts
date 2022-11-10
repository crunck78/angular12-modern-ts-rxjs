import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  newItem: Item = {} as Item;

  constructor(private itemSvc: ItemsService) { }

  ngOnInit(): void {
  }

  addItem(){
    this.itemSvc.addItem(this.newItem);
  }

}
