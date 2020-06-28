import React from 'react';

import './css/style.css';
import './fonts/stylesheet.css'

import Registration from './pages/Registration';
import Entrance from './pages/Entrance';
import Account from './pages/Account';

class LoftTaxi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: "entrance"
        }
        this.defaultProperties.navigateTo = this.defaultProperties.navigateTo.bind(this);
    }

    defaultProperties = {
        navigateTo(page) {
            this.setState({currentPage: page})
        }
    }

    render() {
        return (
            <React.Fragment>
               <main>
                   <section>
                       {
                        {
                            registration: <Registration defaultProperties={this.defaultProperties}/>,
                            entrance: <Entrance defaultProperties={this.defaultProperties}/>,
                            account: <Account defaultProperties={this.defaultProperties}/>
                        }[this.state.currentPage]
                       }
                   </section>
               </main>
            </React.Fragment>
        )
    }
}
export default LoftTaxi;
