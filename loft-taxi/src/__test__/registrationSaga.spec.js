import { recordSaga } from '../saga/recordSaga'
import { registrationSagaRes } from '../saga/registrationSaga'
import { registationUser } from '../actions'

jest.mock("../api", () => ({ serverRegistration: jest.fn(() => true)}))

describe("registrationSaga", () => {
    describe("#REGISTRATION", () => {
        it("registration through api", async () => {
            const dispatched = await recordSaga(
                registrationSagaRes,
                registationUser("testemail", "testpassword", "testname", "testsurname")
            );

            expect(dispatched).toEqual([{
                type: 'REGISTRATION_SUCCESS',               
            },
        ])
        })
    })
})