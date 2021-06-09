import { makeAutoObservable } from 'mobx';
import { coy, darcula, solarizedlight, coldarkCold, duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default class ThemeStore {
  constructor() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.code = darcula;
      this.shop = 'rgba(0, 0, 0, 0.6)';
      // this.theme = 'dark';
    } else {
      this.code = coy;
      this.shop = 'rgba(255, 255, 255, 0.6)';
      // this.theme = 'light';
    }
    makeAutoObservable(this);
  }

  setTheme(newTheme) {
    if (newTheme === 'dark') {
      this.code = darcula;
      this.shop = 'rgba(0, 0, 0, 0.6)';
      // this.theme = 'dark';
    } else {
      this.code = coy;
      this.shop = 'rgba(255, 255, 255, 0.6)';
      // this.theme = 'light';
    }
  }
}