import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { submitcard } from '../../../../actions';
import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
    cardNumber: yup.string().matches(/^(\d{4} ){3}\d{4}$/, '0000 0000 0000 0000').required('Обязательное поле'),
    expiryDate: yup.string().matches(/^\d{2}\/\d{2}$/, '11/11').required('Обязательное поле'),
    cardName: yup.string().required('Обязательное поле'),
    cvc: yup.string().matches(/^\d{3}$/, '111').required('Обязательное поле')
})

const ProfileFormWithRedux = ({useDispatchHook = useDispatch}) => {
    const dispatch = useDispatchHook();
    const props = {}
    props.AUTH_TOKEN = useSelector(store => store.auth.AUTH_TOKEN);
    props.cardNumber = useSelector(store => store.profile.cardNumber);
    props.expiryDate = useSelector(store => store.profile.expiryDate);
    props.cardName = useSelector(store => store.profile.cardName);
    props.cvc = useSelector(store => store.profile.cvc);

    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(loginSchema)
      });
    
    const onSubmit = ({cardNumber, expiryDate, cardName, cvc}) => {
        dispatch(submitcard({
            cardNumber,
            expiryDate,
            cardName,
            cvc,
            token: props.AUTH_TOKEN
            }))
    }

    return (
    <form onSubmit={handleSubmit(onSubmit)}>
            <div className="h1_pl">Профиль</div>
            <div className="h4_pl">Способ оплаты</div>
            <div className="card_box">
                <div className="card">
                    <div className="logo_card"></div>
                    <div className="box_cart_otsp">
                        <span className="num_cart">Номер карты:</span>
                        <TextField
                            inputProps={{'data-testid': 'profile-cardNumber'}} 
                            name="cardNumber" 
                            id="standard-required" 
                            placeholder={props.cardNumber}
                            inputRef={register}
                            error={!!errors.cardNumber}
                            helperText={ errors.cardNumber && errors.cardNumber.message} 
                        />
                        <div className="last_cart_info">
                            <span className="num_cart">Срок действия:</span>
                            <TextField
                                inputProps={{'data-testid': 'profile-expiryDate'}}  
                                name="expiryDate" 
                                id="standard-required" 
                                placeholder={props.expiryDate}
                                inputRef={register}
                                error={!!errors.expiryDate}
                                helperText={ errors.expiryDate && errors.expiryDate.message} 
                            />
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="last_card">
                        <span className="num_cart">Имя владельца:</span>
                        <TextField
                            inputProps={{'data-testid': 'profile-cardName'}} 
                            name="cardName" 
                            id="standard-required" 
                            placeholder={props.cardName}
                            inputRef={register}
                            error={!!errors.cardName}
                            helperText={ errors.cardName && errors.cardName.message}  
                        />
                        <div className="last_cart_info">
                            <span className="num_cart">CVC:</span>
                            <TextField
                                inputProps={{'data-testid': 'profile-cvc'}} 
                                type="password" 
                                name="cvc" 
                                id="standard-required" 
                                placeholder="***"
                                inputRef={register}
                                error={!!errors.cvc}
                                helperText={ errors.cvc && errors.cvc.message}  
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button type="submit" data-testid="profile-submit">
                <div className="btn-profile">Сохранить</div>
            </button>       
    </form>
    )  
}

export default ProfileFormWithRedux;