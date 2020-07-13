import {LOG_IN, LOG_OUT} from '../actions.js'

const initialState = {
    isLoggedIn: false,
    AUTH_TOKEN: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOG_IN: {
            return {isLoggedIn: true, AUTH_TOKEN: action.token}
        }
        case LOG_OUT: {
            return {isLoggedIn: false}
        }
        default:
            return state
    }
}