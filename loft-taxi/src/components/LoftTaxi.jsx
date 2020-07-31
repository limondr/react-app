import React from 'react';

import './css/style.css';
import './fonts/stylesheet.css'

import Registration from './pages/Registration';
import EntranceWithAuth from './pages/Entrance';
import AccountWithAuth from './pages/Account';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute'
import history from '../history'


class LoftTaxi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
    }

    render() {
        return (
                <main>
                    <section>
                    <Router history={history}>
                       <Switch>
                           <Route exact path="/" component={EntranceWithAuth} />
                           <Route exact path="/registration" component={Registration} />
                           <PrivateRoute path="/account" component={AccountWithAuth} />
                       </Switch>
                    </Router>
                    </section>
                </main>
        )
    }
}

const mapStateToProps = state => ({
        isLoggedIn: state.auth.isLoggedIn
})

export default connect(
    mapStateToProps
)(LoftTaxi);
