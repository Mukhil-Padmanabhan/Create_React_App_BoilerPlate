import * as types from './constants';
import moment from "moment";

export  function onBlurHandler(event) {
    let value = {};
    value[event.target.name] = event.target.value;
    value["type"] =  types.ONBLUR_HANDLER
    return  function(dispatch, getState) {
       /* dispatch(value)*/
        dispatch({
            type : types.ONBLUR_HANDLER,
            firstName: value && value.firstName ? value.firstName : getState().createPatientReducer.firstName ? getState().createPatientReducer.firstName : "",
            middleName: value && value.middleName ? value.middleName : getState().createPatientReducer.middleName ? getState().createPatientReducer.middleName : "",
            placeOfService: value && value.placeOfService ? value.placeOfService : getState().createPatientReducer.placeOfService ? getState().createPatientReducer.placeOfService : "",
            address1: value && value.address1 ? value.address1 : getState().createPatientReducer.address1 ? getState().createPatientReducer.address1 : "",
            address2: value && value.address2 ? value.address2 : getState().createPatientReducer.address2 ? getState().createPatientReducer.address2 : "",
            zip: value && value.zip ? value.zip : getState().createPatientReducer.zip ? getState().createPatientReducer.zip : "",
            city: value && value.city ? value.city : getState().createPatientReducer.city ? getState().createPatientReducer.city : "",
            state: value && value.state ? value.state : getState().createPatientReducer.state ? getState().createPatientReducer.state : "",
            chartId: value && value.chartId ? value.chartId : getState().createPatientReducer.chartId ? getState().createPatientReducer.chartId : "",
            externalPatientId: value && value.externalPatientId ? value.externalPatientId : getState().createPatientReducer.externalPatientId ? getState().createPatientReducer.externalPatientId : "",
            ssn: value && value.ssn ? value.ssn : getState().createPatientReducer.ssn ? getState().createPatientReducer.ssn : "",
            martialStatus: value && value.martialStatus ? value.martialStatus : getState().createPatientReducer.martialStatus ? getState().createPatientReducer.martialStatus : "",
            employmentStatus: value && value.employmentStatus ? value.employmentStatus : getState().createPatientReducer.employmentStatus ? getState().createPatientReducer.employmentStatus : "",
            ethnicity: value && value.ethnicity ? value.ethnicity : getState().createPatientReducer.ethnicity ? getState().createPatientReducer.ethnicity : "",
            preferredLanguage: value && value.preferredLanguage ? value.preferredLanguage : getState().createPatientReducer.preferredLanguage ? getState().createPatientReducer.preferredLanguage : "",
            referredByPhysician:  value && value.referredByPhysician ? value.referredByPhysician : getState().createPatientReducer.referredByPhysician ? getState().createPatientReducer.referredByPhysician : "",
            referringProvider: value && value.referringProvider ? value.referringProvider : getState().createPatientReducer.referringProvider ? getState().createPatientReducer.referringProvider : "",
            dateReferred: value && value.dateReferred ? value.dateReferred : getState().createPatientReducer.dateReferred ? getState().createPatientReducer.dateReferred : "",
        })
    }
}

export function handleDateChanges(date, prop){
    let value = {};
    value[prop] = date
    value["type"] =  types.ONCHANGE_DATE_HANDLER
    return  function(dispatch, getState) {
        dispatch({
            type : types.ONCHANGE_DATE_HANDLER,
            dateOfBirth: value && value.dateOfBirth ? value.dateOfBirth : getState().createPatientReducer.dateOfBirth ? getState().createPatientReducer.dateOfBirth : "",
            dateReferred : value && value.dateReferred ? value.dateReferred : getState().createPatientReducer.dateReferred ? getState().createPatientReducer.dateReferred : "",
        })
    }
}

export function handleDropdownSelections(zone,prop, val){
    let value = {};
    if(zone==="city") {
        value[zone] = prop
        value.cityName = val
    }
    else{
        value[zone] = prop
        value.stateName = val
    }
    value["type"] =  types.ONCHANGE_SELECT_HANDLER
    return  function(dispatch, getState) {
        dispatch({
            type : types.ONCHANGE_SELECT_HANDLER,
            city: value && value.city ? value.city : getState().createPatientReducer.city ? getState().createPatientReducer.city : "",
            cityName :value && value.cityName ? value.cityName : getState().createPatientReducer.cityName ? getState().createPatientReducer.cityName : "",
            state : value && value.state ? value.state : getState().createPatientReducer.state ? getState().createPatientReducer.state : "",
            stateName : value && value.stateName ? value.stateName : getState().createPatientReducer.stateName ? getState().createPatientReducer.stateName : "",
        })
    }
}

export function handleRadioSelections(prop, val){
    let value = {};
    value[prop] = val
    value["type"] =  types.ONCHANGE_RADIO_HANDLER
    return  function(dispatch, getState) {
        dispatch({
            type : types.ONCHANGE_RADIO_HANDLER,
            sex : value && value.sex ? value.sex : getState().createPatientReducer.sex ? getState().createPatientReducer.sex : "",
        })
    }
}

export function submitHandler(event) {
    let value = {};
    value[event.target.id] = event.target.value;
    value["type"] =  types.ADD_PATIENT
    return  function(dispatch, getState) {
        dispatch({
        })
    }
}

