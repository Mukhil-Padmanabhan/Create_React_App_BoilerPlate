import { combineReducers } from 'redux';
import createPatient from '../components/create-patient/reducer';
import loginReducer from '../components/login/reducer';

export default combineReducers({
    createPatient,
    loginReducer
})