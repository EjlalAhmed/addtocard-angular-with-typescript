import { Component, OnInit } from '@angular/core';
import { FoodService, FoodItem } from '../../services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  burgers: FoodItem[] = [];
  pizzas: FoodItem[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    const foodItems = this.foodService.getFoodItems();
    this.burgers = foodItems.filter(item => item.name.includes('Burger'));
    this.pizzas = foodItems.filter(item => item.name.includes('Pizza'));
  }


  addToCart(item: FoodItem) {
    this.foodService.addToCart(item);
  }
}
