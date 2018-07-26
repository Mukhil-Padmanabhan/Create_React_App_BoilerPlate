import { combineReducers } from 'redux';
import createPatientReducer from '../components/create-patient/reducer';
import loginReducer from '../components/login/reducer';

export default combineReducers({
    createPatientReducer,
    loginReducer
})