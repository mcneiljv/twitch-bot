import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./Dashboard";
import Commands from "./Commands";

const App: React.FC = () => {
  return (
    <div className="ui container">
      <Router>
        <div>
          <nav>
            <div className="ui secondary pointing menu">
              <Link className="item active" to="/">
                Dashboard
              </Link>
              <Link className="item" to="/commands">
                Commands
              </Link>
              <div className="right menu">
                <a href="/" className="ui item">
                  Logout
                </a>
              </div>
            </div>
          </nav>

          <Switch>
            <Route path="/commands">
              <Commands />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
