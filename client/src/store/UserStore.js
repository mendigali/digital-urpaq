import { makeAutoObservable } from 'mobx';

export default class UserStore {
  constructor() {
    this.isAuth = false;
    this.user = {};
    makeAutoObservable(this);
  }

  setIsAuth(value) {
    this.isAuth = value;
  }

  setUser(user) {
    this.user = user;
  }
}