import React, { Component } from 'react';
import logo from '../containers/logo.svg';
import '../containers/App.css';
import Login from './Login';
import CreatePatient from './create-patient/createPatient'
import {HashRouter, Route, Link, Redirect} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
		super(props);

	}
  render() {
    return (
      <HashRouter basename="/">
        <div>
            <div>
              <div>
                {/* <Redirect to={'/'} /> */}
                <Route exact path="/login" render={(props) => ( <Login/> )} />
                <Route exact path="/createPatient" render={(props) => ( <CreatePatient/> )} />
              </div>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
