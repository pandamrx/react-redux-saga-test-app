import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


import Users from './Users'
import UserDetails from './UserDetails'

const App = () => {

  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Users}/>
        <Route path="/users/:id" component={UserDetails}/>
      </Router>
    </div>
  );
};

export default App;
