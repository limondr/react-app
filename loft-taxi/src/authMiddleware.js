import { logIn, saveCard } from './actions';
import {serverLogin, sendCardData, getCardData} from './api';
import {AUTHENTICATE, SUBMITCARD, GETCARD} from './actions'

export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE){
        const {email, password} = action.payload;
        const data = await serverLogin(email, password)
        if(data.success) {
            store.dispatch(logIn(data))
        }
    } else {
        next(action)
    }
}

export const sendCardDataMiddleware = (store) => (next) => async (action) => {
    if(action.type === SUBMITCARD){
        const {cardNumber, expiryDate, cardName, cvc, token} = action.payload;
        const data = await sendCardData(cardNumber, expiryDate, cardName, cvc, token)
        if(data.success) {
            console.log('success', cardNumber, expiryDate, cardName, cvc, token)
            store.dispatch(saveCard({
                cardNumber,
                expiryDate,
                cardName,
                cvc
            }))
        }
    } else {
        next(action)
    }
}

export const getCardDataMiddleware = (store) => (next) => async (action) => {
    if(action.type === GETCARD){
        const token = action.payload;
        const data = await getCardData(token)
        store.dispatch(saveCard(data))
    } else {
        next(action)
    }
}