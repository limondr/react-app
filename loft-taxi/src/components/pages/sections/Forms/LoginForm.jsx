import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { authenticate } from '../../../../actions';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup.string().email('Введите корректные данные').required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
})

export default function LoginForm({useDispatchHook = useDispatch}) {
    const dispatch = useDispatchHook();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(formSchema)
      });
    
    const onSubmit = ({username, password}) => {
        dispatch(authenticate(username, password))
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)} className="login_form">
        <div className="inpt-style">
            <TextField                
                id="standard-required"
                inputProps={{'data-testid': 'login-name'}}
                name="username"
                label="Имя пользователя"
                placeholder="Имя пользователя"
                inputRef={register}
                error={!!errors.username}
                helperText={ errors.username && errors.username.message}
            />
        </div>
        <TextField            
            type="password"
            inputProps={{'data-testid': 'login-password'}}
            id="standard-required"
            name="password"
            label="Пароль"
            placeholder="Пароль"
            inputRef={register}
            error={!!errors.password}
            helperText={ errors.password && errors.password.message}
        />
        <button type="submit" className="login_submit" data-testid="login-submit">
            <div className="button-entr">Войти</div>
        </button>
    </form>
    )  
}