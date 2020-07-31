import { takeEvery, call, put } from 'redux-saga/effects'
import { REGISTRATION, registationSuccess, registationFail} from '../actions'
import { serverRegistration } from  '../api'
import history from '../history';
import { toast } from 'react-toastify';

export function* registrationSagaRes (action){
    const {email, password, name, surname} = action.payload;

    try {
        const success = yield call(serverRegistration, email, password, name, surname)
        if(success) {
            yield put(registationSuccess())
            console.log('registration', email, password, name, surname)
            history.push('/');
            toast('🦄 Регистрация прошла успешно!');
            console.log('Регистрация прошла успешно')
        }else {
            yield put(registationFail())
            toast.warn('🤷🏽‍♂️ Регистрация не удалась!');
            console.log('Регистрация не удалась')
        }        
    } catch (error) {
        yield put(registationFail(error))
        toast.error('🆘 Произошла непредвиденная ошибка!');
        console.log('Произошла непредвиденная ошибка', error);        
    }
}

export function* registrationSaga() {
    yield takeEvery(REGISTRATION, registrationSagaRes)
}