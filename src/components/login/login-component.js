import React, { Component } from 'react';
import LoginContainer from "../../containers/login/login-container";
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as loginActions  from './actions';
import * as types from './constants'


class Login extends React.Component {
  constructor(props) {
		super(props);
        this.validateForm = this.validateForm.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);

	}

      componentWillMount() {
        console.log('this.props', this.props)
    }

    validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

 

  handleChange = event => {
    var {onChangeHandler} = this.props.actions;
    onChangeHandler(event)
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("this.context", this.context)

  }

  handleAuthentication() {
      console.log("this.context", this.context)
  }
render() {
    var { email, password } = this.props;
    return (
        <LoginContainer
            validateForm={this.validateForm}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            handleAuthentication={this.handleAuthentication}
            password = { password }
            email = { email }
        />
    )
}
}

function mapDispatchToProps(dispatch) {
 return {
      actions: bindActionCreators(loginActions, dispatch)
    };
}

function mapStateToProps(store) {
    console.log("store", store)
    return{
    email: store.loginReducer.email,
    password: store.loginReducer.password
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
