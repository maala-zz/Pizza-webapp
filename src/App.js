import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./screens/login/Login";
import Signup from "./screens/signup/Signup";
import Home from "./screens/home/Home";
import Cart from "./screens/cart/Cart";
import * as actionCreators from "./redux/actions/index";
import { connect } from "react-redux";


class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignIn();
  }

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

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignIn: () => dispatch(actionCreators.checkAuthState())
  };
};
export default connect(null, mapDispatchToProps)(App);
