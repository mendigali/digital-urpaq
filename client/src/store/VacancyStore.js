import { makeAutoObservable } from 'mobx';

export default class VacancyStore {
  constructor() {
    this.vacancies = [];
    makeAutoObservable(this);
  }

  setVacancies(vacancies) {
    this.vacancies = vacancies;
  }
}