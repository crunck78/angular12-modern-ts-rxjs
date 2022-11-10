import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-preview-item',
  templateUrl: './preview-item.component.html',
  styleUrls: ['./preview-item.component.scss']
})
export class PreviewItemComponent implements OnInit {

  @Input() item!: Item;

  constructor() { }

  ngOnInit(): void {
  }

}
