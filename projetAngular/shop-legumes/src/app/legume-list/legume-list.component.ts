import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-legume-list',
  imports: [],
  templateUrl: './legume-list.component.html',
  styleUrl: './legume-list.component.css'
})
export class LegumeListComponent implements OnInit ,OnChanges{
  constructor(private shopService: ShopService) { }
  Legumes: any[] = [];
  @Input () selectedCategoryId : number | null = null;
  @Output() OnLegumesCount = new EventEmitter<number>();
  legumesCount: number = 0;

  ngOnInit(): void {
    this.loadLegumes();
  }
  ngOnChanges(changes : SimpleChanges): void {
    if(changes['selectedCategoryId']){
      this.loadLegumes();
    }
  }
  private loadLegumes() : void {
    if(this.selectedCategoryId){
      this.shopService.getLegumesByCategory(this.selectedCategoryId).subscribe(data =>{
        this.Legumes = data;
        this.OnLegumesCount.emit(data.length);
        console.log("Légumes filtre " , this.Legumes);
      });
    } else {
      this.shopService.getLegumes().subscribe(data =>{
        this.Legumes = data;
        this.OnLegumesCount.emit(data.length);
        console.log("Tous les légumes " , this.Legumes);
      });
    }
  }
}
