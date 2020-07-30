import { takeEvery, call, put } from 'redux-saga/effects';
import {  setAddressList, GET_ADDRESS_LIST } from '../actions'
import { serverGetAddressList } from '../api';

export function* getAdressListSaga(action) {
    try {
        const data = yield call(serverGetAddressList)
        if (data.addresses) {
            yield put(setAddressList(data.addresses))
        } else {
            console.log('Адрес не загрузился');
        }
    } catch(error) {
        console.log('Произошла непредвиденная ошибка');
    }
}

export function* addressSaga() {
    yield takeEvery(GET_ADDRESS_LIST, getAdressListSaga)
} 