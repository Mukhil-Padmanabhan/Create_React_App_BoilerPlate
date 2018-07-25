import { combineReducers } from 'redux';
import createPatient from './containers/create-patient/reducer';
import loginReducer from './components/login/reducer'

export default combineReducers({
    createPatient,
    loginReducer
})