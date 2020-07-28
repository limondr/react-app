import reducer from '../reducers/auth'
import * as types from '../actions.js'

describe('auth reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({
            isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
            AUTH_TOKEN: localStorage.getItem('AUTH_TOKEN') || ''
        })
    })
  
    it('should handle LOG_IN', () => {
      expect(
        reducer({
            "AUTH_TOKEN": "",
            "isLoggedIn": false
        }, {
          type: types.LOG_IN,
          token: '123123123'
        })
      ).toEqual({
            "AUTH_TOKEN": "123123123",
            "isLoggedIn": true
        })
    })

    it('should handle LOG_OUT', () => {
        expect(
          reducer({
            "AUTH_TOKEN": "123123123",
            "isLoggedIn": true
          }, {
            type: types.LOG_OUT
          })
        ).toEqual({
              "AUTH_TOKEN": "",
              "isLoggedIn": false
          })
      })
})