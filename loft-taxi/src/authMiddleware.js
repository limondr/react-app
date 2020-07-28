import { logIn, saveCard, loginFail, saveCardFail, getCardDataFail } from './actions';
import {serverLogin, sendCardData, getCardData} from './api';
import {AUTHENTICATE, SUBMITCARD, GETCARD} from './actions'

export const authMiddleware = (store) => (next) => async (action) => {
    if(action.type === AUTHENTICATE){
        const {email, password} = action.payload;
        try {
            const data = await serverLogin(email, password)
            if(data.success) {
                store.dispatch(logIn(data))
            } else {
                store.dispatch(loginFail(data.error))
            }
        } catch (error) {
            store.dispatch(loginFail(error))
        }
    } else {
        next(action)
    }
}

export const sendCardDataMiddleware = (store) => (next) => async (action) => {
    if(action.type === SUBMITCARD){
        const {cardNumber, expiryDate, cardName, cvc, token} = action.payload;
        try {
            const data = await sendCardData(cardNumber, expiryDate, cardName, cvc, token)
            if(data.success) {
                store.dispatch(saveCard({
                    cardNumber,
                    expiryDate,
                    cardName,
                    cvc
                }))
            } else {
                store.dispatch(saveCardFail(data.error))
            }
        } catch (error) {
            store.dispatch(saveCardFail(error))
        }        
    } else {
        next(action)
    }
}

export const getCardDataMiddleware = (store) => (next) => async (action) => {
    if(action.type === GETCARD){
        const token = action.payload;
        try {
            const data = await getCardData(token)
            store.dispatch(saveCard(data))
        } catch (error) {
            store.dispatch(getCardDataFail(error))
        }
    } else {
        next(action)
    }
}