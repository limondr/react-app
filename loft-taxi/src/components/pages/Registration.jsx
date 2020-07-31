import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registationUser } from '../../actions';
import RegistrationForm from './sections/Forms/RegistrationForm';

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
            <div className="main_entrence">
                <div className="r_e_logo"></div>
                <div className="block_registration">
                    <div className="reg_b_e_pad">
                        <div className="b-h2">Регистрация</div>
                        <Link to="/">
                            <div className="b-h4">Уже зарегистрировались? <span className="color-link" >Войти</span></div>
                        </Link>
                        <RegistrationForm 
                            data={this.state}
                            handleValueChange={this.handleValueChange.bind(this)}
                        />
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