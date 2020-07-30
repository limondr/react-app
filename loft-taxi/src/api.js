import {BASE_URL} from "./costants"

export const serverLogin = async (email, password) => {
    return fetch(
        `${BASE_URL}/auth`,
        {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify( {email: email, password: password} )
        }).then(res => res.json())
}

export const sendCardData = async (cardNumber, expiryDate, cardName, cvc, token) => {
    return fetch(
        `${BASE_URL}/card`,
        {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify( {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cardName: cardName,
            cvc: cvc,
            token: token} )
        }).then(res => res.json())
}

export const getCardData = async (token) => {
    return fetch(
        `${BASE_URL}/card?token=${token}`
        ).then(res => res.json())
}

export const serverRegistration = async (email, password, name, surname) => {
    return fetch(
        `${BASE_URL}/register`,
        {
            method: 'POST',
            headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        body: JSON.stringify( {email: email, password: password, name: name, surname: surname} )
        }).then(res => res.json())
}

export const serverGetAddressList = async () => {
    return fetch(`${BASE_URL}/addressList`).then(res => res.json())
}

export const serverGetRoute = async (address1, address2) => {
    return fetch(`${BASE_URL}/route?address1=${address1}&address2=${address2}`).then(res => res.json())
}