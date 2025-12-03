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
  Legumes: any[] = [];

  @Input() selectedCategoryId: number | null = null;
  @Output() onLegumesCount = new EventEmitter<number>();
  @Output() onEditLegume = new EventEmitter<any>();

  constructor(private shopService: ShopService) {}

  ngOnInit(): void {
    this.loadLegumes();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedCategoryId']) {
      this.loadLegumes();
    }
  }

  private loadLegumes(): void {
    if (this.selectedCategoryId) {
      this.shopService.getLegumesByCategory(this.selectedCategoryId).subscribe(data => {
        this.Legumes = data;
        this.onLegumesCount.emit(data.length);
      });
    } else {
      this.shopService.getLegumes().subscribe(data => {
        this.Legumes = data;
        this.onLegumesCount.emit(data.length);
      });
    }
  }

  // bouton "Modifier"
  startEdit(legume: any) {
    this.onEditLegume.emit(legume);
  }
}
