import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsService } from './services/items.service';

import { HttpClientModule } from '@angular/common/http';
import { ListItemsComponent } from './list-items/list-items.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { FormsModule } from '@angular/forms';
import { PreviewItemComponent } from './preview-item/preview-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemsComponent,
    ItemDetailsComponent,
    ProductFormComponent,
    PreviewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
