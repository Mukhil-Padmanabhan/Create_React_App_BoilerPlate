import React, { Component } from 'react';
import CreatePatientContainer from "../../containers/create-patient/create-patient-container";
import * as createPatientReducerActions  from './actions'
import { connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class createPatient extends React.Component {
  constructor(props) {
      super(props);
      this.handleBlur = this.handleBlur.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleDateSelections = this.handleDateSelections.bind(this);
      this.handleDropdownChange = this.handleDropdownChange.bind(this);
      this.handleRadioChange =  this.handleRadioChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
      this.handleShow = this.handleShow.bind(this)
      this.handleClose = this.handleClose.bind(this)
	}
    handleBlur = event => {
        var {onBlurHandler} = this.props.actions;
        onBlurHandler(event)
    }

    handleSubmit (event){
        var {submitHandler} = this.props.actions;
        submitHandler(event)
    }
    handleDateSelections(date, prop) {

        var { handleDateChanges} = this.props.actions;
        handleDateChanges(date, prop );
    }
    handleDropdownChange(zone, prop, value) {
        var { handleDropdownSelections} = this.props.actions;
        handleDropdownSelections(zone, prop ,value);
    }
    handleRadioChange(prop, value) {
        var { handleRadioSelections} = this.props.actions;
        handleRadioSelections(prop ,value);
    }

     handleCheckboxChange(prop, value){
        var { handleCheckboxSelect } = this.props.actions;
        handleCheckboxSelect(prop ,value);
    }
    handleClose(prop,value) {
        var { handlePopupClose } = this.props.actions;
        handlePopupClose(prop ,value);
    }
    handleShow(prop,value) {
        var { handlePopupShow } = this.props.actions;
        handlePopupShow(prop ,value);
    }


    render() {
    let props = this.props
    var {
        firstName,
        middleName ,
        placeOfService  ,placeOfService
        ,placeOfService ,address1 ,address2 ,
        zip ,city, cityName ,state, stateName, chartId,externalPatientId
        ,martialStatus,employmentStatus ,ethnicity,preferredLanguage,
        referredByPhysician,referringProvider,
        dateReferred , sex, referringProviderCheckStatus, handleShow,handleClose, show , hide} = this.props;

    return (
        <CreatePatientContainer
            handleBlur={this.handleBlur}
            firstName = { firstName }
            middleName = { middleName }
            placeOfService = { placeOfService }
            handleDateSelections = { this.handleDateSelections.bind(this) }
            handleDropdownChange = { this.handleDropdownChange.bind(this)}
            handleRadioChange = { this.handleRadioChange.bind(this)}
            handleSubmit = { this.handleSubmit.bind(this)}
            handleCheckboxChange ={this.handleCheckboxChange.bind(this)}
            referringProviderCheckStatus = {props.referringProviderCheckStatus}
            handleClose ={this.handleClose.bind(this)}
            handleShow ={this.handleShow.bind(this)}
            show ={show}
            hide ={hide}
            address1 ={address1}
            address2 ={address2}
            zip = { zip }
            city = { city }
            cityName = { cityName }
            state = { state }
            sex = { sex }
            stateName = { stateName }
            chartId = { chartId }
            externalPatientId = { externalPatientId }
            martialStatus = { martialStatus }
            employmentStatus = { employmentStatus }
            ethnicity = { ethnicity }
            preferredLanguage = { preferredLanguage }
            referredByPhysician = { referredByPhysician }
            referringProvider = { referringProvider }
            dateReferred = { dateReferred }
            dateOfBirth = { props.dateOfBirth}
            dateReffered = { props.dateReferred }
        />
    )
}
}


function mapStateToProps(store) {
    return{
        firstName: store.createPatientReducer.firstName,
        middleName: store.createPatientReducer.middleName,
        placeOfService: store.createPatientReducer.placeOfService,
        dateOfBirth: store.createPatientReducer.dateOfBirth,
        address1: store.createPatientReducer.address1,
        zip: store.createPatientReducer.zip,
        city: store.createPatientReducer.city,
        cityName : store.createPatientReducer.cityName,
        state: store.createPatientReducer.state,
        stateName : store.createPatientReducer.stateName,
        chartId: store.createPatientReducer.chartId,
        externalPatientId: store.createPatientReducer.externalPatientId,
        martialStatus: store.createPatientReducer.martialStatus,
        employmentStatus: store.createPatientReducer.employmentStatus,
        ethnicity: store.createPatientReducer.state,
        preferredLanguage: store.createPatientReducer.preferredLanguage,
        referredByPhysician: store.createPatientReducer.referredByPhysician,
        referringProvider: store.createPatientReducer.referringProvider,
        dateReferred: store.createPatientReducer.dateReferred,
        referringProviderCheckStatus : store.createPatientReducer.referringProviderCheckStatus,
        show : store.createPatientReducer.show,
        hide : store.createPatientReducer.hide,
        prefferedPhone :  store.createPatientReducer.prefferedPhone,
        homePhone :   store.createPatientReducer.homePhone,
        workPhone :  store.createPatientReducer.workPhone,
        cellPhone :   store.createPatientReducer.cellPhone,
        otherPhone :   store.createPatientReducer.otherPhone,
        email :   store.createPatientReducer.email,
        emergencyName :   store.createPatientReducer.emergencyName,
        emergencyRelationship :   store.createPatientReducer.emergencyRelationship,
        emergencyPhoneNumber :   store.createPatientReducer.emergencyPhoneNumber,
        emergencyName2 :   store.createPatientReducer.emergencyName2,
        emergencyRelationship2 :   store.createPatientReducer.emergencyRelationship2,
        patientTimeZone :   store.createPatientReducer.patientTimeZone,
        communicationPreferenceCall :   store.createPatientReducer.communicationPreferenceCall,
        communicationPreferenceEmail :  store.createPatientReducer.communicationPreferenceEmail,
        communicationPreferenceSms :  store.createPatientReducer.communicationPreferenceSms,
        allowSaturdayCommunication :  store.createPatientReducer.allowSaturdayCommunication,
        allowSundayCommunication :  store.createPatientReducer.allowSundayCommunication,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(createPatientReducerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(createPatient);
