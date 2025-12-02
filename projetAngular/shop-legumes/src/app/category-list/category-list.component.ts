import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent implements OnInit {
  //Pour stocker les categories qu on va recuperer a partir du json-server
  categories : any [] = [];

  // Envoie une info au composant parent
  @Output() OnCategorySelected = new EventEmitter<number>();

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    });
  }

  /**
   * Envoie l'ID de la categorie selectionnee au composant parent via l'evenement OnCategorySelected.
   * @param {any} c - La categorie selectionnee.
   */
  OnCategoryClick(c: any){
    this.OnCategorySelected.emit(c.id);
  }
}
