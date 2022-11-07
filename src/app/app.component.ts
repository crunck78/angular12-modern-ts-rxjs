import { NgIfContext } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './models/item.model';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items$!: Observable<Item[]>;
  constructor(
    public itemsSvc: ItemsService,
  ) {}

  ngOnInit(): void {
    this.items$ = this.itemsSvc.run();
  }
}
