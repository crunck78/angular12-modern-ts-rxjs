import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  newItem: Item = {} as Item;

  constructor() { }

  ngOnInit(): void {
  }

  addItem(){
    console.log(this.newItem);
  }

}
