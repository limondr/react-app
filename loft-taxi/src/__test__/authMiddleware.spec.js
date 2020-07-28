import {authMiddleware, sendCardDataMiddleware, getCardDataMiddleware} from '../authMiddleware'
import {authenticate, saveCard, submitcard, getcard} from '../actions'
import {serverLogin, sendCardData, getCardData} from '../api'

jest.mock("../api", () => ({serverLogin: jest.fn(() => true), sendCardData: jest.fn(() => true), getCardData: jest.fn(() => true)}))

describe("authMiddleware", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            const dispatch = jest.fn()

            await authMiddleware({dispatch})()(
                authenticate("test@test.com", "123123")
            )

            expect(serverLogin).toBeCalledWith("test@test.com", "123123")
            expect(dispatch).toBeCalledWith(
                {
                    type: "LOGIN_FAIL",
                }
            ) 
        })
    })
})

describe("sendCardDataMiddleware", () => {
    describe("#SUBMITCARD", () => {
        it("submits card data through api", async () => {
            const dispatch = jest.fn()

            await sendCardDataMiddleware({dispatch})()(
                submitcard({
                    cardNumber: '0000111122223333',
                    expiryDate: '12/16',
                    cardName: 'IVANOV IVANOVICH',
                    cvc: '666',
                    token: 'EWSFSDGSGXDG'
                })
            )

            expect(sendCardData).toBeCalledWith('0000111122223333', '12/16', 'IVANOV IVANOVICH', '666', 'EWSFSDGSGXDG')
            expect(dispatch).toBeCalledWith(
                {
                    type: "SAVE_CARD_FAIL"
                }) 
        })
    })
})

describe("getCardDataMiddleware", () => {
    describe("#GETCARD", () => {
        it("get card data through api", async () => {
            const dispatch = jest.fn()

            await getCardDataMiddleware({dispatch})()(
                getcard('EWSFSDGSGXDG')
            )

            expect(getCardData).toBeCalledWith('EWSFSDGSGXDG')
            expect(dispatch).toBeCalledWith(
                {
                    type: 'SAVE_CARD_DATA',
                    payload: {
                        cardNumber: undefined,
                        expiryDate: undefined,
                        cardName: undefined,
                        cvc: undefined
                    }
                }
            ) 
        })
    })
})