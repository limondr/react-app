import React from 'react';
import { Link } from 'react-router-dom';

class FormBeforeOrderTaxi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="start_taxi" data-testid="FormBeforeOrderTaxi">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                    <h1 className="MuiTypography-root jss405 MuiTypography-h4 MuiTypography-alignLeft">Заполните платежные данные</h1>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                    <p className="MuiTypography-root jss406 MuiTypography-body1">Укажите информацию о банковской карте, чтобы сделать заказ.</p>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                    <Link to="/account/profile">
                        <div className="box_btn_taxxxi slk_ll btn_taxi_yellow">
                            <div>Перейти в профиль</div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default FormBeforeOrderTaxi;