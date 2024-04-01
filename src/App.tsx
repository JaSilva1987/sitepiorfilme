// App.tsx
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import MovieList from "./components/MovieList";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <div className="header">Golden Raspberry Awards</div>
      <div className="app-container">
        <div className="menu">
          <Menu />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/movies" component={MovieList} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
