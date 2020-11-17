import React from "react";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import SignInPage from "./Pages/SignIn";

function App() {
  return (
    <div>
      <Router>
        <nav>
          <ul style={{ listStyle: "none", textAlign: "center" }}>
            <li style={{ display: "inline-block", paddingRight: 20 }}>
              <Link to="/">Home</Link>
            </li>
            <li style={{ display: "inline-block" }}>
              <Link to="/test">Test</Link>
            </li>
            <li style={{ display: "inline-block", paddingLeft: 20 }}>
              <Link to="/SignIn">SignIn</Link>
            </li>
          </ul>
        </nav>
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
    </div>
  );
}

export default App;
