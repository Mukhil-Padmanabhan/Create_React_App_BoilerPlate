import React, { Component } from 'react';
import CreatePatientContainer from "../../containers/create-patient/create-patient-container";

export default class CreatePatient extends React.Component {
  constructor(props) {
		super(props);

	}
render() {
    return (
        <CreatePatientContainer/>
    )
}
}