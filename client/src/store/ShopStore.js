import { makeAutoObservable } from 'mobx';

export default class ShopStore {
  constructor() {
    this.products = [];
    makeAutoObservable(this);
  }

  setProducts(products) {
    this.products = products;
  }
}