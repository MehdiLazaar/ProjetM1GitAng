import { Component } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {
  constructor(private shopService: ShopService) { }
  //Pour stocker les categories qu on va recuperer a partir du json-server
  categories : any [] = [];
  ngOnInit(): void {
    this.shopService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    });
  }
}
