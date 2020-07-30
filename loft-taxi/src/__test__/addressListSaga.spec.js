import { recordSaga } from '../saga/recordSaga'
import { getAdressListSaga } from '../saga/addressListSaga'
import { getAddressList } from '../actions'

jest.mock("../api", () => ({ serverGetAddressList: jest.fn(() => ({addresses: [['address1'], ['address2']]}))}))
describe("addressListSaga", () => {
    describe("#GET_ADDRESS_LIST", () => {
        it("get address list through api", async () => {
            const dispatched = await recordSaga(
                getAdressListSaga,
                getAddressList()
            );

            expect(dispatched).toEqual([
            {
                type: "SET_ADDRESS_LIST",
                payload: [['address1'], ['address2']]
            }        
        ]);
        });
    });
});
