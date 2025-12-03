import { Component } from '@angular/core';
import { ShopService } from '../shop.service';
import { FormsModule } from '@angular/forms';
import { CategoryListComponent } from '../category-list/category-list.component';
import { LegumeListComponent } from '../legume-list/legume-list.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FormsModule,CategoryListComponent,LegumeListComponent],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  selectedCategoryId: number | null = null;
  LegumesCount: number = 0;

  editingLegume: any = { id: 0, name: '', price: 0, categoryId: 0 };

  constructor(private shopService: ShopService) {}

  onCategorySelected(id: number) {
    this.selectedCategoryId = id;
  }

  // appelé par LegumeListComponent
  startEdit(legume: any) {
    this.editingLegume = { ...legume };
    console.log("Légume sélectionné pour édition :", this.editingLegume);
  }

  // appelé par le formulaire du modal
  submitEdit(form: any) {
    if (form.valid) {
      this.shopService.updateLegume(this.editingLegume).subscribe(res => {
        console.log("Légume mis à jour :", res);
        // ici tu peux recharger la liste des légumes après modification
      });
    }
  }
}
