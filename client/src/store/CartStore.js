import { makeAutoObservable } from 'mobx';

export default class CartStore {
  constructor() {
    this.cart = [];
    this.count = 0;
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
      this.cart.forEach(product => this.count += product.quantity);
    }
    makeAutoObservable(this);
  }

  add(item) {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = this.cart.find(product => product.product.id === item.id);
    if (product) {
      product.quantity++;
    } else {
      this.cart.push({
        product: item,
        quantity: 1
      });
    }
    this.count++;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getQuantity(item) {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = this.cart.find(product => product.product.id === item.id);
    if (product) {
      return product.quantity;
    }
    return 0;
  }

  removeOne(item) {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = this.cart.find(product => product.product.id === item.id);
    if (product) {
      if (product.quantity > 1) {
        product.quantity--;
      } else {
        this.cart = this.cart.filter(p => p.product.id !== item.id);
      }
    }
    this.count--;
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  remove(id) {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.cart.splice(id, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  reset() {
    localStorage.removeItem('cart');
  }
}