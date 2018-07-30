import React, { Component } from 'react';
import PatientListContainer from "../../containers/patient-list/patient-list-container";
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as patientListActions  from './actions';


class PatientList extends React.Component {
    constructor(props) {
            super(props);
    }
    
    componentWillMount() {
        this.getPatientList()
    }

    async getPatientList() {
        var { email } = this.props;
        var { getPatientsList } = this.props.actions;
        const resp = await getPatientsList(email);
        console.log('resp', resp)
    }

    render() {
        var {  routerProps, patientList } = this.props;
        return (
            <PatientListContainer
                data = { patientList }
                routerProps = { routerProps }
            />
        )
    }
    }

function mapDispatchToProps(dispatch) {
 return {
      actions: bindActionCreators(patientListActions, dispatch)
    };
}

function mapStateToProps(store) {
    return{
        email: store.loginReducer.email
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);
