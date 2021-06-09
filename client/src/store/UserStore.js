import { makeAutoObservable } from 'mobx';

export default class UserStore {
  isAuth = false;
  user = {};

  constructor() {
    if (localStorage.getItem('user')) {
      this.isAuth = true;
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    makeAutoObservable(this);
  }

  setIsAuth(value) {
    this.isAuth = value;
  }

  setUser(user) {
    this.user = user;
  }
}