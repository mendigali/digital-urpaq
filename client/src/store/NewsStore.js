import { makeAutoObservable } from 'mobx';

export default class NewsStore {
  constructor() {
    this.posts = [];
    makeAutoObservable(this);
  }

  setPosts(posts) {
    this.posts = posts;
  }
}