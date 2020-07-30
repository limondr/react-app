import { recordSaga } from '../saga/recordSaga'
import { authenticateSaga } from '../saga/authSaga'
import { authenticate } from '../actions'

jest.mock("../api", () => ({ serverLogin: jest.fn(() =>  ({ success: true, token: "token" }))}))
describe("authSaga", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            const dispatched = await recordSaga(
                authenticateSaga,
                authenticate("test@test.com", "123123")
            );

            expect(dispatched).toEqual([
            {
                type: "LOG_IN",
                token: "token"
                
            }, 
            {
                type: "GETCARD",
                payload: "token"
            }
        
        ]);
        });
    });
});
