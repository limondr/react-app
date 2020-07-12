import React from 'react';
import Map from './sections/Map';
import Profile from './sections/Profile';
import { withAuth } from '../../AuthContext'
import PropTypes from 'prop-types';

const PAGES = {
    map: (props) => <Map {...props}/>,
    profile: (props) => <Profile {...props}/>
}

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentSection: "map"
        }

        this.defaultProperties.changeSection = this.defaultProperties.changeSection.bind(this);
    }

    static propTypes = {
        defaultProperties: PropTypes.shape({
            navigateTo: PropTypes.func.isRequired
        }).isRequired,
        logOut: PropTypes.func.isRequired,
        isLoggedIn: PropTypes.bool.isRequired
    }

    unauthenticate = () => {
        this.props.logOut();
    }

    defaultProperties = {
        changeSection: (section) => {
            if(!this.props.isLoggedIn)
                this.props.defaultProperties.navigateTo("entrance")
            else
                this.setState({ currentSection: section })
        }
    }

    render() {
        return (
                <div className="main_map">
                    <div className="map_nav">
                        <div className="nav_logo"></div>
                        <div className="nav_list">
                            <div className="style_list_nav" onClick={() => this.defaultProperties.changeSection("map")}>Карта</div>
                            <div className="style_list_nav" onClick={() => this.defaultProperties.changeSection("profile")}>Профиль </div>
                            <div className="style_list_nav" onClick={() => this.unauthenticate()}>Выйти</div>
                        </div>
                    </div>
                    <div className="account_section">
                        {PAGES[this.state.currentSection]({defaultProperties: this.defaultProperties})}
                    </div>
                </div>
        )
    }
}

const AccountWithAuth = withAuth(Account);

export default AccountWithAuth;