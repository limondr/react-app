import React from 'react';
import Map from './sections/Map';
import ProfileWithAuth from './sections/Profile';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logOut} from '../../actions';
import { PrivateRoute } from '../PrivateRoute';
import { Switch, Link } from 'react-router-dom';


class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSection: "map"
        }
    }

    static propTypes = {
        logOut: PropTypes.func.isRequired,
        isLoggedIn: PropTypes.bool.isRequired
    }

    unauthenticate = () => {
        this.props.logOut();
    }

    render() {
        return (
                <div className="main_map">
                    <div className="map_nav">
                        <div className="nav_logo"></div>
                        <div className="nav_list">
                            <Link to="/account/map">
                            <div className="style_list_nav">Карта</div>
                            </Link>
                            <Link to="/account/profile">
                            <div className="style_list_nav">Профиль </div>
                            </Link>
                            <Link to="/" onClick={() => this.unauthenticate()}>
                            <div className="style_list_nav">Выйти</div>
                            </Link>
                        </div>
                    </div>
                    <div className="account_section">
                        <Switch>
                            <PrivateRoute path="/account/map" component={Map}/>
                            <PrivateRoute path="/account/profile" component={ProfileWithAuth}/>
                        </Switch>
                    </div>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.auth.isLoggedIn
})

const AccountWithAuth = connect(
    mapStateToProps,
    { logOut }
)(Account);

export default AccountWithAuth;