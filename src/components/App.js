import React, { Component } from 'react';
import logo from '../containers/RxNT_Logo_White.png';
import '../containers/App.css';
//import '../Resources/CSS/RxNTStyles.css'
import Login from '../components/login/login-component';
//import PatientList from './patient-list/patientList'
import CreatePatient from './create-patient/create-patient-component';
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
              <img src={logo} className="App-Header-Logo" alt="logo" />
              {/* <h1 className="App-title">Welcome to My React</h1> */}
            </header>
              <div>
                <Redirect to={'/login'} />
                <Route exact path="/login" render={(props) => ( <Login routerProps={props}/> )} />
                <Route exact path="/patientList" render={(props) => ( <CreatePatient routerProps={props}/> )} />
              </div>
            </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
