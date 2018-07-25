import React, { Component } from "react";
import {  FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";
import { withRouter } from 'react-router-dom';

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
  console.log('this.props', this.props)
  }

  render() {
    var {handleSubmit, handleChange, validateForm } = this.props;
    return (
      <div className="Login">
        <form onSubmit={handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              //value={this.state.email}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              //value={this.state.password}
              onChange={handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!validateForm}
            type="submit"
           
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}



const Button = withRouter(({ history }) => (
    <button
      type='button'
      onClick={() => { history.push('/patientList') }}
    >
      Login
    </button>
  ))
