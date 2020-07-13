export const serverLogin = async (email, password) => {
    return fetch(
        `https://loft-taxi.glitch.me/auth`,
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
        },
        body: JSON.stringify( {email: email, password: password} )
        }).then(res => res.json()).then( data => data)
}

export const sendCardData = async (cardNumber, expiryDate, cardName, cvc, token) => {
    return fetch(
        `https://loft-taxi.glitch.me/card`,
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
            cardNumber: cardNumber,
            expiryDate: expiryDate,
            cardName: cardName,
            cvc: cvc,
            token: token} )
        }).then(res => res.json()).then( data => data)
}

export const getCardData = async (token) => {
    return fetch(
        `https://loft-taxi.glitch.me/card?token=${token}`
        ).then(res => res.json()).then( data => data)
}