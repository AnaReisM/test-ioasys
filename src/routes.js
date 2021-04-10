import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./layout/Login";
import Books from "./layout/Books";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/books" exact>
          <Books />
        </Route>
        <Route path="/books/:id">
          <Books />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routes;
