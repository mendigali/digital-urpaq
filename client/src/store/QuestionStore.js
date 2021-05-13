import { makeAutoObservable } from 'mobx';

export default class QuestionStore {
  constructor() {
    this.questions = [];
    makeAutoObservable(this);
  }

  setQuestions(questions) {
    this.questions = questions;
  }
}