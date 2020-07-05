import React from 'react';

import './css/style.css';
import './fonts/stylesheet.css'

import Registration from './pages/Registration';
import EntranceWithAuth from './pages/Entrance';
import AccountWithAuth from './pages/Account';
import { withAuth } from '../AuthContext'

const PAGES = {
    registration: (props) => <Registration {...props}/>,
    entrance: (props) => <EntranceWithAuth {...props}/>,
    account: (props) => <AccountWithAuth {...props}/>
}

class LoftTaxi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: "entrance"
        }
        this.defaultProperties.navigateTo = this.defaultProperties.navigateTo.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.isLoggedIn !== this.props.isLoggedIn) {
          if(this.props.isLoggedIn) this.setState({ currentPage: "account" })
          else this.setState({ currentPage: "entrance" })
        }
      }

    defaultProperties = {
        navigateTo: (page) => {
            if (page === "account" && !this.props.isLoggedIn)
                this.setState({ currentPage: "entrance" })
            else
                this.setState({ currentPage: page })
        }
    }

    render() {
        return (
                <main>
                    <section>
                        {PAGES[this.state.currentPage]({defaultProperties: this.defaultProperties})}
                    </section>
                </main>
        )
    }
}
export default withAuth(LoftTaxi);
