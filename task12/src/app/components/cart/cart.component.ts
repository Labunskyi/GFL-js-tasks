import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private ss: ShareService) { }

  cart = this.ss.cart
  
  ngOnInit() {
  }
  
  remove(i){
    this.cart.splice(i,1);
    this.savecart();
  }
  savecart () {
    localStorage.cart = JSON.stringify(this.cart)
  }

  get count () {
    var count = 0 ; 
    this.cart.forEach(val => {
      count += val.count
    });
    return count
  }
  get amount () {
    var all = 0;
    this.cart.forEach(val => {
      all += val.count * val.price
    });
    return all
  }
}