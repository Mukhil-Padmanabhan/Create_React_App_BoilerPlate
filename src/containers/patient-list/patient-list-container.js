import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class PatientListContainer extends Component {
    constructor(props) {
        super(props);
    }

    createCustomToolBar(props) {
        return (
            <div className='col-xs-12 col-sm-12 col-md-12 noPadding'>
                { props.components.btnGroup }
                <div className='col-xs-2 col-sm-2 col-md-2'>
                    { props.components.searchField }
                </div>
            </div>
        );
    }

    createPatient() {
        this.props.routerProps.history.push('/createPatient')
    }

    createCustomButtonGroup (props) {
        return (
        <div className="col-xs-4 col-sm-4 col-md-4 pull-right" style={{"text-align": "right"}}>
            <button type="button" className="btn btn-primary" onClick={(e)=>this.createPatient()}>Create Patient </button>
        </div>
        )
    }

    render() {
        var temp = this.props && this.props.data && this.props.data.length ? this.props.data : [{
            firstName: 'Mukhil',
            middleName: '',
            placeOfService:'Blore',
            address1: '',
            zip:560073,
            city: 'Banglore',
            state: 'Karnataka',
            chartId: 123
        }];

        const options = {
            toolBar: this.createCustomToolBar,
            saveText: 'my_save',
            printToolBar: false,
            btnGroup: this.createCustomButtonGroup.bind(this)
        };
        return(
            <div className="tab-content">
            <BootstrapTable
                tableHeaderClass='my-header-class'
                printable
                containerClass  = 'my_test'
                headerContainerClass  = 'my_test'
                tableBodyClass='my-body-class'
                data = { temp }
                headerStyle = {{'width':'auto'}}
                tableStyle = {{'overflow-x': 'auto'}}
                options={ options }
                deleteRow
                keyField="id" 
                exportCSV
                pagination 
                ref='bsTable'
                striped={ true }
                searchPlaceholder = {"Search Here"} 
                search
                bodyStyle={{'width':'auto'}}
            >
            <TableHeaderColumn dataSort key={1} dataField='firstName'> First Name </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='middleName'> Middle Name </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='placeOfService'> Place Of Service </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='address1'> Address 1 </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='zip'> Zip Code </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='city'> City </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='state'> State </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='chartId'> Chart # </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='externalPatientId'> Patient # </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='ssn'> SSN # </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='martialStatus'> Martial Status </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='employmentStatus'> Employment Status </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='ethnicity'> Ethinicity </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='preferredLanguage'> Language </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='referredByPhysician'> Physician </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='referringProvider'> Referring Provider </TableHeaderColumn>
            <TableHeaderColumn dataSort       dataField='dateReferred'> Date Referred </TableHeaderColumn>
        </BootstrapTable>
        </div>
      )
  }
}