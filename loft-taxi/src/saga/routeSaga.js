import { takeEvery, call, put } from 'redux-saga/effects';
import { setRoute, GET_ROUTE } from '../actions'
import { serverGetRoute } from '../api';

export function* getRouteSaga(action) {
    const {address1, address2} = action.payload;
    try {
        const data = yield call(serverGetRoute, address1, address2)
        if (data) {
            yield put(setRoute(data))
        } else {
            console.log('Координаты были не найдены');
        }
    } catch(error) {
        console.log('Произошла непредвиденная ошибка');
    }
}

export function* routeSaga() {
    yield takeEvery(GET_ROUTE, getRouteSaga)
} 