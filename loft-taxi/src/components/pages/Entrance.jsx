import React from 'react';
import TextField from '@material-ui/core/TextField';

class Entrance extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="main_reg_entr">
                    <div className="r_e_logo"></div>
                    <div className="block_entrance">
                        <div className="b_e_pad">
                            <div className="b-h2">Войти</div>
                            <div className="b-h4">Новый пользователь? <span className="color-link" onClick={() => this.props.defaultProperties.navigateTo('registration')} >Зарегистрируйтесь</span></div>
                            <div className="inpt-style">
                                <TextField required id="standard-required" label="Имя пользователя" placeholder="Имя пользователя" />
                            </div>
                            <TextField type="password" id="standard-required" label="Пароль" placeholder="Пароль" />
                            <div className="button-entr" onClick={() => this.props.defaultProperties.navigateTo('account')}>Войти</div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Entrance;

