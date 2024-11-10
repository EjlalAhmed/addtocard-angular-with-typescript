import { Component, OnInit } from '@angular/core';
import { FoodService, FoodItem } from '../../services/food.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: FoodItem[] = [];

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.cart = this.foodService.getCart();
  }

  removeFromCart(item: FoodItem) {
    this.foodService.removeFromCart(item);
  }
}
