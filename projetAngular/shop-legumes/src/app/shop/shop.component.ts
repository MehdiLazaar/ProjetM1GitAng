import { Component } from '@angular/core';
import { CategoryListComponent } from '../category-list/category-list.component';

@Component({
  selector: 'app-shop',
  imports: [CategoryListComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
