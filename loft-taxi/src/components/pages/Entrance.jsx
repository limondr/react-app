import React from 'react';
import TextField from '@material-ui/core/TextField';
import { withAuth } from '../../AuthContext'
import PropTypes from 'prop-types';

class Entrance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    static propTypes = {
        defaultProperties: PropTypes.shape({
            navigateTo: PropTypes.func.isRequired
        }).isRequired,
        logIn: PropTypes.func.isRequired,
    }

    authenticate = () => {
        this.props.logIn(this.state.username, this.state.password)
    }

    handleValueChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="main_reg_entr">
                <div className="r_e_logo"></div>
                <div className="block_entrance">
                    <div className="b_e_pad">
                        <div className="b-h2">Войти</div>
                        <div className="b-h4">Новый пользователь? <span className="color-link" onClick={() => this.props.defaultProperties.navigateTo('registration')} >Зарегистрируйтесь</span></div>
                        <div className="inpt-style">
                            <TextField required id="standard-required" name="username" label="Имя пользователя" placeholder="Имя пользователя"
                                value={this.state.username} onChange={(e) => this.handleValueChange(e)} />
                        </div>
                        <TextField type="password" id="standard-required" name="password" label="Пароль" placeholder="Пароль"
                            value={this.state.password} onChange={(e) => this.handleValueChange(e)} />
                        <div className="button-entr" onClick={() => this.authenticate()}>Войти</div>
                    </div>
                </div>
            </div>
        )
    }
}

const EntranceWithAuth = withAuth(Entrance);

export default EntranceWithAuth;