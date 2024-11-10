import { Injectable } from '@angular/core';

export interface FoodItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foodItems: FoodItem[] = [
    { id: 1, name: 'Petty Beef Burger', price: 8, quantity: 0, imageUrl: 'assets/food-images/3PettyBeef burgar.jpg' },
    { id: 2, name: 'Crispy Chicken Burger', price: 7, quantity: 0, imageUrl: 'assets/food-images/Crispy chicken burgar.jpg' },
    { id: 3, name: 'Grilled Chicken Burger with Fries', price: 10, quantity: 0, imageUrl: 'assets/food-images/Grilled Chicken burgar with fries.jpg' },
    { id: 4, name: 'Chicken Tikka Pizza', price: 12, quantity: 0, imageUrl: 'assets/food-images/Chicken Tikka pizza.jpg' },
    { id: 5, name: 'Veg Pizza', price: 9, quantity: 0, imageUrl: 'assets/food-images/vage pizza.jpg' },
    { id: 6, name: 'Cheese Pizza', price: 11, quantity: 0, imageUrl: 'assets/food-images/pizza cheese.jpg' },
  ];

  

  
  cart: FoodItem[] = [];

  getFoodItems() {
    return this.foodItems;
  }

  addToCart(item: FoodItem) {
    const found = this.cart.find(cartItem => cartItem.id === item.id);
    if (found) {
      found.quantity += 1;
    } else {
      this.cart.push({ ...item, quantity: 1 });
    }
  }

  getCart() {
    return this.cart;
  }

  removeFromCart(item: FoodItem) {
    this.cart = this.cart.filter(cartItem => cartItem.id !== item.id);
  }

  clearCart() {
    this.cart = [];
  }
};


