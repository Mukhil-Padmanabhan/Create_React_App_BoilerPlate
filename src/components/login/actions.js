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

  export  function onLogin(requestModel) {
    console.log('onLogin', requestModel)
      let options =  {
          method: 'POST',
          headers: {
            'Accept': 'application/json, text/plain, */*',
           'Content-Type' : 'application/json'
          },
          body : JSON.stringify(requestModel)
        }
  return  async function(dispatch, getState) {
         return  await fetch(`http://localhost:5000/login`, options)
        .then(response => {
          console.log('response', response)
        })
        dispatch({
          type : types.ONCHANGE_HANDLER,
          email: requestModel && requestModel.email ? requestModel.email : getState().loginReducer.email ? getState().loginReducer.email : "",
          password: requestModel && requestModel.password ? requestModel.password : getState().loginReducer.password ? getState().loginReducer.password : ""
        })
    }
  }
