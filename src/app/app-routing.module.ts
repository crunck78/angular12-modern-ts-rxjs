import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { ListItemsComponent } from './list-items/list-items.component';

const routes: Routes = [
  {path: 'list-items', component: ListItemsComponent},
  {path: 'item-details/:id', component: ItemDetailsComponent},
  {path: '', redirectTo: '/list-items', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
