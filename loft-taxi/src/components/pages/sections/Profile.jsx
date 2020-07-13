import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitcard, getcard } from '../../../actions';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cardnumber: "",
            carddate: "",
            cardholder: "",
            cardcvc: "",
        }
    }

    componentDidMount() {
        this.props.getcard(this.props.AUTH_TOKEN)
    }

    static propTypes = {
        defaultProperties: PropTypes.shape({
            changeSection: PropTypes.func.isRequired
        }).isRequired
    }
    submitcard = () => {
        console.log(this.props.AUTH_TOKEN)
        this.props.submitcard({
            cardNumber: this.state.cardnumber,
            expiryDate: this.state.carddate,
            cardName: this.state.cardholder,
            cvc: this.state.cardcvc,
            token: this.props.AUTH_TOKEN
        })
    }
    handleValueChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        console.log(this.props)
        return (
            <div className="main_reg_entr">
                <div className="card_plashka">
                    <div className="h1_pl">Профиль</div>
                    <div className="h4_pl">Способ оплаты</div>
                    <div className="card_box">
                        <div className="card">
                            <div className="logo_card"></div>
                            <div className="box_cart_otsp">
                                <span className="num_cart">Номер карты:</span>
                                <TextField required name="cardnumber" id="standard-required" placeholder={this.props.cardNumber} value={this.state.cardnumber} onChange={(e) => this.handleValueChange(e)} />
                                <div className="last_cart_info">
                                    <span className="num_cart">Срок действия:</span>
                                    <TextField required name="carddate" id="standard-required" placeholder={this.props.expiryDate} value={this.state.carddate} onChange={(e) => this.handleValueChange(e)} />
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="last_card">
                                <span className="num_cart">Имя владельца:</span>
                                <TextField required name="cardholder" id="standard-required" placeholder={this.props.cardName} value={this.state.cardholder} onChange={(e) => this.handleValueChange(e)} />
                                <div className="last_cart_info">
                                    <span className="num_cart">CVC:</span>
                                    <TextField type="password" name="cardcvc" id="standard-required" placeholder="***" value={this.state.cardcvc} onChange={(e) => this.handleValueChange(e)} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/account/map">
                        <div className="btn-profile" onClick={() => this.submitcard()}>Сохранить</div>
                    </Link>
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
    { submitcard, getcard }
)(Profile);

export default ProfileWithAuth;