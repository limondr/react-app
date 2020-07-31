import { takeEvery, call, put } from 'redux-saga/effects';
import {  setAddressList, GET_ADDRESS_LIST } from '../actions'
import { serverGetAddressList } from '../api';
import { toast } from 'react-toastify';

export function* getAdressListSaga(action) {
    try {
        const data = yield call(serverGetAddressList)
        if (data.addresses) {
            yield put(setAddressList(data.addresses))
            toast('🦄 Список адресов загружен!');
        } else {
            toast.warn('🤷🏽‍♂️ Не удалось загрузить список адресов!');
            console.log('Не удалось загрузить список адресов');
        }
    } catch(error) {
        toast.error('🆘 Произошла непредвиденная ошибка!');
        console.log('Произошла непредвиденная ошибка', error);
    }
}

export function* addressSaga() {
    yield takeEvery(GET_ADDRESS_LIST, getAdressListSaga)
} 