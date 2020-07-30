import React from 'react';
import PropTypes from 'prop-types';

class FormAfterOrderTaxi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    
    static propTypes = {
        clickCallTaxi: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="start_taxi" data-testid="FormAfterOrderTaxi">
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                    <h1 className="MuiTypography-root jss405 MuiTypography-h4 MuiTypography-alignLeft">Заказ размещён</h1>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                    <p className="MuiTypography-root jss406 MuiTypography-body1">Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.</p>
                </div>
                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12">
                    <div className="box_btn_taxxxi slk_ll btn_taxi_yellow" onClick={() => this.props.clickCallTaxi(false)}>
                        <div>Сделать новый заказ</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormAfterOrderTaxi;