import { takeEvery, call, put } from 'redux-saga/effects'
import { REGISTRATION, registationSuccess, registationFail} from '../actions'
import { serverRegistration } from  '../api'

export function* registrationSagaRes (action){
    const {email, password, name, surname} = action.payload;

    try {
        const success = yield call(serverRegistration, email, password, name, surname)
        if(success) {
            yield put(registationSuccess())
            console.log('Регистрация прошла успешно')
        }else {
            yield put(registationFail())
            console.log('Регистрация прошла с ошибка')
        }        
    } catch (error) {
        yield put(registationFail(error))
        console.log('Произошла непредвиденная ошибка', error);        
    }
}

export function* registrationSaga() {
    yield takeEvery(REGISTRATION, registrationSagaRes)
}