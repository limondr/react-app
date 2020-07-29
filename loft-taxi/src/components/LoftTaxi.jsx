import React from 'react';

import './css/style.css';
import './fonts/stylesheet.css'

import Registration from './pages/Registration';
import EntranceWithAuth from './pages/Entrance';
import AccountWithAuth from './pages/Account';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute'


class LoftTaxi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    static propTypes = {
        isLoggedIn: PropTypes.bool.isRequired,
    }

    componentDidUpdate(prevProps, prevState) {/* 
        if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
            console.log(this.props)
          if(this.props.isLoggedIn) {
            this.setState({ currentPage: "account" })
          } else {
            this.setState({ currentPage: "entrance" })
          }
        } */
      }


    render() {
        return (
                <main>
                    <section>
                       <Switch>
                           <Route exact path="/" component={EntranceWithAuth} />
                           <Route path="/registration" component={Registration} />
                           <PrivateRoute  path="/account" component={AccountWithAuth} />
                       </Switch>
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
