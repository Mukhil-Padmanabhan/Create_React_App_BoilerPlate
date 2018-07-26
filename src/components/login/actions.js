import * as types from './constants';
//import  apiProxy from '../../utils/api-service.proxy';


export  function onChangeHandler(event) {
    let value = {};
    value[event.target.id] = event.target.value;
  return  function(dispatch, getState) {
        dispatch({
          type : types.ONCHANGE_HANDLER,
          email: value && value.email ? value.email : getState().loginReducer.email ? getState().loginReducer.email : "",
          password: value && value.password ? value.password : getState().loginReducer.password ? getState().loginReducer.password : ""
        })
    }
  }

  export  function onLogin() {
            let EncryptedPassword = btoa("Apex@007")
    //let value = {UserName: "Mukhil", Password: "Mukhil", EncryptedPassword : atob("Mukhil"), AuthenticateCorporateUser : false};
      let value = {UserName: "internaldev", Password: "Apex@007", AuthenticateCorporateUser : true} 
   let myHeaders = new Headers();
        myHeaders.set('RequestInfo','TestUser#TestPass#0##');
        myHeaders.set('Content-Type', 'application/json');
        var data = new FormData();
data.append( "json", JSON.stringify( value ) );

      let options =  {
          method: 'POST',
         // mode: 'cors',
          headers: {
            //'Accept': 'application/json, text/plain, */*',
            'RequestInfo': 'TestUser#TestPass#0##',
           'Content-Type' : 'application/x-www-form-urlencoded'
          },
          body : JSON.stringify(value)
        }
  return  async function(dispatch, getState) {
         return  await fetch(`http://localhost/PMV2API/billing/authentication/AuthenticateUser/`, options
       )
        .then(function(response) {
          console.log('response', response)
        })
        dispatch({
          type : types.ONCHANGE_HANDLER,
          email: value && value.email ? value.email : getState().loginReducer.email ? getState().loginReducer.email : "",
          password: value && value.password ? value.password : getState().loginReducer.password ? getState().loginReducer.password : ""
        })
    }
  }
