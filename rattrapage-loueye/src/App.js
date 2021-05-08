import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { home } from './home/home';
import { Navbar } from './navbar/navbar';
function App() {
  return (
    <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path='/' exact component={home}/>
        </Switch>
    </Router>
  );
}

export default App;
