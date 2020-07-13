import {authMiddleware} from '../authMiddleware'
import {authenticate} from '../actions'
import {serverLogin} from '../api'

jest.mock("../api", () => ({serverLogin: jest.fn(() => true)}))

describe("authMiddleware", () => {
    describe("#AUTHENTICATE", () => {
        it("authenticates through api", async () => {
            const dispatch = jest.fn()

            await authMiddleware({dispatch})()(
                authenticate("testlogin", "testpassword")
            )

            expect(serverLogin).toBeCalledWith("testlogin", "testpassword")
            expect(dispatch).toBeCalledWith(
                {type: "LOG_IN"}
            ) 
        })
    })
})