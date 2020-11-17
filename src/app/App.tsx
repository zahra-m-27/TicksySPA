import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import SignInPage from "./Pages/SignIn";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/SignIn">
          <SignInPage />
        </Route>
        <Route path="/test">
          <NotFound />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
