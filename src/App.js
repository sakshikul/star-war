import React from 'react';
import { BrowserRouter as Router,Route } from "react-router-dom";

import Search from './Search';
import Login from './Login';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router >
      <Route exact path={"/"} component={Login}/>
      <Route path={"/search"} component={Search}/>
    </Router>

    </div>
  );
}

export default App;