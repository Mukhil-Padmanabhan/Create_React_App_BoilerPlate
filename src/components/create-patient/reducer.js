import * as types from './constants';
import initialState from './initial.state';

/**
 * Reducer which is reponsible to update state
 * @param {object} state - existing state information
 * @param {object} action - new state information
 */
export default function createPatient(state = initialState, action = {}) {
    switch (action.type) {
        default:
            return state;
    }
}
