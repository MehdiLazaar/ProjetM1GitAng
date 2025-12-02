import { Component } from '@angular/core';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-legume-list',
  imports: [],
  templateUrl: './legume-list.component.html',
  styleUrl: './legume-list.component.css'
})
export class LegumeListComponent {
  constructor(private shopService: ShopService) { }
  Legumes : any [] = [];

  ngOnInit(): void {
    this.shopService.getLegumes().subscribe(data =>{
      this.Legumes = data;
    });
  }

}
