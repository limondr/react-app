import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    static propTypes = {
        defaultProperties: PropTypes.shape({
            navigateTo: PropTypes.func.isRequired
        }).isRequired
    }

    render() {
        return (
                <div className="main_reg_entr">
                    <div className="r_e_logo"></div>
                    <div className="block_registration">
                        <div className="b_e_pad">
                            <div className="b-h2">Регистрация</div>
                            <div className="b-h4">Уже зарегистрировались? <span className="color-link" onClick={() => this.props.defaultProperties.navigateTo('entrance')} >Войти</span></div>
                            <div className="inpt-style">
                                <TextField required id="standard-required" name="email" label="Адрес электронной почты" placeholder="Адрес электронной почты" />
                            </div>
                            <div className="inpt-style grid-box">
                                <div className="style-bb">
                                <TextField required id="standard-required" name="name" label="Имя" placeholder="Имя" />
                                </div>
                                <div className="style-kk"><TextField required id="standard-required" name="lastname" label="Фамилия" placeholder="Фамилия" /></div>
                            </div>
                            <TextField type="password" name="password" id="standard-required" label="Пароль" placeholder="Пароль" />
                            <div className="button-reg" onClick={() => this.props.defaultProperties.navigateTo('account')}>Зарегистрироваться</div>
                        </div>
                    </div>
                </div>
        )
    }
}
export default Registration;