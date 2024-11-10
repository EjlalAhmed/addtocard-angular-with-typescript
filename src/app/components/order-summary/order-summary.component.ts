import { Component, OnInit } from '@angular/core';
import { FoodService, FoodItem } from '../../services/food.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  cart: FoodItem[] = [];
  totalAmount: number = 0;

  constructor(private foodService: FoodService) {}

  ngOnInit(): void {
    this.cart = this.foodService.getCart();
    this.totalAmount = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  confirmOrder() {
    alert('Order Confirmed!');
    this.foodService.clearCart();
  }
}
