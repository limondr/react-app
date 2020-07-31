import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { authenticate } from '../../actions';
import { Link, Redirect } from 'react-router-dom';
import LoginForm from './sections/Forms/LoginForm';


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
    

    showRefContent = () => {
        console.log('govno')
        console.log(this.entranceRef.current.value);
      };

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
                        <LoginForm
                            data={this.state}
                            handleValueChange={this.handleValueChange.bind(this)}
                        />                     
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
