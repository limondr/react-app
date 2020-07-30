import reducer from '../reducers/map'
import * as types from '../actions'

describe ("map reducer", () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual({
            addresses: [],
            coordinates: []
        })
    })

    it('should handle SET_ADDRESS_LIST', () => {
        expect(
            reducer(
                {
                    addresses: [],
                    coordinates: [[1,2],[3,4],[5,6]]
                },
                {
                type: types.SET_ADDRESS_LIST,
                payload: [['address1'],['address2']]
            })
        ).toEqual({
            addresses: [['address1'],['address2']],
            coordinates: [[1,2],[3,4],[5,6]]
        })
    })

    it('should handle SET_ROUTE', () => {
        expect(
            reducer(
                {
                    addresses: [['address1'],['address2']],
                    coordinates: []
                },
                {
                type: types.SET_ROUTE,
                payload: [[1,2],[3,4],[5,6]]
            })
        ).toEqual({
            addresses: [['address1'],['address2']],
            coordinates: [[1,2],[3,4],[5,6]]
        })
    })
})
