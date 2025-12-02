import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShopComponent } from "./shop/shop.component";
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shop-legumes';
}


