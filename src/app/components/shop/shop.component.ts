import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private ss: ShareService) { }
  
  shop = this.ss.shop;
  cart = this.ss.cart;
  
  ngOnInit() {
  }
  
  addToCart(i){
	
	
	var newItem = {
        id: i,
        name: this.shop[i].name,
        price: this.shop[i].price,
        count: 1
      }
    	
	if (this.cart[i] == this.cart.id) this.cart.push(newItem);
	else {this.cart[i].count++}
	    
    this.saveToCart();
    
  }
  
  saveToCart () {
    localStorage.cart = JSON.stringify(this.cart)
  }
}