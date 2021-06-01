import { makeAutoObservable } from 'mobx';

export default class NewsStore {
  constructor() {
    this.questions = [];
    makeAutoObservable(this);
  }

  setPosts(posts) {
    this.questions = posts;
  }
}