import { recordSaga } from '../saga/recordSaga'
import { getRouteSaga } from '../saga/routeSaga'
import { getRoute } from '../actions'

jest.mock("../api", () => ({ serverGetRoute: jest.fn(() => true)}))

describe("routeSaga", () => {
    describe("#GET_ROUTE", () => {
        it("get route through api", async () => {
            const dispatched = await recordSaga(
                getRouteSaga,
                getRoute("address1", "address2")
            );

            expect(dispatched).toEqual([{
                type: 'GET_ROUTE',
                payload: {
                    address1: "address1",
                    address2: "address2"
                },
                payload: true,
                type: "SET_ROUTE",     
            },
        ])
        })
    })
})
