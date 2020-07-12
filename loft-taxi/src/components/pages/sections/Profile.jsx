import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

class Profile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    static propTypes = {
        defaultProperties: PropTypes.shape({
            changeSection: PropTypes.func.isRequired
        }).isRequired
    }

    render() {
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
                                    <TextField required name="card-number" id="standard-required" placeholder="0000 0000 0000 0000" />
                                    <div className="last_cart_info">
                                        <span className="num_cart">Срок действия:</span>
                                        <TextField required name="card-date" id="standard-required" placeholder="00/00" />
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="last_card">
                                    <span className="num_cart">Имя владельца:</span>
                                    <TextField required name="card-holder" id="standard-required" placeholder="NAME SURNAME" />
                                    <div className="last_cart_info">
                                        <span className="num_cart">CVC:</span>
                                        <TextField type="password" name="card-cvc" id="standard-required" placeholder="***" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-profile" onClick={() => this.props.defaultProperties.changeSection('map')}>Сохранить</div>
                    </div>
                </div>
        )
    }
}
export default Profile;