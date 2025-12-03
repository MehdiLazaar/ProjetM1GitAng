import { Component } from '@angular/core';
import { LegumeListComponent } from '../legume-list/legume-list.component';
import { CategoryListComponent } from '../category-list/category-list.component';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [LegumeListComponent,CategoryListComponent,FormsModule],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  selectedCategoryId: number | null = null;
  LegumesCount: number = 0;

  editingLegume: any = {
    id: 0,
    name: '',
    price: 0,
    categoryId: 0
  };
  shopService: any;

  onCategorySelected(id: number) {
    this.selectedCategoryId = id;
  }

  startEdit(legume: any) {
    this.editingLegume = { ...legume }; // clone
  }

  // appelé par le formulaire du modal
  submitEdit(form: any) {
    if (form.valid && this.editingLegume.id) {
      this.shopService.updateLegume(this.editingLegume).subscribe({
        next: (res: any) => {
          console.log("Légume mis à jour :", res);
          // Réinitialiser editingLegume
          this.editingLegume = { id: 0, name: '', price: 0, categoryId: 0 };
          form.resetForm();

          // Fermer le modal
          const modalEl = document.getElementById('editLegumeModal');
          const modalInstance = bootstrap.Modal.getInstance(modalEl!);
          modalInstance?.hide();

          // Recharger la liste des légumes en émettant un event
          const legumeList = document.querySelector('app-legume-list') as any;
          legumeList?.loadLegumes?.();
        },
        error: (err: any) => console.error(err)
      });
    }
  }
}
