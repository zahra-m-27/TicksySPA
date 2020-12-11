import React from "react";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Authorization from "./Pages/Authorization";
import CreateTicket from "./Pages/CreateTicket";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          path="/(sign-in|sign-up|forgot-password|change-password|confirm-email)"
          component={Authorization}
        />
        <Route path="/404" component={NotFound} />
        <Route path="/ticket/new" component={CreateTicket} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
