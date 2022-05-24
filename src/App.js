import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Posts from './Posts';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/likes">
            <Navbar />
          </Route>
          <Route path="/">
            <Navbar />
            <Posts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
