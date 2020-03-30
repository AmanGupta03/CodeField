import React, { Component, Fragment } from "react";
import { Route } from 'react-router-dom';
import Home from '../Home/Home';
import Callback from '../Callback/Callback';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/callback" component={Callback} />
      </Fragment>
    );
  }
}

export default App;