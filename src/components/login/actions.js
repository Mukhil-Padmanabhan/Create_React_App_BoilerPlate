import * as types from './constants';

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
