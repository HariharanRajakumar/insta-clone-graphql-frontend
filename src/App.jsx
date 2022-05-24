import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./Navbar";
import Posts from "./Posts";
import { RoutePaths } from "./routes";
import { LikesPageById } from "./pages";

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Navbar />
        <Posts />
      </Route>
      <Route path={RoutePaths.likesPageById} exact>
        <Navbar />
        <LikesPageById />
      </Route>
    </Router>
  );
}

export default App;
