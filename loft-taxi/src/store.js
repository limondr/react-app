import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import createSagaMiddleware from 'redux-saga'
import { authSaga } from './saga/authSaga'
import { registrationSaga } from './saga/registrationSaga'
import { getCardProfile } from './saga/paymentSaga'
import { addressSaga } from './saga/addressListSaga'
import { routeSaga } from './saga/routeSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(authSaga);
sagaMiddleware.run(registrationSaga)
sagaMiddleware.run(getCardProfile)
sagaMiddleware.run(addressSaga)
sagaMiddleware.run(routeSaga)