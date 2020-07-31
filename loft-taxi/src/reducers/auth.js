import {LOG_IN, LOG_OUT} from '../actions.js'

const initialState = {
    isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
    AUTH_TOKEN: localStorage.getItem('AUTH_TOKEN') || ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOG_IN: {
            localStorage.setItem('isLoggedIn', true);
            localStorage.setItem('AUTH_TOKEN', action.token);
            return {isLoggedIn: true, AUTH_TOKEN: action.token}
        }
        case LOG_OUT: {
            localStorage.clear();
            return {isLoggedIn: false, AUTH_TOKEN: ''}
        }
        default:
            return state
    }
}