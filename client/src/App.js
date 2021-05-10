import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import { CssBaseline } from "@material-ui/core";
import "./styles/App.css";
import QuestionsList from "./pages/QuestionsList";
import Question from "./pages/Question";
// import { Context } from './index';
import VacanciesList from "./pages/VacanciesList";
import Vacancy from "./pages/Vacancy";
import CreateVacancy from "./pages/CreateVacancy";

export default function App() {
  // const { user } = useContext(Context);
  return (
    <Router>
      <CssBaseline/>
      <Navbar/>
      <Switch>
        <Route exact path="/signin">
          <SignIn/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
    <Route exact path="/vacancy/create">
          <CreateVacancy/>
        </Route>
        <Route exact path="/questions">
          <QuestionsList/>
        </Route>
        <Route path="/questions/:id" children={<Question/>}/>
     <Route exact path="/vacancy">
          <VacanciesList/>
        </Route>
        <Route path="/vacancy/:id" children={<Vacancy/>}/>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}
