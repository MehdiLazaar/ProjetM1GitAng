import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  private api = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get<any[]>(`${this.api}/categories`);
  }
}
