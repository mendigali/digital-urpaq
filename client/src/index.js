import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from './store/UserStore';
import QuestionStore from './store/QuestionStore';

export const Context = createContext(null);

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      userStore: new UserStore(),
      questionStore: new QuestionStore()
    }}>
      <App/>
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);