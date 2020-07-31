import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { registationUser } from '../../../../actions';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    email: yup.string().email('Введите корректные данные').required('Обязательное поле'),
    name: yup.string().required('Обязательное поле'),
    surname: yup.string().required('Обязательное поле'),
    password: yup.string().required('Обязательное поле'),
})

export default function RegistrationForm({useDispatchHook = useDispatch}) {
    const dispatch = useDispatchHook();

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(formSchema)
      });
    
    const onSubmit = ({email, password, name, surname}) => {
        dispatch(registationUser(email, password, name, surname))
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)} className="reg_form">
        <div className="box_for_reg">
        <div className="inpt-style">
            <TextField
                inputProps={{'data-testid': 'registration-email'}}                  
                id="standard-required" 
                name="email"
                label="Адрес электронной почты" 
                placeholder="Адрес электронной почты"
                inputRef={register}
                error={!!errors.email}
                helperText={ errors.email && errors.email.message}
            />
        </div>
        <div className="inpt-style grid-box">
            <div className="style-bb">
                <TextField
                    inputProps={{'data-testid': 'registration-name'}}                     
                    id="standard-required" 
                    name="name" 
                    label="Имя" 
                    placeholder="Имя"
                    inputRef={register}
                    error={!!errors.name}
                    helperText={ errors.name && errors.name.message}
                />
            </div>
            <div className="style-kk">
                <TextField
                    inputProps={{'data-testid': 'registration-surname'}}  
                    id="standard-required" 
                    name="surname" 
                    label="Фамилия" 
                    placeholder="Фамилия"
                    inputRef={register}
                    error={!!errors.surname}
                    helperText={ errors.surname && errors.surname.message}
                />
            </div>
        </div>
        <TextField
            inputProps={{'data-testid': 'registration-password'}}  
            type="password" 
            name="password" 
            id="standard-required" 
            label="Пароль" 
            placeholder="Пароль"
            inputRef={register} 
            error={!!errors.password}
            helperText={ errors.password && errors.password.message}
        />
        </div>
        <button type="submit" className="reg_submit" data-testid="registration-submit">
            <div className="button-reg">Зарегистрироваться</div>
        </button>
    </form>
    )  
}