import * as types from './constants';
import initialState from './initial.state';

/**
 * Reducer which is reponsible to update state
 * @param {object} state - existing state information
 * @param {object} action - new state information
 */
export default function createPatientReducer(state = initialState, action = {}) {

    switch (action.type) {
        case types.ONBLUR_HANDLER :
            return {
                ...state,
                firstName: action.firstName,
                middleName: action.middleName,
                placeOfService: action.placeOfService,
                address1: action.address1,
                zip: action.zip,
                chartId: action.chartId,
                externalPatientId: action.externalPatientId,
                martialStatus: action.martialStatus,
                employmentStatus: action.employmentStatus,
                ethnicity: action.state,
                preferredLanguage: action.preferredLanguage,
                referredByPhysician: action.referredByPhysician,
                referringProvider: action.referringProvider,
            }
        case types.ONCHANGE_DATE_HANDLER :
            return {
                ...state,
                dateOfBirth: action.dateOfBirth,
                dateReferred: action.dateReferred,
            }
        case types.ONCHANGE_SELECT_HANDLER :
            return {
                ...state,
                state: action.state,
                stateName: action.stateName,
                city: action.city,
                cityName: action.cityName,
            }

        case types.ONCHANGE_RADIO_HANDLER :
            return {
                ...state,
                sex : action.sex
            }
        case types.ONSUBMIT_ADD_PATIENT :
            return {
                ...state,
                responseArr : action.responseArr
            }
        case types.ONCHANGE_CHECKBOX_HANDLER :
            return {
                ...state,
                referringProviderCheckStatus : action.referringProviderCheckStatus
            }
        case types.ONCLICK_POPUPOPEN_HANDLER :
            return {
                ...state,
                show :  JSON.parse(action.show)
            }
        case types.ONCLICK_POPUPCLOSE_HANDLER :
            return {
                ...state,
                hide : action.hide
            }
        default:
            return state;
    }
}
