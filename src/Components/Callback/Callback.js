import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import auth from '../../Auth';

class Callback extends Component {
  async componentDidMount() {
    await auth.handleAuthentication();
    this.props.history.replace('/');
  }

  render() {
    return (
      <h1>Loading...</h1>
    );
  }
}

export default withRouter(Callback);