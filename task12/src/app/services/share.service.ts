import { Injectable } from '@angular/core';

@Injectable()

export class ShareService {

  shop = [{
    name: "product 0",
    price: 10
  },
  {
    name: "product 1",
    price: 20
  },
  {
    name: "product 2",
    price: 30
  },
  {
    name: "product 3",
    price: 40
  }]
  
  cart = JSON.parse(localStorage.cart || '[]')
  
  
  constructor() { }

}
