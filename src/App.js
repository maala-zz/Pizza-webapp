import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./screens/login/Login";
import Signup from "./screens/signup/Signup";
import Home from "./screens/home/Home";
import Cart from "./screens/cart/Cart";
import { connect } from "react-redux";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    );
  }
}

export default connect(null, null)(App);
