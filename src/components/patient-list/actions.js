import * as types from './constants';

export function getPatientsList(emailId) {
    let options =  {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(emailId)
      }
return async function(dispatch, getState) {
       return await fetch(`http://localhost:5000/getPatientList`, options)
      .then(response => {
        dispatch({
          type : types.ON_GETTING_PATIENTSLIST,
          patientList: response
        })
      })
  }
}

export function getPatients() {
    let options =  {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type' : 'application/json'
        },
    }
    return async function(dispatch, getState) {
        return await fetch(`http://localhost:5000/getPatientList`, options)
            .then(response => {
                dispatch({
                    type : types.ON_GETTING_PATIENTSLIST,
                    patientList: response
                })
            })
    }
}