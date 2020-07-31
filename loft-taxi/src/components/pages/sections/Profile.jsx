import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getcard } from '../../../actions';
import ProfileForm from './Forms/ProfileForm';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardNumber: "",
            expiryDate: "",
            cardName: "",
            cvc: "",
        }
    }

    componentDidMount() {
        this.props.getcard(this.props.AUTH_TOKEN);
    }

    static propTypes = {
        AUTH_TOKEN: PropTypes.string.isRequired,
        cardNumber: PropTypes.string.isRequired,
        expiryDate: PropTypes.string.isRequired,
        cardName: PropTypes.string.isRequired,
        cvc: PropTypes.string.isRequired,
        getcard: PropTypes.func.isRequired
    }

    handleValueChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="main_reg_entr">
                <div className="card_plashka">
                    <ProfileForm 
                        data={this.state}
                        handleValueChange={this.handleValueChange.bind(this)}
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    AUTH_TOKEN: state.auth.AUTH_TOKEN,
    cardNumber: state.profile.cardNumber,
    expiryDate: state.profile.expiryDate,
    cardName: state.profile.cardName,
    cvc: state.profile.cvc
})

const ProfileWithAuth = connect(
    mapStateToProps,
    { getcard }
)(Profile);

export default ProfileWithAuth;