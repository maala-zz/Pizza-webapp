import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./screens/login/Login";
import { connect } from "react-redux";


class App extends Component {

  render() {
    return (
      <div className="App">
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
      </div>
    );
  }
}

export default connect(null, null)(App);
