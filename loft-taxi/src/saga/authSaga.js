import { takeEvery, call, put } from 'redux-saga/effects'
import { AUTHENTICATE, logIn, getcard, loginFail} from '../actions'
import { serverLogin } from '../api';
import { toast } from 'react-toastify';

export function* authenticateSaga(action){
    const {email, password} = action.payload;
    try {
        const data = yield call(serverLogin, email, password)

        if(data.success) {
            yield put(logIn(data.token))
            yield put(getcard(data.token))
            toast('🦄 Успешная авторизация!');
        } else {
            yield put(loginFail(data.error))
            toast.warn('❌ Не удалось войти в аккаунт!');
            console.log("Не удалось войти в аккаунт");
        }
        
    } catch (error) {
        yield put(loginFail(error))
        toast.error('🆘 Произошла непредвиденная ошибка!');
        console.log("Произошла непредвиденная ошибка", error);
    }
}

export function* authSaga() {
    yield takeEvery(AUTHENTICATE, authenticateSaga)
}