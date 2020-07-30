import { SET_ADDRESS_LIST, SET_ROUTE } from '../actions'

const initialState = {
    addresses: [],
    coordinates: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SET_ADDRESS_LIST: {
            return { 
                ...state,
                addresses: action.payload
            }
        }
        case SET_ROUTE: {
            return { 
                ...state,
                coordinates: action.payload
            }
        }
        default:
            return state
    }
}