import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authenticate } from '../../actions';
import { Link, Redirect } from 'react-router-dom';

class Entrance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    static propTypes = {
        authenticate: PropTypes.func.isRequired,
        isLoggedIn: PropTypes.bool.isRequired
    }

    authenticate = () => {
        this.props.authenticate(this.state.username, this.state.password)
    }

    handleValueChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            this.props.isLoggedIn ?
                <Redirect to="/account/map"/>
            :
            <div className="main_reg_entr">
                <div className="r_e_logo"></div>
                <div className="block_entrance">
                    <div className="b_e_pad">
                        <div className="b-h2">Войти</div>
                        <Link to="/registration">
                        <div className="b-h4">Новый пользователь? <span className="color-link">Зарегистрируйтесь</span></div>
                        </Link>
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

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})

const EntranceWithAuth = connect(
    mapStateToProps,
    { authenticate }
)(Entrance);

export default EntranceWithAuth;          