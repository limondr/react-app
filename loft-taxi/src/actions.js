export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const AUTHENTICATE = 'AUTHENTICATE'
export const SUBMITCARD = 'SUBMITCARD'
export const GETCARD = 'GETCARD'
export const SAVE_CARD_DATA = 'SAVE_CARD_DATA'
export const SAVE_CARD_FAIL = 'SAVE_CARD_FAIL'
export const GET_CARD_DATA_FAIL = 'GET_CARD_DATA_FAIL'
export const REGISTRATION = 'REGISTRATION'
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS'
export const REGISTRATION_FAIL = 'REGISTRATION_FAIL'
export const GET_ADDRESS_LIST = 'GET_ADDRESS_LIST'
export const GET_ROUTE = 'GET_ROUTE'
export const SET_ADDRESS_LIST = 'SET_ADDRESS_LIST'
export const SET_ROUTE = 'SET_ROUTE'
export const SUBMITCARD_SUCCESS = 'SUBMITCARD_SUCCESS'
export const SUBMITCARD_FAIL = 'SUBMITCARD_FAIL'

export const logIn = (token) => ({
    type: LOG_IN,
    token: token
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

export const registationUser = (email, password, name, surname) => ({
    type: REGISTRATION,
    payload: {
        email,
        password,
        name,
        surname
    }
})

export const registationSuccess = () => ({
    type: REGISTRATION_SUCCESS
})

export const registationFail = () => ({
    type: REGISTRATION_FAIL
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

export const submitcardSuccess = () => ({
    type: SUBMITCARD_SUCCESS
})

export const submitcardFail = () => ({
    type: SUBMITCARD_FAIL
})

export const getcard = (token) => ({
    type: GETCARD,
    payload: token
})

export const getCardDataFail = () => ({
    type: GET_CARD_DATA_FAIL
})

export const getAddressList = () => ({
    type: GET_ADDRESS_LIST
})

export const getRoute = (address1, address2) => ({
    type: GET_ROUTE,
    payload: {
        address1,
        address2
    }
})

export const setAddressList = (addresses) => ({
    type: SET_ADDRESS_LIST,
    payload: addresses
})

export const setRoute = (coordinates) => ({
    type: SET_ROUTE,
    payload: coordinates
})