import { recordSaga } from '../saga/recordSaga'
import { getCardProfileSaga, sendCardProfileSaga } from '../saga/paymentSaga'
import { getcard, submitcard } from '../actions'

jest.mock("../api", () => ({ sendCardData: jest.fn(() => ({success: true})), getCardData: jest.fn(() => true)}))

describe("paymentSaga", () => {
    describe("#GETCARD", () => {
        it("get card through api", async () => {
            const dispatched = await recordSaga(
                getCardProfileSaga,
                getcard("token")
            );

            expect(dispatched).toEqual([{
                type: 'SAVE_CARD_DATA',
                payload: {
                    cardNumber: undefined,
                    expiryDate: undefined,
                    cardName: undefined,
                    cvc: undefined,
                },  
            },
        ])
        })
    })

    describe("#SUBMITCARD", () => {
        it("submit card through api", async () => {
            const dispatched = await recordSaga(
                sendCardProfileSaga,
                submitcard("card", "date", "cardname", "cvc")
            );

            expect(dispatched).toEqual([
                {
                    type: 'SAVE_CARD_DATA',
                    payload: {
                        cardNumber: undefined,
                        expiryDate: undefined,
                        cardName: undefined,
                        cvc: undefined,
                    }
                },
                {
                    type: 'SUBMITCARD_SUCCESS',               
                },                
            ])
        })
    })

})
