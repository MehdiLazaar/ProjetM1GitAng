import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ShopService } from '../shop.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-legume-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './legume-list.component.html',
  styleUrls: ['./legume-list.component.css']
})
export class LegumeListComponent implements OnInit, OnChanges {
  @Input() selectedCategoryId: number | null = null;
  @Output() onLegumesCount = new EventEmitter<number>();
  @Output() onEditLegume = new EventEmitter<any>();

  Legumes: any[] = [];

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.loadLegumes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCategoryId']) {
      this.loadLegumes();
    }
  }

  loadLegumes(): void {
    const observable = this.selectedCategoryId
      ? this.shopService.getLegumesByCategory(this.selectedCategoryId)
      : this.shopService.getLegumes();

    observable.subscribe((data) => {
      this.Legumes = data.map(l => ({ ...l, liked: false }));
      this.onLegumesCount.emit(this.Legumes.length);
    });
  }

  editLegume(legume: any) {
    this.onEditLegume.emit(legume);
  }
  toggleLike(legume: any) {
    legume.liked = !legume.liked;
    this.shopService.toggleLike(legume.id, legume.liked).subscribe(
      res => console.log(`Légume ${legume.name} like mis à jour:`, res),
      err => console.error("Erreur lors du like:", err)
    );
  }
}
