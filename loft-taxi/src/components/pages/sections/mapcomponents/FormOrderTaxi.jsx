import React from 'react';
import PropTypes from 'prop-types';

class FormOrderTaxi extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    static propTypes = {
        data: PropTypes.shape({
            address1_value: PropTypes.string.isRequired,
            address2_value: PropTypes.string.isRequired,
            address1_drop: PropTypes.bool.isRequired,
            address2_drop: PropTypes.bool.isRequired,
        }).isRequired,
        handleAddressDropdown: PropTypes.func.isRequired,
        handleValueChange: PropTypes.func.isRequired,
        clearInput: PropTypes.func.isRequired,
        filterInputs: PropTypes.func.isRequired,
        handleAddressValue: PropTypes.func.isRequired,
        getRoute: PropTypes.func.isRequired,
        clickCallTaxi: PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className="start_taxi" data-testid="FormOrderTaxi">
                <div className="search_adress" onClick={() => this.props.handleAddressDropdown(0)}>
                    <input type="text" name="address1_value" className="search_adress_input" placeholder="Откуда" value={this.props.data.address1_value}
                        onChange={(e) => this.props.handleValueChange(e)}
                    />

                    {this.props.data.address1_value === "" ? null :
                        <div className="del_value" onClick={() => this.props.clearInput(0)}></div>
                    }

                    <div className="box_for_button">
                        <div className="bottom_arrow"></div>
                    </div>
                    {this.props.data.address1_drop ? (
                        <div className="drop_down_spisok">
                            <ul>
                                {this.props.filterInputs(0).map((address, index) =>
                                    <li key={index} onClick={() => this.props.handleAddressValue(address, 0)}>{address}</li>
                                )}
                            </ul>
                        </div>
                    ) : null}
                </div>
                <div className="otsp_40px"></div>
                <div className="search_adress" onClick={() => this.props.handleAddressDropdown(1)}>
                    <input type="text" name="address2_value" className="search_adress_input" placeholder="Куда" value={this.props.data.address2_value}
                        onChange={(e) => this.props.handleValueChange(e)}
                    />
                    {this.props.data.address2_value === "" ? null :
                        <div className="del_value" onClick={() => this.props.clearInput(1)}></div>
                    }

                    <div className="box_for_button">
                        <div className="bottom_arrow"></div>
                    </div>
                    {this.props.data.address2_drop ? (
                        <div className="drop_down_spisok style_spisok_2">
                            <ul>
                                {this.props.filterInputs(1).map((address, index) =>
                                    <li key={index} onClick={() => this.props.handleAddressValue(address, 1)}>{address}</li>
                                )}
                            </ul>
                        </div>
                    ) : null}

                </div>

                {
                    this.props.data.address1_value === "" || this.props.data.address2_value === "" ?
                        <div className="btn_taxi_grey box_btn_taxxxi">
                            <div>Выберите адреса</div>
                        </div>
                        :
                        <div className="box_btn_taxxxi btn_taxi_yellow" onClick={() => { this.props.getRoute(); this.props.clickCallTaxi(true) }}>
                            <div>Вызвать такси</div>
                        </div>
                }
            </div>
        )
    }
}

export default FormOrderTaxi;