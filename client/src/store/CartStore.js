import { makeAutoObservable } from 'mobx';

export default class CartStore {
  constructor() {
    this.cart = [];
    this.count = 0;
    if (localStorage.getItem('cart')) {
      this.cart = JSON.parse(localStorage.getItem('cart'));
      this.cart.forEach(product => this.count += parseInt(product.quantity));
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

  increment(item) {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = this.cart.find(product => product.product.id === item.id);
    if (product) {
      this.count++;
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  decrement(item) {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = this.cart.find(product => product.product.id === item.id);
    if (product) {
      this.count--;
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  contains(item) {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = this.cart.find(product => product.product.id === item.id);
    return !!product;
  }

  getQuantity(item) {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = this.cart.find(product => product.product.id === item.id);
    return product ? product.quantity : 0;
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

  remove(item) {
    this.cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = this.cart.find(product => product.product.id === item.id);
    if (product) {
      this.count -= product.quantity;
      this.cart = this.cart.filter(p => p.product.id !== item.id);
    }
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  /*remove(id) {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.cart.splice(id, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }*/

  reset() {
    localStorage.removeItem('cart');
  }
}