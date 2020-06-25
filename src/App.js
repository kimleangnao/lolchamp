import React from "react";
import Home from "./Home";
import Details from "./Details";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
      </div>
    </HashRouter>
  );
}

export default App;
