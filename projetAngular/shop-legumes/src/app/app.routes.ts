import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';

export const routes: Routes = [
  { path: '', component: ShopComponent },
  { path: 'login', component: LoginComponent },

  { path: '', redirectTo: 'shop-legumes', pathMatch: 'full' }
];

