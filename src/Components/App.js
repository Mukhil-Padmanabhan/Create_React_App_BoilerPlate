import React, { Component } from 'react';
import logo from '../Containers/logo.svg';
import '../Containers/App.css';
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
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to My React</h1>
            </header>
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
