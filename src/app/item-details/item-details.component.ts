import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from 'express';
import { map, Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.scss']
})
export class ItemDetailsComponent implements OnInit {

  itemId$!: Observable<string | null>;
  item$!: Observable<Item>;
  constructor(private route: ActivatedRoute, private itemsSvc : ItemsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((pm)=>{
        const id = +(pm.get('id') as string);
        this.item$ = this.itemsSvc.getItemById$(id);
    });
  }

}
