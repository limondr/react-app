import {SAVE_CARD_DATA} from '../actions.js'

const initialState = {
    cardNumber: '',
    expiryDate: '',
    cardName: '',
    cvc: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SAVE_CARD_DATA: {
            console.log(action)
            localStorage.setItem('cardNumber', action.payload.cardNumber || '');
            localStorage.setItem('expiryDate', action.payload.expiryDate || '');
            localStorage.setItem('cardName', action.payload.cardName || '');
            return { 
                cardNumber: action.payload.cardNumber || '',
                expiryDate: action.payload.expiryDate || '',
                cardName: action.payload.cardName || '',
                cvc: action.payload.cvc || ''
            }
        }
        default:
            return state
    }
}