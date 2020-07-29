import reducer from '../reducers/profile'
import * as types from '../actions'

describe ("profile reducer", () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            cardNumber: '0000 0000 0000 0000',
            expiryDate: '11/11',
            cardName: 'TEST NAME',
            cvc: '123'
        })
    })

    it('should handle SAVE_CARD_DATA', () => {
        expect(
            reducer(
                {
                    cardNumber: '',
                    expiryDate: '',
                    cardName: '',
                    cvc: ''
                },
                {
                type: types.SAVE_CARD_DATA,
                payload: {
                    cardNumber: '0000 0000 0000 0000',
                    expiryDate: '11/11',
                    cardName: 'TEST NAME',
                    cvc: '123'
                }
            })
        ).toEqual({
            cardNumber: '0000 0000 0000 0000',
            expiryDate: '11/11',
            cardName: 'TEST NAME',
            cvc: '123'
        })
    })
})
