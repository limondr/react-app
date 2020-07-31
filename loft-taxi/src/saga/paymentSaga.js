import { takeEvery, call, put } from 'redux-saga/effects';
import { sendCardData, getCardData } from '../api';
import { GETCARD, SUBMITCARD, saveCard, submitcardSuccess, submitcardFail} from '../actions';
import history from '../history';

export function* getCardProfileSaga(action) {
    const token = action.payload;
    const data = yield call(getCardData, token)
    try {
        if(!data.success === false || data.success === undefined) {
            yield put(saveCard(data))
            console.log('Данные карты загружены')
        }else {
            console.log('Данные карты отсуствуют')
        }
    } catch(error) {
        console.log(error)
    }
}

export function* sendCardProfileSaga(action) {
    const {cardNumber, expiryDate, cardName, cvc, token} = action.payload;    
    try {
        const data = yield call(sendCardData, cardNumber, expiryDate, cardName, cvc, token)
        if(data.success) {
            yield put(saveCard({cardNumber, expiryDate, cardName, cvc}))
            history.push('/account/map')
            yield put(submitcardSuccess())
            console.log('Данные карты сохранены')
        }else {
            yield put(submitcardFail())
            console.log('Данные карты не были сохранены')
        }

    } catch(error) {
        yield put(submitcardFail(error))
        console.log('Произошла непредвиденная ошибка', error)
    }
}


export function* getCardProfile() {
    yield takeEvery(GETCARD, getCardProfileSaga);
    yield takeEvery(SUBMITCARD, sendCardProfileSaga);
}