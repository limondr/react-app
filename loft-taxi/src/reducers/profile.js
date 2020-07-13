import {SAVE_CARD_DATA} from '../actions.js'

const initialState = {
    cardNumber: '0000 0000 0000 0000',
    expiryDate: '11/11',
    cardName: 'TEST NAME',
    cvc: '123'
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SAVE_CARD_DATA: {
            console.log('SAVE_CARD_DATA', action)
            return { 
                cardNumber: action.payload.cardNumber,
                expiryDate: action.payload.expiryDate,
                cardName: action.payload.cardName,
                cvc: action.payload.cvc
            }
        }
        default:
            return state
    }
}