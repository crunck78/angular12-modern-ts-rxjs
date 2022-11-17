import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  newItem: Item = {} as Item;
  selectedFile!: File;
  coverPhoto: string | ArrayBuffer = 'assets/uploadPhoto.png';

  constructor(private itemSvc: ItemsService) { }

  ngOnInit(): void {
  }

  addItem() {
    this.itemSvc.addItem(this.newItem, this.selectedFile);
  }

  /**
   * Upload the preview element
   * Prepare the selected file
   * @param {File} image
   */
  readInput(imageInput: HTMLInputElement) {
    const reader = new FileReader();
    const [file] = imageInput.files as Iterable<File>;

    this.selectedFile = file;
    reader.readAsDataURL(file);
    reader.addEventListener('load', (event) => { })
  }

}
