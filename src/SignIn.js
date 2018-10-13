import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import { doLoginAction } from './LoginAction';

class SignInImpl extends Component {

  render() {
    let error = '';
    if (this.props.error) {
      error = (this.props.error || {}).email || '';
    }

    return (
      <React.Fragment>
        <main>
          {/*これをLoginFormのFieldに対して表示させたい*/}
          <div>{error}</div>
          <LoginForm onSubmit={this.props.doLogin} />
        </main>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.user.error
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    doLogin: (value) => {
      const loginPromise = doLoginAction(value);
      loginPromise(dispatch);
    }
  }
};

const SignIn = connect(mapStateToProps, mapDispatchToProps)(SignInImpl);

export default SignIn;
