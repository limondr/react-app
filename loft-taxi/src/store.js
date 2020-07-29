import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import { authMiddleware, sendCardDataMiddleware, getCardDataMiddleware } from './authMiddleware'

export const store = createStore(rootReducer, applyMiddleware(authMiddleware, sendCardDataMiddleware, getCardDataMiddleware))