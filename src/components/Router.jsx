import React from "react";
import Form from "./Form";
import Dashboard from "./Dashboard";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/form" component={Form} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Router;
