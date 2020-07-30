import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registationUser } from '../../actions';

class Registration extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            name: '',
            surname: '',
            password: ''
        }
    }

    static propTypes = {
        registationUser: PropTypes.func.isRequired
    }

    registationUser = () => {
        this.props.registationUser(this.state.email, this.state.password, this.state.name, this.state.surname)
    }

    handleValueChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="main_reg_entr">
                <div className="r_e_logo"></div>
                <div className="block_registration">
                    <div className="b_e_pad">
                        <div className="b-h2">Регистрация</div>
                        <Link to="/">
                            <div className="b-h4">Уже зарегистрировались? <span className="color-link" >Войти</span></div>
                        </Link>
                        <div className="inpt-style">
                            <TextField required id="standard-required" name="email" label="Адрес электронной почты" placeholder="Адрес электронной почты"
                                value={this.state.email} onChange={(e) => this.handleValueChange(e)}
                            />
                        </div>
                        <div className="inpt-style grid-box">
                            <div className="style-bb">
                                <TextField required id="standard-required" name="name" label="Имя" placeholder="Имя" 
                                    value={this.state.name} onChange={(e) => this.handleValueChange(e)}
                                />
                            </div>
                            <div className="style-kk">
                                <TextField required id="standard-required" name="surname" label="Фамилия" placeholder="Фамилия" 
                                    value={this.state.surname} onChange={(e) => this.handleValueChange(e)}
                                />
                            </div>
                        </div>
                        <TextField type="password" name="password" id="standard-required" label="Пароль" placeholder="Пароль" 
                            value={this.state.password} onChange={(e) => this.handleValueChange(e)}
                        />
                        <Link to="/">
                            <div className="button-reg" onClick={() => this.registationUser()}>Зарегистрироваться</div>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

const RegistrationWithAuth = connect(
    null,
    { registationUser }
)(Registration);

export default RegistrationWithAuth;