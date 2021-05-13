import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import { CssBaseline } from '@material-ui/core';
import './styles/App.css';
import AppRouter from './components/AppRouter';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline/>
      <Navbar/>
      <AppRouter/>
    </BrowserRouter>
  );
};

export default App;