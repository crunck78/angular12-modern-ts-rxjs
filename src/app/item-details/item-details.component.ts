import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
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
  constructor(private route: ActivatedRoute, private itemsSvc: ItemsService, private router: Router) { }

  ngOnInit(): void {
    this.item$ = this.route.paramMap.pipe(
      switchMap((pm) => {
        const id = +(pm.get('id') as string);
        return this.itemsSvc.getItemById$(id);
      })
    );
  }

  goBack() {
    this.router.navigate(['/']);
  }

}
