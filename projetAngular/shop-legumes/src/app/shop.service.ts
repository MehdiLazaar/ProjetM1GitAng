import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private api = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any[]>(`${this.api}/categories`);
  }
  getLegumes() {
    return this.http.get<any[]>(`${this.api}/legumes`);
  }
    getLegumesByCategory(categoryId: number) {
    return this.http.get<any[]>(`${this.api}/legumes?categoryId=${categoryId}`);
  }
  updateLegume(legume: any): Observable<any> {
    return this.http.put(`${this.api}/legumes/${legume.id}`, legume);
  }
  toggleLike(legumeId: number, liked: boolean): Observable<any> {
    return this.http.patch(`${this.api}/legumes/${legumeId}`, { liked });
  }
}
