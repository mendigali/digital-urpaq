import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import QuestionStore from './store/QuestionStore';
import ShopStore from './store/ShopStore';

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      userStore: new UserStore(),
      questionStore: new QuestionStore(),
      shopStore: new ShopStore()
    }}>
      <App/>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);