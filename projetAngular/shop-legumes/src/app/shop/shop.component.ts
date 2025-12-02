import { Component } from '@angular/core';
import { CategoryListComponent } from '../category-list/category-list.component';
import { LegumeListComponent } from '../legume-list/legume-list.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  imports: [CategoryListComponent,LegumeListComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  selectedCategoryId : number | null = null;
  http: any;
  api: any;

  /**
   * Methode appelee lorsqu'une categorie est selectionnee par le composant CategoryListComponent.
   * Elle permet de stocker l'ID de la categorie selectionnee dans la propriete selectedCategoryId.
   * @param {number} id - L'ID de la categorie selectionnee.
   */
  onCategorySelected(id: number){
    console.log("Categorie selectionnee dans shop : " , id);
    this.selectedCategoryId = id;
  }
}

