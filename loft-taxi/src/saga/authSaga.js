import { takeEvery, call, put } from 'redux-saga/effects'
import { AUTHENTICATE, logIn, getcard, loginFail} from '../actions'
import { serverLogin } from '../api';

export function* authenticateSaga(action){
    const {email, password} = action.payload;
    try {
        const data = yield call(serverLogin, email, password)

        if(data.success) {
            yield put(logIn(data.token))
            yield put(getcard(data.token))
        } else {
            yield put(loginFail(data.error))
            console.log("Не удалось войти в аккаунт");
        }
        
    } catch (error) {
        yield put(loginFail(error))
        console.log("Произошла непредвиденная ошибка", error);
    }
}

export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga)
}