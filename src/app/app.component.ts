import { Component, OnInit } from '@angular/core';
import { ItemsService } from './services/items.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'start';
  constructor(
    public itemsSvc: ItemsService,
  ) {

  }
  ngOnInit(): void {
    this.itemsSvc.run().subscribe(
      data => console.log(data)
    )
  }
}
