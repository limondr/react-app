import { takeEvery, call, put } from 'redux-saga/effects';
import { setRoute, GET_ROUTE } from '../actions'
import { serverGetRoute } from '../api';
import { toast } from 'react-toastify';

export function* getRouteSaga(action) {
    const {address1, address2} = action.payload;
    try {
        const data = yield call(serverGetRoute, address1, address2)
        if (data) {
            yield put(setRoute(data))
            toast('🦄 Маршрут проложен!');
        } else {
            toast.warn('🤷🏽‍♂️ Не удалось получить координаты!');
            console.log('Не удалось получить координаты');
        }
    } catch(error) {
        toast.error('🆘 Произошла непредвиденная ошибка!');
        console.log('Произошла непредвиденная ошибка', error);
    }
}

export function* routeSaga() {
    yield takeEvery(GET_ROUTE, getRouteSaga)
} 