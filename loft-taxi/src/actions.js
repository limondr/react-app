export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const AUTHENTICATE = 'AUTHENTICATE'
export const SUBMITCARD = 'SUBMITCARD'
export const GETCARD = 'GETCARD'
export const SAVE_CARD_DATA = 'SAVE_CARD_DATA'
export const SAVE_CARD_FAIL = 'SAVE_CARD_FAIL'
export const GET_CARD_DATA_FAIL = 'GET_CARD_DATA_FAIL'

export const logIn = (data) => ({
    type: LOG_IN,
    token: data.token
})

export const logOut = () => ({
    type: LOG_OUT
})

export const loginFail = () => ({
    type: LOGIN_FAIL
})

export const authenticate = (email, password) => ({
    type: AUTHENTICATE,
    payload: {
        email,
        password
    }
})

export const saveCard = (data) => ({
    type: SAVE_CARD_DATA,
    payload: {
        cardNumber: data.cardNumber,
        expiryDate: data.expiryDate,
        cardName: data.cardName,
        cvc: data.cvc
    }
})

export const saveCardFail = () => ({
    type: SAVE_CARD_FAIL
})

export const submitcard = (data) => ({
    type: SUBMITCARD,
    payload: {
        cardNumber: data.cardNumber,
        expiryDate: data.expiryDate,
        cardName: data.cardName,
        cvc: data.cvc,
        token: data.token
    }
})

export const getcard = (data) => ({
    type: GETCARD,
    payload: data
})

export const getCardDataFail = () => ({
    type: GET_CARD_DATA_FAIL
})